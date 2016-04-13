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
define(["Modernizr","prefixed","docElement","createElement","isSVG"],function(e,t,n,i,r){e.addTest("wrapflow",function(){var e=t("wrapFlow");if(!e||r)return!1;var o=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),a=i("div"),s=i("div"),c=i("span");s.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+o+":end;",c.innerText="X",a.appendChild(s),a.appendChild(c),n.appendChild(a);var u=c.offsetLeft;return n.removeChild(a),s=c=a=void 0,150==u})});