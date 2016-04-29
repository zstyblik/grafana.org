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
define(["Modernizr","docElement","testStyles","roundedEquals"],function(e,t,s,n){s("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}",function(s){var i=s.childNodes[1],r=s.childNodes[0],o=parseInt((r.offsetWidth-r.clientWidth)/2,10),c=t.clientWidth/100,a=t.clientHeight/100,d=parseInt(50*Math.max(c,a),10),f=parseInt((window.getComputedStyle?getComputedStyle(i,null):i.currentStyle).width,10);e.addTest("cssvmaxunit",n(d,f)||n(d,f-o))},2)});