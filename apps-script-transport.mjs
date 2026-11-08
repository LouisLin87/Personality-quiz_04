const driveApiVersion='self-explorer-v4-1';
function driveRandomToken(){const bytes=crypto.getRandomValues(new Uint8Array(32));return btoa(String.fromCharCode(...bytes)).replaceAll('+','-').replaceAll('/','_').replaceAll('=','');}
function driveRandomCode(){const alphabet='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';return 'DP-'+Array.from(crypto.getRandomValues(new Uint8Array(32)),n=>alphabet[n&31]).join('').match(/.{4}/g).join('-');}
export class AppsScriptTransport{
  #token='';
  constructor({endpoint='',blockedDeploymentIds=[],fetcher=globalThis.fetch.bind(globalThis)}={}){this.endpoint=endpoint;this.blockedDeploymentIds=blockedDeploymentIds;this.fetcher=fetcher;this.kind='google-drive';this.supportsRemember=false;}
  async request(path,method='GET',body={}){
    const match=this.endpoint.match(/^https:\/\/script\.google\.com\/macros\/s\/([A-Za-z0-9_-]+)\/exec$/);
    if(!match||this.blockedDeploymentIds.includes(match[1]))throw Error('尚未設定本版專用的 Apps Script 接收網址；本機作答仍可使用。');
    if(path==='session'&&method==='GET'&&!this.#token)return{authenticated:false,mode:'google-drive',retentionDays:365};
    let action,extra={};const url=new URL(path,'https://local.invalid/');
    if(path==='archives'&&method==='POST')action='create';
    else if(path==='sessions'&&method==='POST')action='login';
    else if(path==='session'&&method==='GET')action='session';
    else if(path==='session'&&method==='DELETE')action='logout';
    else if(url.pathname==='/results'&&method==='GET'){action='list';extra={page:Number(url.searchParams.get('page')||1),pageSize:Number(url.searchParams.get('pageSize')||20)};}
    else if(/^\/results\/[a-zA-Z0-9-]{1,80}$/.test(url.pathname)&&method==='PUT'){action='save';extra={attemptId:url.pathname.split('/').at(-1)};}
    else if(/^\/supplements\/[a-zA-Z0-9-]{1,80}$/.test(url.pathname)&&['PUT','DELETE'].includes(method)){action=method==='PUT'?'saveSupplement':'withdrawSupplement';extra={attemptId:url.pathname.split('/').at(-1)};}
    else if(path==='archives/current'&&method==='DELETE')action='deleteArchive';
    else throw Error('不支援的存檔操作。');
    const newSessionToken=['create','login'].includes(action)?driveRandomToken():null,recoveryCode=action==='create'?driveRandomCode():body.recoveryCode;
    const payload={...body,...extra,apiVersion:driveApiVersion,action,sessionToken:this.#token,requestId:crypto.randomUUID(),...(newSessionToken?{newSessionToken}:{}),...(['create','login'].includes(action)?{recoveryCode,remember:false}:{})};
    const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),25000);
    try{
      const response=await this.fetcher(this.endpoint,{method:'POST',mode:'cors',credentials:'omit',redirect:'follow',cache:'no-store',headers:{'Content-Type':'text/plain;charset=UTF-8'},body:JSON.stringify(payload),signal:controller.signal});
      const envelope=await response.json();
      if(!response.ok||envelope.ok!==true){const error=Error(envelope.error?.message||'Google 存檔未成功，本機內容仍保留。');error.status=envelope.error?.status||503;throw error;}
      const result=envelope.data;if(!result||typeof result!=='object')throw Error('Invalid response');
      if(newSessionToken)this.#token=newSessionToken;if(['logout','deleteArchive'].includes(action))this.#token='';
      return{...result,mode:'google-drive',...(action==='create'?{recoveryCode}:{})};
    }catch(e){if(e.status===401)this.#token='';if(e.status)throw e;throw Error('Google 存檔未連線或回應無效。本機內容仍保留，請稍後重試。');}finally{clearTimeout(timer);if(action==='logout')this.#token='';}
  }
}
