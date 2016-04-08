/*!
{
  "name": "RTC Data Channel",
  "property": "datachannel",
  "notes": [{
    "name": "HTML5 Rocks! Article",
    "href": "http://www.html5rocks.com/en/tutorials/webrtc/datachannels/"
  }]
}
!*/
define(["Modernizr","prefixed","domPrefixes","test/webrtc/peerconnection"],function(A,e,t){A.addTest("datachannel",function(){if(!A.peerconnection)return!1;for(var e=0,n=t.length;n>e;e++){var i=window[t[e]+"RTCPeerConnection"];if(i){var o=new i({iceServers:[{url:"stun:0"}]});return"createDataChannel"in o}}return!1})});