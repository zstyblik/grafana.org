/*!
{
  "name": "cssall",
  "property": "cssall",
  "notes": [{
    "name": "Spec",
    "href": "https://drafts.csswg.org/css-cascade/#all-shorthand"
  }]
}
!*/
define(["Modernizr","docElement"],function(A,e){A.addTest("cssall","all"in e.style)});