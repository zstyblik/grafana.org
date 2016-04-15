/*!
{
  "name": "WebGL",
  "property": "webgl",
  "caniuse": "webgl",
  "tags": ["webgl", "graphics"],
  "polyfills": ["jebgl", "cwebgl", "iewebgl"]
}
!*/
define(["Modernizr","createElement"],function(t,e){t.addTest("webgl",function(){var t=e("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in window})});