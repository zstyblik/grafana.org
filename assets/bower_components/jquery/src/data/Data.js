define(["../core","../var/rnotwhite","./var/acceptData"],function(t,e,n){function i(){this.expando=t.expando+i.uid++}return i.uid=1,i.prototype={register:function(t,e){var n=e||{};return t.nodeType?t[this.expando]=n:Object.defineProperty(t,this.expando,{value:n,writable:!0,configurable:!0}),t[this.expando]},cache:function(t){if(!n(t))return{};var e=t[this.expando];return e||(e={},n(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,n){var i,r=this.cache(t);if("string"==typeof e)r[e]=n;else for(i in e)r[i]=e[i];return r},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][e]},access:function(e,n,i){var r;return void 0===n||n&&"string"==typeof n&&void 0===i?(r=this.get(e,n),void 0!==r?r:this.get(e,t.camelCase(n))):(this.set(e,n,i),void 0!==i?i:n)},remove:function(n,i){var r,o,s,a=n[this.expando];if(void 0!==a){if(void 0===i)this.register(n);else{t.isArray(i)?o=i.concat(i.map(t.camelCase)):(s=t.camelCase(i),i in a?o=[i,s]:(o=s,o=o in a?[o]:o.match(e)||[])),r=o.length;for(;r--;)delete a[o[r]]}(void 0===i||t.isEmptyObject(a))&&(n.nodeType?n[this.expando]=void 0:delete n[this.expando])}},hasData:function(e){var n=e[this.expando];return void 0!==n&&!t.isEmptyObject(n)}},i});