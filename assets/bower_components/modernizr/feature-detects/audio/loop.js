/*!
{
  "name": "Audio Loop Attribute",
  "property": "audioloop",
  "tags": ["audio", "media"]
}
!*/
define(["Modernizr","createElement"],function(A,e){A.addTest("audioloop","loop"in e("audio"))});