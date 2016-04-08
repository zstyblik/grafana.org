/*!
{
  "name": "CSS Reflections",
  "caniuse": "css-reflections",
  "property": "cssreflections",
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(A,e){A.addTest("cssreflections",e("boxReflect","above",!0))});