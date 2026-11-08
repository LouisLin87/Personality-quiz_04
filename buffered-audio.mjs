export class BufferedClickAudio{
  constructor({audio,fetcher=globalThis.fetch?.bind(globalThis),OfflineContext=globalThis.OfflineAudioContext||globalThis.webkitOfflineAudioContext,AudioContext=globalThis.AudioContext||globalThis.webkitAudioContext,onState=()=>{}}={}){
    Object.assign(this,{audio,fetcher,OfflineContext,AudioContext,onState});this.buffer=null;this.context=null;this.source=null;this.offset=0;this.generation=0;this.preparing=null;this.plays=0;
  }
  prepare(){
    if(this.preparing)return this.preparing;
    this.preparing=(async()=>{
      const src=this.audio?.currentSrc||this.audio?.src||this.audio?.getAttribute?.('src');
      if(!src||!this.OfflineContext||!this.AudioContext)return false;
      try{
        let bytes;
        if(src.startsWith('data:')){const raw=atob(src.slice(src.indexOf(',')+1));bytes=Uint8Array.from(raw,c=>c.charCodeAt(0)).buffer;}
        else{const response=await this.fetcher(src);if(!response.ok)throw Error('Audio unavailable');bytes=await response.arrayBuffer();}
        this.buffer=await new this.OfflineContext(1,1,44100).decodeAudioData(bytes);
        let peak=0,first=this.buffer.length;const channels=Array.from({length:this.buffer.numberOfChannels},(_,i)=>this.buffer.getChannelData(i));
        for(const samples of channels)for(const value of samples)peak=Math.max(peak,Math.abs(value));
        const threshold=Math.max(.002,peak*.015);
        for(const samples of channels){const index=samples.findIndex(v=>Math.abs(v)>=threshold);if(index>=0)first=Math.min(first,index);}
        this.offset=first<this.buffer.length?Math.max(0,first/this.buffer.sampleRate-.005):0;
        this.onState({ready:'decoded',offsetMs:Math.round(this.offset*1000),durationMs:Math.round(this.buffer.duration*1000)});return true;
      }catch{this.onState({ready:'native'});return false;}
    })();return this.preparing;
  }
  stop(){
    this.generation++;
    if(this.source){try{this.source.stop();this.source.disconnect();}catch{}this.source=null;}
    if(this.audio){this.audio.pause();try{this.audio.currentTime=0;}catch{}}
  }
  async play(){
    const generation=++this.generation;
    if(this.buffer&&this.AudioContext){
      try{
        this.context||=new this.AudioContext({latencyHint:'interactive'});
        if(this.context.state!=='running')await this.context.resume();
        if(generation!==this.generation)return false;
        if(this.source){try{this.source.stop();this.source.disconnect();}catch{}}
        const gain=this.context.createGain();gain.gain.value=.35;gain.connect(this.context.destination);
        const source=this.context.createBufferSource();source.buffer=this.buffer;source.connect(gain);source.onended=()=>{source.disconnect();gain.disconnect();if(this.source===source)this.source=null;};
        this.source=source;source.start(0,this.offset);this.onState({engine:'buffered',plays:++this.plays,baseLatencyMs:Math.round((this.context.baseLatency||0)*1000)});return true;
      }catch{if(generation!==this.generation)return false;}
    }
    if(!this.audio||generation!==this.generation)return false;
    this.audio.pause();try{this.audio.currentTime=this.offset;}catch{}
    await this.audio.play();this.onState({engine:'native',plays:++this.plays});return true;
  }
}
