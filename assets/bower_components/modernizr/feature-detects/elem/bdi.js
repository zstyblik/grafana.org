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
define(["Modernizr","createElement","docElement"],function(e,n,t){e.addTest("bdi",function(){var e=n("div"),o=n("bdi");o.innerHTML="&#1573;",e.appendChild(o),t.appendChild(e);var i="rtl"===(window.getComputedStyle?getComputedStyle(o,null):o.currentStyle).direction;return t.removeChild(e),i})});