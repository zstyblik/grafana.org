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
define(["Modernizr","createElement","prefixes"],function(A,e,t){A.addTest("csscalc",function(){var A="width:",n="calc(10px);",i=e("a");return i.style.cssText=A+t.join(n+A),!!i.style.length})});