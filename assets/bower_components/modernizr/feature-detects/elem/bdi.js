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
define(["Modernizr","createElement","docElement"],function(e,t,n){e.addTest("bdi",function(){var e=t("div"),o=t("bdi");o.innerHTML="&#1573;",e.appendChild(o),n.appendChild(e);var r="rtl"===(window.getComputedStyle?getComputedStyle(o,null):o.currentStyle).direction;return n.removeChild(e),r})});