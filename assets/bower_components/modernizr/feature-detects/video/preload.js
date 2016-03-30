/*!
{
  "name": "Video Preload Attribute",
  "property": "videopreload",
  "tags": ["video", "media"]
}
!*/
define(["Modernizr","createElement"],function(A,e){A.addTest("videopreload","preload"in e("video"))});