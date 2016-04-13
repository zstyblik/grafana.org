/*!
{
  "name": "input[form] Attribute",
  "property": "formattribute",
  "tags": ["attribute", "forms", "input"],
  "builderAliases": ["forms_formattribute"]
}
!*/
define(["Modernizr","createElement","docElement"],function(t,e,n){t.addTest("formattribute",function(){var t,i=e("form"),r=e("input"),o=e("div"),s="formtest"+(new Date).getTime(),a=!1;i.id=s;try{r.setAttribute("form",s)}catch(u){document.createAttribute&&(t=document.createAttribute("form"),t.nodeValue=s,r.setAttributeNode(t))}return o.appendChild(i),o.appendChild(r),n.appendChild(o),a=i.elements&&1===i.elements.length&&r.form==i,o.parentNode.removeChild(o),a})});