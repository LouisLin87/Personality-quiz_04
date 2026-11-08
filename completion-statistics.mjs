import {validateRecord} from './core.mjs';
import {toArchiveSummary} from './archive-data.mjs';
export const COMPLETION_STATS_KEY='demonward_panda_v4_wording_94_statistics';
export class CompletionStatistics{
  constructor({storage,transport,onChange=()=>{},now=()=>new Date().toISOString()}={}){
    Object.assign(this,{storage,transport,onChange,now});this.entries={};this.running=null;this.persisted=true;
    try{const saved=JSON.parse(storage.getItem(COMPLETION_STATS_KEY)||'{}');for(const[id,entry]of Object.entries(saved)){
      if(!/^[a-zA-Z0-9-]{1,80}$/.test(id)||!Number.isFinite(Date.parse(entry?.consentAt)))continue;
      const items={};for(const[stage,item]of Object.entries(entry.items||{}))if(['base','short','full'].includes(stage)){
        if(item?.state==='saved')items[stage]={state:'saved'};
        else if(item?.record?.attemptId===id&&item.record.stage===stage&&validateRecord(item.record)&&item.record.responses===null)items[stage]={state:'pending',record:toArchiveSummary(item.record)};
      }this.entries[id]={consentAt:entry.consentAt,items};
    }}catch{this.persisted=false;}
  }
  persist(){try{this.storage.setItem(COMPLETION_STATS_KEY,JSON.stringify(this.entries));this.persisted=true;}catch{this.persisted=false;}this.onChange();}
  authorize(id){if(!this.entries[id]){this.entries[id]={consentAt:this.now(),items:{}};this.persist();}}
  enqueue(record){
    const entry=this.entries[record.attemptId];if(!entry||!validateRecord(record))return;
    if(entry.items[record.stage])return;
    entry.items[record.stage]={state:'pending',record:toArchiveSummary(record)};this.persist();void this.flush();
  }
  status(record){const entry=this.entries[record.attemptId];return entry?.items[record.stage]||{state:entry?'pending':'not-consented'};}
  flush(){if(!this.running)this.running=this.drain().finally(()=>{this.running=null;});return this.running;}
  async drain(){
    while(true){const pair=Object.entries(this.entries).flatMap(([id,entry])=>Object.entries(entry.items).map(([stage,item])=>({id,entry,stage,item}))).find(v=>v.item.state==='pending');if(!pair)return;
      const {entry,stage,item}=pair;item.state='sending';this.persist();
      try{const response=await this.transport.request('statistics','POST',{consent:true,consentVersion:'completion-summary-1',consentAt:entry.consentAt,record:item.record});
        if(response.saved!==true||response.attemptId!==item.record.attemptId||response.stage!==stage)throw Error('未收到正確的保存確認。');
        entry.items[stage]={state:'saved'};
      }catch(error){item.state='failed';item.error=error.message||'保存失敗';}
      this.persist();
    }
  }
  retry(){for(const entry of Object.values(this.entries))for(const item of Object.values(entry.items))if(item.state==='failed')item.state='pending';return this.flush();}
  clear(){this.entries={};try{this.storage.removeItem(COMPLETION_STATS_KEY);}catch{}this.onChange();}
}
