/*! {
  "name": "hairline",
  "property": "csshairline",
  "tags": ["css"],
  "authors": ["strarsis"],
  "notes": [{
    "name": "Blog post about CSS retina hairlines",
    "href": "http://dieulot.net/css-retina-hairline"
  },{
    "name": "Derived from",
    "href": "https://gist.github.com/dieulot/520a49463f6058fbc8d1"
  }]
}
!*/
define(["Modernizr","testStyles"],function(A,e){A.addTest("hairline",function(){return e("#modernizr {border:.5px solid transparent}",function(A){return 1===A.offsetHeight})})});