/*!
{
  "name" : "HTML5 Audio Element",
  "property": "audio",
  "tags" : ["html5", "audio", "media"]
}
!*/
define(["Modernizr","createElement"],function(A,e){A.addTest("audio",function(){var A=e("audio"),t=!1;try{(t=!!A.canPlayType)&&(t=new Boolean(t),t.ogg=A.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=A.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=A.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),t.wav=A.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(A.canPlayType("audio/x-m4a;")||A.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t})});