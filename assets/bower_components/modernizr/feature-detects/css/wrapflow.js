/*!
{
  "name": "CSS wrap-flow",
  "property": "wrapflow",
  "tags": ["css"],
  "notes": [
    {
      "name": "W3C Exclusions spec",
      "href": "https://www.w3.org/TR/css3-exclusions"
    },
    {
      "name": "Example by Adobe",
      "href": "http://html.adobe.com/webstandards/cssexclusions"
    }
  ]
}
!*/
define(["Modernizr","prefixed","docElement","createElement","isSVG"],function(A,e,n,t,i){A.addTest("wrapflow",function(){var A=e("wrapFlow");if(!A||i)return!1;var o=A.replace(/([A-Z])/g,function(A,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-"),r=t("div"),d=t("div"),a=t("span");d.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+o+":end;",a.innerText="X",r.appendChild(d),r.appendChild(a),n.appendChild(r);var w=a.offsetLeft;return n.removeChild(r),d=a=r=void 0,150==w})});