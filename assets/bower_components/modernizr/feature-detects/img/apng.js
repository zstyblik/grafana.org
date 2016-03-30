/*!
{
  "name": "Animated PNG",
  "async": true,
  "property": "apng",
  "tags": ["image"],
  "builderAliases": ["img_apng"],
  "notes": [{
    "name": "Wikipedia Article",
    "href": "https://en.wikipedia.org/wiki/APNG"
  }]
}
!*/
define(["Modernizr","createElement","addTest","test/canvas"],function(A,e,n){A.addAsyncTest(function(){if(!A.canvas)return!1;var t=new Image,i=e("canvas"),o=i.getContext("2d");t.onload=function(){n("apng",function(){return"undefined"==typeof i.getContext?!1:(o.drawImage(t,0,0),0===o.getImageData(0,0,1,1).data[3])})},t.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="})});