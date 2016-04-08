/*!
{
  "name": "bdi Element",
  "property": "bdi",
  "notes": [{
    "name": "MDN Overview",
    "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi"
  }]
}
!*/
define(["Modernizr","createElement","docElement"],function(e,n,t){e.addTest("bdi",function(){var e=n("div"),r=n("bdi");r.innerHTML="&#1573;",e.appendChild(r),t.appendChild(e);var o="rtl"===(window.getComputedStyle?getComputedStyle(r,null):r.currentStyle).direction;return t.removeChild(e),o})});