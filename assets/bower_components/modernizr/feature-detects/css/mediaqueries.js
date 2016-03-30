/*!
{
  "name": "CSS Media Queries",
  "caniuse": "css-mediaqueries",
  "property": "mediaqueries",
  "tags": ["css"],
  "builderAliases": ["css_mediaqueries"]
}
!*/
define(["Modernizr","mq"],function(A,e){A.addTest("mediaqueries",e("only all"))});