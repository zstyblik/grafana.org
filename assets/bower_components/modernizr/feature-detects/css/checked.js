/*!
{
  "name": "CSS :checked pseudo-selector",
  "caniuse": "css-sel3",
  "property": "checked",
  "tags": ["css"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/879"
  }]
}
!*/
define(["Modernizr","createElement","testStyles"],function(A,e,t){A.addTest("checked",function(){return t("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(A){var t=e("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),A.appendChild(t),20===t.offsetLeft})})});