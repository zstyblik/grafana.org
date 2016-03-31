/*!
{
  "name": "Input attributes",
  "property": "input",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "notes": [{
    "name": "WHATWG spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#input-type-attr-summary"
  }],
  "knownBugs": ["Some blackberry devices report false positive for input.multiple"]
}
!*/
define(["Modernizr","createElement","inputElem"],function(A,e,t){var n="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),i={};A.input=function(A){for(var n=0,r=A.length;r>n;n++)i[A[n]]=!!(A[n]in t);return i.list&&(i.list=!(!e("datalist")||!window.HTMLDataListElement)),i}(n)});