/*!
{
  "name": "placeholder attribute",
  "property": "placeholder",
  "tags": ["forms", "attribute"],
  "builderAliases": ["forms_placeholder"]
}
!*/
define(["Modernizr","createElement"],function(A,e){A.addTest("placeholder","placeholder"in e("input")&&"placeholder"in e("textarea"))});