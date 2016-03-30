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
define(["Modernizr","prefixes","createElement"],function(A,e,t){A.addTest("cssgradients",function(){for(var n,i="background-image:",o="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",d=0,a=e.length-1;a>d;d++)n=0===d?"to ":"",r+=i+e[d]+"linear-gradient("+n+"left top, #9f9, white);";A._config.usePrefixes&&(r+=i+"-webkit-"+o);var s=t("a"),w=s.style;return w.cssText=r,(""+w.backgroundImage).indexOf("gradient")>-1})});