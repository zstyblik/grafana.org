/*!
{
  "name": "Canvas",
  "property": "canvas",
  "caniuse": "canvas",
  "tags": ["canvas", "graphics"],
  "polyfills": ["flashcanvas", "excanvas", "slcanvas", "fxcanvas"]
}
!*/
define(["Modernizr","createElement"],function(A,e){A.addTest("canvas",function(){var A=e("canvas");return!(!A.getContext||!A.getContext("2d"))})});