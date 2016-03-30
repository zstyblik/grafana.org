/*!
{
  "name": "CSS general sibling selector",
  "caniuse": "css-sel3",
  "property": "siblinggeneral",
  "tags": ["css"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/889"
  }]
}
!*/
define(["Modernizr","createElement","testStyles"],function(A,e,t){A.addTest("siblinggeneral",function(){return t("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(A){return 200==A.lastChild.offsetWidth},2)})});