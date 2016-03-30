/*!
{
  "name": "canvas.toDataURL type support",
  "property": ["todataurljpeg", "todataurlpng", "todataurlwebp"],
  "tags": ["canvas"],
  "builderAliases": ["canvas_todataurl_type"],
  "async" : false,
  "notes": [{
    "name": "MDN article",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement.toDataURL"
  }]
}
!*/
define(["Modernizr","createElement","test/canvas"],function(A,e){var t=e("canvas");A.addTest("todataurljpeg",function(){return!!A.canvas&&0===t.toDataURL("image/jpeg").indexOf("data:image/jpeg")}),A.addTest("todataurlpng",function(){return!!A.canvas&&0===t.toDataURL("image/png").indexOf("data:image/png")}),A.addTest("todataurlwebp",function(){var e=!1;try{e=!!A.canvas&&0===t.toDataURL("image/webp").indexOf("data:image/webp")}catch(n){}return e})});