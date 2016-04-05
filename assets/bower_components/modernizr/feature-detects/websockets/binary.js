/*!
{
  "name": "Binary WebSockets",
  "property": "websocketsbinary",
  "tags": ["websockets"],
  "builderAliases": ["websockets_binary"]
}
!*/
define(["Modernizr"],function(t){t.addTest("websocketsbinary",function(){var t,e="https:"==location.protocol?"wss":"ws";if("WebSocket"in window){if(t="binaryType"in WebSocket.prototype)return t;try{return!!new WebSocket(e+"://.").binaryType}catch(n){}}return!1})});