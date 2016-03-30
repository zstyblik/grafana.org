/*!
{
  "name": "Quota Storage Management API",
  "property": "quotamanagement",
  "tags": ["storage"],
  "builderAliases": ["quota_management_api"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/quota-api/"
  }]
}
!*/
define(["Modernizr","prefixed"],function(A,e){A.addTest("quotamanagement",function(){var A=e("temporaryStorage",navigator),t=e("persistentStorage",navigator);return!(!A||!t)})});