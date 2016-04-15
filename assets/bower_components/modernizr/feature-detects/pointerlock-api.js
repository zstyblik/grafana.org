/*!
{
  "name": "Pointer Lock API",
  "property": "pointerlock",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/API/Pointer_Lock_API"
  }],
  "builderAliases": ["pointerlock_api"]
}
!*/
define(["Modernizr","prefixed"],function(t,e){t.addTest("pointerlock",!!e("exitPointerLock",document))});