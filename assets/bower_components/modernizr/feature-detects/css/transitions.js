/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(A,e){A.addTest("csstransitions",e("transition","all",!0))});