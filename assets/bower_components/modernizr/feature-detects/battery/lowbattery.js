/*!
{
  "name": "Low Battery Level",
  "property": "lowbattery",
  "tags": ["hardware", "mobile"],
  "builderAliases": ["battery_level"],
  "authors": ["Paul Sayre"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/battery"
  }]
}
!*/
define(["Modernizr","prefixed"],function(A,e){A.addTest("lowbattery",function(){var A=.2,t=e("battery",navigator);return!!(t&&!t.charging&&t.level<=A)})});