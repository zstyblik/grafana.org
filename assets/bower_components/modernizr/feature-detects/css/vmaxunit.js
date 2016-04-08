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
define(["Modernizr","docElement","testStyles","roundedEquals"],function(A,e,t,n){t("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],i=e.childNodes[1],o=e.childNodes[0],r=parseInt((i.offsetWidth-i.clientWidth)/2,10),d=o.clientWidth/100,a=o.clientHeight/100,s=parseInt(50*Math.max(d,a),10),l=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);A.addTest("cssvmaxunit",n(s,l)||n(s,l-r))},3)});