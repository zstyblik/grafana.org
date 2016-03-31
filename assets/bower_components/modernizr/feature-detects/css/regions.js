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
define(["Modernizr","createElement","docElement","isSVG"],function(A,e,t,n){A.addTest("regions",function(){if(n)return!1;var i=A.prefixed("flowFrom"),o=A.prefixed("flowInto"),r=!1;if(!i||!o)return r;var a=e("iframe"),d=e("div"),w=e("div"),s=e("div"),c="modernizr_flow_for_regions_check";w.innerText="M",d.style.cssText="top: 150px; left: 150px; padding: 0px;",s.style.cssText="width: 50px; height: 50px; padding: 42px;",s.style[i]=c,d.appendChild(w),d.appendChild(s),t.appendChild(d);var l,u,f=w.getBoundingClientRect();return w.style[o]=c,l=w.getBoundingClientRect(),u=parseInt(l.left-f.left,10),t.removeChild(d),42==u?r=!0:(t.appendChild(a),f=a.getBoundingClientRect(),a.style[o]=c,l=a.getBoundingClientRect(),f.height>0&&f.height!==l.height&&0===l.height&&(r=!0)),w=s=d=a=void 0,r})});