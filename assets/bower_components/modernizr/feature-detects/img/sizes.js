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
define(["Modernizr","createElement","addTest"],function(e,t,n){e.addAsyncTest(function(){var e,i,r,o=t("img"),s="sizes"in o;!s&&"srcset"in o?(i="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",r=function(){n("sizes",2==o.width)},o.onload=r,o.onerror=r,o.setAttribute("sizes","9px"),o.srcset=e+" 1w,"+i+" 8w",o.src=e):n("sizes",s)})});