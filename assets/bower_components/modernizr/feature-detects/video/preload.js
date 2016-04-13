/*!
{
  "name": "Video Preload Attribute",
  "property": "videopreload",
  "tags": ["video", "media"]
}
!*/
define(["Modernizr","createElement"],function(t,e){t.addTest("videopreload","preload"in e("video"))});