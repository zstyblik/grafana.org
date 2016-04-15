/*!
{
  "name": "input[directory] Attribute",
  "property": "directory",
  "authors": ["silverwind"],
  "tags": ["file", "input", "attribute"]
}
!*/
define(["Modernizr","createElement","domPrefixes"],function(t,e,n){t.addTest("fileinputdirectory",function(){var t=e("input"),i="directory";if(t.type="file",i in t)return!0;for(var r=0,o=n.length;o>r;r++)if(n[r]+i in t)return!0;return!1})});