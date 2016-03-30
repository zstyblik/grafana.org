/*!
{
  "name": "CSS :last-child pseudo-selector",
  "caniuse": "css-sel3",
  "property": "lastchild",
  "tags": ["css"],
  "builderAliases": ["css_lastchild"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/304"
  }]
}
!*/
define(["Modernizr","testStyles"],function(A,e){e("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){A.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2)});