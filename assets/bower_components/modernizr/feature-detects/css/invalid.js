/*!
{
  "name": "CSS :invalid pseudo-class",
  "property": "cssinvalid",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid"
  }]
}
!*/
define(["Modernizr","testStyles","createElement"],function(A,e,t){A.addTest("cssinvalid",function(){return e("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(A){var e=t("input");return e.required=!0,A.appendChild(e),e.clientWidth>10})})});