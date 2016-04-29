/*!
{
  "name": "CSS position: sticky",
  "property": "csspositionsticky",
  "tags": ["css"],
  "builderAliases": ["css_positionsticky"],
  "notes": [{
    "name": "Chrome bug report",
    "href":"https://code.google.com/p/chromium/issues/detail?id=322972"
  }],
  "warnings": [ "using position:sticky on anything but top aligned elements is buggy in Chrome < 37 and iOS <=7+" ]
}
!*/
define(["Modernizr","createElement","prefixes"],function(t,e,n){t.addTest("csspositionsticky",function(){var t="position:",i="sticky",r=e("a"),o=r.style;return o.cssText=t+n.join(i+";"+t).slice(0,-t.length),-1!==o.position.indexOf(i)})});