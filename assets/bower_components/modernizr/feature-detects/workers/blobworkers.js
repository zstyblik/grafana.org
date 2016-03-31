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
define(["Modernizr","addTest"],function(e,n){e.addAsyncTest(function(){function t(){n("blobworkers",!1),r()}function r(){s&&i.revokeObjectURL(s),c&&c.terminate(),u&&clearTimeout(u)}try{var o=window.BlobBuilder,i=window.URL;e._config.usePrefix&&(o=o||window.MozBlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.OBlobBuilder,i=i||window.MozURL||window.webkitURL||window.MSURL||window.OURL);var a,d,c,s,u,l="Modernizr",f="this.onmessage=function(e){postMessage(e.data)}";try{a=new Blob([f],{type:"text/javascript"})}catch(m){}a||(d=new o,d.append(f),a=d.getBlob()),s=i.createObjectURL(a),c=new Worker(s),c.onmessage=function(e){n("blobworkers",l===e.data),r()},c.onerror=t,u=setTimeout(t,200),c.postMessage(l)}catch(m){t()}})});