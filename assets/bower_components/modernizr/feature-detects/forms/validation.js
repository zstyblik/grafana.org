/*!
{
  "name": "Form Validation",
  "property": "formvalidation",
  "tags": ["forms", "validation", "attribute"],
  "builderAliases": ["forms_validation"]
}
!*/
define(["Modernizr","createElement","docElement","testStyles"],function(A,e,t,n){A.addTest("formvalidation",function(){var t=e("form");if(!("checkValidity"in t&&"addEventListener"in t))return!1;if("reportValidity"in t)return!0;var i,o=!1;return A.formvalidationapi=!0,t.addEventListener("submit",function(A){(!window.opera||window.operamini)&&A.preventDefault(),A.stopPropagation()},!1),t.innerHTML='<input name="modTest" required="required" /><button></button>',n("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(t),i=t.getElementsByTagName("input")[0],i.addEventListener("invalid",function(A){o=!0,A.preventDefault(),A.stopPropagation()},!1),A.formvalidationmessage=!!i.validationMessage,t.getElementsByTagName("button")[0].click()}),o})});