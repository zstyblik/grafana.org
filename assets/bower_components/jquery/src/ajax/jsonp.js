define(["../core","./var/nonce","./var/rquery","../ajax"],function(t,e,n){var i=[],r=/(=)\?(?=&|$)|\?\?/;t.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var n=i.pop()||t.expando+"_"+e++;return this[n]=!0,n}}),t.ajaxPrefilter("json jsonp",function(e,o,s){var a,l,u,c=e.jsonp!==!1&&(r.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&r.test(e.data)&&"data");return c||"jsonp"===e.dataTypes[0]?(a=e.jsonpCallback=t.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,c?e[c]=e[c].replace(r,"$1"+a):e.jsonp!==!1&&(e.url+=(n.test(e.url)?"&":"?")+e.jsonp+"="+a),e.converters["script json"]=function(){return u||t.error(a+" was not called"),u[0]},e.dataTypes[0]="json",l=window[a],window[a]=function(){u=arguments},s.always(function(){void 0===l?t(window).removeProp(a):window[a]=l,e[a]&&(e.jsonpCallback=o.jsonpCallback,i.push(a)),u&&t.isFunction(l)&&l(u[0]),u=l=void 0}),"script"):void 0})});