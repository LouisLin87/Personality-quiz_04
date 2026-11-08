import {validateOrderPool} from './presentation.mjs';
import { QUESTIONNAIRE_VERSION } from './data.mjs';
import { ALL_QUESTIONS, presentedQuestions, validateRecord, isAnswer } from './core.mjs';
import {validateSupplementDocument} from './supplement-core.mjs';
export const STORAGE_KEY = 'demonward_panda_v4_wording_94_local';
const validStorageId = value => typeof value==='string' && /^[a-zA-Z0-9-]{1,80}$/.test(value);
function validDraft(d,attempts) {
  try {
    if(!d) return true;
    if(d.questionnaireVersion!==QUESTIONNAIRE_VERSION||!validStorageId(d.attemptId)||!Number.isFinite(Date.parse(d.startedAt))
      ||!['stable','some','major'].includes(d.state)||typeof d.includeResponses!=='boolean'||!['base','short','full'].includes(d.phase)
      ||!validateOrderPool(d.orderPool)||!d.answers||Array.isArray(d.answers)||!Number.isInteger(d.index)
      ||!Object.entries(d.answers).every(([id,a])=>ALL_QUESTIONS.some(q=>String(q.id)===id)&&isAnswer(a))) return false;
    const questions=presentedQuestions(d.phase,d.answers,d.orderPool);
    const previous=attempts.find(r=>r.attemptId===d.attemptId);
    const start=d.phase==='base'?0:previous?.questionCount;
    if(d.phase!=='base'&&(!previous||previous.stage!==(d.phase==='short'?'base':'short')
      ||JSON.stringify(previous.orderPool)!==JSON.stringify(d.orderPool)||previous.startedAt!==d.startedAt||previous.state!==d.state||previous.includeResponses!==d.includeResponses
      ||previous.responses.some(a=>d.answers[a.questionId]!==a.answer))) return false;
    return d.index>=start&&d.index<questions.length&&questions.slice(0,d.index).every(q=>isAnswer(d.answers[q.id]))
      &&Object.keys(d.answers).every(id=>questions.some(q=>String(q.id)===id));
  } catch { return false; }
}
export function loadState(storage) {
  const empty={participantId:null,draft:null,attempts:[],supplements:{},supplementDrafts:{},supplementBaseRevisions:{}};
  try {
    const raw=storage.getItem(STORAGE_KEY);if(!raw)return{state:empty,warning:''};
    const saved=JSON.parse(raw);if(!saved||!Array.isArray(saved.attempts))throw Error('Invalid state');
    const attempts=saved.attempts.filter(r=>r.questionnaireVersion===QUESTIONNAIRE_VERSION&&validateRecord(r,true));
    let draft=saved.draft||null,warning=attempts.length===saved.attempts.length?'':'部分本機紀錄格式不完整，已略過顯示。';
    if(!validDraft(draft,attempts)){draft=null;warning='上次未完成進度與目前題本不相容；有效的已完成結果仍保留。';}
    const supplements={},supplementDrafts={},supplementBaseRevisions={};
    const known=id=>attempts.find(r=>r.attemptId===id)||(draft?.attemptId===id?draft:null);
    for(const[id,doc]of Object.entries(saved.supplements||{})){
      const owner=known(id);if(validStorageId(id)&&doc?.attemptId===id&&validateSupplementDocument(doc,draft?.attemptId===id?null:owner?.stage?owner:null))supplements[id]=doc;else warning='部分補充文字格式不完整，未載入；有效測驗結果仍保留。';
    }
    for(const[id,entries]of Object.entries(saved.supplementDrafts||{})){
      if(!validStorageId(id)||!entries||typeof entries!=='object'||Array.isArray(entries))continue;
      const clean={};for(const[qid,d]of Object.entries(entries))if(ALL_QUESTIONS.some(q=>String(q.id)===qid)&&d&&typeof d.text==='string'&&Array.from(d.text).length<=200&&typeof d.context==='string'&&Array.from(d.context).length<=100
        &&['same','new','unclear'].includes(d.relation)&&['left','right','mixed','unmapped','unconfirmed'].includes(d.meaning))clean[qid]={text:d.text,context:d.context,relation:d.relation,meaning:d.meaning,confirmed:false,selected:false};
      supplementDrafts[id]=clean;
    }
    for(const[id,revision]of Object.entries(saved.supplementBaseRevisions||{}))if(validStorageId(id)&&(known(id)||supplements[id]||supplementDrafts[id])&&Number.isInteger(revision)&&revision>=0)supplementBaseRevisions[id]=revision;
    return{state:{participantId:validStorageId(saved.participantId)?saved.participantId:null,draft,attempts,supplements,supplementDrafts,supplementBaseRevisions},warning};
  }catch{return{state:empty,warning:'無法讀取本機進度。仍可作答，完成後請下載紀錄；瀏覽器需允許網站儲存才能續答。'};}
}
export function saveState(storage,state) {
  try{storage.setItem(STORAGE_KEY,JSON.stringify(state));return true;}catch{return false;}
}
export function clearState(storage) {
  try{storage.removeItem(STORAGE_KEY);return true;}catch{return false;}
}
