(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(354),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),a.push([n.id,':root {\n  /*Font Elements*/\n  --fs-small: 0.85rem;\n  --fs-reg: 1rem;\n  --fs-large: 2.5rem;\n  --fc-alt: hsl(10, 10%, 20%);\n  --fc-reg: hsl(20, 20%, 90%);\n  --fc-error: hsl(0, 75%, 49%);\n  /*Other Elements*/\n  --bg-color: hsl(220, 80%, 20%);\n  --bg-color-alt: hsl(220, 32%, 35%);\n  --brdr-color: hsl(20, 10%, 30%);\n  /*Body Elements*/\n  --body-bg-color: hsl(0, 0%, 11%);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n  list-style: none;\n  font-size: var(--fs-reg);\n  color: var(--fc-reg);\n}\n\nbody {\n  height: 100vh;\n  font-family: "Roboto", "Segoe UI", Tahoma, sans-serif;\n  background-color: var(--body-bg-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.appContainer {\n  --width: 335px;\n  background-color: var(--bg-color);\n  border: 3px outset var(--brdr-color);\n  padding: 1.25rem;\n  border-radius: 25px;\n  width: var(--width);\n  height: calc(var(--width) * 0.6);\n  display: grid;\n  grid-template-rows: 1fr 4fr 1fr;\n}\n\n.iconContainer {\n  display: flex;\n  align-items: center;\n}\n\n.headerArea {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.locationDisplay {\n  /* display: flex; */\n  display: none;\n}\n\n.locationText:hover {\n  cursor: pointer;\n  filter: brightness(90);\n}\n\n.locationIcon {\n  margin-inline-end: 0.25rem;\n  height: 1.25rem;\n  filter: brightness(90%);\n}\n\nform {\n  /* display: none; */\n  display: flex;\n  position: relative;\n}\n\n.locationInput {\n  color: var(--fc-reg);\n  width: 100%;\n  background-color: var(--bg-color-alt);\n  border-radius: 10px;\n  padding-inline-start: 0.5rem;\n}\n\n.locationInput::placeholder {\n  color: var(--fc-reg);\n}\n\n.locationSubmitBtn {\n  background: none;\n  border: none;\n  outline: none;\n  font-family: inherit;\n  color: inherit;\n  font-size: inherit;\n  padding: 0;\n  transition: scale 0.03s ease-in-out;\n}\n\n.locationSubmitBtn:hover {\n  scale: 1.1;\n  cursor: pointer;\n}\n\n.locationSubmitBtn:active {\n  scale: 0.9;\n}\n\n.mainArea {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.tempDisplay {\n  font-size: var(--fs-large);\n}\n\n.wrapper {\n  display: flex;\n}\n\n.footerArea {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.secondary {\n  flex: 1;\n  gap: 0.2rem;\n  align-items: center;\n  justify-content: space-between;\n  background-color: var(--bg-color-alt);\n  border-radius: 15px;\n  padding-inline: 0.6rem;\n  padding-block: 0.25rem;\n}\n\n.secondary img {\n  filter: brightness(0.85);\n}\n\n.weatherIcon {\n  filter: invert();\n  height: 4.5rem;\n  padding-inline-end: 0.25rem;\n}\n\n.secondaryIcon {\n  filter: invert();\n  height: calc(var(--fs-reg) * 1.2);\n}\n.secondaryValue {\n  font-size: var(--fs-small);\n}\n',"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,cAAc;EACd,kBAAkB;EAClB,2BAA2B;EAC3B,2BAA2B;EAC3B,4BAA4B;EAC5B,iBAAiB;EACjB,8BAA8B;EAC9B,kCAAkC;EAClC,+BAA+B;EAC/B,gBAAgB;EAChB,gCAAgC;AAClC;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,qBAAqB;EACrB,gBAAgB;EAChB,wBAAwB;EACxB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,qDAAqD;EACrD,sCAAsC;EACtC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,iCAAiC;EACjC,oCAAoC;EACpC,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;EACnB,gCAAgC;EAChC,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,0BAA0B;EAC1B,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,WAAW;EACX,qCAAqC;EACrC,mBAAmB;EACnB,4BAA4B;AAC9B;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,cAAc;EACd,kBAAkB;EAClB,UAAU;EACV,mCAAmC;AACrC;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,OAAO;EACP,WAAW;EACX,mBAAmB;EACnB,8BAA8B;EAC9B,qCAAqC;EACrC,mBAAmB;EACnB,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,iCAAiC;AACnC;AACA;EACE,0BAA0B;AAC5B",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");\n\n:root {\n  /*Font Elements*/\n  --fs-small: 0.85rem;\n  --fs-reg: 1rem;\n  --fs-large: 2.5rem;\n  --fc-alt: hsl(10, 10%, 20%);\n  --fc-reg: hsl(20, 20%, 90%);\n  --fc-error: hsl(0, 75%, 49%);\n  /*Other Elements*/\n  --bg-color: hsl(220, 80%, 20%);\n  --bg-color-alt: hsl(220, 32%, 35%);\n  --brdr-color: hsl(20, 10%, 30%);\n  /*Body Elements*/\n  --body-bg-color: hsl(0, 0%, 11%);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n  list-style: none;\n  font-size: var(--fs-reg);\n  color: var(--fc-reg);\n}\n\nbody {\n  height: 100vh;\n  font-family: "Roboto", "Segoe UI", Tahoma, sans-serif;\n  background-color: var(--body-bg-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.appContainer {\n  --width: 335px;\n  background-color: var(--bg-color);\n  border: 3px outset var(--brdr-color);\n  padding: 1.25rem;\n  border-radius: 25px;\n  width: var(--width);\n  height: calc(var(--width) * 0.6);\n  display: grid;\n  grid-template-rows: 1fr 4fr 1fr;\n}\n\n.iconContainer {\n  display: flex;\n  align-items: center;\n}\n\n.headerArea {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.locationDisplay {\n  /* display: flex; */\n  display: none;\n}\n\n.locationText:hover {\n  cursor: pointer;\n  filter: brightness(90);\n}\n\n.locationIcon {\n  margin-inline-end: 0.25rem;\n  height: 1.25rem;\n  filter: brightness(90%);\n}\n\nform {\n  /* display: none; */\n  display: flex;\n  position: relative;\n}\n\n.locationInput {\n  color: var(--fc-reg);\n  width: 100%;\n  background-color: var(--bg-color-alt);\n  border-radius: 10px;\n  padding-inline-start: 0.5rem;\n}\n\n.locationInput::placeholder {\n  color: var(--fc-reg);\n}\n\n.locationSubmitBtn {\n  background: none;\n  border: none;\n  outline: none;\n  font-family: inherit;\n  color: inherit;\n  font-size: inherit;\n  padding: 0;\n  transition: scale 0.03s ease-in-out;\n}\n\n.locationSubmitBtn:hover {\n  scale: 1.1;\n  cursor: pointer;\n}\n\n.locationSubmitBtn:active {\n  scale: 0.9;\n}\n\n.mainArea {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.tempDisplay {\n  font-size: var(--fs-large);\n}\n\n.wrapper {\n  display: flex;\n}\n\n.footerArea {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.secondary {\n  flex: 1;\n  gap: 0.2rem;\n  align-items: center;\n  justify-content: space-between;\n  background-color: var(--bg-color-alt);\n  border-radius: 15px;\n  padding-inline: 0.6rem;\n  padding-block: 0.25rem;\n}\n\n.secondary img {\n  filter: brightness(0.85);\n}\n\n.weatherIcon {\n  filter: invert();\n  height: 4.5rem;\n  padding-inline-end: 0.25rem;\n}\n\n.secondaryIcon {\n  filter: invert();\n  height: calc(var(--fs-reg) * 1.2);\n}\n.secondaryValue {\n  font-size: var(--fs-small);\n}\n'],sourceRoot:""}]);const s=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(a[A]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var A=n[s],c=r.base?A[0]+r.base:A[0],l=i[c]||0,d="".concat(c," ").concat(l);i[c]=l+1;var p=t(d),f={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var u=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:u,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var A=r(n,o),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=A}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var r=t(72),o=t.n(r),i=t(825),a=t.n(i),s=t(659),A=t.n(s),c=t(56),l=t.n(c),d=t(540),p=t.n(d),f=t(113),u=t.n(f),g=t(365),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=A().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p(),o()(g.A,m),g.A&&g.A.locals&&g.A.locals;const C=[{"clear-day":t.p+"8db48ee0382c9fbcd054.png"},{"clear-night":t.p+"269d4635504b1e03fc18.png"},{cloudy:t.p+"72adb73a7025d8f7172b.png"},{fog:t.p+"bec51c6b905e71a69c73.png"},{hail:t.p+"90f622f99b84dd27ae4f.png"},{"partly-cloudy-day":t.p+"5d94d863a5ea21caeca4.png"},{"partly-cloudy-night":t.p+"ae9faf214c1378c2de88.png"},{"rain-snow-showers-day":t.p+"4d77e476903c93ebd857.png"},{"rain-snow-showers-night":t.p+"f6853e412adedecfe608.png"},{"rain-snow":t.p+"59ed859a05b50b49f636.png"},{rain:t.p+"35011c0de94b48b45eff.png"},{"showers-day":t.p+"bd1b3a43154e30d6f656.png"},{"showers-night":t.p+"0db7ce2195cf1b39e2a8.png"},{sleet:t.p+"18a9c0e35ec78e9d1fa9.png"},{"snow-showers-day":t.p+"a39faee13cd61521827c.png"},{"snow-showers-night":t.p+"ccd86bf3c4336cf79f53.png"},{snow:t.p+"653c161c47968166a194.png"},{"thunder-rain":t.p+"fe3f831f3c1ac6779353.png"},{"thunder-showers-day":t.p+"41ae7d5637df09139a44.png"},{"thunder-showers-night":t.p+"2647e79c604008d53ed1.png"},{thunder:t.p+"9ff5e671aebefc9994bb.png"},{wind:t.p+"5ffeaba6a5e7462a2e82.png"}],B=document.getElementById("form"),E=document.getElementById("locationSubmitBtn"),h=document.getElementById("locationDisplay"),y=document.getElementById("resolvedAddress"),b=document.getElementById("locationInput"),v=document.getElementById("conditions"),w=document.getElementById("temp"),x=document.getElementById("humidity"),I=document.getElementById("precipprob"),k=document.getElementById("windspeed"),S=document.getElementById("weatherIcon");function j(){const n=b.value.trim().toLowerCase();return/^[A-Za-z]+$/.test(n)?(b.setCustomValidity(""),b.reportValidity(),console.log(b.validity.valid),b.validity.valid?(async function(n){const e=await async function(n){let e;return e=n||"fremont",(await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}?key=6P8KSEDG4VVMNAH3G83WDLFGE`,{mode:"cors"})).json().then((n=>({resolvedAddress:n.resolvedAddress,conditions:n.currentConditions.conditions,temp:n.currentConditions.temp,humidity:n.currentConditions.humidity,precipprob:n.currentConditions.precipprob,windspeed:n.currentConditions.windspeed,icon:n.currentConditions.icon}))).catch((n=>(console.log(n),0)))}(n);if(!e)return b.setCustomValidity("Location not found! Try again."),b.reportValidity(),0;v.textContent=e.conditions,w.textContent=`${e.temp}°F`,x.textContent=`${e.humidity}%`,I.textContent=`${e.precipprob}%`,k.textContent=`${e.windspeed}mph`,console.log(e.icon),console.log("attempting to change icon..."),S.src=function(n,e){for(const t of n)if(Object.keys(t)[0]===e)return console.log("icon found!"),t[e];return console.log("icon not found"),0}(C,e.icon),h.style.display="flex",y.textContent=e.resolvedAddress,B.style.display="none",h.addEventListener("click",(()=>{h.style.display="none",B.style.display="flex"}))}(n),1):void 0):(b.setCustomValidity("Please enter city name only. No spaces."),b.reportValidity(),0)}b.addEventListener("keypress",(n=>{"Enter"===n.key&&(n.preventDefault(),j())})),E.addEventListener("click",(n=>{n.preventDefault(),j()}))})();
//# sourceMappingURL=main.js.map