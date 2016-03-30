/*!
{
  "name": "sizes attribute",
  "async": true,
  "property": "sizes",
  "tags": ["image"],
  "authors": ["Mat Marquis"],
  "notes": [{
    "name": "Spec",
    "href": "http://picture.responsiveimages.org/#parse-sizes-attr"
    },{
    "name": "Usage Details",
    "href": "http://ericportis.com/posts/2014/srcset-sizes/"
    }]
}
!*/
define(["Modernizr","createElement","addTest"],function(A,e,n){A.addAsyncTest(function(){var A,t,i,o=e("img"),r="sizes"in o;!r&&"srcset"in o?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",A="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",i=function(){n("sizes",2==o.width)},o.onload=i,o.onerror=i,o.setAttribute("sizes","9px"),o.srcset=A+" 1w,"+t+" 8w",o.src=A):n("sizes",r)})});