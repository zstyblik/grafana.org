/*!
  {
  "name": "Flash",
  "property": "flash",
  "tags": ["flash"],
  "polyfills": ["shumway"]
  }
  !*/
define(["Modernizr","createElement","docElement","addTest","getBody","isSVG"],function(e,t,n,i,r,o){e.addAsyncTest(function(){var e,s,a=function(e){n.contains(e)||n.appendChild(e)},c=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},u=function(e,t){var n=!!e;if(n&&(n=new Boolean(n),n.blocked="blocked"===e),i("flash",function(){return n}),t&&h.contains(t)){for(;t.parentNode!==h;)t=t.parentNode;h.removeChild(t)}};try{s="ActiveXObject"in window&&"Pan"in new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(l){}if(e=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||s),e||o)u(!1);else{var f,d,p=t("embed"),h=r();if(p.type="application/x-shockwave-flash",h.appendChild(p),!("Pan"in p||s))return a(h),u("blocked",p),void c(h);f=function(){return a(h),n.contains(h)?(n.contains(p)?(d=p.style.cssText,""!==d?u("blocked",p):u(!0,p)):u("blocked"),void c(h)):(h=document.body||h,p=t("embed"),p.type="application/x-shockwave-flash",h.appendChild(p),setTimeout(f,1e3))},setTimeout(f,10)}})});