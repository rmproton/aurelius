(function(){"use strict";var e={3426:function(e,t,o){var n=o(3751),i=o(641),a=o(33);const s={key:0},r={key:1},l={class:"content"},c={class:"count-container",ref:"countContainer"},d=["data-addiction","onDragstart","onDragenter","onDrop"],h={style:{display:"flex","flex-direction":"row","justify-content":"flex-start","align-items":"center"}},u=["src","alt"],g={style:{"font-family":"'Poppins', sans-serif"}},m={style:{display:"flex","flex-direction":"row","justify-content":"flex-end","align-items":"center",width:"100%"}},p={key:0,class:"count-text","aria-live":"polite",style:{display:"flex","align-items":"center","font-family":"'Poppins', sans-serif"}},v={xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{"margin-right":"8px"}},y={style:{"font-size":"0.9rem"}},k=["onClick","aria-expanded","aria-controls"],w=["onClick"],f=["onClick"],C={class:"modal"},S={class:"modal-header"},x=["data-addiction"],A={style:{display:"flex","flex-direction":"row","justify-content":"flex-start","align-items":"center",gap:"0.2rem"}},L=["src","alt"],T={style:{"font-family":"'Poppins', sans-serif"}},b={style:{display:"flex","flex-direction":"row","justify-content":"flex-end","align-items":"center",width:"100%","margin-left":"2rem"}},I={class:"count-text","aria-live":"polite",style:{display:"flex","align-items":"center"}},O={xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{"margin-right":"8px"}},E={class:"modal-buttons"},_=["onClick"],D=["onClick"],q={key:0,class:"switch-icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},M={key:0,class:"add-button-container"},P={class:"quote-container"},F={class:"quote-bubble"},j={class:"quote-text"},z={class:"quote-author"};function B(e,t,o,B,X,J){const $=(0,i.g2)("StartingComponent"),H=(0,i.g2)("SelectionComponent");return X.hasStartedJourney?X.hasSelectedAddiction?((0,i.uX)(),(0,i.CE)("div",{key:2,class:(0,a.C4)(["popup",X.currentTheme])},[t[14]||(t[14]=(0,i.Lk)("h1",{class:"banner"},"Aurelius",-1)),(0,i.Lk)("div",l,[(0,i.Lk)("div",c,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(X.selectedAddictions.sort(((e,t)=>e.position-t.position)),(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.addiction,class:(0,a.C4)(["addiction-tag",{dragging:e===X.draggedAddiction}]),style:(0,a.Tr)({backgroundColor:e.addictionColor,transform:e===X.draggedAddiction?"scale(1.05)":"none"}),"data-addiction":e.addiction,draggable:"true",onDragstart:t=>J.dragStart(t,e),onDragover:t[0]||(t[0]=(0,n.D$)((()=>{}),["prevent"])),onDragenter:(0,n.D$)((t=>J.dragEnter(t,e)),["prevent"]),onDragleave:t[1]||(t[1]=e=>J.dragLeave(e)),onDrop:t=>J.drop(t,e)},[(0,i.Lk)("div",h,[(0,i.Lk)("img",{src:J.getAddictionIcon(e.addiction),alt:`${e.addiction} icon`,class:"addiction-icon"},null,8,u),(0,i.Lk)("span",g,(0,a.v_)(e.addiction),1)]),(0,i.Lk)("div",m,[X.showCount?((0,i.uX)(),(0,i.CE)("div",p,[((0,i.uX)(),(0,i.CE)("svg",v,t[7]||(t[7]=[(0,i.Lk)("circle",{cx:"12",cy:"12",r:"10"},null,-1),(0,i.Lk)("polyline",{points:"12 6 12 12 16 14"},null,-1)]))),(0,i.Lk)("span",y,(0,a.v_)(Math.floor((new Date-new Date(e.dateCreated))/864e5))+" "+(0,a.v_)(1===Math.floor((new Date-new Date(e.dateCreated))/864e5)?"day":"days"),1)])):(0,i.Q3)("",!0),(0,i.Lk)("button",{onClick:(0,n.D$)((t=>J.toggleCountControls(e.addiction)),["stop"]),class:"count-button","aria-expanded":X.showCountControls[e.addiction],"aria-controls":`count-controls-${e.addiction}`},[X.showCountControls[e.addiction]?((0,i.uX)(),(0,i.CE)("div",{key:0,onClick:(0,n.D$)((t=>J.closeCountControls(e.addiction)),["stop"])},t[8]||(t[8]=[(0,i.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#FFFFFF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"close-icon"},[(0,i.Lk)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,i.Lk)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)]),8,w)):((0,i.uX)(),(0,i.CE)("span",{key:1,class:"ellipsis",style:(0,a.Tr)({color:(X.currentTheme,"#ffffff"),userSelect:"none"})},"...",4))],8,k)]),(0,i.bF)(n.eB,{name:"fade"},{default:(0,i.k6)((()=>[X.showCountControls[e.addiction]?((0,i.uX)(),(0,i.CE)("div",{key:0,class:"modal-overlay",onClick:(0,n.D$)((t=>J.closeCountControls(e.addiction)),["self"]),"aria-modal":"true",role:"dialog",tabindex:"0",style:{"z-index":"999999"}},[(0,i.Lk)("div",C,[(0,i.Lk)("div",S,[(0,i.Lk)("h3",{style:(0,a.Tr)({color:"light-theme"===X.currentTheme?"#333333":"#ffffff"})},"What do you want to do ?",4)]),(0,i.Lk)("div",{class:"addiction-tag",style:(0,a.Tr)({backgroundColor:e.addictionColor}),"data-addiction":e.addiction},[(0,i.Lk)("div",A,[(0,i.Lk)("img",{src:J.getAddictionIcon(e.addiction),alt:`${e.addiction} icon`,class:"addiction-icon"},null,8,L),(0,i.Lk)("span",T,(0,a.v_)(e.addiction),1)]),(0,i.Lk)("div",b,[(0,i.Lk)("div",I,[((0,i.uX)(),(0,i.CE)("svg",O,t[9]||(t[9]=[(0,i.Lk)("circle",{cx:"12",cy:"12",r:"10"},null,-1),(0,i.Lk)("polyline",{points:"12 6 12 12 16 14"},null,-1)]))),(0,i.eW)(" "+(0,a.v_)(e.days)+" "+(0,a.v_)(1===e.days?"day":"days"),1)])])],12,x),(0,i.Lk)("div",E,[(0,i.Lk)("button",{onClick:t=>J.openResetStreakModal(e.addiction),class:"reset-button"},"Restart streak",8,_),(0,i.Lk)("button",{onClick:t=>J.openSetStreakModal(e.addiction),class:"set-streak-button"},"Set streak day",8,D)])])],8,f)):(0,i.Q3)("",!0)])),_:2},1024),X.draggedAddiction&&X.draggedAddiction!==e?((0,i.uX)(),(0,i.CE)("svg",q,t[10]||(t[10]=[(0,i.Lk)("polyline",{points:"17 1 21 5 17 9"},null,-1),(0,i.Lk)("path",{d:"M3 11V9a4 4 0 0 1 4-4h14"},null,-1),(0,i.Lk)("polyline",{points:"7 23 3 19 7 15"},null,-1),(0,i.Lk)("path",{d:"M21 13v2a4 4 0 0 1-4 4H3"},null,-1)]))):(0,i.Q3)("",!0)],46,d)))),128)),X.selectedAddictions.length<3?((0,i.uX)(),(0,i.CE)("div",M,[(0,i.Lk)("button",{class:"add-button","aria-label":"Add",title:"Add",onClick:t[2]||(t[2]=(...e)=>J.goToSelectionComponent&&J.goToSelectionComponent(...e))},t[11]||(t[11]=[(0,i.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,i.Lk)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,i.Lk)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)]))])):(0,i.Q3)("",!0)],512),(0,i.Lk)("div",P,[(0,i.Lk)("div",F,[(0,i.Lk)("p",j,(0,a.v_)(X.quoteText),1)]),(0,i.Lk)("p",z,"- "+(0,a.v_)(X.quoteAuthor),1)])]),(0,i.Lk)("div",{class:"support-icon",onClick:t[3]||(t[3]=(...e)=>J.goToOptions&&J.goToOptions(...e)),onKeydown:t[4]||(t[4]=(0,n.jR)((0,n.D$)(((...e)=>J.goToOptions&&J.goToOptions(...e)),["prevent"]),["space"])),title:"Online Support Guides","aria-label":"Online Support Guides",tabindex:"0"},t[12]||(t[12]=[(0,i.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,i.Lk)("circle",{cx:"12",cy:"12",r:"10"}),(0,i.Lk)("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),(0,i.Lk)("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)]),32),(0,i.Lk)("div",{class:"theme-switcher",onClick:t[5]||(t[5]=(...e)=>J.toggleTheme&&J.toggleTheme(...e)),onKeydown:t[6]||(t[6]=(0,n.jR)((0,n.D$)(((...e)=>J.toggleTheme&&J.toggleTheme(...e)),["prevent"]),["space"])),title:"Toggle Theme","aria-label":"Toggle Theme",tabindex:"0"},t[13]||(t[13]=[(0,i.Fv)('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-0a0eeaa8><circle cx="12" cy="12" r="5" data-v-0a0eeaa8></circle><line x1="12" y1="1" x2="12" y2="3" data-v-0a0eeaa8></line><line x1="12" y1="21" x2="12" y2="23" data-v-0a0eeaa8></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-0a0eeaa8></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-0a0eeaa8></line><line x1="1" y1="12" x2="3" y2="12" data-v-0a0eeaa8></line><line x1="21" y1="12" x2="23" y2="12" data-v-0a0eeaa8></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-0a0eeaa8></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-0a0eeaa8></line></svg>',1)]),32)],2)):((0,i.uX)(),(0,i.CE)("div",r,[(0,i.bF)(H,{onAddictionSelected:J.onAddictionSelected},null,8,["onAddictionSelected"])])):((0,i.uX)(),(0,i.CE)("div",s,[(0,i.bF)($,{onStartJourney:J.startJourney},null,8,["onStartJourney"])]))}var X=JSON.parse('[{"quote":"Recovery is not for people who need it, it’s for people who want it.","author":"Anonymous","date":"2023-01-01T00:00:00"},{"quote":"Fall seven times, stand up eight.","author":"Japanese Proverb","date":"2023-01-02T00:00:00"},{"quote":"The man who moves a mountain begins by carrying away small stones.","author":"Confucius","date":"2023-01-03T00:00:00"},{"quote":"Courage is resistance to fear, mastery of fear – not absence of fear.","author":"Mark Twain","date":"2023-01-04T00:00:00"},{"quote":"The journey of recovery is about progress, not perfection.","author":"Anonymous","date":"2023-01-05T00:00:00"},{"quote":"It always seems impossible until it\'s done.","author":"Nelson Mandela","date":"2023-01-06T00:00:00"},{"quote":"Strength does not come from physical capacity. It comes from an indomitable will.","author":"Mahatma Gandhi","date":"2023-01-07T00:00:00"},{"quote":"Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.","author":"Kahlil Gibran","date":"2023-01-08T00:00:00"},{"quote":"Do not go where the path may lead, go instead where there is no path and leave a trail.","author":"Ralph Waldo Emerson","date":"2023-01-09T00:00:00"},{"quote":"Every strike brings me closer to the next home run.","author":"Babe Ruth","date":"2023-01-10T00:00:00"},{"quote":"The pain you feel today will be the strength you feel tomorrow.","author":"Anonymous","date":"2023-01-11T00:00:00"},{"quote":"Turn your wounds into wisdom.","author":"Oprah Winfrey","date":"2023-01-12T00:00:00"},{"quote":"What lies behind us and what lies before us are tiny matters compared to what lies within us.","author":"Henry Stanley Haskins","date":"2023-01-13T00:00:00"},{"quote":"Success is the sum of small efforts, repeated day-in and day-out.","author":"Robert Collier","date":"2023-01-14T00:00:00"},{"quote":"The greater the difficulty, the more glory in surmounting it.","author":"Epicurus","date":"2023-01-15T00:00:00"},{"quote":"Our greatest glory is not in never falling, but in rising every time we fall.","author":"Confucius","date":"2023-01-16T00:00:00"},{"quote":"It does not matter how slowly you go as long as you do not stop.","author":"Confucius","date":"2023-01-17T00:00:00"},{"quote":"What you get by achieving your goals is not as important as what you become by achieving your goals.","author":"Zig Ziglar","date":"2023-01-18T00:00:00"},{"quote":"I am not a product of my circumstances. I am a product of my decisions.","author":"Stephen Covey","date":"2023-01-19T00:00:00"},{"quote":"You define your own life. Don\'t let other people write your script.","author":"Oprah Winfrey","date":"2023-01-20T00:00:00"},{"quote":"The best way to predict your future is to create it.","author":"Abraham Lincoln","date":"2023-01-21T00:00:00"},{"quote":"If you don\'t like the road you\'re walking, start paving another one.","author":"Dolly Parton","date":"2023-01-22T00:00:00"},{"quote":"It’s not whether you get knocked down, it’s whether you get up.","author":"Vince Lombardi","date":"2023-01-23T00:00:00"},{"quote":"Success is not the absence of failure; it’s the persistence through failure.","author":"Aisha Tyler","date":"2023-01-24T00:00:00"},{"quote":"The only way to achieve the impossible is to believe it is possible.","author":"Charles Kingsleigh","date":"2023-01-25T00:00:00"}]');const J={class:"content"};function $(e,t,o,n,s,r){return(0,i.uX)(),(0,i.CE)("div",{class:(0,a.C4)(["starting-component",s.currentTheme])},[t[2]||(t[2]=(0,i.Lk)("h1",{class:"banner"},"Aurelius",-1)),(0,i.Lk)("div",J,[t[1]||(t[1]=(0,i.Fv)('<h2 class="centered-text" data-aos="fade-left" data-v-773dc844> Ready to start your journey and fight the urge? </h2><div class="timer-icon" data-aos="fade-left" data-v-773dc844><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-773dc844><circle cx="12" cy="12" r="10" data-v-773dc844></circle><polyline points="12 6 12 12 16 14" data-v-773dc844></polyline></svg></div><p class="description-text" data-aos="fade-right" data-v-773dc844> Aurelius is a time tracker to help you remember everyday how long you have made it into your recovery </p>',3)),(0,i.Lk)("button",{class:"start-button",onClick:t[0]||(t[0]=(...e)=>r.startJourney&&r.startJourney(...e)),"data-aos":"fade-up"}," Start my journey ")])],2)}var H=o(4042),R=o.n(H),V={name:"StartingComponent",data(){return{currentTheme:"dark-theme"}},mounted(){this.loadTheme(),R().init({duration:1e3,once:!0})},methods:{startJourney(){this.$emit("start-journey")},loadTheme(){const e=localStorage.getItem("theme");e&&(this.currentTheme=e)}}},Q=o(6262);const N=(0,Q.A)(V,[["render",$],["__scopeId","data-v-773dc844"]]);var U=N;const K={class:"content"},W={key:0,class:"centered-text","data-aos":"fade-left"},G={key:1,class:"circular-menu"},Y=["onClick"],Z={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"24",height:"24"},ee={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"24",height:"24"},te={key:2,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"24",height:"24"},oe={key:3,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"24",height:"24"},ne={key:4,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"24",height:"24"},ie={key:5,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"24",height:"24"},ae={class:"category-name"},se={key:2,class:"selected-items-container"},re={class:"selected-items-content"},le={class:"selected-category-content"},ce={class:"selected-category-name"},de={class:"selected-icon"},he=["src","alt"];function ue(e,t,o,n,s,r){return(0,i.uX)(),(0,i.CE)("div",{class:(0,a.C4)(["starting-component",s.currentTheme])},[(0,i.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>r.goBackToPopup&&r.goBackToPopup(...e)),class:(0,a.C4)(["back-arrow",s.currentTheme])},t[3]||(t[3]=[(0,i.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,i.Lk)("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),(0,i.Lk)("polyline",{points:"12 19 5 12 12 5"})],-1)]),2),(0,i.Lk)("h1",{class:(0,a.C4)(["banner",{"banner-expanded":s.selectedItems.length>0}])},"Aurelius",2),(0,i.Lk)("div",K,[0===s.selectedItems.length?((0,i.uX)(),(0,i.CE)("h4",W,t[4]||(t[4]=[(0,i.Lk)("span",{style:{"font-weight":"400"}},"Every start is the dawn of success, ",-1),(0,i.Lk)("br",null,null,-1),(0,i.eW)("select up to three addictions you want to stop: ")]))):(0,i.Q3)("",!0),0===s.selectedItems.length?((0,i.uX)(),(0,i.CE)("div",G,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.availableMenuItems,((e,o)=>((0,i.uX)(),(0,i.CE)("div",{key:o,class:"menu-item",onClick:t=>r.selectItem(e)},[(0,i.Lk)("div",{class:(0,a.C4)(["icon-container",{expanded:s.selectedItems.includes(e)}]),style:(0,a.Tr)({backgroundImage:`linear-gradient(135deg, ${e.color}, ${e.colorLight})`})},["Drugs"===e.name?((0,i.uX)(),(0,i.CE)("svg",Z,t[5]||(t[5]=[(0,i.Lk)("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),(0,i.Lk)("path",{d:"M6 3h12v2H6zm11 3H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 9h-2.5v2.5h-3V15H8v-3h2.5V9.5h3V12H16v3z"},null,-1)]))):"Sex"===e.name?((0,i.uX)(),(0,i.CE)("svg",ee,t[6]||(t[6]=[(0,i.Lk)("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),(0,i.Lk)("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"},null,-1)]))):"Porn"===e.name?((0,i.uX)(),(0,i.CE)("svg",te,t[7]||(t[7]=[(0,i.Lk)("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),(0,i.Lk)("path",{d:"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"},null,-1)]))):"Gambling"===e.name?((0,i.uX)(),(0,i.CE)("svg",oe,t[8]||(t[8]=[(0,i.Lk)("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),(0,i.Lk)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z"},null,-1)]))):"Alcohol"===e.name?((0,i.uX)(),(0,i.CE)("svg",ne,t[9]||(t[9]=[(0,i.Lk)("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),(0,i.Lk)("path",{d:"M3 14c0 1.3.84 2.4 2 2.82V20H3v2h6v-2H7v-3.18C8.16 16.4 9 15.3 9 14V6H3v8zm2-6h2v3H5V8zm0 5h2v1H5v-1zm15.64-4.46l-.96-.32c-.41-.14-.68-.52-.68-.95V3c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4.28c0 .43-.27.81-.68.95l-.96.32c-.81.28-1.36 1.04-1.36 1.9V20c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-9.56c0-.86-.55-1.62-1.36-1.9zM16 4h1v1h-1V4zm4 16h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4h-7v-2h7v2z"},null,-1)]))):"Other"===e.name?((0,i.uX)(),(0,i.CE)("svg",ie,t[10]||(t[10]=[(0,i.Lk)("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),(0,i.Lk)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"},null,-1)]))):(0,i.Q3)("",!0)],6),(0,i.Lk)("span",ae,(0,a.v_)(e.name),1)],8,Y)))),128))])):((0,i.uX)(),(0,i.CE)("div",se,[(0,i.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>r.goBack&&r.goBack(...e)),class:"back-button"},t[11]||(t[11]=[(0,i.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,i.Lk)("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),(0,i.Lk)("polyline",{points:"12 19 5 12 12 5"})],-1)])),(0,i.Lk)("div",re,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.selectedItems,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:t,class:"selected-item"},[(0,i.Lk)("div",{class:"icon-container expanded",style:(0,a.Tr)({backgroundImage:`linear-gradient(135deg, ${e.color}, ${e.colorLight})`})},[(0,i.Lk)("div",le,[(0,i.Lk)("h2",ce,(0,a.v_)(e.name)+" Addiction",1),(0,i.Lk)("div",de,[(0,i.Lk)("img",{src:r.getIconSrc(e.name),alt:`${e.name} Icon`,width:"60",height:"60"},null,8,he)])])],4)])))),128))])])),s.selectedItems.length>0?((0,i.uX)(),(0,i.CE)("button",{key:3,onClick:t[2]||(t[2]=(...e)=>r.confirmSelection&&r.confirmSelection(...e)),class:"confirm-button"}," Confirm ")):(0,i.Q3)("",!0)])],2)}o(4114);var ge={name:"SelectionComponent",data(){return{currentTheme:"dark-theme",selectedItems:[],menuItems:[{name:"Drugs",color:"#4B0082",colorLight:"#8A2BE2"},{name:"Sex",color:"#FF69B4",colorLight:"#FFA6D2"},{name:"Porn",color:"#FF1493",colorLight:"#FF69B4"},{name:"Gambling",color:"#32CD32",colorLight:"#90EE90"},{name:"Alcohol",color:"#FFA500",colorLight:"#FFD700"},{name:"Other",color:"#A9A9A9",colorLight:"#C7C7C7"}]}},computed:{availableMenuItems(){const e=JSON.parse(localStorage.getItem("selectedAddictions")||"[]");return this.menuItems.filter((t=>!e.some((e=>e.addiction===t.name))))}},mounted(){this.loadTheme(),R().init({duration:1e3,once:!0})},methods:{selectItem(e){this.selectedItems.includes(e)?this.selectedItems=this.selectedItems.filter((t=>t!==e)):this.selectedItems.length<3?this.selectedItems.push(e):console.log("You can't add more than 3 items.")},goBack(){this.selectedItems=[]},goBackToPopup(){this.$emit("addiction-selected")},confirmSelection(){if(this.selectedItems.length>0){const e=JSON.parse(localStorage.getItem("selectedAddictions")||"[]"),t=this.selectedItems.map(((e,t)=>({addiction:e.name,days:1,addictionColor:e.color,position:t,dateCreated:(new Date).toISOString()}))),o=e.length+t.length;if(o>3){const o=Math.max(0,3-e.length);t.splice(o)}const n=[...e,...t].slice(0,3);localStorage.setItem("selectedAddictions",JSON.stringify(n)),localStorage.setItem("hasSelectedAddiction","true"),this.$emit("addiction-selected")}},loadTheme(){const e=localStorage.getItem("theme");e&&(this.currentTheme=e)},getIconSrc(e){return`../assets/icons/${e.toLowerCase()}-icon.svg`}}};const me=(0,Q.A)(ge,[["render",ue],["__scopeId","data-v-36c9f5a6"]]);var pe=me,ve=o.p+"img/drugs-icon.svg",ye=o.p+"img/sex-icon.svg",ke=o.p+"img/porn-icon.svg",we=o.p+"img/gambling-icon.svg",fe=o.p+"img/alcohol-icon.svg",Ce=o.p+"img/other-icon.svg",Se={name:"PopupComponent",components:{StartingComponent:U,SelectionComponent:pe},data(){return{hasStartedJourney:!1,hasSelectedAddiction:!1,selectedAddictions:[],quoteText:"",version:"",quoteAuthor:"",count:0,showCountControls:[],showCount:!1,lastOpenedDate:null,motivations:["Keep going, you're great!","You're making excellent progress!","Stay strong, you've got this!","Your dedication is inspiring!","Every day is a new opportunity!","You're doing an amazing job!","Keep up the fantastic work!","Your persistence is admirable!","Believe in yourself, you're capable of greatness!","You're on the right track, keep pushing!"],currentTheme:"dark-theme",themes:["dark-theme","light-theme","ocean-theme","forest-theme"],showSetStreakModal:!1,showResetStreakModal:!1,newStreakDay:1,draggedAddiction:null}},mounted(){this.fetchVersion()},created(){this.checkJourneyStarted(),this.hasSelectedAddictionOnce(),this.hasStartedJourney&&this.hasSelectedAddiction&&(this.loadCount(),this.setDailyQuote(),this.checkLastOpened(),this.loadTheme(),this.loadSelectedAddiction(),setTimeout((()=>{this.showCount=!0}),100))},methods:{async fetchVersion(){try{const e=await fetch("/manifest.json"),t=await e.json();this.version=t.version}catch(e){console.error("Failed to fetch version:",e)}},checkJourneyStarted(){const e=localStorage.getItem("journeyStarted");this.hasStartedJourney="true"===e},hasSelectedAddictionOnce(){const e=localStorage.getItem("hasSelectedAddiction");this.hasSelectedAddiction="true"===e},startJourney(){this.hasStartedJourney=!0,localStorage.setItem("journeyStarted","true")},onAddictionSelected(){this.hasSelectedAddiction=localStorage.getItem("hasSelectedAddiction"),this.loadSelectedAddiction(),this.setDailyQuote(),this.loadCount(),this.checkLastOpened(),this.loadTheme(),setTimeout((()=>{this.showCount=!0}),100)},loadSelectedAddiction(){const e=localStorage.getItem("selectedAddictions");this.selectedAddictions=JSON.parse(e)||[],this.selectedAddictions.forEach(((e,t)=>{e.position=t}))},getAddictionColor(){const e={Drugs:"#4B0082",Sex:"#FF69B4",Porn:"#FF1493",Gambling:"#32CD32",Alcohol:"#FFA500",Other:"#A9A9A9"};return e[this.selectedAddiction]||"#A9A9A9"},getAddictionIcon(e){const t={Drugs:ve,Sex:ye,Porn:ke,Gambling:we,Alcohol:fe,Other:Ce};return t[e]},dragStart(e,t){this.draggedAddiction=t,e.dataTransfer.setData("text/plain",t.addiction)},dragEnter(e,t){if(t!==this.draggedAddiction){const o=this.selectedAddictions.findIndex((e=>e===this.draggedAddiction)),n=this.selectedAddictions.findIndex((e=>e===t));o<n?e.target.closest(".addiction-tag").classList.add("drag-over-bottom"):e.target.closest(".addiction-tag").classList.add("drag-over-top")}},dragLeave(e){e.target.closest(".addiction-tag").classList.remove("drag-over-top","drag-over-bottom")},drop(e,t){if(e.target.closest(".addiction-tag").classList.remove("drag-over-top","drag-over-bottom"),this.draggedAddiction===t)return;const o=this.selectedAddictions.findIndex((e=>e===this.draggedAddiction)),n=this.selectedAddictions.findIndex((e=>e===t));-1!==o&&-1!==n&&(this.selectedAddictions.splice(o,1),this.selectedAddictions.splice(n,0,this.draggedAddiction),this.selectedAddictions.forEach(((e,t)=>{e.position=t})),localStorage.setItem("selectedAddictions",JSON.stringify(this.selectedAddictions))),this.draggedAddiction=null},setDailyQuote(){const e=(new Date).toISOString().split("T")[0],t=localStorage.getItem("quoteDate"),o=localStorage.getItem("dailyQuoteText"),n=localStorage.getItem("dailyQuoteAuthor");if(t===e&&o&&n)this.quoteText=o,this.quoteAuthor=n;else{const t=X.filter((t=>t.date&&t.date.startsWith(e)));let o;o=t.length>0?t[Math.floor(Math.random()*t.length)]:X[Math.floor(Math.random()*X.length)],this.quoteText=o.quote,this.quoteAuthor=o.author,localStorage.setItem("quoteDate",e),localStorage.setItem("dailyQuoteText",this.quoteText),localStorage.setItem("dailyQuoteAuthor",this.quoteAuthor),this.hasSelectedAddiction&&this.incrementCount()}},loadCount(){if(this.hasSelectedAddiction){const e=localStorage.getItem("count");this.count=e?parseInt(e):0}},incrementCount(){this.hasSelectedAddiction&&(this.count++,localStorage.setItem("count",this.count.toString()))},resetCount(){this.hasSelectedAddiction&&(this.count=1,localStorage.setItem("count","1"))},toggleCountControls(e){Object.keys(this.showCountControls).forEach((e=>{this.showCountControls[e]=!1})),this.showCountControls[e]=!0},closeCountControls(e){this.showCountControls[e]=!1},checkLastOpened(){if(this.hasSelectedAddiction){const e=(new Date).toISOString().split("T")[0];this.lastOpenedDate=localStorage.getItem("lastOpenedDate"),this.lastOpenedDate!==e&&this.showNotification(),localStorage.setItem("lastOpenedDate",e)}},showNotification(){this.hasSelectedAddiction&&"Notification"in window&&Notification.requestPermission().then((e=>{if("granted"===e){const e=this.count%this.motivations.length,t=this.motivations[e];new Notification("Aurelius - Fight the urge",{body:`Day ${this.count}, \nDon't forget to check today's quote! \n ${t}`,icon:"/icons/icon48.png"})}}))},goToOptions(){chrome&&chrome.runtime&&chrome.runtime.openOptionsPage?chrome.runtime.openOptionsPage():chrome&&chrome.runtime&&chrome.runtime.getURL?window.open(chrome.runtime.getURL("options.html")):(console.log("Development mode: Opening mock options page"),window.open("/options.html"))},toggleTheme(){const e=this.themes.indexOf(this.currentTheme),t=(e+1)%this.themes.length;this.currentTheme=this.themes[t],localStorage.setItem("theme",this.currentTheme)},loadTheme(){const e=localStorage.getItem("theme");e&&this.themes.includes(e)?this.currentTheme=e:this.currentTheme="dark-theme"},openSetStreakModal(){this.showSetStreakModal=!0},closeSetStreakModal(){this.showSetStreakModal=!1},setStreakDay(){this.hasSelectedAddiction&&(this.count=parseInt(this.newStreakDay),localStorage.setItem("count",this.count.toString())),this.closeSetStreakModal()},openResetStreakModal(e){this.showResetStreakModal[e]=!0},closeResetStreakModal(e){this.showResetStreakModal[e]=!1},confirmResetStreak(){this.resetCount(),this.closeResetStreakModal()},goToSelectionComponent(){this.hasSelectedAddiction=!1,localStorage.setItem("addictionSelected","false"),localStorage.removeItem("selectedAddiction")}}};const xe=(0,Q.A)(Se,[["render",B],["__scopeId","data-v-0a0eeaa8"]]);var Ae=xe;if(!window.__POPUP_SCRIPT_EXECUTED__){window.__POPUP_SCRIPT_EXECUTED__=!0,console.log("Popup script running"),window.__VUE_POPUP_APP__&&(console.log("Unmounting existing app"),window.__VUE_POPUP_APP__.unmount()),console.log("Creating new app");const e=(0,n.Ef)(Ae);e.mount("#app"),window.__VUE_POPUP_APP__=e,console.log("New app mounted")}}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,i,a){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],a=e[d][2];for(var r=!0,l=0;l<n.length;l++)(!1&a||s>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(r=!1,a<s&&(s=a));if(r){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,i,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.j=887}(),function(){o.p="/"}(),function(){var e={887:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,a,s=n[0],r=n[1],l=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(i in r)o.o(r,i)&&(o.m[i]=r[i]);if(l)var d=l(o)}for(t&&t(n);c<s.length;c++)a=s[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},n=self["webpackChunkmy_chrome_extension"]=self["webpackChunkmy_chrome_extension"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(3426)}));n=o.O(n)})();
//# sourceMappingURL=popup.js.map