(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(3),c=t.n(o),l=(t(10),t(1));t(12);function i(e){var a=Object(n.useState)(0),t=Object(l.a)(a,2),o=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"button ".concat(e.className),role:"button",tabIndex:0,onKeyDown:function(a){switch(a.keyCode){case 32:case 13:a.preventDefault(),e.onClick()}},onClick:function(e){c(o+1),requestAnimationFrame(function(){document.activeElement.blur()})}},e.children),r.a.createElement("div",{className:"KeyboardButton__error"},o?"Your hand is spasming too uncontrollably to click here!":null))}var s=function(e){return r.a.createElement("section",{className:"Intro"},r.a.createElement("div",{className:"Intro__story"},r.a.createElement("div",{className:"Intro__paragraph Intro__paragraph1"},"You\u2019re watching the news at home on your couch. The top story is a mysterious UFO landing in your town."),r.a.createElement("div",{className:"Intro__paragraph Intro__paragraph2"},"Suddenly, you receive a phone call from your uncle who lives near the landing site -- he sounds very disoriented. You tell him to calm down, you\u2019ll be right over to check on him."),r.a.createElement("div",{className:"Intro__paragraph Intro__paragraph3"},"You show up and quickly run from your car into the house, leaving your cell phone behind. You find your uncle unresponsive and passed out on the couch."),r.a.createElement("div",{className:"Intro__paragraph Intro__paragraph4"},"As you bend over to check on him, you feel a ice cold pinch on your neck. Suddenly, you can only see in black and white."),r.a.createElement("div",{className:"Intro__paragraph Intro__paragraph5"},"You must send a message for help before you also lose all consciousness. You sit down at your uncles ancient computer and grab the mouse, but you can\u2019t click on anything because your hand has started spasming uncontrollably. You press \u201ctab\u201d on the keyboard to wake it up."),r.a.createElement("div",{className:"Intro__paragraph Intro__paragraph6"},r.a.createElement(i,{onClick:e.advance},"Next"))))};var u=function(e){var a=Object(n.useState)(null),t=Object(l.a)(a,2),o=t[0],c=t[1],s=function(e){return e.map(function(e,a){return r.a.createElement(i,{onClick:function(){!function(e){c(e)}(e)},className:"Homepage__app",key:a},e)})};return null!==o?r.a.createElement("section",{className:"homepage"},r.a.createElement("h1",null,o),r.a.createElement(i,{className:"Homepage__openAppBack",onClick:function(){c(null)}},"\u2190 Back")):r.a.createElement("section",{className:"Homepage"},"The computer's awake and you're looking at the homepage in his internet browser.",r.a.createElement("div",{className:"Homepage__desktop"},r.a.createElement("input",{className:"Homepage__urlBar","aria-label":"Search the internet"}),r.a.createElement("div",{className:"Homepage__apps"},s(["Email","Reddit","Facebook","Twitter","Google","Youtube","WebAIM","Pivotal Tracker","Online Slots"]),r.a.createElement(i,{onClick:e.advance,className:"Homepage__app"},"US Government Alien Threat Reporting & Response"),s(["Online Poker","Amazon","Yelp","Bank","PVTL stock price","Kitty rescue webcam"]))))};function m(e){var a=e.advance,t=Object(n.useState)(null),o=Object(l.a)(t,2),c=o[0],s=o[1],u=function(e){return e.map(function(e,a){return r.a.createElement(i,{onClick:function(){!function(e){s(e)}(e)},className:"Govpage__link",key:a},e)})};return null!==c?r.a.createElement("section",{className:"homepage"},r.a.createElement("h1",null,c),r.a.createElement(i,{className:"Govpage__openPageBack",onClick:function(){s(null)}},"\u2190 Back")):r.a.createElement("div",{className:"Govpage"},r.a.createElement("h1",null," US Government Alien Threat Reporting & Response Center"),r.a.createElement("nav",{className:"Govpage__nav"},u(["About","Bureaus & Offices","Priorities","News","Like us on Facebook"])),r.a.createElement("section",null,r.a.createElement("div",{className:"Govpage__paragraph"},"The US Government Alien Threat Reporting & Response Center (ATRRC) is an organization in the United States that investigates UFO sightings and/or alien contacts. ATRRC has been in continuous operation since 1974. It was founded in 1974 by Robert J. Gribble.[1] It has catalogued almost 90,000 reported UFO sightings over its history, most of which were in the United States.[2] In addition to record keeping, the center has provided statistics and graphs to assist others looking for information. Slate published an interactive graph published by Davenport, which showed the density of sightings relative to an area.[3]"),r.a.createElement("div",{className:"Govpage__paragraph"},"Due to an increase in recent UFO and alien activity and attacks, ATRRC has increased its presence and programs. We have many agents on standby to help you in the case of an incident. Just click the link below to start the request process."),r.a.createElement(i,{onClick:function(){a()},className:"Govpage__link"},"Request assistance")),r.a.createElement("footer",{className:"Govpage__footer"},u(["Notices","Privacy policy","Security","Threat general","Follow us on Twitter"])))}function p(e){var a=Object(n.useState)(0),t=Object(l.a)(a,2),o=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"ScreenreaderButton ".concat(e.className)},r.a.createElement("div",{className:"ScreenreaderButton__cover","aria-hidden":!0,onClick:function(e){c(o+1),requestAnimationFrame(function(){document.activeElement.blur()})}},e.children),r.a.createElement("button",{className:"ScreenreaderButton__hidden",onClick:e.onClick,tabIndex:-1},e.children)),r.a.createElement("div",{className:"KeyboardButton__error"},o?"Your hand is spasming too uncontrollably to click here!":null))}function h(e){var a=e.advance,t=Object(n.useRef)(null),o=Object(n.useRef)(null),c=Object(n.useRef)(null);return r.a.createElement("div",{className:"Helppage"},r.a.createElement("h1",null,"US Government Alien Threat Reporting & Response Center"),r.a.createElement("h2",null,"Assistance Request Process"),r.a.createElement("section",null,r.a.createElement("div",{className:"helppage__paragraph"},"Please fill out this form with respect to the person who needs rescue"),r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"first"},"First Name"),r.a.createElement("input",{ref:t,id:"first",type:"text",required:!0}),r.a.createElement("label",{htmlFor:"last"},"Last Name"),r.a.createElement("input",{ref:o,id:"last",type:"text",required:!0}),r.a.createElement("label",{htmlFor:"ssn"},"Social Security Number"),r.a.createElement("input",{ref:c,id:"ssn",type:"text",required:!0}),r.a.createElement(p,{onClick:function(){return!!(t.current.value.trim()&&o.current.value.trim()&&c.current.value.trim())&&a()}},"Submit"))))}var d=function(e){var a,t=["intro","homepage","govpage","helppage","end"],o={intro:["Tab to the button and press enter"],helppage:["You will need to use a screenreader to click the button"],govpage:["You need to 'request assistance'",r.a.createElement("span",{"data-index":0},"There is no ",r.a.createElement("a",{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html"},"focus ring")," on this page")],homepage:["You need to visit the US Government Alien Threat Reporting website","Use the tab key to navigate"],end:["No you don't"]},c=Object(n.useState)(0),p=Object(l.a)(c,2),d=p[0],g=p[1],v=Object(n.useState)((new Date).getTime()),b=Object(l.a)(v,1)[0],E=Object(n.useState)(null),f=Object(l.a)(E,2),_=f[0],y=f[1],k=Object(n.useState)(0),N=Object(l.a)(k,2),w=N[0],S=N[1],O=function(){g(d+1),y(null)};if("intro"===t[d])a=r.a.createElement(s,{advance:O});else if("homepage"===t[d])a=r.a.createElement(u,{advance:O});else if("govpage"===t[d])a=r.a.createElement(m,{advance:O});else if("helppage"===t[d])a=r.a.createElement(h,{advance:O});else if("end"===t[d]){var A=((new Date).getTime()-b)/1e3;a=r.a.createElement("div",null,"Good job! You completed the challenge in ",A," seconds.",r.a.createElement(i,{className:"App__retry",onClick:function(){return g(0)}},"Try again"))}return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"Alien Escape"),r.a.createElement("main",{className:"App__main"},a,r.a.createElement("div",{className:"App__hint--text"},_)),r.a.createElement("footer",{className:"App__footer"},r.a.createElement("div",null,r.a.createElement("button",{className:"App__hint",onClick:function(){var e=o[t[d]];if(null===_)y(e[0]);else{var a,n=(a="object"===typeof _?_.props["data-index"]:e.indexOf(_))!==e.length-1,r=n?a+1:a;n&&S(w+1),y(e[r])}}},"I need a hint")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/jeanettehead/a11y-escape-room"},"See this project on GitHub"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e,a,t){e.exports=t(14)}},[[4,2,1]]]);
//# sourceMappingURL=main.8edc9f6e.chunk.js.map