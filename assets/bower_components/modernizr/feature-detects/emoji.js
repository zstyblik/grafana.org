/*!
{
  "name": "Emoji",
  "property": "emoji"
}
!*/
define(["Modernizr","createElement","test/canvastext"],function(A,e){A.addTest("emoji",function(){if(!A.canvastext)return!1;var t=window.devicePixelRatio||1,n=12*t,i=e("canvas"),o=i.getContext("2d");return o.fillStyle="#f00",o.textBaseline="top",o.font="32px Arial",o.fillText("\ud83d\udc28",0,0),0!==o.getImageData(n,n,1,1).data[0]})});