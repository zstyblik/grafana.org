/*!
{
  "name": "Form Validation",
  "property": "formvalidation",
  "tags": ["forms", "validation", "attribute"],
  "builderAliases": ["forms_validation"]
}
!*/
define(["Modernizr","createElement","docElement","testStyles"],function(t,e,n,i){t.addTest("formvalidation",function(){var n=e("form");if(!("checkValidity"in n&&"addEventListener"in n))return!1;if("reportValidity"in n)return!0;var r,o=!1;return t.formvalidationapi=!0,n.addEventListener("submit",function(t){(!window.opera||window.operamini)&&t.preventDefault(),t.stopPropagation()},!1),n.innerHTML='<input name="modTest" required="required" /><button></button>',i("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(n),r=n.getElementsByTagName("input")[0],r.addEventListener("invalid",function(t){o=!0,t.preventDefault(),t.stopPropagation()},!1),t.formvalidationmessage=!!r.validationMessage,n.getElementsByTagName("button")[0].click()}),o})});