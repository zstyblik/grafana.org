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
define(["Modernizr","addTest"],function(e,n){e.addAsyncTest(function(){function t(){n("blobworkers",!1),o()}function o(){s&&r.revokeObjectURL(s),c&&c.terminate(),u&&clearTimeout(u)}try{var i=window.BlobBuilder,r=window.URL;e._config.usePrefix&&(i=i||window.MozBlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.OBlobBuilder,r=r||window.MozURL||window.webkitURL||window.MSURL||window.OURL);var d,a,c,s,u,f="Modernizr",l="this.onmessage=function(e){postMessage(e.data)}";try{d=new Blob([l],{type:"text/javascript"})}catch(m){}d||(a=new i,a.append(l),d=a.getBlob()),s=r.createObjectURL(d),c=new Worker(s),c.onmessage=function(e){n("blobworkers",f===e.data),o()},c.onerror=t,u=setTimeout(t,200),c.postMessage(f)}catch(m){t()}})});