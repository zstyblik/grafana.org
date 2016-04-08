/*!
{
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
  ]
}
!*/
define(["Modernizr","testAllProps","testStyles","docElement","test/css/supports"],function(A,e,t,n){A.addTest("csstransforms3d",function(){var i=!!e("perspective","1px",!0),o=A._config.usePrefixes;if(i&&(!o||"webkitPerspective"in n.style)){var r,d="#modernizr{width:0;height:0}";A.supports?r="@supports (perspective: 1px)":(r="@media (transform-3d)",o&&(r+=",(-webkit-transform-3d)")),r+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",t(d+r,function(A){i=7===A.offsetWidth&&18===A.offsetHeight})}return i})});