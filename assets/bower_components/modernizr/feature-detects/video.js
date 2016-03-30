/*!
{
  "name": "HTML5 Video",
  "property": "video",
  "caniuse": "video",
  "tags": ["html5"],
  "knownBugs": [
    "Without QuickTime, `Modernizr.video.h264` will be `undefined`; https://github.com/Modernizr/Modernizr/issues/546"
  ],
  "polyfills": [
    "html5media",
    "mediaelementjs",
    "sublimevideo",
    "videojs",
    "leanbackplayer",
    "videoforeverybody"
  ]
}
!*/
define(["Modernizr","createElement"],function(A,e){A.addTest("video",function(){var A=e("video"),n=!1;try{(n=!!A.canPlayType)&&(n=new Boolean(n),n.ogg=A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return n})});