import {AXES} from './data.mjs';
import {esc,date} from './views.mjs';
import {makeSupplementDocument,putSupplement,removeSupplement,calculateSupplement,projectSupplementDocument,supplementQuestions,SUPPLEMENT_CONFIRMATIONS,SUPPLEMENT_RULE} from './supplement-core.mjs';
const supplementRelations={same:'我是在說明同一個情況',new:'我提供了另一個具體情境',unclear:'我還不確定'};
const supplementMeanings={mixed:'真的要看情況，兩種都有',unmapped:'這幾句還是沒說到我的意思'};
export class SupplementUI{
  constructor({getState,persist,getRecord,getRemote,saveRemote,withdrawRemote,isAuthenticated,announce}){
    Object.assign(this,{getState,persist,getRecord,getRemote,saveRemote,withdrawRemote,isAuthenticated,announce});this.resultId=null;this.editQuestionId=null;this.message='';this.busy=false;
    document.addEventListener('submit',e=>{if(e.target.id==='supplement-form'){e.preventDefault();this.saveForm(e.target);}});
    for(const event of ['input','change'])document.addEventListener(event,e=>{const form=e.target.closest('#supplement-form');if(!form)return;if(['text','context','relation','meaning'].includes(e.target.name)){form.elements.confirmed.checked=false;form.elements.selected.checked=false;}this.capture(form);});
    document.addEventListener('change',e=>{
      if(e.target.id==='supplement-question'){this.editQuestionId=Number(e.target.value);this.mountResult(this.resultId);document.querySelector('#supplement-question')?.focus({preventScroll:true});}
      if(e.target.id==='other-thoughts'){const panel=document.querySelector('#question-note-panel');if(panel){panel.hidden=!e.target.checked;e.target.setAttribute('aria-expanded',String(e.target.checked));if(e.target.checked)panel.querySelector('textarea')?.focus();}}
    });
    document.addEventListener('click',e=>{const b=e.target.closest('[data-supplement-action]');if(!b)return;const a=b.dataset.supplementAction;
      if(a==='download')this.download();if(a==='share')this.share();if(a==='withdraw')this.withdraw();if(a==='use-remote')this.useRemote();if(a==='remove')this.remove(Number(b.dataset.id));
    });
  }
  state(){const s=this.getState();s.supplements||={};s.supplementDrafts||={};s.supplementBaseRevisions||={};return s;}
  source(id){const s=this.state(),own=Object.hasOwn(s.supplements,id)?s.supplements[id]:null,remote=this.getRemote(id);
    return{doc:own||remote?.document||makeSupplementDocument(id,new Date().toISOString()),revision:own?(s.supplementBaseRevisions[id]||0):(remote?.revision||0),local:Boolean(own),remote};}
  capture(form){const s=this.state(),id=form.dataset.attempt,qid=form.dataset.question;
    const data=Object.fromEntries(new FormData(form));if(Array.from(data.text||'').length>200||Array.from(data.context||'').length>100)return;
    s.supplementDrafts[id]||={};s.supplementDrafts[id][qid]={text:data.text||'',context:data.context||'',relation:data.relation||'unclear',meaning:data.meaning||'unconfirmed',confirmed:form.elements.confirmed.checked,selected:form.elements.selected.checked};this.persist();
    const counter=form.querySelector('.supplement-counter');if(counter)counter.textContent=`${Array.from(data.text||'').length}／200 字`;
  }
  editor(q,id,questionMode=false){
    const source=this.source(id),entry=source.doc.entries.find(e=>e.questionId===q.id),draft=this.state().supplementDrafts[id]?.[q.id];
    const value=draft||{text:entry?.text||'',context:entry?.context||'',relation:entry?.relation||'unclear',meaning:entry?.meaning||'unconfirmed',confirmed:Boolean(entry?.confirmedAt),selected:entry?.selected||false};
    const choices=SUPPLEMENT_CONFIRMATIONS[q.axis];
    const opening=questionMode?`<section class="supplement-editor question-note"><label class="checkline"><input id="other-thoughts" type="checkbox" aria-controls="question-note-panel" aria-expanded="${Boolean(value.text)}" ${value.text?'checked':''}><span>其他想法（選填）</span></label><div id="question-note-panel" ${value.text?'':'hidden'}>`:`<details class="supplement-editor" ${value.text?'open':''}><summary>留一句自己的補充（選填）</summary>`;
    return `${opening}<p>${questionMode?'按下一題一併保存。':'不寫也能完成。先留在這個瀏覽器；需要時可另行保存到私人存檔。'}</p>
      <form id="supplement-form" data-attempt="${esc(id)}" data-question="${q.id}"><label class="archive-label" for="supplement-text">你的補充（最多 200 字）</label><textarea class="archive-input" id="supplement-text" name="text" rows="3" maxlength="200" placeholder="只寫想補充的情況，不用填姓名或聯絡方式。">${esc(value.text)}</textarea><p class="supplement-counter">${Array.from(value.text).length}／200 字</p>
      ${questionMode?'<div hidden>':''}<details class="supplement-trial-options" ${value.confirmed||value.selected?'open':''}><summary>也想用這則補充試算？</summary><p>單純保存文字不會加分。若是另一個具體情境，可在這裡確認解讀。</p><label class="archive-label" for="supplement-relation">這段和上面的回答有什麼關係？</label><select class="archive-input" id="supplement-relation" name="relation">${Object.entries(supplementRelations).map(([v,t])=>`<option value="${v}" ${value.relation===v?'selected':''}>${t}</option>`).join('')}</select>
      <label class="archive-label" for="supplement-context">如果是另一個情境，發生在什麼時候？（最多 100 字）</label><input class="archive-input" id="supplement-context" name="context" maxlength="100" value="${esc(value.context)}" placeholder="例如：下班剛到家、面對不熟的同事">
      <label class="archive-label" for="supplement-meaning">在這個情境裡，我比較常……</label><select class="archive-input" id="supplement-meaning" name="meaning"><option value="unconfirmed" ${value.meaning==='unconfirmed'?'selected':''}>先不選，留作說明</option><option value="left" ${value.meaning==='left'?'selected':''}>${choices[0]}</option><option value="right" ${value.meaning==='right'?'selected':''}>${choices[1]}</option>${Object.entries(supplementMeanings).map(([v,t])=>`<option value="${v}" ${value.meaning===v?'selected':''}>${t}</option>`).join('')}</select>
      <label class="checkline"><input type="checkbox" name="confirmed" ${value.confirmed?'checked':''}><span>我確認，上面選的描述符合我的意思。</span></label><label class="checkline"><input type="checkbox" name="selected" ${value.selected?'checked':''}><span>把這則已確認的不同情境納入補充試算（每個面向限一則）。</span></label>
      <p class="download-note">同一情況不再加權。修改中的內容會留為草稿，${questionMode?'按下一題':'按保存'}才更新試算。方向分另列，不改原始百分比或類型。</p></details>${questionMode?'</div>':''}${questionMode?'':'<button class="button" type="submit">保存這則補充</button>'}<p class="supplement-form-status" role="status"></p></form>${questionMode?'</div></section>':'</details>'}`;
  }
  saveForm(form,{allowEmpty=false,quiet=false}={}){
    try{
      const fields=Object.fromEntries(new FormData(form));
      if(Array.from(fields.text||'').length>200||Array.from(fields.context||'').length>100)throw Error('補充最多 200 字，情境最多 100 字，請縮短後再繼續。');
      this.capture(form);const id=form.dataset.attempt,qid=Number(form.dataset.question),source=this.source(id),draft=this.state().supplementDrafts[id][qid];
      if(allowEmpty&&!draft.text.trim()){
        if(draft.confirmed||draft.selected)throw Error('請先輸入補充文字，或取消確認與試算。');
        if(source.doc.entries.some(e=>e.questionId===qid)){this.state().supplements[id]=removeSupplement(source.doc,qid,new Date().toISOString());this.state().supplementBaseRevisions[id]=source.revision;delete this.state().supplementDrafts[id][qid];this.persist();}
        return true;
      }
      const old=source.doc.entries.filter(e=>e.selected).map(e=>e.questionId);const next=putSupplement(source.doc,{...draft,questionId:qid},new Date().toISOString());
      this.state().supplements[id]=next;this.state().supplementBaseRevisions[id]=source.revision;delete this.state().supplementDrafts[id][qid];this.persist();
      const replaced=old.some(q=>q!==qid&&!next.entries.some(e=>e.questionId===q&&e.selected));
      this.message=replaced?'補充已保存在本機，這個面向改用新的一則；先前原文仍保留。':'補充已保存在本機。原始測驗分數保持不變；後台尚未更新這份文字。';
      if(!quiet){if(document.querySelector('#supplement-root'))this.mountResult(id);else form.querySelector('.supplement-form-status').textContent=this.message;this.announce(this.message);}
      return true;
    }catch(e){form.querySelector('.supplement-form-status').textContent=e.message;return false;}
  }
  saveBeforeNext(questionId,attemptId){
    const form=document.querySelector('#supplement-form');if(!form)return true;
    if(form.dataset.attempt!==attemptId||Number(form.dataset.question)!==questionId){this.announce('補充對應的題目已變動，請重新開啟這題後再繼續。');return false;}
    const saved=this.saveForm(form,{allowEmpty:true,quiet:true});
    if(!saved){const panel=document.querySelector('#question-note-panel'),toggle=document.querySelector('#other-thoughts');if(panel)panel.hidden=false;if(toggle){toggle.checked=true;toggle.setAttribute('aria-expanded','true');}form.querySelector('#supplement-text')?.focus?.();this.announce(form.querySelector('.supplement-form-status').textContent);}
    return saved;
  }
  mountQuestion(q,id){return this.editor(q,id,true);}
  mountResult(id){
    const target=document.querySelector('#supplement-root');if(!target)return;const record=this.getRecord(id);if(!record)return;
    const editWasOpen=Boolean(target.querySelector('.supplement-edit-result')?.open);
    this.resultId=id;const source=this.source(id),doc=projectSupplementDocument(source.doc,record),trial=calculateSupplement(doc,record),questions=supplementQuestions(record);
    if(!questions.some(q=>q.id===this.editQuestionId))this.editQuestionId=doc.entries[0]?.questionId||questions[0].id;
    const q=questions.find(q=>q.id===this.editQuestionId),remote=source.remote;
    target.innerHTML=`<p class="section-label">自己的話，也值得留下</p><h2 id="supplement-heading">你的補充，另外看</h2><p>這裡是獨立試算：每個面向最多採一則你確認過的不同情境，記一個方向分。它不與原始分數混算，也不會改變類型或追加題數。</p><p class="supplement-status" role="status">${esc(this.message)}</p>
      <div class="compare-wrap"><table class="compare-table"><thead><tr><th scope="col">面向</th><th scope="col">原始結果</th><th scope="col">補充方向分</th></tr></thead><tbody>${trial.map((row,i)=>`<tr><th scope="row">${AXES[i].left}/${AXES[i].right} ${AXES[i].name}</th><td>${record.axes[i].status==='insufficient'?'資料不足':`${AXES[i].left} ${record.axes[i].leftPercent}%／${AXES[i].right} ${record.axes[i].rightPercent}%`}</td><td>${row.pole?`${row.pole} ＋1（已確認的新情境）`:'未採計'}</td></tr>`).join('')}</tbody></table></div>
      <p class="download-note">沒有採用資料時顯示「未採計」。文字長短不加分；「不同情境」由你確認，尚未經真人評分一致性或效度驗證。</p>
      ${doc.entries.length?`<ul class="supplement-list">${doc.entries.map(e=>{const item=questions.find(q=>q.id===e.questionId);return `<li><h3>${esc(item.text)}</h3><blockquote>${esc(e.text)}</blockquote>${e.context?`<p>情境：${esc(e.context)}</p>`:''}<p>${esc(supplementRelations[e.relation])}；${e.confirmedAt?'已確認解讀':'尚未確認解讀'}；${e.selected?'已納入獨立試算':'留作說明，未採計'}。</p><button class="button text danger" data-supplement-action="remove" data-id="${e.questionId}">刪除本機這則補充</button></li>`;}).join('')}</ul>`:'<p>目前沒有已保存的補充。不填寫也可以直接使用原始結果。</p>'}
      <details class="supplement-edit-result" ${editWasOpen?'open':''}><summary>新增或修改自己的補充</summary><label class="archive-label" for="supplement-question">選擇本次已完成的題目</label><select class="archive-input" id="supplement-question">${questions.map(item=>`<option value="${item.id}" ${q.id===item.id?'selected':''}>${esc(item.text)}</option>`).join('')}</select>${this.editor(q,id)}</details>
      <div class="supplement-sharing"><h3>要保存到哪裡？</h3><p>${remote?.document?'私人存檔已有這次的補充文字。':'目前這次的補充文字尚未保存在後台。'} 本機編輯不會自動覆蓋後台；原始 JSON／CSV 不包含這些文字。</p>
      <button class="button" data-supplement-action="download">下載補充文字與試算 JSON</button>
      ${this.isAuthenticated()?`<label class="checkline"><input type="checkbox" id="supplement-cloud-consent"><span>我同意把這次已保存的補充原文、情境、確認及試算紀錄，連同對應結果存入私人存檔；草稿不傳送。</span></label><div class="actions"><button class="button" data-supplement-action="share" ${this.busy?'disabled':''}>保存到私人存檔（含文字）</button>${remote?.document?`<button class="button" data-supplement-action="withdraw" ${this.busy?'disabled':''}>從後台撤回這次補充文字</button>`:''}</div>`:'<p>若要換裝置查看文字，請先到首頁登入私人存檔，再回來另外同意保存。</p>'}
      ${source.local&&remote?.document&&remote.revision!==source.revision?'<p>後台有不同的補充版本。可先下載本機文字，再選擇改用後台版本。</p><button class="button" data-supplement-action="use-remote">改用後台版本</button>':''}
      <p class="download-note">試算規則 ${SUPPLEMENT_RULE}。刪除本機文字不會一起刪除後台，需另外撤回。</p></div>`;
  }
  async share(){
    if(this.busy)return;const consent=document.querySelector('#supplement-cloud-consent');if(!consent?.checked){this.message='請先另外勾選保存補充文字的同意。';this.mountResult(this.resultId);return;}
    const id=this.resultId,record=this.getRecord(id),source=this.source(id),doc=projectSupplementDocument(source.doc,record);this.busy=true;
    try{const saved=await this.saveRemote(doc,record,source.revision);this.state().supplementBaseRevisions[id]=saved.revision;this.persist();this.message='這次補充文字與確認內容已保存到私人存檔。';}catch(e){this.message=e.message+' 本機補充仍保留。';}
    this.busy=false;this.mountResult(id);
  }
  async withdraw(){if(this.busy)return;const id=this.resultId,remote=this.getRemote(id);if(!remote?.document)return;this.busy=true;
    try{const saved=await this.withdrawRemote(id,remote.revision);this.state().supplementBaseRevisions[id]=saved.revision;this.persist();this.message='已從後台撤回這次補充文字；本機內容仍保留。';}catch(e){this.message=e.message;}
    this.busy=false;this.mountResult(id);
  }
  useRemote(){const id=this.resultId,r=this.getRemote(id);if(!r?.document||!window.confirm('改用後台版本會取代本機已保存的補充。請先下載想保留的本機文字，確定繼續嗎？'))return;this.state().supplements[id]=structuredClone(r.document);this.state().supplementBaseRevisions[id]=r.revision;this.persist();this.message='已改用後台補充版本，原始測驗結果未變。';this.mountResult(id);}
  remove(qid){const id=this.resultId;if(!window.confirm('只刪除本機這則補充，後台文字需另行撤回。確定刪除嗎？'))return;this.state().supplements[id]=removeSupplement(this.source(id).doc,qid,new Date().toISOString());delete this.state().supplementDrafts[id]?.[qid];this.persist();this.message='本機補充已刪除，原始分數未變。';this.mountResult(id);}
  prune(id){const record=this.getRecord(id),doc=this.state().supplements[id];if(record&&doc)this.state().supplements[id]=projectSupplementDocument(doc,record);else delete this.state().supplements[id];delete this.state().supplementDrafts[id];}
  download(){try{const id=this.resultId,record=this.getRecord(id),doc=projectSupplementDocument(this.source(id).doc,record),content=JSON.stringify({exportedAt:new Date().toISOString(),document:doc,trial:calculateSupplement(doc,record),originalResultUnchanged:true},null,2);
      const url=URL.createObjectURL(new Blob([content],{type:'application/json;charset=utf-8'})),anchor=document.createElement('a');anchor.href=url;anchor.download=`panda-supplement-${id.slice(0,8)}.json`;document.body.append(anchor);anchor.click();anchor.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);this.announce('已準備下載補充原文、確認與獨立試算。');
    }catch(e){this.message=e.message;this.mountResult(this.resultId);}}
}
