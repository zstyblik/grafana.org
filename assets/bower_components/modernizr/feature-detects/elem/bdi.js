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
define(["Modernizr","createElement","docElement"],function(e,t,n){e.addTest("bdi",function(){var e=t("div"),r=t("bdi");r.innerHTML="&#1573;",e.appendChild(r),n.appendChild(e);var o="rtl"===(window.getComputedStyle?getComputedStyle(r,null):r.currentStyle).direction;return n.removeChild(e),o})});