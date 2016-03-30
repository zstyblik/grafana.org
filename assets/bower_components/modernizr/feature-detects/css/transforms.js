/*!
{
  "name": "CSS Transforms",
  "property": "csstransforms",
  "caniuse": "transforms2d",
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(A,e){A.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&e("transform","scale(1)",!0)})});