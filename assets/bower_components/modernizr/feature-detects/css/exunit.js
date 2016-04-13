/*!
{
  "name": "CSS Font ex Units",
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "property": "cssexunit",
  "tags": ["css"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/css3-values/#font-relative-lengths"
  }]
}
!*/
define(["Modernizr","modElem"],function(A,e){A.addTest("cssexunit",function(){var A,t=e.elem.style;try{t.fontSize="3ex",A=-1!==t.fontSize.indexOf("ex")}catch(n){A=!1}return A})});