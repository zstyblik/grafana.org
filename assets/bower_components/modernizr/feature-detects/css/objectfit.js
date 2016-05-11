/*!
{
  "name": "CSS Object Fit",
  "caniuse": "object-fit",
  "property": "objectfit",
  "tags": ["css"],
  "builderAliases": ["css_objectfit"],
  "notes": [{
    "name": "Opera Article on Object Fit",
    "href": "http://dev.opera.com/articles/view/css3-object-fit-object-position/"
  }]
}
!*/
define(["Modernizr","prefixed"],function(t,n){t.addTest("objectfit",!!n("objectFit"),{aliases:["object-fit"]})});