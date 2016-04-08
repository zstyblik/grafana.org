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
define(["Modernizr","createElement","testStyles","isSVG"],function(A,e,t,n){A.addTest("unicode",function(){var A,i=e("span"),r=e("span");return t("#modernizr{font-family:Arial,sans;font-size:300em;}",function(e){i.innerHTML=n?"\u5987":"&#5987",r.innerHTML=n?"\u2606":"&#9734",e.appendChild(i),e.appendChild(r),A="offsetWidth"in i&&i.offsetWidth!==r.offsetWidth}),A})});