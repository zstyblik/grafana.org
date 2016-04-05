/*!
{
  "name": "Vibration API",
  "property": "vibrate",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/DOM/window.navigator.mozVibrate"
  },{
    "name": "W3C spec",
    "href": "https://www.w3.org/TR/vibration/"
  }]
}
!*/
define(["Modernizr","prefixed"],function(t,e){t.addTest("vibrate",!!e("vibrate",navigator))});