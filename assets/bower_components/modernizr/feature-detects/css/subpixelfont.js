/*!
{
  "name": "CSS Subpixel Fonts",
  "property": "subpixelfont",
  "tags": ["css"],
  "builderAliases": ["css_subpixelfont"],
  "authors": [
    "@derSchepp",
    "@gerritvanaaken",
    "@rodneyrehm",
    "@yatil",
    "@ryanseddon"
  ],
  "notes": [{
    "name": "Origin Test",
    "href": "https://github.com/gerritvanaaken/subpixeldetect"
  }]
}
!*/
define(["Modernizr","testStyles"],function(A,e){e("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}",function(e){var t=e.firstChild;t.innerHTML="This is a text written in Arial",A.addTest("subpixelfont",window.getComputedStyle?"44px"!==window.getComputedStyle(t,null).getPropertyValue("width"):!1)},1,["subpixel"])});