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
define(["Modernizr","testAllProps","testStyles","docElement","test/css/supports"],function(e,t,n,r){e.addTest("csstransforms3d",function(){var s=!!t("perspective","1px",!0),i=e._config.usePrefixes;if(s&&(!i||"webkitPerspective"in r.style)){var o;e.supports?o="@supports (perspective: 1px)":(o="@media (transform-3d)",i&&(o+=",(-webkit-transform-3d)")),o+="{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",n(o,function(e){s=9===e.offsetLeft&&5===e.offsetHeight})}return s})});