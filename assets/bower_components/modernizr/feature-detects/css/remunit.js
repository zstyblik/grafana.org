/*!
{
  "name": "CSS Font rem Units",
  "caniuse": "rem",
  "authors": ["nsfmc"],
  "property": "cssremunit",
  "tags": ["css"],
  "builderAliases": ["css_remunit"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/css3-values/#relative0"
  },{
    "name": "Font Size with rem by Jonathan Snook",
    "href": "http://snook.ca/archives/html_and_css/font-size-with-rem"
  }]
}
!*/
define(["Modernizr","createElement"],function(t,e){t.addTest("cssremunit",function(){var t=e("a").style;try{t.fontSize="3rem"}catch(n){}return/rem/.test(t.fontSize)})});