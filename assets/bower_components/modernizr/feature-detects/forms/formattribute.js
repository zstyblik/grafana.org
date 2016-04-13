/*!
{
  "name": "input[form] Attribute",
  "property": "formattribute",
  "tags": ["attribute", "forms", "input"],
  "builderAliases": ["forms_formattribute"]
}
!*/
define(["Modernizr","createElement","docElement"],function(A,e,t){A.addTest("formattribute",function(){var A,n=e("form"),i=e("input"),r=e("div"),o="formtest"+(new Date).getTime(),d=!1;n.id=o;try{i.setAttribute("form",o)}catch(a){document.createAttribute&&(A=document.createAttribute("form"),A.nodeValue=o,i.setAttributeNode(A))}return r.appendChild(n),r.appendChild(i),t.appendChild(r),d=n.elements&&1===n.elements.length&&i.form==n,r.parentNode.removeChild(r),d})});