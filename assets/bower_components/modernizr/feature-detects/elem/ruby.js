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
define(["Modernizr","createElement","docElement"],function(e,n,t){e.addTest("ruby",function(){function e(e,n){var t;return window.getComputedStyle?t=document.defaultView.getComputedStyle(e,null).getPropertyValue(n):e.currentStyle&&(t=e.currentStyle[n]),t}function o(){t.removeChild(i),i=null,r=null,d=null}var i=n("ruby"),r=n("rt"),d=n("rp"),a="display",s="fontSize";return i.appendChild(d),i.appendChild(r),t.appendChild(i),"none"==e(d,a)||"ruby"==e(i,a)&&"ruby-text"==e(r,a)||"6pt"==e(d,s)&&"6pt"==e(r,s)?(o(),!0):(o(),!1)})});