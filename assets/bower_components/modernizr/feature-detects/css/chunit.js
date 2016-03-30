/*!
{
  "name": "CSS Font ch Units",
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "property": "csschunit",
  "tags": ["css"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/css3-values/#font-relative-lengths"
  }]
}
!*/
define(["Modernizr","modElem"],function(A,e){A.addTest("csschunit",function(){var A,t=e.elem.style;try{t.fontSize="3ch",A=-1!==t.fontSize.indexOf("ch")}catch(n){A=!1}return A})});