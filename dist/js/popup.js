(function(){"use strict";var e={3886:function(e,t,o){var n=o(3751),a=o(641),i=o(33);const s={key:0},l={key:1},r={class:"content"},c={class:"count-container"},h={key:0,class:"count-text","aria-live":"polite"},u={class:"quote-container"},d={class:"quote-bubble"},m={class:"quote-text"},g={class:"quote-author"},k={class:"ellipsis-container"},p=["stroke"],y={class:"modal-buttons"},v={class:"modal-buttons"};function f(e,t,o,f,w,S){const C=(0,a.g2)("StartingComponent"),b=(0,a.g2)("SelectionComponent");return w.hasStartedJourney?w.hasSelectedAddiction?((0,a.uX)(),(0,a.CE)("div",{key:2,class:(0,i.C4)(["popup",w.currentTheme]),onClick:t[17]||(t[17]=(...e)=>S.closeCountControls&&S.closeCountControls(...e))},[t[23]||(t[23]=(0,a.Lk)("h1",{class:"banner"},"Aurelius",-1)),(0,a.Lk)("div",r,[(0,a.Lk)("div",c,[(0,a.bF)(n.eB,{name:"slide-fade"},{default:(0,a.k6)((()=>[w.showCount?((0,a.uX)(),(0,a.CE)("p",h," ~ Day "+(0,i.v_)(w.count)+" ~",1)):(0,a.Q3)("",!0)])),_:1}),(0,a.Lk)("span",{class:"addiction-tag",style:(0,i.Tr)({backgroundColor:S.getAddictionColor()})},(0,i.v_)(w.selectedAddiction)+" addiction",5)]),(0,a.Lk)("div",u,[(0,a.Lk)("div",d,[(0,a.Lk)("p",m,(0,i.v_)(w.quoteText),1)]),(0,a.Lk)("p",g,"- "+(0,i.v_)(w.quoteAuthor),1)])]),(0,a.Lk)("div",k,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=(0,n.D$)(((...e)=>S.toggleCountControls&&S.toggleCountControls(...e)),["stop"])),class:"count-button","aria-expanded":"false","aria-controls":"count-controls"},[w.showCountControls?((0,a.uX)(),(0,a.CE)("svg",{key:0,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"light-theme"===w.currentTheme?"#333333":"#ffffff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},t[18]||(t[18]=[(0,a.Lk)("line",{x1:"18",y1:"6",x2:"6",y2:"18"},null,-1),(0,a.Lk)("line",{x1:"6",y1:"6",x2:"18",y2:"18"},null,-1)]),8,p)):((0,a.uX)(),(0,a.CE)("span",{key:1,class:"ellipsis",style:(0,i.Tr)({color:"light-theme"===w.currentTheme?"#333333":"#ffffff",userSelect:"none"})},"...",4))]),(0,a.bF)(n.eB,{name:"fade"},{default:(0,a.k6)((()=>[w.showCountControls?((0,a.uX)(),(0,a.CE)("div",{key:0,class:"count-controls",onClick:t[3]||(t[3]=(0,n.D$)((()=>{}),["stop"])),id:"count-controls"},[(0,a.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>S.openResetStreakModal&&S.openResetStreakModal(...e)),class:"reset-button"},"Restart streak"),(0,a.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>S.openSetStreakModal&&S.openSetStreakModal(...e)),class:"set-streak-button"},"Set streak day")])):(0,a.Q3)("",!0)])),_:1})]),(0,a.Lk)("div",{class:"support-icon",onClick:t[4]||(t[4]=(...e)=>S.goToOptions&&S.goToOptions(...e)),onKeydown:t[5]||(t[5]=(0,n.jR)((0,n.D$)(((...e)=>S.goToOptions&&S.goToOptions(...e)),["prevent"]),["space"])),title:"Online Support Guides","aria-label":"Online Support Guides",tabindex:"0"},t[19]||(t[19]=[(0,a.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,a.Lk)("circle",{cx:"12",cy:"12",r:"10"}),(0,a.Lk)("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),(0,a.Lk)("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)]),32),(0,a.Lk)("div",{class:"theme-switcher",onClick:t[6]||(t[6]=(...e)=>S.toggleTheme&&S.toggleTheme(...e)),onKeydown:t[7]||(t[7]=(0,n.jR)((0,n.D$)(((...e)=>S.toggleTheme&&S.toggleTheme(...e)),["prevent"]),["space"])),title:"Toggle Theme","aria-label":"Toggle Theme",tabindex:"0"},t[20]||(t[20]=[(0,a.Fv)('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',1)]),32),(0,a.bF)(n.eB,{name:"fade"},{default:(0,a.k6)((()=>[w.showSetStreakModal?((0,a.uX)(),(0,a.CE)("div",{key:0,class:"modal-overlay",onClick:t[12]||(t[12]=(...e)=>S.closeSetStreakModal&&S.closeSetStreakModal(...e)),"aria-modal":"true",role:"dialog",tabindex:"0"},[(0,a.Lk)("div",{class:"modal",onClick:t[11]||(t[11]=(0,n.D$)((()=>{}),["stop"]))},[t[21]||(t[21]=(0,a.Lk)("h2",null,"Set Streak Day",-1)),(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":t[8]||(t[8]=e=>w.newStreakDay=e),type:"number",min:"1",class:"streak-input","aria-label":"Set Streak Day"},null,512),[[n.Jo,w.newStreakDay]]),(0,a.Lk)("div",y,[(0,a.Lk)("button",{onClick:t[9]||(t[9]=(...e)=>S.closeSetStreakModal&&S.closeSetStreakModal(...e)),class:"close-button","aria-label":"Close",tabindex:"0"},"X"),(0,a.Lk)("button",{onClick:t[10]||(t[10]=(...e)=>S.setStreakDay&&S.setStreakDay(...e)),class:"accept-button","aria-label":"Accept",tabindex:"0"},"✓")])])])):(0,a.Q3)("",!0)])),_:1}),(0,a.bF)(n.eB,{name:"fade"},{default:(0,a.k6)((()=>[w.showResetStreakModal?((0,a.uX)(),(0,a.CE)("div",{key:0,class:"modal-overlay",onClick:t[16]||(t[16]=(...e)=>S.closeResetStreakModal&&S.closeResetStreakModal(...e)),"aria-modal":"true",role:"dialog",tabindex:"0"},[(0,a.Lk)("div",{class:"modal",onClick:t[15]||(t[15]=(0,n.D$)((()=>{}),["stop"]))},[t[22]||(t[22]=(0,a.Lk)("h3",null,"Do you really want to reset your streak?",-1)),(0,a.Lk)("div",v,[(0,a.Lk)("button",{onClick:t[13]||(t[13]=(...e)=>S.closeResetStreakModal&&S.closeResetStreakModal(...e)),class:"close-button","aria-label":"No",tabindex:"0"},"No"),(0,a.Lk)("button",{onClick:t[14]||(t[14]=(...e)=>S.confirmResetStreak&&S.confirmResetStreak(...e)),class:"accept-button","aria-label":"Yes",tabindex:"0"},"Yes")])])])):(0,a.Q3)("",!0)])),_:1})],2)):((0,a.uX)(),(0,a.CE)("div",l,[(0,a.bF)(b,{onAddictionSelected:S.onAddictionSelected},null,8,["onAddictionSelected"])])):((0,a.uX)(),(0,a.CE)("div",s,[(0,a.bF)(C,{onStartJourney:S.startJourney},null,8,["onStartJourney"])]))}var w=JSON.parse('[{"quote":"Recovery is not for people who need it, it’s for people who want it.","author":"Anonymous","date":"2023-01-01T00:00:00"},{"quote":"Fall seven times, stand up eight.","author":"Japanese Proverb","date":"2023-01-02T00:00:00"},{"quote":"The man who moves a mountain begins by carrying away small stones.","author":"Confucius","date":"2023-01-03T00:00:00"},{"quote":"Courage is resistance to fear, mastery of fear – not absence of fear.","author":"Mark Twain","date":"2023-01-04T00:00:00"},{"quote":"The journey of recovery is about progress, not perfection.","author":"Anonymous","date":"2023-01-05T00:00:00"},{"quote":"It always seems impossible until it\'s done.","author":"Nelson Mandela","date":"2023-01-06T00:00:00"},{"quote":"Strength does not come from physical capacity. It comes from an indomitable will.","author":"Mahatma Gandhi","date":"2023-01-07T00:00:00"},{"quote":"Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.","author":"Kahlil Gibran","date":"2023-01-08T00:00:00"},{"quote":"Do not go where the path may lead, go instead where there is no path and leave a trail.","author":"Ralph Waldo Emerson","date":"2023-01-09T00:00:00"},{"quote":"Every strike brings me closer to the next home run.","author":"Babe Ruth","date":"2023-01-10T00:00:00"},{"quote":"The pain you feel today will be the strength you feel tomorrow.","author":"Anonymous","date":"2023-01-11T00:00:00"},{"quote":"Turn your wounds into wisdom.","author":"Oprah Winfrey","date":"2023-01-12T00:00:00"},{"quote":"What lies behind us and what lies before us are tiny matters compared to what lies within us.","author":"Henry Stanley Haskins","date":"2023-01-13T00:00:00"},{"quote":"Success is the sum of small efforts, repeated day-in and day-out.","author":"Robert Collier","date":"2023-01-14T00:00:00"},{"quote":"The greater the difficulty, the more glory in surmounting it.","author":"Epicurus","date":"2023-01-15T00:00:00"},{"quote":"Our greatest glory is not in never falling, but in rising every time we fall.","author":"Confucius","date":"2023-01-16T00:00:00"},{"quote":"It does not matter how slowly you go as long as you do not stop.","author":"Confucius","date":"2023-01-17T00:00:00"},{"quote":"What you get by achieving your goals is not as important as what you become by achieving your goals.","author":"Zig Ziglar","date":"2023-01-18T00:00:00"},{"quote":"I am not a product of my circumstances. I am a product of my decisions.","author":"Stephen Covey","date":"2023-01-19T00:00:00"},{"quote":"You define your own life. Don\'t let other people write your script.","author":"Oprah Winfrey","date":"2023-01-20T00:00:00"},{"quote":"The best way to predict your future is to create it.","author":"Abraham Lincoln","date":"2023-01-21T00:00:00"},{"quote":"If you don\'t like the road you\'re walking, start paving another one.","author":"Dolly Parton","date":"2023-01-22T00:00:00"},{"quote":"It’s not whether you get knocked down, it’s whether you get up.","author":"Vince Lombardi","date":"2023-01-23T00:00:00"},{"quote":"Success is not the absence of failure; it’s the persistence through failure.","author":"Aisha Tyler","date":"2023-01-24T00:00:00"},{"quote":"The only way to achieve the impossible is to believe it is possible.","author":"Charles Kingsleigh","date":"2023-01-25T00:00:00"}]');const S={class:"content"};function C(e,t,o,n,s,l){return(0,a.uX)(),(0,a.CE)("div",{class:(0,i.C4)(["starting-component",s.currentTheme])},[t[3]||(t[3]=(0,a.Lk)("h1",{class:"banner"},"Aurelius",-1)),(0,a.Lk)("div",S,[t[1]||(t[1]=(0,a.Lk)("h2",{class:"centered-text","data-aos":"fade-left"}," Ready to start your journey and fight the urge? ",-1)),t[2]||(t[2]=(0,a.Lk)("p",{class:"description-text","data-aos":"fade-right"}," Aurelius is a time tracker to help you remember everyday how long you have made it into your recovery ",-1)),(0,a.Lk)("button",{class:"start-button",onClick:t[0]||(t[0]=(...e)=>l.startJourney&&l.startJourney(...e)),"data-aos":"fade-up"}," Start my journey ")])],2)}var b=o(4042),T=o.n(b),x={name:"StartingComponent",data(){return{currentTheme:"dark-theme"}},mounted(){this.loadTheme(),T().init({duration:1e3,once:!0})},methods:{startJourney(){this.$emit("start-journey")},loadTheme(){const e=localStorage.getItem("theme");e&&(this.currentTheme=e)}}},L=o(6262);const I=(0,L.A)(x,[["render",C],["__scopeId","data-v-286e6f1f"]]);var A=I,M=o.p+"img/drug-icon.svg",q=o.p+"img/sex-icon.svg",D=o.p+"img/porn-icon.svg",O=o.p+"img/gambling-icon.svg",E=o.p+"img/alcohol-icon.svg",X=o.p+"img/other-icon.svg";const z={class:"content"},F={key:0,class:"centered-text","data-aos":"fade-left"},R={key:1,class:"circular-menu"},B=["onClick"],j={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"24",height:"24"},_={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"24",height:"24"},H={key:2,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"24",height:"24"},J={key:3,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"24",height:"24"},Q={key:4,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"24",height:"24"},V={key:5,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"24",height:"24"},$={class:"category-name"},P={key:2,class:"selected-item-container"},G={class:"selected-item-content"},N={class:"selected-category-content"},W={class:"selected-icon"},Y={key:0,src:M,alt:"Drug Icon",width:"80",height:"80"},K={key:1,src:q,alt:"Sex Icon",width:"80",height:"80"},U={key:2,src:D,alt:"Porn Icon",width:"80",height:"80"},Z={key:3,src:O,alt:"Gambling Icon",width:"80",height:"80"},ee={key:4,src:E,alt:"Alcohol Icon",width:"80",height:"80"},te={key:5,src:X,alt:"Other Icon",width:"80",height:"80"},oe={class:"selected-category-name"};function ne(e,t,o,n,s,l){return(0,a.uX)(),(0,a.CE)("div",{class:(0,i.C4)(["starting-component",s.currentTheme])},[(0,a.Lk)("h1",{class:(0,i.C4)(["banner",{"banner-expanded":s.selectedItem}])},"Aurelius",2),(0,a.Lk)("div",z,[s.selectedItem?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("h4",F,t[2]||(t[2]=[(0,a.Lk)("span",{style:{"font-weight":"400"}},"Every start is the dawn of success, ",-1),(0,a.Lk)("br",null,null,-1),(0,a.eW)("select what you want to stop: ")]))),s.selectedItem?((0,a.uX)(),(0,a.CE)("div",P,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>l.goBack&&l.goBack(...e)),class:"back-button"},t[9]||(t[9]=[(0,a.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,a.Lk)("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),(0,a.Lk)("polyline",{points:"12 19 5 12 12 5"})],-1)])),(0,a.Lk)("div",G,[(0,a.Lk)("div",{class:"icon-container expanded",style:(0,i.Tr)({backgroundImage:`linear-gradient(135deg, ${s.selectedItem.color}, ${s.selectedItem.colorLight})`})},[(0,a.Lk)("div",N,[t[12]||(t[12]=(0,a.Lk)("h2",{class:"selected-category-name"},"You have chosen",-1)),(0,a.Lk)("div",W,["Drug"===s.selectedItem.name?((0,a.uX)(),(0,a.CE)("img",Y)):"Sex"===s.selectedItem.name?((0,a.uX)(),(0,a.CE)("img",K)):"Porn"===s.selectedItem.name?((0,a.uX)(),(0,a.CE)("img",U)):"Gambling"===s.selectedItem.name?((0,a.uX)(),(0,a.CE)("img",Z)):"Alcohol"===s.selectedItem.name?((0,a.uX)(),(0,a.CE)("img",ee)):"Other"===s.selectedItem.name?((0,a.uX)(),(0,a.CE)("img",te)):(0,a.Q3)("",!0)]),(0,a.Lk)("h2",oe,[(0,a.eW)((0,i.v_)(s.selectedItem.name),1),t[10]||(t[10]=(0,a.Lk)("br",null,null,-1)),t[11]||(t[11]=(0,a.eW)("Addiction"))])])],4)])])):((0,a.uX)(),(0,a.CE)("div",R,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.menuItems,((e,o)=>((0,a.uX)(),(0,a.CE)("div",{class:"menu-item",key:o,onClick:t=>l.selectItem(e)},[(0,a.Lk)("div",{class:(0,i.C4)(["icon-container",{expanded:s.selectedItem===e}]),style:(0,i.Tr)({backgroundImage:`linear-gradient(135deg, ${e.color}, ${e.colorLight})`})},["Drug"===e.name?((0,a.uX)(),(0,a.CE)("svg",j,t[3]||(t[3]=[(0,a.Lk)("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),(0,a.Lk)("path",{d:"M6 3h12v2H6zm11 3H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 9h-2.5v2.5h-3V15H8v-3h2.5V9.5h3V12H16v3z"},null,-1)]))):"Sex"===e.name?((0,a.uX)(),(0,a.CE)("svg",_,t[4]||(t[4]=[(0,a.Lk)("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),(0,a.Lk)("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"},null,-1)]))):"Porn"===e.name?((0,a.uX)(),(0,a.CE)("svg",H,t[5]||(t[5]=[(0,a.Lk)("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),(0,a.Lk)("path",{d:"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"},null,-1)]))):"Gambling"===e.name?((0,a.uX)(),(0,a.CE)("svg",J,t[6]||(t[6]=[(0,a.Lk)("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),(0,a.Lk)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z"},null,-1)]))):"Alcohol"===e.name?((0,a.uX)(),(0,a.CE)("svg",Q,t[7]||(t[7]=[(0,a.Lk)("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),(0,a.Lk)("path",{d:"M3 14c0 1.3.84 2.4 2 2.82V20H3v2h6v-2H7v-3.18C8.16 16.4 9 15.3 9 14V6H3v8zm2-6h2v3H5V8zm0 5h2v1H5v-1zm15.64-4.46l-.96-.32c-.41-.14-.68-.52-.68-.95V3c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4.28c0 .43-.27.81-.68.95l-.96.32c-.81.28-1.36 1.04-1.36 1.9V20c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-9.56c0-.86-.55-1.62-1.36-1.9zM16 4h1v1h-1V4zm4 16h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4h-7v-2h7v2z"},null,-1)]))):"Other"===e.name?((0,a.uX)(),(0,a.CE)("svg",V,t[8]||(t[8]=[(0,a.Lk)("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),(0,a.Lk)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"},null,-1)]))):(0,a.Q3)("",!0)],6),(0,a.Lk)("span",$,(0,i.v_)(e.name),1)],8,B)))),128))])),s.selectedItem?((0,a.uX)(),(0,a.CE)("button",{key:3,onClick:t[1]||(t[1]=(...e)=>l.confirmSelection&&l.confirmSelection(...e)),class:"confirm-button"}," Confirm ")):(0,a.Q3)("",!0)])],2)}var ae={name:"SelectionComponent",data(){return{currentTheme:"dark-theme",selectedItem:null,menuItems:[{name:"Drug",color:"#4B0082",colorLight:"#8A2BE2"},{name:"Sex",color:"#FF69B4",colorLight:"#FFA6D2"},{name:"Porn",color:"#FF1493",colorLight:"#FF69B4"},{name:"Gambling",color:"#32CD32",colorLight:"#90EE90"},{name:"Alcohol",color:"#FFA500",colorLight:"#FFD700"},{name:"Other",color:"#A9A9A9",colorLight:"#C7C7C7"}]}},mounted(){this.loadTheme(),T().init({duration:1e3,once:!0})},methods:{selectItem(e){this.selectedItem=e},goBack(){this.selectedItem=null},confirmSelection(){this.selectedItem&&(localStorage.setItem("selectedAddiction",this.selectedItem.name),localStorage.setItem("addictionColor",this.selectedItem.color),localStorage.setItem("addictionColorLight",this.selectedItem.colorLight),this.$emit("addiction-selected",this.selectedItem.name))},loadTheme(){const e=localStorage.getItem("theme");e&&(this.currentTheme=e)}}};const ie=(0,L.A)(ae,[["render",ne],["__scopeId","data-v-4ba1d705"]]);var se=ie,le={name:"PopupComponent",components:{StartingComponent:A,SelectionComponent:se},data(){return{hasStartedJourney:!1,hasSelectedAddiction:!1,selectedAddiction:"",quoteText:"",quoteAuthor:"",count:0,showCountControls:!1,showCount:!1,lastOpenedDate:null,motivations:["Keep going, you're great!","You're making excellent progress!","Stay strong, you've got this!","Your dedication is inspiring!","Every day is a new opportunity!","You're doing an amazing job!","Keep up the fantastic work!","Your persistence is admirable!","Believe in yourself, you're capable of greatness!","You're on the right track, keep pushing!"],currentTheme:"dark-theme",themes:["dark-theme","light-theme","ocean-theme","forest-theme"],showSetStreakModal:!1,showResetStreakModal:!1,newStreakDay:1}},created(){this.checkJourneyStarted(),this.hasStartedJourney&&this.hasSelectedAddiction&&(this.setDailyQuote(),this.loadCount(),this.checkLastOpened(),this.loadTheme(),this.loadSelectedAddiction(),setTimeout((()=>{this.showCount=!0}),100))},methods:{checkJourneyStarted(){const e=localStorage.getItem("journeyStarted");this.hasStartedJourney="true"===e;const t=localStorage.getItem("addictionSelected");this.hasSelectedAddiction="true"===t},startJourney(){this.hasStartedJourney=!0,localStorage.setItem("journeyStarted","true")},onAddictionSelected(e){this.hasSelectedAddiction=!0,this.selectedAddiction=e,localStorage.setItem("addictionSelected","true"),localStorage.setItem("selectedAddiction",e),this.setDailyQuote(),this.loadCount(),this.checkLastOpened(),this.loadTheme(),setTimeout((()=>{this.showCount=!0}),100)},loadSelectedAddiction(){this.selectedAddiction=localStorage.getItem("selectedAddiction")||""},getAddictionColor(){const e={Drug:"#4B0082",Sex:"#FF69B4",Porn:"#FF1493",Gambling:"#32CD32",Alcohol:"#FFA500",Other:"#A9A9A9"};return e[this.selectedAddiction]||"#A9A9A9"},setDailyQuote(){const e=(new Date).toISOString().split("T")[0],t=localStorage.getItem("quoteDate"),o=localStorage.getItem("dailyQuoteText"),n=localStorage.getItem("dailyQuoteAuthor");if(t===e&&o&&n)this.quoteText=o,this.quoteAuthor=n;else{const t=w.filter((t=>t.date&&t.date.startsWith(e)));let o;o=t.length>0?t[Math.floor(Math.random()*t.length)]:w[Math.floor(Math.random()*w.length)],this.quoteText=o.quote,this.quoteAuthor=o.author,localStorage.setItem("quoteDate",e),localStorage.setItem("dailyQuoteText",this.quoteText),localStorage.setItem("dailyQuoteAuthor",this.quoteAuthor),this.hasSelectedAddiction&&this.incrementCount()}},loadCount(){if(this.hasSelectedAddiction){const e=localStorage.getItem("count");this.count=e?parseInt(e):0}},incrementCount(){this.hasSelectedAddiction&&(this.count++,localStorage.setItem("count",this.count.toString()))},resetCount(){this.hasSelectedAddiction&&(this.count=1,localStorage.setItem("count","1"))},toggleCountControls(){this.showCountControls=!this.showCountControls},closeCountControls(){this.showCountControls=!1},checkLastOpened(){if(this.hasSelectedAddiction){const e=(new Date).toISOString().split("T")[0];this.lastOpenedDate=localStorage.getItem("lastOpenedDate"),this.lastOpenedDate!==e&&this.showNotification(),localStorage.setItem("lastOpenedDate",e)}},showNotification(){this.hasSelectedAddiction&&"Notification"in window&&Notification.requestPermission().then((e=>{if("granted"===e){const e=this.count%this.motivations.length,t=this.motivations[e];new Notification("Aurelius - Fight the urge",{body:`Day ${this.count}, \nDon't forget to check today's quote! \n ${t}`,icon:"/icons/icon48.png"})}}))},goToOptions(){chrome&&chrome.runtime&&chrome.runtime.openOptionsPage?chrome.runtime.openOptionsPage():chrome&&chrome.runtime&&chrome.runtime.getURL?window.open(chrome.runtime.getURL("options.html")):(console.log("Development mode: Opening mock options page"),window.open("/options.html"))},toggleTheme(){const e=this.themes.indexOf(this.currentTheme),t=(e+1)%this.themes.length;this.currentTheme=this.themes[t],localStorage.setItem("theme",this.currentTheme)},loadTheme(){const e=localStorage.getItem("theme");e&&this.themes.includes(e)?this.currentTheme=e:this.currentTheme="dark-theme"},openSetStreakModal(){this.showSetStreakModal=!0},closeSetStreakModal(){this.showSetStreakModal=!1},setStreakDay(){this.hasSelectedAddiction&&(this.count=parseInt(this.newStreakDay),localStorage.setItem("count",this.count.toString())),this.closeSetStreakModal()},openResetStreakModal(){this.showResetStreakModal=!0},closeResetStreakModal(){this.showResetStreakModal=!1},confirmResetStreak(){this.resetCount(),this.closeResetStreakModal()}}};const re=(0,L.A)(le,[["render",f]]);var ce=re;(0,n.Ef)(ce).mount("#app")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,i){if(!n){var s=1/0;for(h=0;h<e.length;h++){n=e[h][0],a=e[h][1],i=e[h][2];for(var l=!0,r=0;r<n.length;r++)(!1&i||s>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[r])}))?n.splice(r--,1):(l=!1,i<s&&(s=i));if(l){e.splice(h--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var h=e.length;h>0&&e[h-1][2]>i;h--)e[h]=e[h-1];e[h]=[n,a,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.j=887}(),function(){o.p="/"}(),function(){var e={887:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,i,s=n[0],l=n[1],r=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(r)var h=r(o)}for(t&&t(n);c<s.length;c++)i=s[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(h)},n=self["webpackChunkmy_chrome_extension"]=self["webpackChunkmy_chrome_extension"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(3886)}));n=o.O(n)})();
//# sourceMappingURL=popup.js.map