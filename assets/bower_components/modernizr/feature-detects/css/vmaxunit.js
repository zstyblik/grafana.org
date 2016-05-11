/*!
{
  "name": "CSS vmax unit",
  "property": "cssvmaxunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vmaxunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "http://jsfiddle.net/glsee/JDsWQ/4/"
  }]
}
!*/
define(["Modernizr","docElement","testStyles","roundedEquals"],function(e,t,n,o){n("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}",function(n){var i=n.childNodes[1],r=n.childNodes[0],c=parseInt((r.offsetWidth-r.clientWidth)/2,10),a=t.clientWidth/100,s=t.clientHeight/100,u=parseInt(50*Math.max(a,s),10),f=parseInt((window.getComputedStyle?getComputedStyle(i,null):i.currentStyle).width,10);e.addTest("cssvmaxunit",o(u,f)||o(u,f-c))},2)});