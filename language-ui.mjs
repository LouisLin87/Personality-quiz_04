import {getLocale,tx} from './i18n.mjs';
export function captureFormState(root){
  return {
    forms:[...root.querySelectorAll('form')].map(form=>({id:form.id,fields:[...form.querySelectorAll('input,textarea,select')].map(control=>({name:control.name,id:control.id,type:control.type,value:control.value,checked:control.checked}))})),
    details:[...root.querySelectorAll('details')].map(node=>node.open)
  };
}
export function restoreFormState(root,snapshot){
  for(const saved of snapshot.forms){
    const form=[...root.querySelectorAll('form')].find(node=>node.id===saved.id);if(!form)continue;
    const controls=[...form.querySelectorAll('input,textarea,select')];
    saved.fields.forEach((field,i)=>{
      const control=controls[i];if(!control||control.name!==field.name||control.id!==field.id||control.type!==field.type)return;
      if(['checkbox','radio'].includes(control.type))control.checked=field.checked;else control.value=field.value;
    });
  }
  [...root.querySelectorAll('details')].forEach((node,i)=>{if(i<snapshot.details.length)node.open=snapshot.details[i];});
  const other=root.querySelector('#other-thoughts'),panel=root.querySelector('#question-note-panel');
  if(other&&panel){panel.hidden=!other.checked;other.setAttribute('aria-expanded',String(other.checked));}
  const fit=root.querySelector('input[name="fit"]:checked'),feedback=root.querySelector('#feedback-details');
  if(fit&&feedback)feedback.hidden=fit.value==='yes';
}
export function applyDocumentLanguage(root=document){
  const en=getLocale()==='en';root.documentElement.lang=en?'en':'zh-Hant';
  root.title=en?'Demonward Panda 64: Self Explorer V4':'獵魔士熊貓64型：自我探索V4';
  root.querySelector('meta[name="description"]')?.setAttribute('content',en?'Explore everyday preferences. Start with 24 questions, then choose whether to continue to 60.':'獵魔士熊貓64型：自我探索V4。24 題起步，自選完整 60 題。');
  const brand=root.querySelector('.brand>span');if(brand)brand.innerHTML=en?'Demonward Panda 64 <small>Self Explorer V4</small>':'獵魔士熊貓64型 <small>自我探索V4</small>';
  root.querySelector('.brand')?.setAttribute('aria-label',en?'Demonward Panda 64: home':'獵魔士熊貓64型：首頁');
  const skip=root.querySelector('.skip-link');if(skip)skip.textContent=en?'Skip to content':'跳到主要內容';
  const edition=root.querySelector('.edition');if(edition)edition.innerHTML=en?'V4 <span>Beta</span>':'V4 <span>測試版</span>';
  const group=root.querySelector('#language-controls');if(group)group.setAttribute('aria-label',en?'Choose language':'選擇語言');
  for(const button of root.querySelectorAll('[data-locale]'))button.setAttribute('aria-pressed',String(button.dataset.locale===getLocale()));
  const foot=root.querySelector('.site-footer p');if(foot)foot.textContent=en?'For fun and self-reflection. This beta quiz is not a diagnosis or a guide for major decisions.':'供娛樂與自我探索參考。這是測試題本，結果不作為心理診斷或重大決策依據。';
}
