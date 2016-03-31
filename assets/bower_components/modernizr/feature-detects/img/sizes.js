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
define(["Modernizr","createElement","addTest"],function(A,e,n){A.addAsyncTest(function(){var A,t,i,a=e("img"),o="sizes"in a;!o&&"srcset"in a?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",A="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",i=function(){n("sizes",2==a.width)},a.onload=i,a.onerror=i,a.setAttribute("sizes","9px"),a.srcset=A+" 1w,"+t+" 8w",a.src=A):n("sizes",o)})});