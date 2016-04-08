/*!
{
  "name": "Framed window",
  "property": "framed",
  "tags": ["window"],
  "builderAliases": ["window_framed"]
}
!*/
define(["Modernizr"],function(A){A.addTest("framed",window.location!=top.location)});