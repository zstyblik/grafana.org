/*!
{
  "name": "CSS :valid pseudo-class",
  "property": "cssvalid",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:valid"
  }]
}
!*/
define(["Modernizr","testStyles","createElement"],function(A,e,t){A.addTest("cssvalid",function(){return e("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(A){var e=t("input");return A.appendChild(e),e.clientWidth>10})})});