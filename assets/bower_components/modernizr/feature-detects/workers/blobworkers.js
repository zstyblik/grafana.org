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
define(["Modernizr","addTest"],function(e,n){e.addAsyncTest(function(){function t(){n("blobworkers",!1),o()}function o(){c&&r.revokeObjectURL(c),s&&s.terminate(),f&&clearTimeout(f)}try{var i=window.BlobBuilder,r=window.URL;e._config.usePrefix&&(i=i||window.MozBlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.OBlobBuilder,r=r||window.MozURL||window.webkitURL||window.MSURL||window.OURL);var d,a,s,c,f,l="Modernizr",u="this.onmessage=function(e){postMessage(e.data)}";try{d=new Blob([u],{type:"text/javascript"})}catch(w){}d||(a=new i,a.append(u),d=a.getBlob()),c=r.createObjectURL(d),s=new Worker(c),s.onmessage=function(e){n("blobworkers",l===e.data),o()},s.onerror=t,f=setTimeout(t,200),s.postMessage(l)}catch(w){t()}})});