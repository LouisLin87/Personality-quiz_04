import {PRESENTATION_VERSION,canonicalQuestionPool,validateOrderPool,orderedQuestionIds} from './presentation.mjs';
import { AXES, BASE_QUESTIONS, EXTENDED_QUESTIONS, FOLLOWUP_QUESTIONS, QUESTIONNAIRE_VERSION, SCORING_VERSION, SCHEMA_VERSION } from './data.mjs';

export const STAGES = ['base', 'short', 'full'];
export const ALL_QUESTIONS = [...BASE_QUESTIONS, ...EXTENDED_QUESTIONS, ...FOLLOWUP_QUESTIONS];
export const SKIP_ANSWER='skip';
export const isAnswer = value => value===SKIP_ANSWER || (Number.isInteger(value) && [-1, 0, 1].includes(value));
const isDate = value => typeof value === 'string' && Number.isFinite(Date.parse(value));
const isId = value => typeof value === 'string' && /^[a-zA-Z0-9-]{1,80}$/.test(value);
const fitValues = ['yes','partial','no'];
export const FEEDBACK_REASONS = ['題目不容易理解','不同情境會有不同答案','選項不足以表達我','結果描述不像我'];

function axisScore(axis, count, leftScore, neutralCount, skippedCount=0) {
  const validCount=count-skippedCount,minValidCount=Math.ceil(count*.75);
  const totalScore = validCount * 2, rightScore = totalScore - leftScore;
  const sufficient=validCount>=minValidCount&&validCount>0;
  const leftPercent = sufficient?Math.round(leftScore / totalScore * 100):null, rightPercent = sufficient?100-leftPercent:null;
  const gap = sufficient?Math.abs(leftPercent - rightPercent):null;
  const status=!sufficient?'insufficient':leftScore===rightScore?'balanced':'scored';
  return { key:axis.key, leftScore, rightScore, totalScore, leftPercent, rightPercent,
    questionCount:count, validCount, skippedCount, minValidCount, status, neutralCount, gap, nearMidpoint:sufficient&&gap<=10,
    pole:status!=='scored'?null:leftScore>rightScore?axis.left:axis.right };
}
export function scoreAxes(questions, answers) {
  return AXES.map(axis=>{
    const items=questions.filter(q=>q.axis===axis.key);
    let left=0, neutral=0, skipped=0;
    for(const q of items) {
      const a=answers[q.id];
      if(!isAnswer(a)) throw new Error(`第 ${q.id} 題尚未回答或答案無效。`);
      if(a===SKIP_ANSWER){skipped++;continue;}
      left += 1+a*(q.pole===axis.left?1:-1); neutral += a===0?1:0;
    }
    return axisScore(axis,items.length,left,neutral,skipped);
  });
}
export function tieAxes(answers) {
  return scoreAxes(BASE_QUESTIONS,answers).filter(a=>a.status==='balanced').map(a=>a.key);
}
export function questionsForStage(stage, answers) {
  if(!STAGES.includes(stage)) throw new Error('未知的作答階段。');
  if(stage==='base') return BASE_QUESTIONS;
  const tied=tieAxes(answers);
  const pairs=FOLLOWUP_QUESTIONS.filter(q=>tied.includes(q.axis));
  const short=[...BASE_QUESTIONS,...pairs];
  return stage==='short'?short:[...short,...EXTENDED_QUESTIONS,...FOLLOWUP_QUESTIONS.filter(q=>!tied.includes(q.axis))];
}
export function presentedQuestions(stage,answers,pool) {
  const ids=orderedQuestionIds(stage,stage==='base'?[]:tieAxes(answers),pool);
  return ids.map(id=>ALL_QUESTIONS.find(q=>q.id===id));
}
function describe(axes) {
  const undecidedAxes=axes.filter(a=>a.status==='balanced').map(a=>a.key),insufficientAxes=axes.filter(a=>a.status==='insufficient').map(a=>a.key);
  const coreType=axes.slice(0,4).every(a=>a.pole)?axes.slice(0,4).map(a=>a.pole).join(''):null;
  const subtype=axes.slice(4).every(a=>a.pole)?axes.slice(4).map(a=>a.pole).join(''):null;
  const symbol=(a,i)=>a.status==='insufficient'?`[${AXES[i].key}不足]`:a.pole||`[${AXES[i].left}/${AXES[i].right}]`;
  return {undecidedAxes,insufficientAxes,coreType,profile64Id:coreType&&subtype?`${coreType}-${subtype}`:null,
    publicResult:`${axes.slice(0,4).map((a,i)=>symbol(a,i)).join('')}-${axes.slice(4).map((a,i)=>symbol(a,i+4)).join('')}`};
}
export function evaluate(answers, options) {
  const stage=options.stage||'short', questions=questionsForStage(stage,answers),orderPool=options.orderPool||canonicalQuestionPool();
  if(!validateOrderPool(orderPool))throw Error('題序資料無效。');
  const axes=scoreAxes(questions,answers), baseAxes=scoreAxes(BASE_QUESTIONS,answers);
  const baseCompletedAt=options.baseCompletedAt||options.completedAt;
  const shortCompletedAt=stage==='base'?null:options.shortCompletedAt||options.completedAt;
  const snapshots=STAGES.slice(0,STAGES.indexOf(stage)+1).map(s=>{
    const qs=questionsForStage(s,answers), scores=scoreAxes(qs,answers);
    return {stage:s,questionCount:qs.length,completedAt:s==='base'?baseCompletedAt:s==='short'?shortCompletedAt:options.completedAt,
      axes:scores,...describe(scores),feedback:null};
  });
  return {schemaVersion:SCHEMA_VERSION,questionnaireVersion:QUESTIONNAIRE_VERSION,scoringVersion:SCORING_VERSION,
    presentationVersion:PRESENTATION_VERSION,orderPool:[...orderPool],questionOrder:orderedQuestionIds(stage,tieAxes(answers),orderPool),
    attemptId:options.attemptId,baselineAttemptId:options.baselineAttemptId||null,
    isRetest:Boolean(options.baselineAttemptId),retestSequence:options.retestSequence||1,
    startedAt:options.startedAt,completedAt:options.completedAt,baseCompletedAt,shortCompletedAt,
    durationSeconds:Math.max(0,Math.round((Date.parse(options.completedAt)-Date.parse(options.startedAt))/1000)),
    state:options.state,language:'zh-Hant',includeResponses:options.includeResponses===true,
    stage,questionCount:questions.length,tiedAxes:tieAxes(answers),baseQuestionCount:24,baseAxes,
    shortAxes:stage==='base'?null:snapshots[1].axes,axes,...describe(axes),snapshots,
    responses:questions.map(q=>({questionId:q.id,itemVersion:q.itemVersion,answer:answers[q.id]}))};
}
export function advanceResult(previous,answers,stage,completedAt) {
  if(STAGES.indexOf(stage)!==STAGES.indexOf(previous.stage)+1) throw new Error('必須依序完成各階段。');
  if(previous.responses.some(a=>answers[a.questionId]!==a.answer)) throw new Error('已完成的答案不能修改。');
  if(!isDate(completedAt)||Date.parse(completedAt)<Date.parse(previous.completedAt)) throw new Error('階段完成時間無效。');
  const next=evaluate(answers,{...previous,stage,completedAt,shortCompletedAt:stage==='short'?completedAt:previous.shortCompletedAt});
  next.snapshots=next.snapshots.map(s=>structuredClone(previous.snapshots.find(p=>p.stage===s.stage)||s));
  return next;
}
export function compareResults(previous,current) {
  if(previous.questionnaireVersion!==current.questionnaireVersion||previous.scoringVersion!==current.scoringVersion)
    return {comparable:false,reason:'題本或計分版本不同，這兩次結果不直接比較。'};
  const axes=AXES.map(axis=>{ const before=previous.baseAxes.find(a=>a.key===axis.key),after=current.baseAxes.find(a=>a.key===axis.key),comparable=before.validCount===4&&after.validCount===4;
    return {key:axis.key,comparable,previous:before.leftPercent,current:after.leftPercent,delta:comparable?after.leftPercent-before.leftPercent:null}; });
  if(!axes.some(a=>a.comparable))return{comparable:false,reason:'兩次沒有皆完整回答主測驗四題的面向，這次不直接比較差值。'};
  return {comparable:true,basis:'base24',days:Math.max(0,(Date.parse(current.baseCompletedAt)-Date.parse(previous.baseCompletedAt))/86400000),axes};
}
export function exportRecord(result,participantHash) {
  return {...result,participantHash,responses:result.includeResponses?result.responses:null,responsesIncluded:result.includeResponses===true};
}
const equal = (a,b) => JSON.stringify(a)===JSON.stringify(b);
function validFeedback(f,completedAt) {
  return f===null || (f && fitValues.includes(f.fit) && isDate(f.at) && Date.parse(f.at)>=Date.parse(completedAt)
    && Array.isArray(f.mismatchAxes) && new Set(f.mismatchAxes).size===f.mismatchAxes.length && f.mismatchAxes.every(k=>AXES.some(a=>a.key===k))
    && Array.isArray(f.reasons) && new Set(f.reasons).size===f.reasons.length && f.reasons.every(v=>FEEDBACK_REASONS.includes(v))
    && (f.fit!=='yes'||(!f.mismatchAxes.length&&!f.reasons.length)));
}
export function validateRecord(r, requireResponses=false) {
  try {
    if(!r||r.schemaVersion!==SCHEMA_VERSION||r.questionnaireVersion!==QUESTIONNAIRE_VERSION||r.scoringVersion!==SCORING_VERSION
      ||!isId(r.attemptId)||!(r.baselineAttemptId===null||isId(r.baselineAttemptId))||r.baselineAttemptId===r.attemptId
      ||r.isRetest!==Boolean(r.baselineAttemptId)||!Number.isInteger(r.retestSequence)||r.retestSequence<1||r.retestSequence>10000
      ||!['stable','some','major'].includes(r.state)||r.language!=='zh-Hant'||typeof r.includeResponses!=='boolean'||!STAGES.includes(r.stage)
      ||!isDate(r.startedAt)||!isDate(r.completedAt)||!isDate(r.baseCompletedAt)||Date.parse(r.startedAt)>Date.parse(r.baseCompletedAt)
      ||!Array.isArray(r.snapshots)||r.snapshots.length!==STAGES.indexOf(r.stage)+1||!Array.isArray(r.tiedAxes)
      ||r.baseQuestionCount!==24||!Array.isArray(r.baseAxes)||!equal(r.baseAxes,r.snapshots[0].axes)) return false;
    if(r.presentationVersion!==PRESENTATION_VERSION||!validateOrderPool(r.orderPool))return false;
    const tied=r.baseAxes.filter(a=>a.status==='balanced').map(a=>a.key);
    if(!equal(r.tiedAxes,tied)||!equal(r.questionOrder,orderedQuestionIds(r.stage,tied,r.orderPool))) return false;
    let lastTime=Date.parse(r.startedAt);
    for(let i=0;i<r.snapshots.length;i++) {
      const s=r.snapshots[i];
      const counts=AXES.map(a=>s.stage==='base'?4:s.stage==='short'?4+(tied.includes(a.key)?2:0):a.key==='AO'||a.key==='HC'?6:12);
      if(s.stage!==STAGES[i]||!isDate(s.completedAt)||Date.parse(s.completedAt)<lastTime||!validFeedback(s.feedback,s.completedAt)
        ||!Array.isArray(s.axes)||s.axes.length!==6||s.questionCount!==counts.reduce((a,b)=>a+b,0)) return false;
      for(let j=0;j<6;j++) {
        const a=s.axes[j],count=counts[j];
        if(!a||!Number.isInteger(a.skippedCount)||a.skippedCount<0||a.skippedCount>count||!Number.isInteger(a.leftScore)||a.leftScore<0||a.leftScore>(count-a.skippedCount)*2||!Number.isInteger(a.neutralCount)||a.neutralCount<0||a.neutralCount>count-a.skippedCount
          ||a.leftScore<a.neutralCount||a.leftScore>(count-a.skippedCount)*2-a.neutralCount||(a.leftScore-a.neutralCount)%2!==0
          ||!equal(a,axisScore(AXES[j],count,a.leftScore,a.neutralCount,a.skippedCount))) return false;
        if(i>0){
          const prev=r.snapshots[i-1].axes[j],added=a.questionCount-prev.questionCount,valid=a.validCount-prev.validCount,neutral=a.neutralCount-prev.neutralCount,left=a.leftScore-prev.leftScore;
          if(valid<0||valid>added||neutral<0||neutral>valid||left<neutral||left>valid*2-neutral||(left-neutral)%2!==0)return false;
        }
      }
      const description=describe(s.axes);
      if(!Object.keys(description).every(k=>equal(s[k],description[k]))) return false;
      lastTime=Date.parse(s.completedAt);
    }
    const last=r.snapshots.at(-1);
    if(!equal(r.axes,last.axes)||r.completedAt!==last.completedAt||r.baseCompletedAt!==r.snapshots[0].completedAt
      ||r.shortCompletedAt!==(r.snapshots[1]?.completedAt||null)||!equal(r.shortAxes,r.snapshots[1]?.axes||null)
      ||r.questionCount!==last.questionCount||!Object.keys(describe(last.axes)).every(k=>equal(r[k],last[k]))
      ||r.durationSeconds!==Math.max(0,Math.round((Date.parse(r.completedAt)-Date.parse(r.startedAt))/1000))) return false;
    if(r.responses===null) return !requireResponses&&r.includeResponses===false&&r.responsesIncluded===false;
    if(!Array.isArray(r.responses)||r.responses.length!==r.questionCount||new Set(r.responses.map(a=>a.questionId)).size!==r.questionCount) return false;
    const answers={};
    for(const a of r.responses) {
      const q=ALL_QUESTIONS.find(q=>q.id===a.questionId);
      if(!q||q.itemVersion!==a.itemVersion||!isAnswer(a.answer)) return false;
      answers[a.questionId]=a.answer;
    }
    const expected=evaluate(answers,r);
    if(!equal(expected.responses,r.responses)||!equal(expected.tiedAxes,r.tiedAxes)) return false;
    return expected.snapshots.every((s,i)=>equal(s.axes,r.snapshots[i].axes));
  } catch { return false; }
}
export function toCSV(records) {
  const header=['SchemaVersion','QuestionnaireVersion','ScoringVersion','AttemptId','ParticipantHash','BaselineAttemptId','IsRetest','RetestSequence','StartedAt','CompletedAt','DurationSeconds','State','Stage','QuestionCount','PublicResult','Profile64Id','TiedAxes','BaseCompletedAt','ShortCompletedAt',
    ...AXES.flatMap(a=>[`${a.left}Percent`,`${a.key}LeftScore`,`${a.key}RightScore`,`${a.key}QuestionCount`,`${a.key}ValidCount`,`${a.key}SkippedCount`,`${a.key}Status`]),'StageSnapshotsJSON','PresentationVersion','QuestionOrderJSON','ResponsesIncluded','ResponsesJSON'];
  const cell=value=>{let s=value==null?'':String(value);if(/^[=+\-@\t\r]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"';};
  const rows=records.map(r=>[r.schemaVersion,r.questionnaireVersion,r.scoringVersion,r.attemptId,r.participantHash,r.baselineAttemptId,r.isRetest,r.retestSequence,r.startedAt,r.completedAt,r.durationSeconds,r.state,r.stage,r.questionCount,r.publicResult,r.profile64Id,r.tiedAxes.join(','),r.baseCompletedAt,r.shortCompletedAt,
    ...AXES.flatMap(axis=>{const a=r.axes.find(a=>a.key===axis.key);return[a.leftPercent,a.leftScore,a.rightScore,a.questionCount,a.validCount,a.skippedCount,a.status];}),JSON.stringify(r.snapshots),r.presentationVersion,JSON.stringify(r.questionOrder),r.responsesIncluded,r.responses?JSON.stringify(r.responses):'']);
  return '\uFEFF'+[header,...rows].map(row=>row.map(cell).join(',')).join('\r\n');
}
