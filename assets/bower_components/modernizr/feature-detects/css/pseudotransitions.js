/*!
{
  "name": "CSS Generated Content Transitions",
  "property": "csspseudotransitions",
  "tags": ["css"]
}
!*/
define(["Modernizr","testStyles","test/css/transitions"],function(t){t.addTest("csspseudotransitions",function(){var e=!1;if(!t.csstransitions||!window.getComputedStyle)return e;var n='#modernizr:before { content:" "; font-size:5px;'+t._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return t.testStyles(n,function(t){window.getComputedStyle(t,":before").getPropertyValue("font-size"),t.className+="trigger",e="5px"===window.getComputedStyle(t,":before").getPropertyValue("font-size")}),e})});