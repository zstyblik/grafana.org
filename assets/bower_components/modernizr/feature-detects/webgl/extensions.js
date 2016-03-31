/*!
{
  "name": "WebGL Extensions",
  "property": "webglextensions",
  "tags": ["webgl", "graphics"],
  "builderAliases": ["webgl_extensions"],
  "async" : true,
  "authors": ["Ilmari Heikkinen"],
  "knownBugs": [],
  "notes": [{
    "name": "Kronos extensions registry",
    "href": "http://www.khronos.org/registry/webgl/extensions/"
  }]
}
!*/
define(["Modernizr","createElement","test/webgl"],function(e,t){e.addAsyncTest(function(){if(e.webglextensions=new Boolean(!1),e.webgl){var n,r,o;try{n=t("canvas"),r=n.getContext("webgl")||n.getContext("experimental-webgl"),o=r.getSupportedExtensions()}catch(i){return}void 0!==r&&(e.webglextensions=new Boolean(!0));for(var a=-1,c=o.length;++a<c;)e.webglextensions[o[a]]=!0;n=void 0}})});