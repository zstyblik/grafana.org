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
define(["Modernizr","createElement","prefixes"],function(A,e,n){A.addTest("csspositionsticky",function(){var A="position:",t="sticky",i=e("a"),o=i.style;return o.cssText=A+n.join(t+";"+A).slice(0,-A.length),-1!==o.position.indexOf(t)})});