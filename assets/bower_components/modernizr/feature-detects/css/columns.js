/*!
{
  "name": "CSS Columns",
  "property": "csscolumns",
  "caniuse": "multicolumn",
  "polyfills": ["css3multicolumnjs"],
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(A,e){!function(){A.addTest("csscolumns",function(){var A=!1,t=e("columnCount");try{(A=!!t)&&(A=new Boolean(A))}catch(n){}return A});for(var t,n,i=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],o=0;o<i.length;o++)t=i[o].toLowerCase(),n=e("column"+i[o]),("breakbefore"===t||"breakafter"===t||"breakinside"==t)&&(n=n||e(i[o])),A.addTest("csscolumns."+t,n)}()});