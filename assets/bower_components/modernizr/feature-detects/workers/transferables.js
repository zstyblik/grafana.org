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
define(["Modernizr","addTest","test/blob","test/url/bloburls","test/workers/webworkers","test/typed-arrays"],function(e,n){e.addAsyncTest(function(){function t(){n("transferables",!1),r()}function r(){c&&URL.revokeObjectURL(c),f&&f.terminate(),d&&clearTimeout(d)}var o=!!(e.blobconstructor&&e.bloburls&&e.webworkers&&e.typedarrays);if(!o)return n("transferables",!1);try{var i,d,a='var hello = "world"',s=new Blob([a],{type:"text/javascript"}),c=URL.createObjectURL(s),f=new Worker(c);f.onerror=t,d=setTimeout(t,200),i=new ArrayBuffer(1),f.postMessage(i,[i]),n("transferables",0===i.byteLength),r()}catch(u){t()}})});