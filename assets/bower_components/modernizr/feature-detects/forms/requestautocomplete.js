/*!
{
  "name": "form#requestAutocomplete()",
  "property": "requestautocomplete",
  "tags": ["form", "forms", "requestAutocomplete", "payments"],
  "notes": [{
    "name": "WHATWG proposed spec",
    "href": "https://wiki.whatwg.org/wiki/RequestAutocomplete"
  }]
}
!*/
define(["Modernizr","createElement","prefixed"],function(A,e,t){A.addTest("requestautocomplete",!!t("requestAutocomplete",e("form")))});