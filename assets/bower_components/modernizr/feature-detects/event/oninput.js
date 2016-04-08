/*!
{
  "name": "onInput Event",
  "property": "oninput",
  "notes": [{
    "name": "MDN article",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.oninput"
  },{
    "name": "WHATWG spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#common-input-element-attributes"
  },{
    "name": "Detecting onInput support",
    "href": "http://danielfriesen.name/blog/2010/02/16/html5-browser-maze-oninput-support"
  }],
  "authors": ["Patrick Kettner"],
  "tags": ["event"]
}
!*/
define(["Modernizr","docElement","createElement","testStyles","hasEvent"],function(A,e,t,n,i){A.addTest("oninput",function(){var A,n=t("input");if(n.setAttribute("oninput","return"),i("oninput",e)||"function"==typeof n.oninput)return!0;try{var o=document.createEvent("KeyboardEvent");A=!1;var r=function(e){A=!0,e.preventDefault(),e.stopPropagation()};o.initKeyEvent("keypress",!0,!0,window,!1,!1,!1,!1,0,"e".charCodeAt(0)),e.appendChild(n),n.addEventListener("input",r,!1),n.focus(),n.dispatchEvent(o),n.removeEventListener("input",r,!1),e.removeChild(n)}catch(d){A=!1}return A})});