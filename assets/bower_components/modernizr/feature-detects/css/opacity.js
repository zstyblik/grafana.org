/*!
{
  "name": "CSS Opacity",
  "caniuse": "css-opacity",
  "property": "opacity",
  "tags": ["css"]
}
!*/
define(["Modernizr","createElement","prefixes"],function(A,e,n){A.addTest("opacity",function(){var A=e("a").style;return A.cssText=n.join("opacity:.55;"),/^0.55$/.test(A.opacity)})});