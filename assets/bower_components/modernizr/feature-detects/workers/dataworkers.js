/*!
{
  "name": "Workers from Data URIs",
  "property": "dataworkers",
  "tags": ["performance", "workers"],
  "builderAliases": ["workers_dataworkers"],
  "notes": [{
    "name": "W3C Reference",
    "href": "https://www.w3.org/TR/workers/"
  }],
  "knownBugs": ["This test may output garbage to console."],
  "authors": ["Jussi Kalliokoski"],
  "async": true
}
!*/
define(["Modernizr","addTest"],function(e,n){e.addAsyncTest(function(){try{var e="Modernizr",t=new Worker("data:text/javascript;base64,dGhpcy5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7cG9zdE1lc3NhZ2UoZS5kYXRhKX0=");t.onmessage=function(o){t.terminate(),n("dataworkers",e===o.data),t=null},t.onerror=function(){n("dataworkers",!1),t=null},setTimeout(function(){n("dataworkers",!1)},200),t.postMessage(e)}catch(o){setTimeout(function(){n("dataworkers",!1)},0)}})});