/*!
{
  "name": "DOM Pointer Events API",
  "property": "pointerevents",
  "tags": ["input"],
  "authors": ["Stu Cox"],
  "notes": [
    {
      "name": "W3C spec",
      "href": "https://www.w3.org/TR/pointerevents/"
    }
  ],
  "warnings": ["This property name now refers to W3C DOM PointerEvents: https://github.com/Modernizr/Modernizr/issues/548#issuecomment-12812099"],
  "polyfills": ["handjs"]
}
!*/
define(["Modernizr","domPrefixes","hasEvent"],function(e,t,n){e.addTest("pointerevents",function(){var r=!1,o=t.length;for(r=e.hasEvent("pointerdown");o--&&!r;)n(t[o]+"pointerdown")&&(r=!0);return r})});