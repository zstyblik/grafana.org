/*!
{
  "name": "Unicode characters",
  "property": "unicode",
  "tags": ["encoding"],
  "warnings": [
    "positive Unicode support doesn't mean you can use it inside <title>, this seems more related to OS & Language packs"
  ]
}
!*/
define(["Modernizr","createElement","testStyles","isSVG"],function(t,e,n,i){t.addTest("unicode",function(){var t,r=e("span"),o=e("span");return n("#modernizr{font-family:Arial,sans;font-size:300em;}",function(e){r.innerHTML=i?"\u5987":"&#5987",o.innerHTML=i?"\u2606":"&#9734",e.appendChild(r),e.appendChild(o),t="offsetWidth"in r&&r.offsetWidth!==o.offsetWidth}),t})});