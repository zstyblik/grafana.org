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
define(["Modernizr","inputElem","docElement"],function(A,e,t){var n="search tel url email datetime date month week time datetime-local number range color".split(" "),i={};A.inputtypes=function(A){for(var n,o,r,d=A.length,a="1)",s=0;d>s;s++)e.setAttribute("type",n=A[s]),r="text"!==e.type&&"style"in e,r&&(e.value=a,e.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(n)&&void 0!==e.style.WebkitAppearance?(t.appendChild(e),o=document.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle(e,null).WebkitAppearance&&0!==e.offsetHeight,t.removeChild(e)):/^(search|tel)$/.test(n)||(r=/^(url|email)$/.test(n)?e.checkValidity&&e.checkValidity()===!1:e.value!=a)),i[A[s]]=!!r;return i}(n)});