!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/static/vue-dist/",n(n.s=47)}({1:function(t,e,n){"use strict";(function(e){var r=n(17),o=n(7),u=n(18),i="localStorage"in e&&e.localStorage?e.localStorage:r;function c(t,e){return 1===arguments.length?a(t):f(t,e)}function a(t){const e=i.getItem(t);return o(e)}function f(t,e){try{return i.setItem(t,JSON.stringify(e)),!0}catch(t){return!1}}c.set=f,c.get=a,c.remove=function(t){return i.removeItem(t)},c.clear=function(){return i.clear()},c.backend=function(t){return t&&(i=t),i},c.on=u.on,c.off=u.off,t.exports=c}).call(this,n(2))},17:function(t,e,n){"use strict";var r={};t.exports={getItem:function(t){return t in r?r[t]:null},setItem:function(t,e){return r[t]=e,!0},removeItem:function(t){return!!(t in r)&&delete r[t]},clear:function(){return r={},!0}}},18:function(t,e,n){"use strict";(function(e){var r=n(7),o={};function u(t){t||(t=e.event);var n=o[t.key];n&&n.forEach((function(e){e(r(t.newValue),r(t.oldValue),t.url||t.uri)}))}t.exports={on:function(t,n){o[t]?o[t].push(n):o[t]=[n],e.addEventListener?e.addEventListener("storage",u,!1):e.attachEvent?e.attachEvent("onstorage",u):e.onstorage=u},off:function(t,e){var n=o[t];n.length>1?n.splice(n.indexOf(e),1):o[t]=[]}}}).call(this,n(2))},2:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},47:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r);let u=o.a.get("user");u||(u={id:1,personal:{name:"Fredrik",city:{name:"Stavanger, Norway",timezone:"UTC+1"}},preferences:{clockFormat:"12HR",language:"EN"},widgets:["news-digest","todo","stocks"]},o.a.set("user",u))},7:function(t,e,n){"use strict";t.exports=function(t){const e=function(t){try{return JSON.parse(t)}catch(e){return t}}(t);return void 0===e?null:e}}});