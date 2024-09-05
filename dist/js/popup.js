(function(){"use strict";var e={4594:function(e,t,o){var n=o(3751),a=o(641),s=o(33);const r={class:"content"},i={class:"count-container"},l={key:0,class:"count-text"},u={class:"quote-container"},h={class:"quote-bubble"},c={class:"quote-text"},d={class:"quote-author"},m={class:"ellipsis-container"},k=["stroke"],g={class:"modal-buttons"},p={class:"modal-buttons"};function y(e,t,o,y,f,w){return(0,a.uX)(),(0,a.CE)("div",{class:(0,s.C4)(["popup",f.currentTheme]),onClick:t[15]||(t[15]=(...e)=>w.closeCountControls&&w.closeCountControls(...e))},[t[21]||(t[21]=(0,a.Lk)("h1",{class:"banner"},"Aurelius",-1)),(0,a.Lk)("div",r,[(0,a.Lk)("div",i,[(0,a.bF)(n.eB,{name:"slide-fade"},{default:(0,a.k6)((()=>[f.showCount?((0,a.uX)(),(0,a.CE)("p",l," ~ Day "+(0,s.v_)(f.count)+" ~",1)):(0,a.Q3)("",!0)])),_:1})]),(0,a.Lk)("div",u,[(0,a.Lk)("div",h,[(0,a.Lk)("p",c,(0,s.v_)(f.quoteText),1)]),(0,a.Lk)("p",d,"- "+(0,s.v_)(f.quoteAuthor),1)])]),(0,a.Lk)("div",m,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=(0,n.D$)(((...e)=>w.toggleCountControls&&w.toggleCountControls(...e)),["stop"])),class:"count-button"},[f.showCountControls?((0,a.uX)(),(0,a.CE)("svg",{key:0,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"light-theme"===f.currentTheme?"#333333":"#ffffff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},t[16]||(t[16]=[(0,a.Lk)("line",{x1:"18",y1:"6",x2:"6",y2:"18"},null,-1),(0,a.Lk)("line",{x1:"6",y1:"6",x2:"18",y2:"18"},null,-1)]),8,k)):((0,a.uX)(),(0,a.CE)("span",{key:1,class:"ellipsis",style:(0,s.Tr)({color:"light-theme"===f.currentTheme?"#333333":"#ffffff",userSelect:"none"})},"...",4))]),(0,a.bF)(n.eB,{name:"fade"},{default:(0,a.k6)((()=>[f.showCountControls?((0,a.uX)(),(0,a.CE)("div",{key:0,class:"count-controls",onClick:t[3]||(t[3]=(0,n.D$)((()=>{}),["stop"]))},[(0,a.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>w.openResetStreakModal&&w.openResetStreakModal(...e)),class:"reset-button"},"Restart streak"),(0,a.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>w.openSetStreakModal&&w.openSetStreakModal(...e)),class:"set-streak-button"},"Set streak day")])):(0,a.Q3)("",!0)])),_:1})]),(0,a.Lk)("div",{class:"support-icon",onClick:t[4]||(t[4]=(...e)=>w.goToOptions&&w.goToOptions(...e)),title:"Online Support Guides"},t[17]||(t[17]=[(0,a.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,a.Lk)("circle",{cx:"12",cy:"12",r:"10"}),(0,a.Lk)("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),(0,a.Lk)("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])),(0,a.Lk)("div",{class:"theme-switcher",onClick:t[5]||(t[5]=(...e)=>w.toggleTheme&&w.toggleTheme(...e)),title:"Toggle Theme"},t[18]||(t[18]=[(0,a.Fv)('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',1)])),(0,a.bF)(n.eB,{name:"fade"},{default:(0,a.k6)((()=>[f.showSetStreakModal?((0,a.uX)(),(0,a.CE)("div",{key:0,class:"modal-overlay",onClick:t[10]||(t[10]=(...e)=>w.closeSetStreakModal&&w.closeSetStreakModal(...e))},[(0,a.Lk)("div",{class:"modal",onClick:t[9]||(t[9]=(0,n.D$)((()=>{}),["stop"]))},[t[19]||(t[19]=(0,a.Lk)("h2",null,"Set Streak Day",-1)),(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":t[6]||(t[6]=e=>f.newStreakDay=e),type:"number",min:"1",class:"streak-input"},null,512),[[n.Jo,f.newStreakDay]]),(0,a.Lk)("div",g,[(0,a.Lk)("button",{onClick:t[7]||(t[7]=(...e)=>w.closeSetStreakModal&&w.closeSetStreakModal(...e)),class:"close-button"},"X"),(0,a.Lk)("button",{onClick:t[8]||(t[8]=(...e)=>w.setStreakDay&&w.setStreakDay(...e)),class:"accept-button"},"✓")])])])):(0,a.Q3)("",!0)])),_:1}),(0,a.bF)(n.eB,{name:"fade"},{default:(0,a.k6)((()=>[f.showResetStreakModal?((0,a.uX)(),(0,a.CE)("div",{key:0,class:"modal-overlay",onClick:t[14]||(t[14]=(...e)=>w.closeResetStreakModal&&w.closeResetStreakModal(...e))},[(0,a.Lk)("div",{class:"modal",onClick:t[13]||(t[13]=(0,n.D$)((()=>{}),["stop"]))},[t[20]||(t[20]=(0,a.Lk)("h3",null,"Do you really want to reset your streak?",-1)),(0,a.Lk)("div",p,[(0,a.Lk)("button",{onClick:t[11]||(t[11]=(...e)=>w.closeResetStreakModal&&w.closeResetStreakModal(...e)),class:"close-button"},"No"),(0,a.Lk)("button",{onClick:t[12]||(t[12]=(...e)=>w.confirmResetStreak&&w.confirmResetStreak(...e)),class:"accept-button"},"Yes")])])])):(0,a.Q3)("",!0)])),_:1})],2)}var f=JSON.parse('[{"quote":"Recovery is not for people who need it, it’s for people who want it.","author":"Anonymous","date":"2023-01-01T00:00:00"},{"quote":"Fall seven times, stand up eight.","author":"Japanese Proverb","date":"2023-01-02T00:00:00"},{"quote":"The man who moves a mountain begins by carrying away small stones.","author":"Confucius","date":"2023-01-03T00:00:00"},{"quote":"Courage is resistance to fear, mastery of fear – not absence of fear.","author":"Mark Twain","date":"2023-01-04T00:00:00"},{"quote":"The journey of recovery is about progress, not perfection.","author":"Anonymous","date":"2023-01-05T00:00:00"},{"quote":"It always seems impossible until it\'s done.","author":"Nelson Mandela","date":"2023-01-06T00:00:00"},{"quote":"Strength does not come from physical capacity. It comes from an indomitable will.","author":"Mahatma Gandhi","date":"2023-01-07T00:00:00"},{"quote":"Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.","author":"Kahlil Gibran","date":"2023-01-08T00:00:00"},{"quote":"Do not go where the path may lead, go instead where there is no path and leave a trail.","author":"Ralph Waldo Emerson","date":"2023-01-09T00:00:00"},{"quote":"Every strike brings me closer to the next home run.","author":"Babe Ruth","date":"2023-01-10T00:00:00"},{"quote":"The pain you feel today will be the strength you feel tomorrow.","author":"Anonymous","date":"2023-01-11T00:00:00"},{"quote":"Turn your wounds into wisdom.","author":"Oprah Winfrey","date":"2023-01-12T00:00:00"},{"quote":"What lies behind us and what lies before us are tiny matters compared to what lies within us.","author":"Henry Stanley Haskins","date":"2023-01-13T00:00:00"},{"quote":"Success is the sum of small efforts, repeated day-in and day-out.","author":"Robert Collier","date":"2023-01-14T00:00:00"},{"quote":"The greater the difficulty, the more glory in surmounting it.","author":"Epicurus","date":"2023-01-15T00:00:00"},{"quote":"Our greatest glory is not in never falling, but in rising every time we fall.","author":"Confucius","date":"2023-01-16T00:00:00"},{"quote":"It does not matter how slowly you go as long as you do not stop.","author":"Confucius","date":"2023-01-17T00:00:00"},{"quote":"What you get by achieving your goals is not as important as what you become by achieving your goals.","author":"Zig Ziglar","date":"2023-01-18T00:00:00"},{"quote":"I am not a product of my circumstances. I am a product of my decisions.","author":"Stephen Covey","date":"2023-01-19T00:00:00"},{"quote":"You define your own life. Don\'t let other people write your script.","author":"Oprah Winfrey","date":"2023-01-20T00:00:00"},{"quote":"The best way to predict your future is to create it.","author":"Abraham Lincoln","date":"2023-01-21T00:00:00"},{"quote":"If you don\'t like the road you\'re walking, start paving another one.","author":"Dolly Parton","date":"2023-01-22T00:00:00"},{"quote":"It’s not whether you get knocked down, it’s whether you get up.","author":"Vince Lombardi","date":"2023-01-23T00:00:00"},{"quote":"Success is not the absence of failure; it’s the persistence through failure.","author":"Aisha Tyler","date":"2023-01-24T00:00:00"},{"quote":"The only way to achieve the impossible is to believe it is possible.","author":"Charles Kingsleigh","date":"2023-01-25T00:00:00"}]'),w={name:"PopupComponent",data(){return{quoteText:"",quoteAuthor:"",count:0,showCountControls:!1,showCount:!1,lastOpenedDate:null,motivations:["Keep going, you're great!","You're making excellent progress!","Stay strong, you've got this!","Your dedication is inspiring!","Every day is a new opportunity!","You're doing an amazing job!","Keep up the fantastic work!","Your persistence is admirable!","Believe in yourself, you're capable of greatness!","You're on the right track, keep pushing!"],currentTheme:"dark-theme",themes:["dark-theme","light-theme","ocean-theme","forest-theme"],showSetStreakModal:!1,showResetStreakModal:!1,newStreakDay:1}},created(){this.setDailyQuote(),this.loadCount(),this.checkLastOpened(),this.loadTheme(),setTimeout((()=>{this.showCount=!0}),100)},methods:{setDailyQuote(){const e=(new Date).toISOString().split("T")[0],t=localStorage.getItem("quoteDate"),o=localStorage.getItem("dailyQuoteText"),n=localStorage.getItem("dailyQuoteAuthor");if(t===e&&o&&n)this.quoteText=o,this.quoteAuthor=n;else{const t=f.filter((t=>t.date&&t.date.startsWith(e)));let o;o=t.length>0?t[Math.floor(Math.random()*t.length)]:f[Math.floor(Math.random()*f.length)],this.quoteText=o.quote,this.quoteAuthor=o.author,localStorage.setItem("quoteDate",e),localStorage.setItem("dailyQuoteText",this.quoteText),localStorage.setItem("dailyQuoteAuthor",this.quoteAuthor),this.incrementCount()}},loadCount(){const e=localStorage.getItem("count");this.count=e?parseInt(e):0},incrementCount(){this.count++,localStorage.setItem("count",this.count.toString())},resetCount(){this.count=1,localStorage.setItem("count","1")},toggleCountControls(){this.showCountControls=!this.showCountControls},closeCountControls(){this.showCountControls=!1},checkLastOpened(){const e=(new Date).toISOString().split("T")[0];this.lastOpenedDate=localStorage.getItem("lastOpenedDate"),this.lastOpenedDate!==e&&this.showNotification(),localStorage.setItem("lastOpenedDate",e)},showNotification(){"Notification"in window&&Notification.requestPermission().then((e=>{if("granted"===e){const e=this.count%this.motivations.length,t=this.motivations[e];new Notification("Aurelius - Fight the urge",{body:`Day ${this.count}, \nDon't forget to check today's quote! \n ${t}`,icon:"/icons/icon48.png"})}}))},goToOptions(){chrome&&chrome.runtime&&chrome.runtime.openOptionsPage?chrome.runtime.openOptionsPage():chrome&&chrome.runtime&&chrome.runtime.getURL?window.open(chrome.runtime.getURL("options.html")):(console.log("Development mode: Opening mock options page"),window.open("/options.html"))},toggleTheme(){const e=this.themes.indexOf(this.currentTheme),t=(e+1)%this.themes.length;this.currentTheme=this.themes[t],localStorage.setItem("theme",this.currentTheme)},loadTheme(){const e=localStorage.getItem("theme");e&&this.themes.includes(e)?this.currentTheme=e:this.currentTheme="dark-theme"},openSetStreakModal(){this.showSetStreakModal=!0},closeSetStreakModal(){this.showSetStreakModal=!1},setStreakDay(){this.count=parseInt(this.newStreakDay),localStorage.setItem("count",this.count.toString()),this.closeSetStreakModal()},openResetStreakModal(){this.showResetStreakModal=!0},closeResetStreakModal(){this.showResetStreakModal=!1},confirmResetStreak(){this.resetCount(),this.closeResetStreakModal()}}},S=o(6262);const v=(0,S.A)(w,[["render",y]]);var b=v;(0,n.Ef)(b).mount("#app")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,s){if(!n){var r=1/0;for(h=0;h<e.length;h++){n=e[h][0],a=e[h][1],s=e[h][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||r>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(i=!1,s<r&&(r=s));if(i){e.splice(h--,1);var u=a();void 0!==u&&(t=u)}}return t}s=s||0;for(var h=e.length;h>0&&e[h-1][2]>s;h--)e[h]=e[h-1];e[h]=[n,a,s]}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.j=887}(),function(){var e={887:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,r=n[0],i=n[1],l=n[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(l)var h=l(o)}for(t&&t(n);u<r.length;u++)s=r[u],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(h)},n=self["webpackChunkmy_chrome_extension"]=self["webpackChunkmy_chrome_extension"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(4594)}));n=o.O(n)})();
//# sourceMappingURL=popup.js.map