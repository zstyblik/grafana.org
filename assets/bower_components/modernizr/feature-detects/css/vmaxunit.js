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
    "href": "https://jsfiddle.net/glsee/JDsWQ/4/"
  }]
}
!*/
define(["Modernizr","docElement","testStyles","roundedEquals"],function(e,t,n,i){n("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var n=t.childNodes[2],r=t.childNodes[1],o=t.childNodes[0],a=parseInt((r.offsetWidth-r.clientWidth)/2,10),s=o.clientWidth/100,c=o.clientHeight/100,u=parseInt(50*Math.max(s,c),10),l=parseInt((window.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10);e.addTest("cssvmaxunit",i(u,l)||i(u,l-a))},3)});