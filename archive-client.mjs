import {toArchiveSummary} from './archive-data.mjs';
import {validateRecord} from './core.mjs';
import {esc,date} from './views.mjs';
import {validateSupplementDocument} from './supplement-core.mjs';
export class ArchiveClient{
  constructor({getLocal,onChange,onView,onRetest,getCurrent=()=>null,transport=null}){
    this.getCurrent=getCurrent;this.transport=transport;this.supportsRemember=transport?.supportsRemember!==false;this.getLocal=getLocal;this.onChange=onChange;this.onView=onView;this.onRetest=onRetest;
    this.authenticated=false;this.available=false;this.checked=false;this.records=[];this.supplements={};this.recoveryCode='';this.message='';this.busy=false;this.mode=transport?.kind||'local-test';this.queue=Promise.resolve();this.generation=0;
    document.addEventListener('submit',event=>{if(['archive-create','archive-login','archive-delete'].includes(event.target.id)){event.preventDefault();this.submit(event.target.id,new FormData(event.target));}});
    document.addEventListener('click',event=>{const b=event.target.closest('[data-archive-action]');if(!b)return;const action=b.dataset.archiveAction;if(action==='hide-code'){this.recoveryCode='';this.render();}if(action==='logout')this.logout();if(action==='sync')this.syncLocal();if(action==='refresh')this.initialize();if(action==='view')this.onView(b.dataset.id);if(action==='retest')this.onRetest(b.dataset.id);});
  }
  changed(){this.render();this.onChange();}
  async request(path,method='GET',body){
    if(this.transport){try{return await this.transport.request(path,method,body);}catch(e){if(e.status===401){this.generation++;this.authenticated=false;this.records=[];this.supplements={};this.recoveryCode='';this.message=e.message;this.changed();}throw e;}}
    const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),8000);
    try{
      const response=await fetch('/api/v1/'+path,{method,credentials:'same-origin',cache:'no-store',signal:controller.signal,headers:body===undefined?{}:{'Content-Type':'application/json'},body:body===undefined?undefined:JSON.stringify(body)});
      const data=await response.json();if(!response.ok){const error=Error(data.error?.message||'存檔失敗，本機結果仍保留。');error.status=response.status;throw error;}return data;
    }catch(error){if(error.status)throw error;throw Error('存檔服務未連線。本機作答仍可使用，請稍後重試。');}finally{clearTimeout(timer);}
  }
  async initialize(){
    const generation=this.generation;
    try{const s=await this.request('session');if(generation!==this.generation)return;this.available=true;this.mode=s.mode;this.authenticated=s.authenticated;if(s.authenticated)await this.refresh(generation);else {this.records=[];this.supplements={};}}
    catch(e){if(generation!==this.generation)return;this.available=false;this.message=e.message;}
    this.checked=true;this.changed();
  }
  async refresh(generation=this.generation){
    const records=[],supplements={};for(let page=1;page<=50;page++){
      if(generation!==this.generation)return;
      const data=await this.request(`results?page=${page}&pageSize=20`);
      if(!Array.isArray(data.records)||!data.records.every(r=>r.responses===null&&r.includeResponses===false&&validateRecord(r)))throw Error('後台結果格式或題本版本不相容，未顯示紀錄。');
      for(const[id,s]of Object.entries(data.supplements||{})){
        const r=data.records.find(r=>r.attemptId===id);if(!r||!Number.isInteger(s.revision)||s.revision<0||(s.document!==null&&!validateSupplementDocument(s.document,r)))throw Error('補充文件格式無效，未顯示。');
        supplements[id]={revision:s.revision,document:s.document};
      }
      records.push(...data.records);if(records.length>=data.pagination.total)break;
    }
    if(generation===this.generation){this.records=records;this.supplements=supplements;}
  }
  async submit(kind,form){
    if(this.busy)return;this.busy=true;this.message='處理中…';this.changed();
    try{
      if(kind==='archive-create'){
        if(!form.has('consent'))throw Error('請先勾選結果存檔同意。');
        const r=await this.request('archives','POST',{consent:true,remember:form.has('remember')});this.generation++;this.authenticated=true;this.recoveryCode=r.recoveryCode;this.message='私人存檔已建立。請保存下方找回碼；它只顯示這一次。';
        if(form.has('includeCurrent')){const current=this.getCurrent();if(current)await this.request('results/'+current.attemptId,'PUT',{record:toArchiveSummary(current)});}
        if(form.has('includeExisting'))await this.saveAllLocal();await this.refresh();
      }
      if(kind==='archive-login'){
        await this.request('sessions','POST',{recoveryCode:form.get('recoveryCode'),remember:form.has('remember')});this.generation++;this.authenticated=true;this.recoveryCode='';await this.refresh();this.message='已找回私人存檔。可以查看歷史結果，或以上次為基準再測。';
      }
      if(kind==='archive-delete'){
        await this.request('archives/current','DELETE',{recoveryCode:form.get('recoveryCode')});this.generation++;this.authenticated=false;this.records=[];this.supplements={};this.recoveryCode='';this.message='後台存檔已刪除，所有登入已失效。本機作答與下載檔案需另行刪除。';
      }
    }catch(e){this.message=e.message;}finally{this.busy=false;this.changed();}
  }
  async logout(){
    if(this.busy)return;this.busy=true;this.generation++;
    try{await this.request('session','DELETE',{});this.authenticated=false;this.records=[];this.supplements={};this.recoveryCode='';this.message='已登出，這個頁面已移除遠端結果。本機作答仍保留。';}catch(e){if(this.transport){this.authenticated=false;this.records=[];this.supplements={};this.recoveryCode='';this.message='這個頁面已登出；後台撤銷尚未確認，原會話最長 12 小時到期。 '+e.message;}else this.message=e.message;}
    this.busy=false;this.changed();
  }
  async saveAllLocal(){for(const r of this.getLocal())await this.request('results/'+r.attemptId,'PUT',{record:toArchiveSummary(r)});}
  async syncLocal(){if(this.busy||!this.authenticated)return;this.busy=true;this.message='正在保存本機已完成紀錄…';this.changed();try{await this.saveAllLocal();await this.refresh();this.message='本機已完成的結果已存入私人存檔。';}catch(e){this.message=e.message;}this.busy=false;this.changed();}
  enqueue(record){
    if(!this.authenticated)return;
    const summary=toArchiveSummary(record),generation=this.generation;
    this.queue=this.queue.then(async()=>{if(!this.authenticated||generation!==this.generation)return;try{await this.request('results/'+summary.attemptId,'PUT',{record:summary});if(generation!==this.generation)return;await this.refresh(generation);if(generation!==this.generation)return;this.message=`${summary.questionCount} 題結果已存入私人存檔。`;}catch(e){if(generation!==this.generation)return;this.message=e.message+' 尚未同步的結果仍保存在本機，可從存檔區重試。';}this.changed();});
  }
  saveSupplement(document,record,expectedRevision){
    const generation=this.generation;
    const job=this.queue.then(async()=>{
      if(!this.authenticated||generation!==this.generation)throw Error('請先登入私人存檔。');
      await this.request('results/'+record.attemptId,'PUT',{record:toArchiveSummary(record)});
      if(generation!==this.generation)throw Error('登入狀態已變更，未傳送補充文字。');
      const saved=await this.request('supplements/'+record.attemptId,'PUT',{document,expectedRevision,consent:true});
      if(generation!==this.generation)throw Error('登入狀態已變更，請重新查看紀錄。');
      this.supplements[record.attemptId]=saved;return saved;
    });this.queue=job.catch(()=>{});return job;
  }
  withdrawSupplement(attemptId,expectedRevision){
    const generation=this.generation;
    const job=this.queue.then(async()=>{
      if(!this.authenticated||generation!==this.generation)throw Error('請先登入私人存檔。');
      const saved=await this.request('supplements/'+attemptId,'DELETE',{expectedRevision});
      if(generation!==this.generation)throw Error('登入狀態已變更。');
      this.supplements[attemptId]=saved;return saved;
    });this.queue=job.catch(()=>{});return job;
  }
  displayMessage(){return this.message.startsWith('尚未設定本版專用')?'私人存檔準備中。你仍可完成測驗，先保存在這個瀏覽器或下載備份。':this.message;}
  statusHTML(){return `<div id="archive-status" class="local-note" role="status">${this.authenticated?'已開啟私人存檔；新完成的結果與回饋會自動保存，逐題答案留在本機。':this.available?'目前只保存在這個瀏覽器。想換裝置找回，可到首頁建立私人存檔。':'目前只保存在這個瀏覽器；可先下載紀錄備份。'}${this.message?`<br>${esc(this.displayMessage())}`:''}</div>`;}
  render(){
    const status=document.querySelector('#archive-status');if(status)status.outerHTML=this.statusHTML();
    const target=document.querySelector('#archive-panel');if(!target)return;
    const disabled=this.busy||!this.available?'disabled':'';
    const heading=`<p class="section-label">私人存檔</p><h2>下次回來，還能找到這次的你</h2><p class="archive-mode">${this.mode==='local-test'?'目前為本機後台測試，尚未上線；正式部署後才可從其他裝置連線。':this.available?'私人存檔已連線；自由補充文字需另外同意保存。':'私人存檔準備中，目前請先使用本機紀錄或下載備份。'}</p>`;
    if(!this.checked){target.innerHTML=heading+'<p role="status">正在確認存檔服務…</p>';return;}
    const message=`<p class="archive-message" role="status">${esc(this.displayMessage())}</p>`;
    if(!this.authenticated){
      target.innerHTML=heading+`${!this.available?'<details class="archive-unavailable"><summary>了解私人存檔與找回碼</summary>':''}<p>免姓名、Email 或帳號。主動建立私人存檔後，以找回碼在其他裝置查看結果。找回碼相當於私人鑰匙，請勿公開；遺失後無法代為找回。</p>${message}
        ${!this.available?'<button class="button" data-archive-action="refresh">重新連線存檔服務</button>':''}
        <div class="archive-forms"><form id="archive-create"><h3>第一次保存</h3><p>後台保存測驗日期、六軸分數、題數、版本、當時生活狀態及階段回饋；不接收逐題答案。自由補充文字需在結果頁另行同意保存。閒置 365 天會刪除。</p><label class="checkline"><input type="checkbox" name="consent" required><span>我同意把結果存入私人存檔，並自動保存之後在此瀏覽器完成的結果。</span></label>
        ${this.getCurrent()?`<label class="checkline"><input type="checkbox" name="includeCurrent" checked><span>一併保存這次已完成的結果摘要。</span></label>`:this.getLocal().length?`<label class="checkline"><input type="checkbox" name="includeExisting"><span>一併保存這個瀏覽器已有的 ${this.getLocal().length} 次紀錄（選填）</span></label>`:''}
        ${this.supportsRemember?'<label class="checkline"><input type="checkbox" name="remember"><span>記住這個瀏覽器 30 天（私人裝置適用）</span></label>':'<p>登入只保留在目前頁面，最長 12 小時。重新整理或換裝置後，請再輸入找回碼。</p>'}<button class="button" type="submit" ${disabled}>建立私人存檔</button></form>
        <form id="archive-login"><h3>已有找回碼</h3><label class="archive-label" for="archive-login-code">私人找回碼</label><input id="archive-login-code" class="archive-input" name="recoveryCode" type="password" maxlength="100" autocomplete="off" spellcheck="false" required>${this.supportsRemember?'<label class="checkline"><input type="checkbox" name="remember"><span>記住這個瀏覽器 30 天</span></label>':'<p>找回碼及登入憑證不寫入瀏覽器儲存。重新整理後需再次登入。</p>'}<p>這是你的私人存檔；找回後，新完成的結果會自動保存。本機已有紀錄需由你另外選擇同步。</p><button class="button" type="submit" ${disabled}>找回我的結果</button></form></div>${!this.available?'</details>':''}`;return;
    }
    target.innerHTML=heading+message+
      `${this.recoveryCode?`<div class="recovery-card"><h3>請保存私人找回碼</h3><p>只顯示這一次。持有此碼的人可以讀取或刪除此存檔。</p><code id="recovery-code">${esc(this.recoveryCode)}</code><button class="button" data-archive-action="hide-code">我已保存，隱藏找回碼</button></div>`:''}
      <h3>私人存檔中的結果</h3>${this.records.length?`<ul class="history-list">${this.records.map(r=>`<li><div><strong>${esc(r.publicResult)}</strong><small>${date(r.completedAt)} · ${r.questionCount} 題</small></div><div class="actions"><button class="button" data-archive-action="view" data-id="${esc(r.attemptId)}">查看結果</button><button class="button" data-archive-action="retest" data-id="${esc(r.attemptId)}">以上次為基準再測</button></div></li>`).join('')}</ul>`:'<p>還沒有結果。完成測驗後會自動保存，也可選擇存入已有的本機紀錄。</p>'}
      <div class="actions"><button class="button" data-archive-action="sync" ${this.busy?'disabled':''}>同步此瀏覽器的已完成紀錄</button><button class="button" data-archive-action="refresh" ${this.busy?'disabled':''}>重新讀取結果</button><button class="button text" data-archive-action="logout" ${this.busy?'disabled':''}>登出私人存檔</button></div>
      <details><summary>刪除這份後台存檔</summary><p>會刪除這份後台存檔的全部結果與補充文字，並讓所有裝置登出。請輸入私人找回碼確認；本機作答與下載檔案不會一起刪除。</p><form id="archive-delete"><label class="archive-label" for="archive-delete-code">私人找回碼</label><input id="archive-delete-code" class="archive-input" name="recoveryCode" type="password" maxlength="100" autocomplete="off" required><button class="button danger" type="submit" ${this.busy?'disabled':''}>確認刪除後台存檔</button></form></details>`;
  }
}
