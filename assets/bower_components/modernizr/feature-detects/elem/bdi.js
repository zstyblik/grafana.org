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
define(["Modernizr","createElement","docElement"],function(e,t,n){e.addTest("bdi",function(){var e=t("div"),i=t("bdi");i.innerHTML="&#1573;",e.appendChild(i),n.appendChild(e);var r="rtl"===(window.getComputedStyle?getComputedStyle(i,null):i.currentStyle).direction;return n.removeChild(e),r})});