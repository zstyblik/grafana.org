/*!
{
  "name": "Data URI",
  "property": "datauri",
  "caniuse": "datauri",
  "tags": ["url"],
  "builderAliases": ["url_data_uri"],
  "async": true,
  "notes": [{
    "name": "Wikipedia article",
    "href": "https://en.wikipedia.org/wiki/Data_URI_scheme"
  }],
  "warnings": ["Support in Internet Explorer 8 is limited to images and linked resources like CSS files, not HTML files"]
}
!*/
define(["Modernizr","addTest"],function(A,e){A.addAsyncTest(function(){function t(){var t=new Image;t.onerror=function(){e("datauri",!0),A.datauri=new Boolean(!0),A.datauri.over32kb=!1},t.onload=function(){e("datauri",!0),A.datauri=new Boolean(!0),A.datauri.over32kb=1==t.width&&1==t.height};for(var n="R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";n.length<33e3;)n="\r\n"+n;t.src="data:image/gif;base64,"+n}-1!==navigator.userAgent.indexOf("MSIE 7.")&&setTimeout(function(){e("datauri",!1)},10);var n=new Image;n.onerror=function(){e("datauri",!1)},n.onload=function(){1==n.width&&1==n.height?t():e("datauri",!1)},n.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="})});