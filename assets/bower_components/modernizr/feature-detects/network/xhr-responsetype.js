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
define(["Modernizr"],function(t){t.addTest("xhrresponsetype",function(){if("undefined"==typeof XMLHttpRequest)return!1;var t=new XMLHttpRequest;return t.open("get","/",!0),"response"in t}())});