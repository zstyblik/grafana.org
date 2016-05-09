/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return f.raw?e:encodeURIComponent(e)}function n(e){return f.raw?e:decodeURIComponent(e)}function o(e){return t(f.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(r," "))}catch(t){return}try{return f.json?JSON.parse(e):e}catch(t){}}function s(t,n){var o=f.raw?t:i(t);return e.isFunction(n)?n(o):o}var r=/\+/g,f=e.cookie=function(i,r,c){if(void 0!==r&&!e.isFunction(r)){if(c=e.extend({},f.defaults,c),"number"==typeof c.expires){var a=c.expires,u=c.expires=new Date;u.setDate(u.getDate()+a)}return document.cookie=[t(i),"=",o(r),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var p=i?void 0:{},l=document.cookie?document.cookie.split("; "):[],d=0,m=l.length;m>d;d++){var h=l[d].split("="),g=n(h.shift()),v=h.join("=");if(i&&i===g){p=s(v,r);break}i||void 0===(v=s(v))||(p[g]=v)}return p};f.defaults={},e.removeCookie=function(t,n){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},n,{expires:-1})),!0):!1}});