/*!
{
  "name": "WebGL",
  "property": "webgl",
  "caniuse": "webgl",
  "tags": ["webgl", "graphics"],
  "polyfills": ["jebgl", "cwebgl", "iewebgl"]
}
!*/
define(["Modernizr","createElement"],function(A,e){A.addTest("webgl",function(){var A=e("canvas"),t="probablySupportsContext"in A?"probablySupportsContext":"supportsContext";return t in A?A[t]("webgl")||A[t]("experimental-webgl"):"WebGLRenderingContext"in window})});