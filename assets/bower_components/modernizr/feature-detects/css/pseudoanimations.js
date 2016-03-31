/*!
{
  "name": "CSS Generated Content Animations",
  "property": "csspseudoanimations",
  "tags": ["css"]
}
!*/
define(["Modernizr","testStyles","test/css/animations"],function(A){A.addTest("csspseudoanimations",function(){var e=!1;if(!A.cssanimations||!window.getComputedStyle)return e;var t=["@",A._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',A._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return A.testStyles(t,function(A){e="10px"===window.getComputedStyle(A,":before").getPropertyValue("font-size")}),e})});