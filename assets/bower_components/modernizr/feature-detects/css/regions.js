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
    "href": "http://www.w3.org/TR/css3-regions/"
  }]
}
!*/
define(["Modernizr","createElement","docElement","isSVG"],function(e,t,n,i){e.addTest("regions",function(){if(i)return!1;var r=e.prefixed("flowFrom"),o=e.prefixed("flowInto"),d=!1;if(!r||!o)return d;var s=t("iframe"),a=t("div"),c=t("div"),l=t("div"),u="modernizr_flow_for_regions_check";c.innerText="M",a.style.cssText="top: 150px; left: 150px; padding: 0px;",l.style.cssText="width: 50px; height: 50px; padding: 42px;",l.style[r]=u,a.appendChild(c),a.appendChild(l),n.appendChild(a);var f,p,m=c.getBoundingClientRect();return c.style[o]=u,f=c.getBoundingClientRect(),p=parseInt(f.left-m.left,10),n.removeChild(a),42==p?d=!0:(n.appendChild(s),m=s.getBoundingClientRect(),s.style[o]=u,f=s.getBoundingClientRect(),m.height>0&&m.height!==f.height&&0===f.height&&(d=!0)),c=l=a=s=void 0,d})});