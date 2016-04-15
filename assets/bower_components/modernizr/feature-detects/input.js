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
define(["Modernizr","createElement","inputElem"],function(t,e,n){var i="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),r={};t.input=function(t){for(var i=0,o=t.length;o>i;i++)r[t[i]]=!!(t[i]in n);return r.list&&(r.list=!(!e("datalist")||!window.HTMLDataListElement)),r}(i)});