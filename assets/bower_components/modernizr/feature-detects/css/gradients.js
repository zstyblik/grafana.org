/*!
{
  "name": "CSS Gradients",
  "caniuse": "css-gradients",
  "property": "cssgradients",
  "tags": ["css"],
  "knownBugs": ["False-positives on webOS (https://github.com/Modernizr/Modernizr/issues/202)"],
  "notes": [{
    "name": "Webkit Gradient Syntax",
    "href": "https://webkit.org/blog/175/introducing-css-gradients/"
  },{
    "name": "Linear Gradient Syntax",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient"
  },{
    "name": "W3C Gradient Spec",
    "href": "https://drafts.csswg.org/css-images-3/#gradients"
  }]
}
!*/
define(["Modernizr","prefixes","createElement"],function(e,t,n){e.addTest("cssgradients",function(){for(var i,r="background-image:",o="gradient(linear,left top,right bottom,from(#9f9),to(white));",s="",a=0,c=t.length-1;c>a;a++)i=0===a?"to ":"",s+=r+t[a]+"linear-gradient("+i+"left top, #9f9, white);";e._config.usePrefixes&&(s+=r+"-webkit-"+o);var u=n("a"),l=u.style;return l.cssText=s,(""+l.backgroundImage).indexOf("gradient")>-1})});