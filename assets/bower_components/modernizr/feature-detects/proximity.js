/*!
{
  "authors": ["Cătălin Mariș"],
  "caniuse": "proximity",
  "name": "Proximity API",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Proximity_Events"
  },{
    "name": "W3C specification",
    "href": "https://www.w3.org/TR/proximity/"
  }],
  "property": "proximity",
  "tags": ["events", "proximity"]
}
!*/
define(["Modernizr","addTest"],function(A,e){A.addAsyncTest(function(){function A(){clearTimeout(t),window.removeEventListener("deviceproximity",A),e("proximity",!0)}var t,n=300;"ondeviceproximity"in window&&"onuserproximity"in window?(window.addEventListener("deviceproximity",A),t=setTimeout(function(){window.removeEventListener("deviceproximity",A),e("proximity",!1)},n)):e("proximity",!1)})});