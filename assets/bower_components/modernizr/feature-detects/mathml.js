/*!
{
  "name": "MathML",
  "property": "mathml",
  "caniuse": "mathml",
  "authors": ["Addy Osmani", "Davide P. Cervone", "David Carlisle"],
  "knownBugs": ["Firefox < 4 will likely return a false, however it does support MathML inside XHTML documents"],
  "notes": [{
    "name": "W3C spec",
    "href": "https://www.w3.org/Math/"
  }],
  "polyfills": ["mathjax"]
}
!*/
define(["Modernizr","testStyles"],function(t,e){t.addTest("mathml",function(){var t;return e("#modernizr{position:absolute;display:inline-block}",function(e){e.innerHTML+="<math><mfrac><mi>xx</mi><mi>yy</mi></mfrac></math>",t=e.offsetHeight>e.offsetWidth}),t})});