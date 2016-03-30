/*!
{
  "name": "CSS HSLA Colors",
  "caniuse": "css3-colors",
  "property": "hsla",
  "tags": ["css"]
}
!*/
define(["Modernizr","createElement","contains"],function(A,e,t){A.addTest("hsla",function(){var A=e("a").style;return A.cssText="background-color:hsla(120,40%,100%,.5)",t(A.backgroundColor,"rgba")||t(A.backgroundColor,"hsla")})});