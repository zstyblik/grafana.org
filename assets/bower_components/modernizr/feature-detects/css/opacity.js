/*!
{
  "name": "CSS Opacity",
  "caniuse": "css-opacity",
  "property": "opacity",
  "tags": ["css"]
}
!*/
define(["Modernizr","createElement","prefixes"],function(A,e,t){A.addTest("opacity",function(){var A=e("a").style;return A.cssText=t.join("opacity:.55;"),/^0.55$/.test(A.opacity)})});