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
define(["Modernizr","testAllProps","testStyles","docElement","test/css/supports"],function(e,t,n,i){e.addTest("csstransforms3d",function(){var r=!!t("perspective","1px",!0),o=e._config.usePrefixes;if(r&&(!o||"webkitPerspective"in i.style)){var s,a="#modernizr{width:0;height:0}";e.supports?s="@supports (perspective: 1px)":(s="@media (transform-3d)",o&&(s+=",(-webkit-transform-3d)")),s+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",n(a+s,function(e){r=7===e.offsetWidth&&18===e.offsetHeight})}return r})});