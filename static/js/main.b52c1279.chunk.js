(this["webpackJsonpbooster-pack-simulator"]=this["webpackJsonpbooster-pack-simulator"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/mtg-back.dd611d53.jpg"},,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(6),s=t.n(c),l=(t(12),t(1)),m=t.n(l),o=t(3),i=t(2),u=(t(14),t(15),t(4)),d=t.n(u),p=function(e){var a=e.name,t=e.image,c=e.number,s=Object(n.useState)(!1),l=Object(i.a)(s,2),m=l[0],o=l[1];return r.a.createElement("div",{className:m?"card flipped":"card",onClick:function(){return o(!0)}},r.a.createElement("div",{className:"cardBack"},r.a.createElement("img",{className:m?"image":"image hover",src:d.a,alt:a,number:c})),r.a.createElement("div",{className:"cardFront"},r.a.createElement("img",{className:"image",src:t||d.a,alt:a,number:c})))},E=(t(16),function(){return r.a.createElement("div",{className:"filters"},r.a.createElement("h3",null,"Filter Options:"),r.a.createElement("div",{className:"filter-set"},["grn","rna","war","m20","eld","thb"].map((function(e,a){return r.a.createElement("label",{for:e},r.a.createElement("input",{type:"radio",id:e,name:"sets"}),r.a.createElement("i",{className:"ss ss-"+e+" ss-4x"}))}))),r.a.createElement("ul",{className:"filter-list"},r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",name:"rares",defaultChecked:!0}),r.a.createElement("label",{for:"rares"},"Mythics & Rares"),r.a.createElement("input",{type:"text",name:"rare-quant",value:"1",disabled:!0})),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",name:"rares",defaultChecked:!0}),r.a.createElement("label",{for:"rares"},"Uncommons"),r.a.createElement("input",{type:"text",name:"uncommon-quant",value:"3",disabled:!0})),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",name:"rares",defaultChecked:!0}),r.a.createElement("label",{for:"rares"},"Commons"),r.a.createElement("input",{type:"text",name:"common-quant",value:"10",disabled:!0})),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",name:"rares",defaultChecked:!0}),r.a.createElement("label",{for:"rares"},"Basic Lands"),r.a.createElement("input",{type:"text",name:"basic-quant",value:"1",disabled:!0}))))}),h=(t(17),function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"colour-wheel"},r.a.createElement("div",{className:"w-mana"}),r.a.createElement("div",{className:"between"},r.a.createElement("div",{className:"g-mana"}),r.a.createElement("div",{className:"u-mana"})),r.a.createElement("div",{className:"evenly"},r.a.createElement("div",{className:"r-mana"}),r.a.createElement("div",{className:"b-mana"}))),r.a.createElement("p",{className:"loader-caption"},"Sealing Booster"))});var g=function(){var e=Object(n.useState)(!0),a=Object(i.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)([]),l=Object(i.a)(s,2),u=l[0],d=l[1];Object(n.useEffect)((function(){g(),console.log("Effect has been run"),console.log(t)}),[]);var g=function(){var e,a,t,n,r,s,l,i,u,p;return m.a.async((function(E){for(;;)switch(E.prev=E.next){case 0:return e="war",a=Math.random()>.125?"rare":"mythic",E.next=4,m.a.awrap(fetch("https://api.magicthegathering.io/v1/cards?set=".concat(e,"&rarity=").concat(a,"&pageSize=1&random=true&contains=imageUrl")));case 4:return t=E.sent,E.next=7,m.a.awrap(fetch("https://api.magicthegathering.io/v1/cards?set=".concat(e,"&rarity=uncommon&pageSize=3&random=true&contains=imageUrl")));case 7:return n=E.sent,E.next=10,m.a.awrap(fetch("https://api.magicthegathering.io/v1/cards?set=".concat(e,"&rarity=common&pageSize=10&random=true&contains=imageUrl")));case 10:return r=E.sent,E.next=13,m.a.awrap(fetch("https://api.magicthegathering.io/v1/cards?set=".concat(e,"&type=basic&pageSize=1&random=true&contains=imageUrl")));case 13:return s=E.sent,E.next=16,m.a.awrap(t.json());case 16:return l=E.sent,E.next=19,m.a.awrap(n.json());case 19:return i=E.sent,E.next=22,m.a.awrap(r.json());case 22:return u=E.sent,E.next=25,m.a.awrap(s.json());case 25:p=E.sent,console.log(l.cards),console.log(i.cards),console.log(u.cards),console.log(p.cards),d([].concat(Object(o.a)(l.cards),Object(o.a)(i.cards),Object(o.a)(u.cards),Object(o.a)(p.cards))),c(!1);case 32:case"end":return E.stop()}}))};return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h2",null,"Booster Pack Simulator")),r.a.createElement(E,null),t?r.a.createElement(h,null):u.map((function(e){return r.a.createElement(p,{key:e.number,name:e.name,image:e.imageUrl,number:e.number})})),r.a.createElement("footer",null,"By Ethan Fiddes"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.b52c1279.chunk.js.map