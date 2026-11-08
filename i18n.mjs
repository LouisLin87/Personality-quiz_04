import {ENGLISH_QUESTIONS,ENGLISH_COPY_VERSION} from './english-questions.mjs';
import {UI_EN} from './english-ui.mjs';
export {ENGLISH_COPY_VERSION};
export const LOCALE_KEY='demonward_panda_v4_locale_v1';
let currentLocale='zh';
export const getLocale=()=>currentLocale;
export function readLocale(storage,search=''){
  const query=new URLSearchParams(search).get('lang');
  if(query==='en'||query==='zh')return query;
  try{return storage.getItem(LOCALE_KEY)==='en'?'en':'zh';}catch{return 'zh';}
}
export function setLocale(locale,storage=null){
  if(!['zh','en'].includes(locale))throw Error('Unsupported locale');
  currentLocale=locale;
  try{storage?.setItem(LOCALE_KEY,locale);}catch{}
}
const englishBank=new Map(ENGLISH_QUESTIONS.map(([id,text,left,close,right])=>[id,{text,left,close,right}]));
export function questionCopy(q){
  if(currentLocale==='zh')return q;
  const copy=englishBank.get(q.id);if(!copy)throw Error('Missing English question '+q.id);
  const left='ESTJAH'.includes(q.pole);
  return {...q,text:copy.text,choices:q.choices.map(c=>({...c,text:c.value===0?copy.close:c.value===1?(left?copy.left:copy.right):(left?copy.right:copy.left)}))};
}
// Only author-written template segments pass here. Interpolated player text,
// recovery codes, form values and stored records are never translated.
const phrases=Object.keys(UI_EN).sort((a,b)=>b.length-a.length);
const enPattern=new RegExp(phrases.map(p=>p.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');
export function tx(value,...values){
  const translate=part=>{
    if(currentLocale==='zh')return part;
    if(Object.hasOwn(UI_EN,part))return UI_EN[part];
    return part.replace(enPattern,key=>UI_EN[key]).replace(/^ +(?=-question)/,'').replaceAll('／','/').replaceAll('、',', ').replaceAll('「','“').replaceAll('」','”').replaceAll('；','; ').replaceAll('。','.');
  };
  if(typeof value==='string')return translate(value);
  return value.map((part,i)=>translate(part)+(i<values.length?values[i]:'')).join('');
}
