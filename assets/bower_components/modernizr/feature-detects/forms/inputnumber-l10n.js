/*!
{
  "name": "input[type=\"number\"] Localization",
  "property": "localizednumber",
  "tags": ["forms", "localization", "attribute"],
  "authors": ["Peter Janes"],
  "notes": [{
    "name": "Webkit Bug Tracker Listing",
    "href": "https://bugs.webkit.org/show_bug.cgi?id=42484"
  },{
    "name": "Based on This",
    "href": "https://trac.webkit.org/browser/trunk/LayoutTests/fast/forms/script-tests/input-number-keyoperation.js?rev=80096#L9"
  }],
  "knownBugs": ["Only ever returns true if the browser/OS is configured to use comma as a decimal separator. This is probably fine for most use cases."]
}
!*/
define(["Modernizr","createElement","docElement","getBody","test/inputtypes","test/forms/validation"],function(A,e,t,n){A.addTest("localizednumber",function(){if(!A.inputtypes.number)return!1;if(!A.formvalidation)return!1;var i,o=e("div"),r=n(),d=function(){return t.insertBefore(r,t.firstElementChild||t.firstChild)}();o.innerHTML='<input type="number" value="1.0" step="0.1"/>';var a=o.childNodes[0];d.appendChild(o),a.focus();try{document.execCommand("InsertText",!1,"1,1")}catch(s){}return i="number"===a.type&&1.1===a.valueAsNumber&&a.checkValidity(),d.removeChild(o),r.fake&&d.parentNode.removeChild(d),i})});