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
define(["Modernizr","docElement","createElement","testStyles","hasEvent"],function(t,e,n,i,r){t.addTest("oninput",function(){var t,i=n("input");if(i.setAttribute("oninput","return"),r("oninput",e)||"function"==typeof i.oninput)return!0;try{var o=document.createEvent("KeyboardEvent");t=!1;var s=function(e){t=!0,e.preventDefault(),e.stopPropagation()};o.initKeyEvent("keypress",!0,!0,window,!1,!1,!1,!1,0,"e".charCodeAt(0)),e.appendChild(i),i.addEventListener("input",s,!1),i.focus(),i.dispatchEvent(o),i.removeEventListener("input",s,!1),e.removeChild(i)}catch(a){t=!1}return t})});