(this["webpackJsonpbooster-pack-simulator"]=this["webpackJsonpbooster-pack-simulator"]||[]).push([[0],[,,function(e,t,a){e.exports=a.p+"static/media/mtg-back.dd611d53.jpg"},,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),s=(a(11),a(12),a(1)),i=Object(n.createContext)(),l=["grn","rna","war","m20","eld"],u=function(e){var t=Object(n.useState)([{rarity:"rare",pageSize:1,isRequested:!0},{rarity:"uncommon",pageSize:3,isRequested:!0},{rarity:"common",pageSize:10,isRequested:!0},{rarity:"basic",pageSize:1,isRequested:!0}]),a=Object(s.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)({set:l[l.length-1],booster:c}),m=Object(s.a)(u,2),d=m[0],f=m[1];return r.a.createElement(i.Provider,{value:{standard:l,booster:c,updateRequested:function(e){var t=c.map((function(t){return t.rarity===e?Object.assign(t,{isRequested:!t.isRequested}):t}));o(t)},boosterPack:d,createBooster:function(e){f({set:e,booster:c}),console.log("buildabooster",d)}}},e.children)},m=Object(n.createContext)(),d=function(e){var t=Object(n.useState)(!0),a=Object(s.a)(t,2),c=a[0],o=a[1];return r.a.createElement(m.Provider,{value:{isLoading:c,setIsLoading:o}},e.children)},f=(a(13),function(){var e=Object(n.useContext)(i),t=e.standard,a=e.booster,c=e.updateRequested,o=e.createBooster,l=Object(n.useContext)(m).isLoading,u=Object(n.useState)(t[t.length-1]),d=Object(s.a)(u,2),f=d[0],b=d[1];return r.a.createElement("div",{className:"filters"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o(f)}},r.a.createElement("h3",null,"Filter Options:"),r.a.createElement("div",{className:"filter-set"},t.map((function(e){return r.a.createElement("label",{key:e,htmlFor:e},r.a.createElement("input",{type:"radio",id:e,name:"sets",value:e,onChange:function(){return b(e)},defaultChecked:f===e}),r.a.createElement("i",{className:"ss ss-"+e+" ss-4x"}))}))),r.a.createElement("ul",{className:"filter-list"},a.map((function(e){return r.a.createElement("li",{key:e.rarity},r.a.createElement("input",{type:"checkbox",name:e.rarity,onChange:function(e){return c(e.target.name)},checked:e.isRequested}),r.a.createElement("label",{htmlFor:e.rarity},e.rarity.charAt(0).toUpperCase()+e.rarity.slice(1)),r.a.createElement("input",{type:"text",name:e.rarity+"-quant",value:e.pageSize,disabled:!0}))}))),r.a.createElement("button",{disabled:l,type:"submit"},"New Booster")))}),b=(a(14),a(15),a(2)),p=a.n(b),g=function(e){var t=e.name,a=e.image,c=e.number,o=Object(n.useState)(!1),i=Object(s.a)(o,2),l=i[0],u=i[1];return r.a.createElement("div",{className:l?"card flipped":"card",onClick:function(){return u(!0)}},r.a.createElement("div",{className:"cardBack"},r.a.createElement("img",{className:l?"image":"image hover",src:p.a,alt:t,number:c})),r.a.createElement("div",{className:"cardFront"},r.a.createElement("img",{className:"image",src:a||p.a,alt:t,number:c})))},E=(a(16),function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"colour-wheel"},r.a.createElement("div",{className:"w-mana"}),r.a.createElement("div",{className:"between"},r.a.createElement("div",{className:"g-mana"}),r.a.createElement("div",{className:"u-mana"})),r.a.createElement("div",{className:"evenly"},r.a.createElement("div",{className:"r-mana"}),r.a.createElement("div",{className:"b-mana"}))),r.a.createElement("p",{className:"loader-caption"},"Sealing Booster"))}),h=a(5),v=a.n(h),y=function(){var e=Object(n.useContext)(i).boosterPack,t=Object(n.useContext)(m).isLoading,a=function(e,t){var a=Object(n.useState)([]),r=Object(s.a)(a,2),c=r[0],o=r[1],i=Object(n.useContext)(m).setIsLoading,l=e.set,u=[];return e.booster.filter((function(e){return e.isRequested||0===e.pageSize})).forEach((function(e){for(var t=Object.getOwnPropertyNames(e),a=Object.values(e),n="https://api.magicthegathering.io/v1/cards?set=".concat(l),r=0;r<t.length;r++)if("rare"===a[r])n+="&".concat(t[r],"="),n+=Math.random()>.125?"rare":"mythic";else if("basic"===a[r])n+="&type=".concat(a[r]);else{if("pageSize"===t[r]){n+="&".concat(t[r],"="),a[r]<10?n+=5*a[r]:n+=2*a[r];break}if("isRequested"===t[r])break;n+="&".concat(t[r],"=").concat(a[r])}n+="&random=true&contains=imageUrl",u.push(n)})),console.log("urls",u),Object(n.useEffect)((function(){i(!0),Array.isArray(u)&&u.length&&v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:Promise.all(u.map((function(e){return fetch(e).then((function(e){if(!e.ok)throw new Error("Failed to fetch.");return e.json()}))}))).then((function(e){o(e),i(!1)})).catch((function(e){console.log(e),i(!1)}));case 1:case"end":return e.stop()}}))}),t),console.log("fetched",c),c}(e,[e]);return r.a.createElement("div",{className:"cards-container"},t?r.a.createElement(E,null):a.map((function(e){return e.cards.filter((function(e){return e.hasOwnProperty("imageUrl").map((function(e){return r.a.createElement(g,{key:e.number,name:e.name,image:e.imageUrl,number:e.number})}))}))})))};var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h2",null,"Booster Pack Simulator")),r.a.createElement(u,null,r.a.createElement(d,null,r.a.createElement(f,null),r.a.createElement(y,null))),r.a.createElement("footer",null,"By Ethan Fiddes"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.ad492c8c.chunk.js.map