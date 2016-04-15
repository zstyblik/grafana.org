/*!
{
  "name": "Server Sent Events",
  "property": "eventsource",
  "tags": ["network"],
  "builderAliases": ["network_eventsource"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/comms.html#server-sent-events"
  }]
}
!*/
define(["Modernizr"],function(t){t.addTest("eventsource","EventSource"in window)});