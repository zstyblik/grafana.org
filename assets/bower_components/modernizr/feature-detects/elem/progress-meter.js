/*!
{
  "name": "progress Element",
  "caniuse": "progress",
  "property": ["progressbar", "meter"],
  "tags": ["elem"],
  "builderAliases": ["elem_progress_meter"],
  "authors": ["Stefan Wallin"]
}
!*/
define(["Modernizr","createElement"],function(e,n){e.addTest("progressbar",void 0!==n("progress").max),e.addTest("meter",void 0!==n("meter").max)});