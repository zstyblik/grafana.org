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
define(["Modernizr","createElement","testStyles"],function(t,e,n){t.addTest("siblinggeneral",function(){return n("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(t){return 200==t.lastChild.offsetWidth},2)})});