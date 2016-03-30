/*!
{
  "name": "will-change",
  "property": "willchange",
  "notes": [{
    "name": "Spec",
    "href": "https://drafts.csswg.org/css-will-change/"
  }]
}
!*/
define(["Modernizr","docElement"],function(A,e){A.addTest("willchange","willChange"in e.style)});