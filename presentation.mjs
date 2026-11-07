import {AXES,BASE_QUESTIONS,EXTENDED_QUESTIONS,FOLLOWUP_QUESTIONS} from './data.mjs';
export const PRESENTATION_VERSION='phase-shuffle-1.0';
const presentationIds=[...BASE_QUESTIONS,...EXTENDED_QUESTIONS,...FOLLOWUP_QUESTIONS].map(q=>q.id);
export function validateOrderPool(pool){return Array.isArray(pool)&&pool.length===60&&new Set(pool).size===60&&pool.every(id=>presentationIds.includes(id));}
function presentationRandomIndex(max){
  const limit=Math.floor(4294967296/max)*max,draw=new Uint32Array(1);let value;
  do{crypto.getRandomValues(draw);value=draw[0];}while(value>=limit);
  return value%max;
}
export function createQuestionOrder(randomIndex=presentationRandomIndex){
  const pool=[...presentationIds];
  for(let i=pool.length-1;i>0;i--){const j=randomIndex(i+1);if(!Number.isInteger(j)||j<0||j>i)throw Error('亂數索引無效。');[pool[i],pool[j]]=[pool[j],pool[i]];}
  return pool;
}
export function orderedQuestionIds(stage,tiedAxes,pool){
  if(!validateOrderPool(pool)||!['base','short','full'].includes(stage)||!Array.isArray(tiedAxes)||new Set(tiedAxes).size!==tiedAxes.length||!tiedAxes.every(key=>AXES.some(a=>a.key===key)))throw Error('題序或階段無效。');
  const base=pool.filter(id=>BASE_QUESTIONS.some(q=>q.id===id));if(stage==='base')return base;
  const short=[...base,...pool.filter(id=>FOLLOWUP_QUESTIONS.some(q=>q.id===id&&tiedAxes.includes(q.axis)))];
  return stage==='short'?short:[...short,...pool.filter(id=>!short.includes(id))];
}
export function canonicalQuestionPool(){return [...presentationIds];}
