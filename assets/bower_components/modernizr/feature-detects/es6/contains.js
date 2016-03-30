/*!
{
  "name": "ES5 String.prototype.contains",
  "property": "contains",
  "authors": ["Robert Kowalski"],
  "tags": ["es6"]
}
!*/
define(["Modernizr","is"],function(A,e){A.addTest("contains",e(String.prototype.contains,"function"))});