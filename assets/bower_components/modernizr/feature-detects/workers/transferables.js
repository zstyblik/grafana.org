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
define(["Modernizr","addTest","test/blob","test/url/bloburls","test/workers/webworkers","test/typed-arrays"],function(e,n){e.addAsyncTest(function(){function t(){n("transferables",!1),o()}function o(){c&&URL.revokeObjectURL(c),l&&l.terminate(),d&&clearTimeout(d)}var i=!!(e.blobconstructor&&e.bloburls&&e.webworkers&&e.typedarrays);if(!i)return n("transferables",!1);try{var r,d,a='var hello = "world"',s=new Blob([a],{type:"text/javascript"}),c=URL.createObjectURL(s),l=new Worker(c);l.onerror=t,d=setTimeout(t,200),r=new ArrayBuffer(1),l.postMessage(r,[r]),n("transferables",0===r.byteLength),o()}catch(f){t()}})});