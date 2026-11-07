export const SOUND_PREF_KEY='demonward_panda_v4_input_sound_audio_v1';
export class UIClickSound{
  constructor({root=document,storage=localStorage}={}){
    this.root=root;this.storage=storage;this.audio=root.querySelector('#ui-click');this.button=root.querySelector('#sound-toggle');this.status=root.querySelector('#sound-status');this.enabled=true;this.generation=0;
    try{this.enabled=storage.getItem(SOUND_PREF_KEY)!=='0';}catch{}
    if(this.audio)this.audio.volume=.35;
    this.update();
    root.addEventListener('click',event=>this.handleClick(event));
    root.addEventListener('change',event=>{if(event.target.tagName==='SELECT'&&!event.target.disabled)return this.play();});
    root.addEventListener('visibilitychange',()=>{if(root.hidden)this.stop();});
  }
  update(){if(this.button){this.button.textContent=this.enabled?'音效：開':'音效：關';this.button.setAttribute('aria-pressed',String(this.enabled));}}
  stop(){this.generation++;if(this.audio){this.audio.pause();try{this.audio.currentTime=0;}catch{}}}
  setEnabled(enabled){this.enabled=Boolean(enabled);if(!this.enabled)this.stop();if(this.status)this.status.textContent='';this.update();try{this.storage.setItem(SOUND_PREF_KEY,this.enabled?'1':'0');}catch{}}
  handleClick(event){
    // A label's forwarded native input click plays once; typing never plays a sound.
    const control=event.target.closest?.('button,summary,a,input[type="radio"],input[type="checkbox"]');
    if(!control||control.disabled||control.getAttribute?.('aria-disabled')==='true')return false;
    if(control.id==='sound-toggle'){this.setEnabled(!this.enabled);return this.enabled?this.play():false;}
    // Downloads create a programmatic anchor click after the user's button click.
    if(control.tagName==='A'&&control.hasAttribute('download'))return false;
    return this.play();
  }
  async play(){
    if(!this.enabled||!this.audio)return false;
    const generation=++this.generation;
    try{this.audio.pause();this.audio.currentTime=0;await this.audio.play();if(generation===this.generation&&this.status)this.status.textContent='';return true;}
    catch(error){if(generation===this.generation&&error?.name!=='AbortError'&&this.status)this.status.textContent='音效暫時無法播放，測驗仍可使用；可切換音效按鈕重試。';return false;}
  }
}
