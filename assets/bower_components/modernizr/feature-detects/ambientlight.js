/*!
{
  "name": "Ambient Light Events",
  "property": "ambientlight",
  "notes": [{
    "name": "W3C Ambient Light Events",
    "href": "https://www.w3.org/TR/ambient-light/"
  }]
}
!*/
define(["Modernizr","hasEvent"],function(t,e){t.addTest("ambientlight",e("devicelight",window))});