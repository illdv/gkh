!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.calc=document.querySelector("#calc"),e.costs=document.querySelectorAll(".costRes"),e.lasts=document.querySelectorAll(".lastMonth"),e.currents=document.querySelectorAll(".currentMonth"),e.diffs=document.querySelectorAll(".diffRes"),e.tariffs=document.querySelectorAll(".allRes"),e.plan=document.querySelector("#plan"),e.total=document.querySelector("#total"),e.result=document.querySelector("#result")},function(t,e,n){n(2),t.exports=n(5)},function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function o(t,e){t.forEach(function(t,n){t.value=""===e?"":(0,i.default)(e)[n]})}function u(t,e){return(0,i.default)(t).reduce(function(t,n,r){var o=(0,i.default)(e)[r],u=(0,i.default)(e,!1)[r],a=o<=0?"":o-n;return t[u]=a,t},b)}function a(t,e){return(0,i.default)(e,!1).reduce(function(n,r,o){var u=void 0,a=(0,i.default)(t)[o];console.log(a);var l=(0,i.default)(e)[o];return u="sink"===r?Number(Number(a*l).toFixed(2)):Number(Number((0,i.default)(t)[o-1]*l).toFixed(2)),n[r]=u,n},g)}function l(){p=S(d.costs),h=S(d.lasts);var t=S(d.currents,h);y=Number(Number(d.plan.value).toFixed(2)),localStorage.setItem("prices",JSON.stringify(p)),localStorage.setItem("lastMonth",JSON.stringify(t)),localStorage.setItem("plan",y),o(d.diffs,u(h,t)),o(d.tariffs,a(b,p));var e=v(g);d.total.textContent=e,d.result.textContent=e+y}var c=n(3),i=function(t){return t&&t.__esModule?t:{default:t}}(c),s=n(4),f=n(0),d=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(f),p=JSON.parse(localStorage.getItem("prices"))||"",h=JSON.parse(localStorage.getItem("lastMonth"))||"",y=localStorage.getItem("plan")||"";o(d.costs,p),o(d.lasts,h),d.plan.value=y;var b={},g={},v=function(t){return(0,i.default)(t).reduce(function(t,e){return t+e},0)},m=function(t,e){return t.map(function(t,n){return t||Object.values(e)[n]})},S=function(t,e){var n=[].concat(r(t)).reduce(function(t,e){return t.concat(e.value)},[]);return 5===n.length?new(Function.prototype.bind.apply(s.PriceData,[null].concat(r(n)))):e?new(Function.prototype.bind.apply(s.MouthData,[null].concat(r(m(n,e))))):new(Function.prototype.bind.apply(s.MouthData,[null].concat(r(n))))};d.calc.addEventListener("click",l)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?Object.keys(t):Object.values(t)}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.PriceData=function t(e,n,o,u,a){r(this,t),this.sink=e,this.hot=n,this.cold=o,this.gas=u,this.el=a},e.MouthData=function t(e,n,o,u){r(this,t),this.hot=e,this.cold=n,this.gas=o,this.el=u}},function(t,e,n){"use strict";function r(){switch("true"===this.dataset.toggle?(this.dataset.toggle=!1,this.textContent="Блокировать"):(this.dataset.toggle=!0,this.textContent="Разблокировать"),this.previousElementSibling.textContent){case"План:":o.plan.disabled=!o.plan.disabled;break;case"Цена:":o.costs.forEach(function(t){t.disabled=!t.disabled});break;case"Прошлый месяц:":o.lasts.forEach(function(t){t.disabled=!t.disabled});break;default:console.log("Error switch")}}var o=n(0);document.querySelectorAll("[data-toggle]").forEach(function(t){return t.addEventListener("click",r)})}]);
//# sourceMappingURL=bundle.js.map