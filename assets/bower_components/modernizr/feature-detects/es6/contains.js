/*!
{
  "name": "ES5 String.prototype.contains",
  "property": "contains",
  "authors": ["Robert Kowalski"],
  "tags": ["es6"]
}
!*/
define(["Modernizr","is"],function(t,e){t.addTest("contains",e(String.prototype.contains,"function"))});