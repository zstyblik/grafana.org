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
define(["Modernizr","createElement","test/webgl"],function(e,t){e.addAsyncTest(function(){if(e.webglextensions=new Boolean(!1),e.webgl){var n,o,i;try{n=t("canvas"),o=n.getContext("webgl")||n.getContext("experimental-webgl"),i=o.getSupportedExtensions()}catch(r){return}void 0!==o&&(e.webglextensions=new Boolean(!0));for(var a=-1,d=i.length;++a<d;)e.webglextensions[i[a]]=!0;n=void 0}})});