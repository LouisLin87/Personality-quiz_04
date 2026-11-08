import {tx,getLocale,questionCopy} from './i18n.mjs';
import {BufferedClickAudio} from './buffered-audio.mjs';
export const SOUND_PREF_KEY='demonward_panda_v4_input_sound_audio_v1';
export class UIClickSound{
  constructor({root=document,storage=localStorage,engine=null}={}){
    this.root=root;this.storage=storage;this.audio=root.querySelector('#ui-click');this.button=root.querySelector('#sound-toggle');this.status=root.querySelector('#sound-status');this.enabled=true;this.generation=0;
    try{this.enabled=storage.getItem(SOUND_PREF_KEY)!=='0';}catch{}
    if(this.audio)this.audio.volume=.35;
    this.engine=engine||new BufferedClickAudio({audio:this.audio,onState:state=>{for(const[k,v]of Object.entries(state))this.button?.setAttribute?.('data-audio-'+k,String(v));}});
    this.engine.prepare().catch(()=>{});
    this.update();
    root.addEventListener('pointerdown',event=>{if(event.button!==0||event.isPrimary===false)return;const control=this.control(event);if(!control||control.id==='sound-toggle')return;this.pointerControl=control;this.pointerAt=Date.now();return this.play();},{capture:true});
    root.addEventListener('pointercancel',()=>{this.pointerControl=null;this.stop();});
    root.addEventListener('click',event=>this.handleClick(event),{capture:true});
    root.addEventListener('change',event=>{if(event.target.tagName==='SELECT'&&!event.target.disabled)return this.play();});
    root.addEventListener('visibilitychange',()=>{if(root.hidden)this.stop();});
  }
  update(){if(this.button){this.button.textContent=this.enabled?tx('音效：開'):tx('音效：關');this.button.setAttribute('aria-pressed',String(this.enabled));}}
  stop(){this.generation++;this.engine.stop();}
  setEnabled(enabled){this.enabled=Boolean(enabled);if(!this.enabled)this.stop();if(this.status)this.status.textContent='';this.update();try{this.storage.setItem(SOUND_PREF_KEY,this.enabled?'1':'0');}catch{}}
  control(event){
    let control=event.target.closest?.('button,summary,a,input[type="radio"],input[type="checkbox"],label');
    if(control?.tagName==='LABEL')control=control.control||control.querySelector?.('input[type="radio"],input[type="checkbox"]');
    if(!control||control.disabled||control.getAttribute?.('aria-disabled')==='true')return false;
    if(control.tagName==='A'&&control.hasAttribute('download'))return false;
    return control;
  }
  handleClick(event){
    const control=this.control(event);if(!control)return false;
    if(control.id==='sound-toggle'){this.setEnabled(!this.enabled);return this.enabled?this.play():false;}
    // Label activation forwards a second input click. Its pointer sound already ran.
    if(event.target.closest?.('label')?.tagName==='LABEL'&&event.target.tagName!=='INPUT')return false;
    if(event.detail!==0&&control===this.pointerControl&&Date.now()-this.pointerAt<1500){this.pointerControl=null;return false;}
    return this.play();
  }
  async play(){
    if(!this.enabled||!this.audio)return false;
    const generation=++this.generation;
    try{const played=await this.engine.play();if(generation===this.generation&&this.status)this.status.textContent='';return played;}
    catch(error){if(generation===this.generation&&error?.name!=='AbortError'&&this.status)this.status.textContent=tx('音效暫時無法播放，測驗仍可使用；可切換音效按鈕重試。');return false;}
  }
}
