import {buildResultImageData,RESULT_IMAGE_COPY} from './result-insights.mjs';
export function wrapImageText(text,maxWidth,measure){
 if(!(maxWidth>0))throw Error('Invalid text width');
 const lines=[];let current='';
 const flush=()=>{if(current.trim())lines.push(current.trimEnd());current='';};
 for(const token of String(text).match(/\S+\s*|\s+/gu)||[]){
  const word=token.trim();if(!word)continue;
  if(measure(word)>maxWidth){
   flush();for(const char of Array.from(word)){if(current&&measure(current+char)>maxWidth)flush();current+=char;}
   current+=' ';continue;
  }
  const next=current+word;
  if(current&&measure(next)>maxWidth)flush();
  current+=word+' ';
 }
 flush();return lines;
}
export async function renderResultImage(record,locale='zh'){
 const data=buildResultImageData(record,locale),copy=RESULT_IMAGE_COPY[data.locale];
 await document.fonts?.ready;
 const avatar=new Image();avatar.src='./assets/creator-avatar-v2.png';await avatar.decode();
 const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');if(!ctx)throw Error('Canvas unavailable');
 const W=1080,pad=60,content=W-pad*2,gutter=28,panelWidth=(content-gutter)/2;
 const fontFamily='"Microsoft JhengHei", "PingFang TC", system-ui, sans-serif';
 const font=(size,weight=400)=>{ctx.font=`${weight} ${size}px ${fontFamily}`;};
 const lines=(text,size,width,weight=400)=>{font(size,weight);return wrapImageText(text,width,s=>ctx.measureText(s).width);};
 const bodySize=data.locale==='en'?27:29,lineHeight=38;
 const cards=[{title:copy.strengths,items:data.strengths,empty:copy.noStrengths},{title:copy.cautions,items:data.cautions,empty:copy.noCautions}];
 for(const card of cards){card.rows=card.items.length?card.items.map(item=>({...item,lines:lines(item.text,bodySize,panelWidth-90)})):[{pole:null,lines:lines(card.empty,bodySize,panelWidth-60)}];card.bodyHeight=card.rows.reduce((h,row)=>h+row.lines.length*lineHeight+24,0);}
 let titleSize=data.kind==='typed'?116:data.locale==='en'?64:76;
 while(lines(data.title,titleSize,content,700).length>1&&titleSize>46)titleSize-=2;
 const titleLines=lines(data.title,titleSize,content,700);
 const extra=data.kind==='tied'?112:0;
 const axesTop=350+extra,panelsTop=axesTop+3*95+50;
 const panelHeight=Math.max(270,Math.max(...cards.map(c=>c.bodyHeight))+108);
 const H=Math.max(1350,Math.ceil((panelsTop+panelHeight+180)/50)*50);
 canvas.width=W;canvas.height=H;
 const ink='#254C3E',muted='#5D6F62',paper='#F4F6EE',green='#DDE9DA',peach='#F0E3D5';
 ctx.fillStyle=paper;ctx.fillRect(0,0,W,H);ctx.textBaseline='top';
 const text=(s,x,y,size=28,color=ink,weight=400)=>{font(size,weight);ctx.fillStyle=color;ctx.fillText(s,x,y);};
 const rounded=(x,y,w,h,r,fill)=>{
  if(w<=0||h<=0)return;r=Math.min(r,w/2,h/2);ctx.fillStyle=fill;
  if(!r){ctx.fillRect(x,y,w,h);return;}
  ctx.beginPath();ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.fill();
 };
 const paragraph=(value,x,y,width,size=bodySize,color=ink,weight=400,leading=lineHeight)=>{const rows=lines(value,size,width,weight);rows.forEach((line,i)=>text(line,x,y+i*leading,size,color,weight));return rows.length*leading;};
 // Use the creator's existing same-origin avatar; standalone builds embed this asset.
 rounded(0,0,W,14,0,ink);text(copy.brand,pad,45,30,ink,700);text('V4',W-pad-65,45,30,ink,700);
 const avatarSize=132,avatarX=W-pad-avatarSize,avatarY=92;
 ctx.save();ctx.beginPath();ctx.arc(avatarX+avatarSize/2,avatarY+avatarSize/2,avatarSize/2,0,Math.PI*2);ctx.clip();ctx.drawImage(avatar,avatarX,avatarY,avatarSize,avatarSize);ctx.restore();
 text(data.locale==='en'?`${copy.eyebrow} · ${data.questionCount} questions`:`${copy.eyebrow} · ${data.questionCount} 題`,pad,119,27,muted);
 titleLines.forEach((line,i)=>text(line,pad,178+i*(titleSize+10),titleSize,ink,700));
 if(data.name)text(data.name,pad,306,34,muted,600);
 else paragraph(data.kind==='tied'?copy.tieNote:copy.missingNote,pad,280,content,28,muted,400,36);
 if(data.kind==='tied'){
  data.candidates.forEach((code,i)=>{const x=pad+i*245;rounded(x,340,225,52,12,'#E2EADD');text(code,x+18,351,28,ink,600);});
  if(data.candidateCount>4)text(data.locale==='en'?`Showing 4 of ${data.candidateCount} equal possibilities`:`先列出 4 種，共 ${data.candidateCount} 種同分候選`,pad,410,25,muted);
 }
 data.axes.forEach((a,i)=>{
  const x=pad+(i%2)*(panelWidth+gutter),y=axesTop+Math.floor(i/2)*95;
  text(a.name,x,y,27,ink,600);text(a.status==='insufficient'?copy.notEnough:`${a.left} ${a.leftPercent}% / ${a.right} ${a.rightPercent}%`,x,y+35,24,muted);
  rounded(x,y+70,panelWidth,9,4,'#D9DED4');if(a.leftPercent!==null)rounded(x,y+70,panelWidth*a.leftPercent/100,9,4,ink);
 });
 cards.forEach((card,i)=>{
  const x=pad+i*(panelWidth+gutter);rounded(x,panelsTop,panelWidth,panelHeight,20,i===0?green:peach);
  paragraph(card.title,x+28,panelsTop+27,panelWidth-56,data.locale==='en'?31:33,ink,700,39);
  let y=panelsTop+93;
  card.rows.forEach(row=>{if(row.pole){text(row.pole,x+25,y+3,22,muted,700);}const dx=row.pole?57:30;row.lines.forEach((line,n)=>text(line,x+dx,y+n*lineHeight,bodySize));y+=row.lines.length*lineHeight+24;});
 });
 const foot=panelsTop+panelHeight+32;
 paragraph(copy.snapshot,pad,foot,content,26,muted,400,34);
 text(copy.footer,pad,foot+48,23,muted);
 text('louislin87.github.io/Personality-quiz_04/'+(data.locale==='en'?'?lang=en':''),pad,foot+90,23,muted);
 const blob=await new Promise((resolve,reject)=>canvas.toBlob(value=>value?resolve(value):reject(Error('PNG encoding failed')),'image/png'));
 return {blob,width:W,height:H,data};
}
export async function saveResultImage(record,locale='zh'){
 const output=await renderResultImage(record,locale),copy=RESULT_IMAGE_COPY[output.data.locale];
 const previous=document.querySelector('#result-image-dialog');if(previous){if(previous.open)previous.close();previous.remove();}
 const objectURL=URL.createObjectURL(output.blob),dialog=document.createElement('dialog');dialog.id='result-image-dialog';dialog.className='result-image-dialog';dialog.setAttribute('aria-labelledby','result-image-heading');
 const heading=document.createElement('h2');heading.id='result-image-heading';heading.textContent=copy.preview;
 const close=document.createElement('button');close.type='button';close.className='button';close.textContent=copy.close;close.addEventListener('click',()=>dialog.close());
 const bar=document.createElement('div');bar.className='result-image-toolbar';bar.append(heading,close);
 const hint=document.createElement('p');hint.textContent=copy.hint;
 const privacy=document.createElement('p');privacy.className='download-note';privacy.textContent=copy.privacy;
 const image=document.createElement('img');image.className='result-image-preview';image.alt=copy.imageAlt;image.src=objectURL;image.width=output.width;image.height=output.height;
 const download=document.createElement('a');download.className='button primary';download.href=objectURL;download.download=`demonward-panda-v4-${output.data.kind==='typed'?output.data.title:output.data.kind}-${output.data.locale}.png`;download.textContent=copy.download;
 dialog.append(bar,hint,privacy,download,image);document.body.append(dialog);
 dialog.addEventListener('close',()=>{dialog.remove();setTimeout(()=>URL.revokeObjectURL(objectURL),30000);},{once:true});
 try{dialog.showModal();close.focus();download.click();}catch(error){dialog.remove();URL.revokeObjectURL(objectURL);throw error;}
 return output;
}
