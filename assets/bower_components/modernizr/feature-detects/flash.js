/*!
  {
  "name": "Flash",
  "property": "flash",
  "tags": ["flash"],
  "polyfills": ["shumway"]
  }
  !*/
define(["Modernizr","createElement","docElement","addTest","getBody","isSVG"],function(A,e,t,n,i,r){A.addAsyncTest(function(){var A,o,d=function(A){t.contains(A)||t.appendChild(A)},a=function(A){A.fake&&A.parentNode&&A.parentNode.removeChild(A)},s=function(A,e){var t=!!A;if(t&&(t=new Boolean(t),t.blocked="blocked"===A),n("flash",function(){return t}),e&&w.contains(e)){for(;e.parentNode!==w;)e=e.parentNode;w.removeChild(e)}};try{o="ActiveXObject"in window&&"Pan"in new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(c){}if(A=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||o),A||r)s(!1);else{var l,u,f=e("embed"),w=i();if(f.type="application/x-shockwave-flash",w.appendChild(f),!("Pan"in f||o))return d(w),s("blocked",f),void a(w);l=function(){return d(w),t.contains(w)?(t.contains(f)?(u=f.style.cssText,""!==u?s("blocked",f):s(!0,f)):s("blocked"),void a(w)):(w=document.body||w,f=e("embed"),f.type="application/x-shockwave-flash",w.appendChild(f),setTimeout(l,1e3))},setTimeout(l,10)}})});