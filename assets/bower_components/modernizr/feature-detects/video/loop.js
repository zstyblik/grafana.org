/*!
{
  "name": "Video Loop Attribute",
  "property": "videoloop",
  "tags": ["video", "media"]
}
!*/
define(["Modernizr","createElement"],function(t,e){t.addTest("videoloop","loop"in e("video"))});