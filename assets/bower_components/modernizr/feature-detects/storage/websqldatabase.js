/*!
{
  "name": "Web SQL Database",
  "property": "websqldatabase",
  "caniuse": "sql-storage",
  "tags": ["storage"]
}
!*/
define(["Modernizr"],function(A){A.addTest("websqldatabase","openDatabase"in window)});