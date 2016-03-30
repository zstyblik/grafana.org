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
define(["Modernizr","addTest","test/blob","test/url/bloburls","test/workers/webworkers","test/typed-arrays"],function(e,n){e.addAsyncTest(function(){function t(){n("transferables",!1),o()}function o(){s&&URL.revokeObjectURL(s),u&&u.terminate(),a&&clearTimeout(a)}var r=!!(e.blobconstructor&&e.bloburls&&e.webworkers&&e.typedarrays);if(!r)return n("transferables",!1);try{var i,a,d='var hello = "world"',c=new Blob([d],{type:"text/javascript"}),s=URL.createObjectURL(c),u=new Worker(s);u.onerror=t,a=setTimeout(t,200),i=new ArrayBuffer(1),u.postMessage(i,[i]),n("transferables",0===i.byteLength),o()}catch(f){t()}})});