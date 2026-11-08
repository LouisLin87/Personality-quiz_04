import {AXES,TYPE_NAMES} from './data.mjs';
export const RESULT_IMAGE_VERSION='result-image-1.0';
export const RESULT_IMAGE_COPY={
 zh:{brand:'獵魔士熊貓64型',eyebrow:'這次的探索',strengths:'你可能擅長的事',cautions:'可以留意的地方',basis:'依本次方向較清楚的面向，挑選最多三則觀察。',noStrengths:'目前沒有作答足夠且方向清楚的面向，先不挑選單側特點。',noCautions:'可先從具體生活例子觀察，不必急著固定自己的型態。',insufficient:'資料尚不足',tied:'種同分候選',tieNote:'這些候選在本次計分下同分，沒有先後排名。',missingNote:'回答不足的面向保留空白，不當作 50／50。',snapshot:'這是一張本次作答的快照，保留繼續了解自己的空間。',footer:'供娛樂與自我探索參考；分數不是類型機率。',save:'一鍵儲存結果圖',creating:'正在製作結果圖…',preview:'你的結果圖',close:'關閉',download:'下載 PNG 圖片',hint:'結果圖已產生，並已送出下載請求；請確認瀏覽器下載項目。也可長按或按右鍵儲存預覽圖片。',privacy:'圖片只包含型態、面向分數與優勢提醒，不含找回碼、逐題答案或補充原文。',failed:'結果圖尚未產生。請稍後重試，原本的測驗結果仍保留。',imageAlt:'測驗結果分享圖',valid:'有效',skipped:'不計分',notEnough:'資料不足',balanced:'兩側接近',observations:'看看你的優勢與提醒'},
 en:{brand:'Demonward Panda 64',eyebrow:'Your exploration',strengths:'Your possible strengths',cautions:'Things to keep in mind',basis:'Up to three observations from areas with a clearer direction in this result.',noStrengths:'No area has both enough answers and a clear enough direction yet, so no one-sided traits are picked.',noCautions:'Notice what you do in real situations. There is no rush to settle on one fixed type.',insufficient:'Not enough answers yet',tied:'equally scored possibilities',tieNote:'These possibilities have equal scores here. They are not ranked.',missingNote:'Areas with too few answers stay blank; they are not counted as 50/50.',snapshot:'A snapshot of your preferences, with room to keep exploring.',footer:'For fun and self-reflection. Scores are not type probabilities.',save:'Save result image',creating:'Making your result image…',preview:'Your result image',close:'Close',download:'Download PNG',hint:'Your image is ready and a download has been requested. Check your browser downloads, or press and hold / right-click the preview to save it.',privacy:'The image includes your type, area scores, and observations. It leaves out recovery codes, individual responses, and your own notes.',failed:'We could not make the image just now. Try again shortly; your quiz result is still here.',imageAlt:'Shareable quiz result image',valid:'Scored',skipped:'Skipped',notEnough:'Too few answers',balanced:'Both sides close',observations:'Explore your strengths and watch-outs'}
};
// These describe possible uses and trade-offs of a preference, not fixed ability
// or a diagnosis. Both languages follow the same evidence-selection rule.
const TRAIT_COPY={
 E:{zh:['透過交流梳理想法，可能較容易帶動討論。','需要安靜整理時，也替自己的想法留點獨處空間。'],en:['Talking things through may help you sort out ideas and get a discussion moving.','Leave some quiet time, too, so your own view has room to take shape.']},
 I:{zh:['透過獨處梳理思路，可能較能想清楚再表達。','試著說出目前的想法，讓別人也能跟上你的進度。'],en:['Time on your own may help you untangle ideas before putting them into words.','Share a work-in-progress thought so others can follow where you are heading.']},
 S:{zh:['從具體例子與細節出發，可能較能把想法落實。','整理細節時，偶爾退一步看看它們如何連成全貌。'],en:['Concrete examples may help you turn a vague idea into something workable.','Step back now and then to check how the details fit the bigger picture.']},
 N:{zh:['從主題與關聯出發，可能較容易看見新的可能。','替有興趣的點子挑一個實際步驟，讓想法有地方開始。'],en:['You may spot themes and connections that open up fresh possibilities.','Pick a practical next step to give a promising idea somewhere to go.']},
 T:{zh:['用一致條件比較選擇，可能較能說清楚判斷理由。','比較理由之外，也問問相關的人實際感受與需要。'],en:['Shared criteria may help you compare options and explain your reasoning.','Check how the people involved experience the choice, alongside your reasons.']},
 F:{zh:['留意價值與人的處境，可能較能看見選擇的影響。','也說清楚自己的比較條件與界線，讓決定更容易被理解。'],en:['Values and personal circumstances may help you notice what a choice means.','Name your criteria and limits, too, so the decision is easier to explain.']},
 J:{zh:['先排大概的順序，可能較能把事情拆成可執行的步驟。','新資訊出現時，記得替原本的計畫留點調整空間。'],en:['A rough plan may help you keep track of tasks and make steady progress.','Leave room to revise the plan when new information comes in.']},
 P:{zh:['保留選項與調整空間，可能較能因應當下的變化。','替自己定一個做決定的時間，讓彈性也能帶向完成。'],en:['Keeping options open may help you adapt when a situation changes.','Choose a time to decide so useful flexibility does not leave things hanging.']},
 A:{zh:['在低風險的小嘗試中，可能較能從實際結果快速學習。','若代價較高或不易回頭，先確認幾個重要的未知。'],en:['Small, reversible trials may help you learn quickly from what happens.','Check the important unknowns before a trial that is costly or hard to undo.']},
 O:{zh:['動手前先多了解，可能較能留意到有用的資訊。','替準備訂一個小小的起跑點，讓了解能接上實際經驗。'],en:['Learning a little more first may help you spot useful details before trying.','Set a small starting point, so preparation can turn into experience.']},
 H:{zh:['把關心與肯定說出來，可能較能讓對方感受到被看見。','也問問對方需要哪種支持，確認話語是否回應了需要。'],en:['Putting care into words may help people know that you notice and value them.','Ask what support would help, rather than assuming words are enough.']},
 C:{zh:['透過實際幫忙表達重視，可能較能提供具體的支持。','加上一兩句說明，讓別人更容易看懂你行動背後的心意。'],en:['Practical help may let you show care in a concrete, useful way.','A few words can help others understand the care behind what you are doing.']}
};
const IMAGE_AXIS_NAMES={EI:['互動／獨處','Company / Time alone'],SN:['例子／概念','Examples / Ideas'],TF:['條件／價值','Criteria / Values'],JP:['先定／邊定','Plan / Adapt'],AO:['先試／先看','Try / Learn first'],HC:['話語／行動','Words / Actions']};
export function getResultInsights(record,locale='zh'){
 const language=locale==='en'?'en':'zh',copy=RESULT_IMAGE_COPY[language];
 const selected=AXES.map((axis,index)=>({axis:axis.key,index,value:record.axes.find(a=>a.key===axis.key)}))
  .filter(({value:a})=>a?.status==='scored'&&!a.nearMidpoint&&a.validCount>=a.minValidCount&&a.gap>10&&TRAIT_COPY[a.pole])
  .sort((a,b)=>b.value.gap-a.value.gap||a.index-b.index).slice(0,3);
 const item=(s,i)=>({axis:s.axis,pole:s.value.pole,text:TRAIT_COPY[s.value.pole][language][i]});
 return {strengths:selected.map(s=>item(s,0)),cautions:selected.map(s=>item(s,1)),basis:copy.basis,noStrengths:copy.noStrengths,noCautions:copy.noCautions};
}
export function buildResultImageData(record,locale='zh'){
 const language=locale==='en'?'en':'zh',copy=RESULT_IMAGE_COPY[language];
 const axes=AXES.map(axis=>{
  const a=record.axes.find(a=>a.key===axis.key);if(!a)throw Error('Missing result area');
  return {key:axis.key,name:IMAGE_AXIS_NAMES[axis.key][language==='en'?1:0],left:axis.left,right:axis.right,pole:a.pole,status:a.status,leftPercent:a.status==='insufficient'?null:a.leftPercent,rightPercent:a.status==='insufficient'?null:a.rightPercent};
 });
 const missing=axes.some(a=>a.status==='insufficient');
 const allCandidates=missing?[]:axes.reduce((codes,a,i)=>codes.flatMap(code=>(a.status==='balanced'?[a.left,a.right]:[a.pole]).map(pole=>code+(i===4?'-':'')+pole)),['']);
 const kind=missing?'insufficient':allCandidates.length>1?'tied':'typed';
 const title=kind==='typed'?allCandidates[0]:kind==='insufficient'?copy.insufficient:language==='en'?`${allCandidates.length} possible types`:`${allCandidates.length} 種同分候選`;
 return {version:RESULT_IMAGE_VERSION,locale:language,kind,title,name:kind==='typed'?(TYPE_NAMES[title.slice(0,4)]?.[language==='en'?1:0]||''):'',questionCount:record.questionCount,candidateCount:allCandidates.length,candidates:kind==='tied'?allCandidates.slice(0,4):[],axes,...getResultInsights(record,language),scoredCount:record.axes.reduce((n,a)=>n+a.validCount,0),skippedCount:record.axes.reduce((n,a)=>n+a.skippedCount,0)};
}
