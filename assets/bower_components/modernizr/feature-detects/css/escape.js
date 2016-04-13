/*!
{
  "name": "CSS.escape()",
  "property": "cssescape",
  "polyfills": [
    "css-escape"
  ],
  "tags": [
    "css",
    "cssom"
  ]
}
!*/
define(["Modernizr"],function(A){var e=window.CSS;A.addTest("cssescape",e?"function"==typeof e.escape:!1)});