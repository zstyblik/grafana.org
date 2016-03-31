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
define(["Modernizr","createElement","docElement"],function(e,t,n){e.addTest("ruby",function(){function e(e,t){var n;return window.getComputedStyle?n=document.defaultView.getComputedStyle(e,null).getPropertyValue(t):e.currentStyle&&(n=e.currentStyle[t]),n}function r(){n.removeChild(o),o=null,i=null,d=null}var o=t("ruby"),i=t("rt"),d=t("rp"),a="display",c="fontSize";return o.appendChild(d),o.appendChild(i),n.appendChild(o),"none"==e(d,a)||"ruby"==e(o,a)&&"ruby-text"==e(i,a)||"6pt"==e(d,c)&&"6pt"==e(i,c)?(r(),!0):(r(),!1)})});