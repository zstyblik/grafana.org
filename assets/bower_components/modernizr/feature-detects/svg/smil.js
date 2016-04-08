/*!
{
  "name": "SVG SMIL animation",
  "property": "smil",
  "caniuse": "svg-smil",
  "tags": ["svg"],
  "notes": [{
  "name": "W3C Synchronised Multimedia spec",
  "href": "https://www.w3.org/AudioVideo/"
  }]
}
!*/
define(["Modernizr","toStringFn"],function(A,e){A.addTest("smil",function(){return!!document.createElementNS&&/SVGAnimate/.test(e.call(document.createElementNS("http://www.w3.org/2000/svg","animate")))})});