/*!
{
  "name": "dataset API",
  "caniuse": "dataset",
  "property": "dataset",
  "tags": ["dom"],
  "builderAliases": ["dom_dataset"],
  "authors": ["@phiggins42"]
}
!*/
define(["Modernizr","createElement"],function(A,e){A.addTest("dataset",function(){var A=e("div");return A.setAttribute("data-a-b","c"),!(!A.dataset||"c"!==A.dataset.aB)})});