/*!
{
  "name": "XHR responseType",
  "property": "xhrresponsetype",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
define(["Modernizr"],function(A){A.addTest("xhrresponsetype",function(){if("undefined"==typeof XMLHttpRequest)return!1;var A=new XMLHttpRequest;return A.open("get","/",!0),"response"in A}())});