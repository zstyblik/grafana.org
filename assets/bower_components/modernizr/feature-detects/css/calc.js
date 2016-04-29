/*!
{
  "name": "CSS Calc",
  "property": "csscalc",
  "caniuse": "calc",
  "tags": ["css"],
  "builderAliases": ["css_calc"],
  "authors": ["@calvein"]
}
!*/
define(["Modernizr","createElement","prefixes"],function(e,t,s){e.addTest("csscalc",function(){var e="width:",n="calc(10px);",i=t("a");return i.style.cssText=e+s.join(n+e),!!i.style.length})});