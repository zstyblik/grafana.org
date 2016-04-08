/*!
{
  "name": "ruby, rp, rt Elements",
  "caniuse": "ruby",
  "property": "ruby",
  "tags": ["elem"],
  "builderAliases": ["elem_ruby"],
  "authors": ["Cătălin Mariș"],
  "notes": [{
    "name": "WHATWG Specification",
    "href": "https://html.spec.whatwg.org/multipage/semantics.html#the-ruby-element"
  }]
}
!*/
define(["Modernizr","createElement","docElement"],function(e,n,t){e.addTest("ruby",function(){function e(e,n){var t;return window.getComputedStyle?t=document.defaultView.getComputedStyle(e,null).getPropertyValue(n):e.currentStyle&&(t=e.currentStyle[n]),t}function r(){t.removeChild(o),o=null,i=null,d=null}var o=n("ruby"),i=n("rt"),d=n("rp"),a="display",s="fontSize";return o.appendChild(d),o.appendChild(i),t.appendChild(o),"none"==e(d,a)||"ruby"==e(o,a)&&"ruby-text"==e(i,a)||"6pt"==e(d,s)&&"6pt"==e(i,s)?(r(),!0):(r(),!1)})});