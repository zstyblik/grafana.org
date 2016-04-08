/*!
{
  "name": "Workers from Blob URIs",
  "property": "blobworkers",
  "tags": ["performance", "workers"],
  "builderAliases": ["workers_blobworkers"],
  "notes": [{
    "name": "W3C Reference",
    "href": "https://www.w3.org/TR/workers/"
  }],
  "knownBugs": ["This test may output garbage to console."],
  "authors": ["Jussi Kalliokoski"],
  "async": true
}
!*/
define(["Modernizr","addTest"],function(e,n){e.addAsyncTest(function(){function t(){n("blobworkers",!1),o()}function o(){s&&r.revokeObjectURL(s),c&&c.terminate(),f&&clearTimeout(f)}try{var i=window.BlobBuilder,r=window.URL;e._config.usePrefix&&(i=i||window.MozBlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.OBlobBuilder,r=r||window.MozURL||window.webkitURL||window.MSURL||window.OURL);var d,a,c,s,f,u="Modernizr",l="this.onmessage=function(e){postMessage(e.data)}";try{d=new Blob([l],{type:"text/javascript"})}catch(w){}d||(a=new i,a.append(l),d=a.getBlob()),s=r.createObjectURL(d),c=new Worker(s),c.onmessage=function(e){n("blobworkers",u===e.data),o()},c.onerror=t,f=setTimeout(t,200),c.postMessage(u)}catch(w){t()}})});