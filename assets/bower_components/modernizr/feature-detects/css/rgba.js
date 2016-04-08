/*!
{
  "name": "CSS rgba",
  "caniuse": "css3-colors",
  "property": "rgba",
  "tags": ["css"],
  "notes": [{
    "name": "CSSTricks Tutorial",
    "href": "https://css-tricks.com/rgba-browser-support/"
  }]
}
!*/
define(["Modernizr","createElement"],function(A,e){A.addTest("rgba",function(){var A=e("a").style;return A.cssText="background-color:rgba(150,255,150,.5)",(""+A.backgroundColor).indexOf("rgba")>-1})});