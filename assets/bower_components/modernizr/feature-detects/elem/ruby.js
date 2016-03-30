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
define(["Modernizr","createElement","docElement"],function(e,t,n){e.addTest("ruby",function(){function e(e,t){var n;return window.getComputedStyle?n=document.defaultView.getComputedStyle(e,null).getPropertyValue(t):e.currentStyle&&(n=e.currentStyle[t]),n}function o(){n.removeChild(r),r=null,i=null,d=null}var r=t("ruby"),i=t("rt"),d=t("rp"),a="display",c="fontSize";return r.appendChild(d),r.appendChild(i),n.appendChild(r),"none"==e(d,a)||"ruby"==e(r,a)&&"ruby-text"==e(i,a)||"6pt"==e(d,c)&&"6pt"==e(i,c)?(o(),!0):(o(),!1)})});