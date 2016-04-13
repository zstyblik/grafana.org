/*!
{
  "name": "Form input types",
  "property": "inputtypes",
  "caniuse": "forms",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "polyfills": [
    "jquerytools",
    "webshims",
    "h5f",
    "webforms2",
    "nwxforms",
    "fdslider",
    "html5slider",
    "galleryhtml5forms",
    "jscolor",
    "html5formshim",
    "selectedoptionsjs",
    "formvalidationjs"
  ]
}
!*/
define(["Modernizr","inputElem","docElement"],function(t,e,n){var i="search tel url email datetime date month week time datetime-local number range color".split(" "),r={};t.inputtypes=function(t){for(var i,o,s,a=t.length,u="1)",c=0;a>c;c++)e.setAttribute("type",i=t[c]),s="text"!==e.type&&"style"in e,s&&(e.value=u,e.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&void 0!==e.style.WebkitAppearance?(n.appendChild(e),o=document.defaultView,s=o.getComputedStyle&&"textfield"!==o.getComputedStyle(e,null).WebkitAppearance&&0!==e.offsetHeight,n.removeChild(e)):/^(search|tel)$/.test(i)||(s=/^(url|email)$/.test(i)?e.checkValidity&&e.checkValidity()===!1:e.value!=u)),r[t[c]]=!!s;return r}(i)});