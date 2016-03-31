/*!
{
  "name": "Transferables Objects",
  "property": "transferables",
  "tags": ["performance", "workers"],
  "builderAliases": ["transferables"],
  "notes": [{
    "name": "HTML5 Rocks article",
    "href": "http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast"
  }],
  "async": true
}
!*/
define(["Modernizr","addTest","test/blob","test/url/bloburls","test/workers/webworkers","test/typed-arrays"],function(e,t){e.addAsyncTest(function(){function n(){t("transferables",!1),r()}function r(){s&&URL.revokeObjectURL(s),u&&u.terminate(),a&&clearTimeout(a)}var o=!!(e.blobconstructor&&e.bloburls&&e.webworkers&&e.typedarrays);if(!o)return t("transferables",!1);try{var i,a,d='var hello = "world"',c=new Blob([d],{type:"text/javascript"}),s=URL.createObjectURL(c),u=new Worker(s);u.onerror=n,a=setTimeout(n,200),i=new ArrayBuffer(1),u.postMessage(i,[i]),t("transferables",0===i.byteLength),r()}catch(l){n()}})});