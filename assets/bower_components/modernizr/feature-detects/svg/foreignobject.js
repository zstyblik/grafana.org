/*!
{
  "name": "SVG foreignObject",
  "property": "svgforeignobject",
  "tags": ["svg"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/SVG11/extend.html"
  }]
}
!*/
define(["Modernizr","toStringFn"],function(A,e){A.addTest("svgforeignobject",function(){return!!document.createElementNS&&/SVGForeignObject/.test(e.call(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")))})});