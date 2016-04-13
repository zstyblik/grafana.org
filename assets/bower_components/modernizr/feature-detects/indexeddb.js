/*!
{
  "name": "IndexedDB",
  "property": "indexeddb",
  "caniuse": "indexeddb",
  "tags": ["storage"],
  "polyfills": ["indexeddb"]
}
!*/
define(["Modernizr","prefixed"],function(A,e){var t;try{t=e("indexedDB",window)}catch(n){}A.addTest("indexeddb",!!t),t&&A.addTest("indexeddb.deletedatabase","deleteDatabase"in t)});