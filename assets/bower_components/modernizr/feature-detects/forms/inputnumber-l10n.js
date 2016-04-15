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
define(["Modernizr","createElement","docElement","getBody","test/inputtypes","test/forms/validation"],function(t,e,n,i){t.addTest("localizednumber",function(){if(!t.inputtypes.number)return!1;if(!t.formvalidation)return!1;var r,o=e("div"),s=i(),a=function(){return n.insertBefore(s,n.firstElementChild||n.firstChild)}();o.innerHTML='<input type="number" value="1.0" step="0.1"/>';var u=o.childNodes[0];a.appendChild(o),u.focus();try{document.execCommand("InsertText",!1,"1,1")}catch(l){}return r="number"===u.type&&1.1===u.valueAsNumber&&u.checkValidity(),a.removeChild(o),s.fake&&a.parentNode.removeChild(a),r})});