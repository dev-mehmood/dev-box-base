System.register(["single-spa","zone.js"],function(t){var e,r;return{setters:[function(t){e=t},function(t){r=t}],execute:function(){t(function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,r){t.exports=e},function(t,e){t.exports=r},function(t,e,r){"use strict";r.r(e);r(1);var n=r(0);const o={"@dev-box/login":i,"@dev-box/navbar":t=>!i(t)};function i(t){return t.pathname.startsWith("/login")}function u(){Object.keys(o).forEach(t=>{Object(n.registerApplication)(t,()=>System.import(t),o[t])})}function c(t){if(!Array.isArray(t)||t.some(t=>"string"!=typeof t))throw Error("registerCoreApplicationsExcept must be called with an array of string application names");const e=[];return Object.keys(o).forEach(r=>{t.includes(r)||(Object(n.registerApplication)(r,()=>System.import(r),o[r]),e.push(r))}),e}r.d(e,"registerAllCoreApplications",function(){return u}),r.d(e,"registerCoreApplicationsExcept",function(){return c}),u(),Object(n.start)()}]))}}});
//# sourceMappingURL=root-config.js.map