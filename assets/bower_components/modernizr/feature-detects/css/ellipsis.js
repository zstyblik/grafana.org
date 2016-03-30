/*!
{
  "name": "CSS text-overflow ellipsis",
  "property": "ellipsis",
  "caniuse": "text-overflow",
  "polyfills": [
    "text-overflow"
  ],
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(A,e){A.addTest("ellipsis",e("textOverflow","ellipsis"))});