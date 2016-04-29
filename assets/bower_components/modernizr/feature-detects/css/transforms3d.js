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
define(["Modernizr","testAllProps","testStyles","docElement","test/css/supports"],function(e,t,s,n){e.addTest("csstransforms3d",function(){var r=!!t("perspective","1px",!0),o=e._config.usePrefixes;if(r&&(!o||"webkitPerspective"in n.style)){var i;e.supports?i="@supports (perspective: 1px)":(i="@media (transform-3d)",o&&(i+=",(-webkit-transform-3d)")),i+="{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",s(i,function(e){r=9===e.offsetLeft&&5===e.offsetHeight})}return r})});