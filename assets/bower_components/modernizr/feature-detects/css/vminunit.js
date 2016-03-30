/*!
{
  "name": "CSS vmin unit",
  "property": "cssvminunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vminunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "https://jsfiddle.net/glsee/JRmdq/8/"
  }]
}
!*/
define(["Modernizr","docElement","testStyles","roundedEquals"],function(A,e,t,n){t("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],i=e.childNodes[1],o=e.childNodes[0],r=parseInt((i.offsetWidth-i.clientWidth)/2,10),d=o.clientWidth/100,a=o.clientHeight/100,s=parseInt(50*Math.min(d,a),10),w=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);A.addTest("cssvminunit",n(s,w)||n(s,w-r))},3)});