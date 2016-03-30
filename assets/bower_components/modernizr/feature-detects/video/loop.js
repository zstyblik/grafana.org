/*!
{
  "name": "Video Loop Attribute",
  "property": "videoloop",
  "tags": ["video", "media"]
}
!*/
define(["Modernizr","createElement"],function(A,e){A.addTest("videoloop","loop"in e("video"))});