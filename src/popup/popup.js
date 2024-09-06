
import { createApp } from 'vue'
import PopupComponent from './PopupComponent.vue'


if (!window.__POPUP_SCRIPT_EXECUTED__) {
    window.__POPUP_SCRIPT_EXECUTED__ = true;
  
   console.log('Popup script running')
  
    if (window.__VUE_POPUP_APP__) {
      console.log('Unmounting existing app')
      window.__VUE_POPUP_APP__.unmount()
    }
  
    console.log('Creating new app')
    const app = createApp(PopupComponent)
    app.mount('#app')
  
    window.__VUE_POPUP_APP__ = app
    console.log('New app mounted')
  }