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
define(["Modernizr","addTest"],function(e,t){e.addAsyncTest(function(){function n(){t("blobworkers",!1),i()}function i(){c&&o.revokeObjectURL(c),u&&u.terminate(),l&&clearTimeout(l)}try{var r=window.BlobBuilder,o=window.URL;e._config.usePrefix&&(r=r||window.MozBlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.OBlobBuilder,o=o||window.MozURL||window.webkitURL||window.MSURL||window.OURL);var s,a,u,c,l,f="Modernizr",d="this.onmessage=function(e){postMessage(e.data)}";try{s=new Blob([d],{type:"text/javascript"})}catch(p){}s||(a=new r,a.append(d),s=a.getBlob()),c=o.createObjectURL(s),u=new Worker(c),u.onmessage=function(e){t("blobworkers",f===e.data),i()},u.onerror=n,l=setTimeout(n,200),u.postMessage(f)}catch(p){n()}})});