/*!
{
  "name": "JSON",
  "property": "json",
  "caniuse": "json",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Glossary/JSON"
  }],
  "polyfills": ["json2"]
}
!*/
define(["Modernizr"],function(e){e.addTest("json","JSON"in window&&"parse"in JSON&&"stringify"in JSON)});