/*!
{
  "name": "input[directory] Attribute",
  "property": "directory",
  "authors": ["silverwind"],
  "tags": ["file", "input", "attribute"]
}
!*/
define(["Modernizr","createElement","domPrefixes"],function(A,e,t){A.addTest("fileinputdirectory",function(){var A=e("input"),n="directory";if(A.type="file",n in A)return!0;for(var i=0,o=t.length;o>i;i++)if(t[i]+n in A)return!0;return!1})});