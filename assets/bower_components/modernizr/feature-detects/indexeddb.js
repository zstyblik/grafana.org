/*!
{
  "name": "IndexedDB",
  "property": "indexeddb",
  "caniuse": "indexeddb",
  "tags": ["storage"],
  "polyfills": ["indexeddb"]
}
!*/
define(["Modernizr","prefixed"],function(e,t){var n;try{n=t("indexedDB",window)}catch(i){}e.addTest("indexeddb",!!n),n&&e.addTest("indexeddb.deletedatabase","deleteDatabase"in n)});