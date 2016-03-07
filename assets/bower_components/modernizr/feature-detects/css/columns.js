/*!
{
  "name": "CSS Columns",
  "property": "csscolumns",
  "caniuse": "multicolumn",
  "polyfills": ["css3multicolumnjs"],
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(e,t){!function(){e.addTest("csscolumns",function(){var e=!1,i=t("columnCount");try{(e=!!i)&&(e=new Boolean(e))}catch(n){}return e});for(var i,n,r=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],o=0;o<r.length;o++)i=r[o].toLowerCase(),n=t("column"+r[o]),("breakbefore"===i||"breakafter"===i||"breakinside"==i)&&(n=n||t(r[o])),e.addTest("csscolumns."+i,n)}()});