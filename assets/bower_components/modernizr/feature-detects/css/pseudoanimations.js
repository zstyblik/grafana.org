/*!
{
  "name": "CSS Generated Content Animations",
  "property": "csspseudoanimations",
  "tags": ["css"]
}
!*/
define(["Modernizr","testStyles","test/css/animations"],function(t){t.addTest("csspseudoanimations",function(){var e=!1;if(!t.cssanimations||!window.getComputedStyle)return e;var n=["@",t._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',t._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return t.testStyles(n,function(t){e="10px"===window.getComputedStyle(t,":before").getPropertyValue("font-size")}),e})});