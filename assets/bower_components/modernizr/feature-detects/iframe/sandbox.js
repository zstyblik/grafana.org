/*!
{
  "name": "iframe[sandbox] Attribute",
  "property": "sandbox",
  "tags": ["iframe"],
  "builderAliases": ["iframe_sandbox"],
  "notes": [
  {
    "name": "WhatWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/embedded-content.html#attr-iframe-sandbox"
  }],
  "knownBugs": [ "False-positive on Firefox < 29" ]
}
!*/
define(["Modernizr","createElement"],function(t,e){t.addTest("sandbox","sandbox"in e("iframe"))});