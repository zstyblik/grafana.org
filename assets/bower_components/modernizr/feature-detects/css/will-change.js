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
define(["Modernizr","docElement"],function(e,t){e.addTest("willchange","willChange"in t.style)});