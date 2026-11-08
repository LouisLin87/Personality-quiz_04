import {AXES,BASE_QUESTIONS,EXTENDED_QUESTIONS,FOLLOWUP_QUESTIONS} from './data.mjs';
export const SUPPLEMENT_SCHEMA='supplements-1.0';
export const SUPPLEMENT_RULE='confirmed-one-per-axis-1.0';
export const SUPPLEMENT_CONFIRMATIONS={
  EI:['先跟人互動、聊聊想法','先自己待一下、整理想法'],
  SN:['先看實際例子和細節','先看大方向和事情的關聯'],
  TF:['先看理由和標準是否一致','先看自己重視的事和相關人的需要'],
  JP:['先排大概的順序','先保留調整空間'],
  AO:['在低風險且可回頭時先試一小步','在低風險且可回頭時先多了解一些'],
  HC:['先用話語表達關心或肯定','先用實際幫忙表達支持']
};
const supplementBank=[...BASE_QUESTIONS,...EXTENDED_QUESTIONS,...FOLLOWUP_QUESTIONS];
const supplementDate=v=>typeof v==='string'&&Number.isFinite(Date.parse(v));
const supplementId=v=>typeof v==='string'&&/^[a-zA-Z0-9-]{1,80}$/.test(v);
const supplementLength=v=>typeof v==='string'?Array.from(v).length:Infinity;
export function supplementQuestions(record){
  if(Array.isArray(record.questionOrder))return record.questionOrder.map(id=>supplementBank.find(q=>q.id===id));
  if(record.stage==='base')return BASE_QUESTIONS;
  const short=[...BASE_QUESTIONS,...FOLLOWUP_QUESTIONS.filter(q=>record.tiedAxes.includes(q.axis))];
  return record.stage==='short'?short:[...short,...EXTENDED_QUESTIONS,...FOLLOWUP_QUESTIONS.filter(q=>!record.tiedAxes.includes(q.axis))];
}
export function makeSupplementDocument(attemptId,now){
  if(!supplementId(attemptId)||!supplementDate(now))throw Error('補充文件編號或時間無效。');
  return{schemaVersion:SUPPLEMENT_SCHEMA,ruleVersion:SUPPLEMENT_RULE,attemptId,updatedAt:now,entries:[]};
}
export function validateSupplementDocument(doc,record=null){
  try{
    if(!doc||doc.schemaVersion!==SUPPLEMENT_SCHEMA||doc.ruleVersion!==SUPPLEMENT_RULE||!supplementId(doc.attemptId)||!supplementDate(doc.updatedAt)
      ||!Array.isArray(doc.entries)||doc.entries.length>60||new Set(doc.entries.map(e=>e.questionId)).size!==doc.entries.length
      ||(record&&record.attemptId!==doc.attemptId))return false;
    const allowed=record?supplementQuestions(record):supplementBank,selected=new Set();
    for(const e of doc.entries){
      const q=allowed.find(q=>q.id===e.questionId);
      if(!q||typeof e.text!=='string'||!e.text.trim()||supplementLength(e.text)>200||typeof e.context!=='string'||supplementLength(e.context)>100
        ||!['same','new','unclear'].includes(e.relation)||!['left','right','mixed','unmapped','unconfirmed'].includes(e.meaning)
        ||typeof e.selected!=='boolean'||!supplementDate(e.updatedAt)||Date.parse(e.updatedAt)>Date.parse(doc.updatedAt)
        ||!(e.confirmedAt===null||supplementDate(e.confirmedAt))||(e.confirmedAt&&(e.meaning==='unconfirmed'||Date.parse(e.confirmedAt)>Date.parse(e.updatedAt))))return false;
      if(e.selected){
        if(!e.confirmedAt||e.relation!=='new'||!['left','right'].includes(e.meaning)||!e.context.trim()||selected.has(q.axis))return false;
        selected.add(q.axis);
      }
    }return true;
  }catch{return false;}
}
export function putSupplement(doc,input,now){
  if(!validateSupplementDocument(doc)||!supplementDate(now)||Date.parse(now)<Date.parse(doc.updatedAt))throw Error('補充文件格式或時間無效。');
  const q=supplementBank.find(q=>q.id===Number(input.questionId));if(!q)throw Error('找不到這個題號。');
  const entry={questionId:q.id,text:String(input.text||'').trim(),context:String(input.context||'').trim(),relation:input.relation||'unclear',meaning:input.meaning||'unconfirmed',confirmedAt:input.confirmed?now:null,selected:input.selected===true,updatedAt:now};
  const next=structuredClone(doc);next.updatedAt=now;
  next.entries=next.entries.filter(e=>e.questionId!==q.id).map(e=>entry.selected&&supplementBank.find(q=>q.id===e.questionId).axis===q.axis?{...e,selected:false,updatedAt:now}:e);
  next.entries.push(entry);next.entries.sort((a,b)=>a.questionId-b.questionId);
  if(!validateSupplementDocument(next))throw Error('請填入有效文字；只有已確認、方向明確的不同情境才能納入試算。');return next;
}
export function removeSupplement(doc,questionId,now){
  const next=structuredClone(doc);next.entries=next.entries.filter(e=>e.questionId!==questionId);next.updatedAt=now;
  if(!validateSupplementDocument(next))throw Error('補充文件無效。');return next;
}
export function calculateSupplement(doc,record=null){
  if(!validateSupplementDocument(doc,record))throw Error('補充文件無法試算。');
  return AXES.map(axis=>{const e=doc.entries.find(e=>e.selected&&supplementBank.find(q=>q.id===e.questionId).axis===axis.key);
    return{axis:axis.key,pole:e?(e.meaning==='left'?axis.left:axis.right):null,units:e?1:null,questionId:e?.questionId||null};});
}
export function projectSupplementDocument(doc,record){
  if(!validateSupplementDocument(doc)||doc.attemptId!==record.attemptId)throw Error('補充文件無效。');
  const ids=new Set(supplementQuestions(record).map(q=>q.id));
  return{...structuredClone(doc),entries:doc.entries.filter(e=>ids.has(e.questionId)).map(e=>({...e}))};
}
export function cleanSupplementDocument(doc,record=null){
  if(!validateSupplementDocument(doc,record))throw Error('補充文件無效。');
  return{schemaVersion:SUPPLEMENT_SCHEMA,ruleVersion:SUPPLEMENT_RULE,attemptId:doc.attemptId,updatedAt:doc.updatedAt,entries:doc.entries.map(e=>({questionId:e.questionId,text:e.text,context:e.context,relation:e.relation,meaning:e.meaning,confirmedAt:e.confirmedAt,selected:e.selected,updatedAt:e.updatedAt}))};
}
