/*!
{
  "name": "CSS Regions",
  "caniuse": "css-regions",
  "authors": ["Mihai Balan"],
  "property": "regions",
  "tags": ["css"],
  "builderAliases": ["css_regions"],
  "notes": [{
    "name": "W3C Specification",
    "href": "https://www.w3.org/TR/css3-regions/"
  }]
}
!*/
define(["Modernizr","createElement","docElement","isSVG"],function(e,t,n,i){e.addTest("regions",function(){if(i)return!1;var r=e.prefixed("flowFrom"),o=e.prefixed("flowInto"),s=!1;if(!r||!o)return s;var a=t("iframe"),c=t("div"),u=t("div"),l=t("div"),d="modernizr_flow_for_regions_check";u.innerText="M",c.style.cssText="top: 150px; left: 150px; padding: 0px;",l.style.cssText="width: 50px; height: 50px; padding: 42px;",l.style[r]=d,c.appendChild(u),c.appendChild(l),n.appendChild(c);var f,p,h=u.getBoundingClientRect();return u.style[o]=d,f=u.getBoundingClientRect(),p=parseInt(f.left-h.left,10),n.removeChild(c),42==p?s=!0:(n.appendChild(a),h=a.getBoundingClientRect(),a.style[o]=d,f=a.getBoundingClientRect(),h.height>0&&h.height!==f.height&&0===f.height&&(s=!0)),u=l=c=a=void 0,s})});