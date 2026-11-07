import {AppsScriptTransport} from './apps-script-transport.mjs';
import {DRIVE_ARCHIVE_CONFIG} from './config.mjs';
import {createQuestionOrder} from './presentation.mjs';
import { AXES, QUESTIONNAIRE_VERSION, SCHEMA_VERSION } from './data.mjs';
import { evaluate, advanceResult, presentedQuestions, exportRecord, toCSV, isAnswer, FEEDBACK_REASONS } from './core.mjs';
import { loadState, saveState, clearState } from './storage.mjs';
import { esc, date, stateNames, homeView, quizView, completionView, resultView } from './views.mjs';
import { ArchiveClient } from './archive-client.mjs';
import {SupplementUI} from './supplement-ui.mjs';
import {UIClickSound} from './click-sound.mjs';
const app=document.querySelector('#app');
const storage={getItem:k=>localStorage.getItem(k),setItem:(k,v)=>localStorage.setItem(k,v),removeItem:k=>localStorage.removeItem(k)};
new UIClickSound({root:document,storage});
const loaded=loadState(storage);
let state=loaded.state, activeResultId=null, pendingBaselineId=null;
const archive=new ArchiveClient({transport:new AppsScriptTransport(DRIVE_ARCHIVE_CONFIG),getLocal:()=>state.attempts,onChange:()=>{if(activeResultId&&!findResult(activeResultId))renderHome();},onView:id=>renderResult(id),onRetest:id=>renderSetup(id)});
const notes=new SupplementUI({getState:()=>state,persist,getRecord:findResult,getRemote:id=>archive.supplements[id],saveRemote:(doc,r,rev)=>archive.saveSupplement(doc,r,rev),withdrawRemote:(id,rev)=>archive.withdrawSupplement(id,rev),isAuthenticated:()=>archive.authenticated,announce});
function warn(text){const node=document.querySelector('#storage-warning');node.textContent=text;node.hidden=!text;}
function announce(text){document.querySelector('#announcement').textContent=text;}
function persist(){if(!saveState(storage,state))warn('本機儲存失敗，進度可能無法保留。完成後請先下載紀錄，再關閉此頁。');}
function focusScreen(){const h=app.querySelector('h1');if(h){h.tabIndex=-1;h.focus({preventScroll:true});}window.scrollTo({top:0,behavior:'instant'});}
function screen(html,name){app.innerHTML=html;app.dataset.screen=name;announce('');focusScreen();}
function findResult(id){return state.attempts.find(r=>r.attemptId===id)||archive.records.find(r=>r.attemptId===id);}
function replaceResult(r){const i=state.attempts.findIndex(p=>p.attemptId===r.attemptId);if(i<0)state.attempts.push(r);else state.attempts[i]=r;archive.enqueue(r);}
function renderHome(){activeResultId=null;screen(homeView(state)+'<section id="archive-panel" class="history archive-panel"></section>','home');archive.render();}
function renderSetup(baselineId=null){
  pendingBaselineId=baselineId;const previous=baselineId&&findResult(baselineId);
  screen(`<section class="narrow panel setup"><p class="eyebrow">開始之前</p><h1>${previous?'再看一次，現在的自己':'先想想平常的自己'}</h1><p class="lead">選最接近平常自己的回答。確定兩側偏好接近可選相近選項；無法判斷或都不符合時，選第四項，不計分。</p>${previous?`<p class="local-note">這次將和 ${date(previous.baseCompletedAt)} 的 24 題主測驗配對比較，紀錄實際間隔。</p>`:''}
    <p>先回應 24 題；資料足夠且平手的面向各補兩題後完成前段，再決定是否繼續 60 題。題目隨機排列，暫停續答維持同一次順序。</p><form id="setup-form"><fieldset><legend>最近兩週的生活狀態</legend>${Object.entries(stateNames).map(([v,label],i)=>`<label class="choice"><input type="radio" name="state" value="${v}" ${i===0?'checked':''}><span>${label}</span></label>`).join('')}</fieldset>
    <label class="checkline"><input type="checkbox" name="includeResponses"><span>我願意在下載的測試紀錄中包含這次的逐題回答（選填）。<br><small class="muted">未勾選仍能完成、查看及下載階段分數。這項同意與私人存檔分開。</small></span></label><div class="actions"><button class="button primary" type="submit">開始第 1 題</button><button class="button text" type="button" data-action="home">返回首頁</button></div></form></section>`,'setup');
}
function begin(form){
  if(state.draft&&!window.confirm('開始新的一次會取代未完成進度，已完成結果會保留。確定開始嗎？'))return;
  if(state.draft)notes.prune(state.draft.attemptId);
  const previous=pendingBaselineId&&findResult(pendingBaselineId);state.participantId||=crypto.randomUUID();
  state.draft={questionnaireVersion:QUESTIONNAIRE_VERSION,attemptId:crypto.randomUUID(),startedAt:new Date().toISOString(),state:form.get('state'),includeResponses:form.has('includeResponses'),baselineAttemptId:previous?.attemptId||null,retestSequence:previous?(previous.retestSequence||1)+1:1,orderPool:createQuestionOrder(),answers:{},index:0,phase:'base'};
  persist();renderQuiz();
}
function draftStart(d){return d.phase==='base'?0:findResult(d.attemptId).questionCount;}
function renderQuiz(){
  const d=state.draft;if(!d)return renderHome();const questions=presentedQuestions(d.phase,d.answers,d.orderPool),start=draftStart(d),q=questions[d.index];
  screen(quizView(d,questions,start,notes.mountQuestion(q,d.attemptId)),'quiz');
}
function nextQuestion(){
  const d=state.draft,questions=presentedQuestions(d.phase,d.answers,d.orderPool),q=questions[d.index];
  if(!isAnswer(d.answers[q.id])){document.querySelector('#question-error').hidden=false;app.querySelector('input[name="answer"]').focus();return;}
  if(!notes.saveBeforeNext(q.id,d.attemptId))return;
  if(d.index<questions.length-1){d.index++;persist();renderQuiz();return;}
  const now=new Date().toISOString();
  let r=d.phase==='base'?evaluate(d.answers,{...d,stage:'base',completedAt:now}):advanceResult(findResult(d.attemptId),d.answers,d.phase,now);
  replaceResult(r);state.draft=null;
  if(d.phase==='base'){
    if(r.tiedAxes.length){state.draft={...d,phase:'short',index:24};persist();renderTieIntro(r);return;}
    r=advanceResult(r,d.answers,'short',now);replaceResult(r);
  }
  persist();if(r.stage==='full')renderResult(r.attemptId);else renderCompletion(r.attemptId);
}
function renderTieIntro(r){
  activeResultId=r.attemptId;
  screen(`<section class="narrow panel chapter-intro"><p class="eyebrow">24 題已保存</p><h1>有 ${r.tiedAxes.length} 個軸，兩側同樣常見。</h1><p class="lead">24 題初步結果已保存。接著只為 50／50 的軸各補兩題，共 ${r.tiedAxes.length*2} 題。</p><p>${r.tiedAxes.map(k=>{const a=AXES.find(a=>a.key===k);return `${a.left}/${a.right} ${a.name}`;}).join('、')}</p><p>只補這一輪，仍平手就保留未定。</p><div class="actions"><button class="button primary" data-action="resume">開始 ${r.tiedAxes.length*2} 題平手補題</button><button class="button" data-action="peek-result">先看 24 題初步結果</button></div></section>`,'tie-intro');
}
function renderCompletion(id){const r=findResult(id);if(!r)return renderHome();activeResultId=id;screen(completionView(r)+archive.statusHTML(),'completion');}
function renderResult(id){const r=findResult(id);if(!r)return renderHome();activeResultId=id;screen(resultView(r,findResult(r.baselineAttemptId),state.draft,!r.responses)+'<section id="supplement-root" class="result-section"></section>'+archive.statusHTML(),'result');notes.mountResult(id);if(!r.responses){for(const control of app.querySelectorAll('#feedback-form input,#feedback-form button'))control.disabled=true;document.querySelector('#feedback-status').textContent='這是歷史回饋，僅供查看。';}}
function startNext(phase){
  const r=findResult(activeResultId);if(!r||r.stage!==(phase==='short'?'base':'short'))return;
  if(state.draft?.attemptId===r.attemptId){renderQuiz();return;}
  if(state.draft&&!window.confirm('繼續這次探索會取代另一份未完成進度，已完成結果會保留。確定繼續嗎？'))return;
  if(state.draft)notes.prune(state.draft.attemptId);
  state.draft={questionnaireVersion:QUESTIONNAIRE_VERSION,attemptId:r.attemptId,startedAt:r.startedAt,state:r.state,includeResponses:r.includeResponses,baselineAttemptId:r.baselineAttemptId,retestSequence:r.retestSequence,orderPool:[...r.orderPool],answers:Object.fromEntries(r.responses.map(a=>[a.questionId,a.answer])),phase,index:r.questionCount};
  persist();renderQuiz();
}
function stopStage(){
  const id=app.dataset.screen==='quiz'?state.draft?.attemptId:activeResultId;
  if(!id||state.draft?.attemptId!==id)return;
  notes.prune(id);state.draft=null;persist();renderResult(id);announce('未完成的這一段作答與補充已清除，先前結果已保留。');
}
function saveFeedback(form){
  const r=findResult(activeResultId),fit=form.get('fit'),node=document.querySelector('#feedback-status');
  if(!r.responses){node.textContent='遠端摘要目前僅供查看；重測後可為新結果留下回饋。';return;}
  if(!['yes','partial','no'].includes(fit)){node.textContent='請先選擇符合程度。';return;}
  r.snapshots.at(-1).feedback={fit,mismatchAxes:fit==='yes'?[]:form.getAll('mismatch').filter(k=>AXES.some(a=>a.key===k)),reasons:fit==='yes'?[]:form.getAll('reason').filter(v=>FEEDBACK_REASONS.includes(v)),at:new Date().toISOString()};
  persist();archive.enqueue(r);node.textContent='這個階段的回饋已儲存在本機。';announce(node.textContent);
}
async function download(kind,all=false){
  try{
    state.participantId||=crypto.randomUUID();persist();
    const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(state.participantId));
    const hash=Array.from(new Uint8Array(bytes),b=>b.toString(16).padStart(2,'0')).join('');
    const records=(all?state.attempts:[findResult(activeResultId)]).map(r=>exportRecord(r,hash));
    const content=kind==='csv'?toCSV(records):JSON.stringify({schemaVersion:SCHEMA_VERSION,exportedAt:new Date().toISOString(),records},null,2);
    const url=URL.createObjectURL(new Blob([content],{type:kind==='csv'?'text/csv;charset=utf-8':'application/json;charset=utf-8'}));
    const anchor=document.createElement('a');anchor.href=url;anchor.download=`demonward-panda-self-explorer-v4-${all?'all':records[0].attemptId.slice(0,8)}.${kind}`;document.body.append(anchor);anchor.click();anchor.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);announce('已準備下載紀錄，請確認瀏覽器下載項目。');
  }catch{warn('無法產生下載檔，請使用本機 HTTP 網址開啟，或檢查瀏覽器是否允許下載。');}
}
app.addEventListener('submit',event=>{event.preventDefault();const form=new FormData(event.target);if(event.target.id==='setup-form')begin(form);if(event.target.id==='question-form')nextQuestion();if(event.target.id==='feedback-form')saveFeedback(form);});
app.addEventListener('change',event=>{
  if(event.target.name==='answer'&&state.draft){const q=presentedQuestions(state.draft.phase,state.draft.answers,state.draft.orderPool)[state.draft.index];state.draft.answers[q.id]=event.target.value==='skip'?'skip':Number(event.target.value);persist();document.querySelector('#question-error').hidden=true;}
  if(event.target.name==='fit')document.querySelector('#feedback-details').hidden=event.target.value==='yes';
});
app.addEventListener('click',event=>{
  const button=event.target.closest('[data-action]');if(!button)return;const action=button.dataset.action;
  if(action==='setup')renderSetup();if(action==='resume')renderQuiz();
  if(['home','pause'].includes(action)){persist();renderHome();}
  if(action==='previous'&&state.draft.index>draftStart(state.draft)){state.draft.index--;persist();renderQuiz();}
  if(action==='result')renderResult(button.dataset.id);
  if(action==='show-result')renderResult(activeResultId);
  if(action==='peek-result')renderResult(state.draft.attemptId);
  if(action==='continue-full')startNext('full');if(action==='continue-ties')startNext('short');
  if(action==='stop-stage')stopStage();if(action==='retest')renderSetup(activeResultId);
  if(action==='export-json')download('json');if(action==='export-csv')download('csv');if(action==='export-all')download('json',true);
  if(action==='clear'&&window.confirm('確定刪除此手札版的本機進度、結果與文字？後台存檔及已下載的檔案需另行刪除。')){
    if(clearState(storage)){state={participantId:null,draft:null,attempts:[]};warn('');renderHome();announce('此版本機資料已刪除。');}else warn('刪除失敗，請使用瀏覽器網站設定清除本頁資料。');
  }
});
document.querySelector('.brand').addEventListener('click',event=>{event.preventDefault();persist();renderHome();});
warn(loaded.warning);renderHome();document.documentElement.dataset.ready='true';archive.initialize();
