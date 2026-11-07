import {validateRecord,STAGES} from './core.mjs';
const SUMMARY_FIELDS=['presentationVersion','orderPool','questionOrder','schemaVersion','questionnaireVersion','scoringVersion','attemptId','baselineAttemptId','isRetest','retestSequence','startedAt','completedAt','baseCompletedAt','shortCompletedAt','durationSeconds','state','language','stage','questionCount','tiedAxes','baseQuestionCount','baseAxes','shortAxes','axes','undecidedAxes','insufficientAxes','coreType','profile64Id','publicResult'];
export function toArchiveSummary(record){
  const clean=JSON.parse(JSON.stringify(Object.fromEntries(SUMMARY_FIELDS.map(k=>[k,record[k]]))));
  clean.includeResponses=false;clean.responsesIncluded=false;clean.responses=null;
  clean.snapshots=record.snapshots.map(s=>({stage:s.stage,questionCount:s.questionCount,completedAt:s.completedAt,axes:JSON.parse(JSON.stringify(s.axes)),undecidedAxes:[...s.undecidedAxes],insufficientAxes:[...s.insufficientAxes],coreType:s.coreType,profile64Id:s.profile64Id,publicResult:s.publicResult,
    feedback:s.feedback?{fit:s.feedback.fit,mismatchAxes:[...s.feedback.mismatchAxes],reasons:[...s.feedback.reasons],at:s.feedback.at}:null}));
  if(!validateRecord(clean))throw Error('結果摘要格式無效。');return clean;
}
export function mergeArchiveSummary(existing,incoming){
  if(!existing)return incoming;
  const immutable=['schemaVersion','questionnaireVersion','scoringVersion','attemptId','baselineAttemptId','startedAt','baseCompletedAt','state','retestSequence'];
  if(existing.presentationVersion!==incoming.presentationVersion||JSON.stringify(existing.orderPool)!==JSON.stringify(incoming.orderPool)||immutable.some(k=>existing[k]!==incoming[k])||JSON.stringify(existing.baseAxes)!==JSON.stringify(incoming.baseAxes))throw Error('結果基準衝突。');
  const newer=STAGES.indexOf(incoming.stage)>STAGES.indexOf(existing.stage)?incoming:existing;
  const merged=JSON.parse(JSON.stringify(newer));
  for(const snapshot of merged.snapshots){
    for(const r of [existing,incoming]){const other=r.snapshots.find(s=>s.stage===snapshot.stage);if(!other)continue;
      if(other.completedAt!==snapshot.completedAt||JSON.stringify(other.axes)!==JSON.stringify(snapshot.axes))throw Error('階段結果衝突。');
      if(other.feedback&&(!snapshot.feedback||Date.parse(other.feedback.at)>Date.parse(snapshot.feedback.at)))snapshot.feedback=other.feedback;
    }
  }return merged;
}
