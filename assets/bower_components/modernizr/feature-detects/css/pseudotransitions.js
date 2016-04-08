/*!
{
  "name": "CSS Generated Content Transitions",
  "property": "csspseudotransitions",
  "tags": ["css"]
}
!*/
define(["Modernizr","testStyles","test/css/transitions"],function(A){A.addTest("csspseudotransitions",function(){var e=!1;if(!A.csstransitions||!window.getComputedStyle)return e;var t='#modernizr:before { content:" "; font-size:5px;'+A._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return A.testStyles(t,function(A){window.getComputedStyle(A,":before").getPropertyValue("font-size"),A.className+="trigger",e="5px"===window.getComputedStyle(A,":before").getPropertyValue("font-size")}),e})});