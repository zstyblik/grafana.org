/*!
{
  "name": "Local Storage",
  "property": "localstorage",
  "caniuse": "namevalue-storage",
  "tags": ["storage"],
  "knownBugs": [],
  "notes": [],
  "warnings": [],
  "polyfills": [
    "joshuabell-polyfill",
    "cupcake",
    "storagepolyfill",
    "amplifyjs",
    "yui-cacheoffline"
  ]
}
!*/
define(["Modernizr"],function(A){A.addTest("localstorage",function(){var A="modernizr";try{return localStorage.setItem(A,A),localStorage.removeItem(A),!0}catch(e){return!1}})});