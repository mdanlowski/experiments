// ==UserScript==
// @name spotify-ad-skip
// @namespace Violentmonkey Scripts
// @match https://open.spotify.com/*
// @grant none
// ==/UserScript==
try {
  skipper();
}
catch(TypeError){

  document.addEventListener('DOMContentLoaded', function(){
      skipper();

  });  
}
try {
  tracks[Math.round(trlen*Math.random())].click();
}
catch(ReferenceError){
  skipper();
}

function skipper(){
  setTimeout(function(){
          var tracks = document.querySelectorAll(".tracklist-play-pause.tracklist-top-align");
          console.log(tracks);
          var trlen = tracks.length
          tracks[Math.round(trlen*Math.random())].click()

          var trackTime = document.getElementsByClassName("playback-bar__progress-time")[1];
          trackTime.addEventListener("DOMCharacterDataModified", function (event) {
              var time = trackTime.innerText;
              time = time.replace(':','.');
              time = parseFloat(time);
              if ( time <= 0.3 ){
                  location.reload();
              }

              tracks[Math.round(trlen*Math.random())].click();

              }, false);

      }, 1000);
}
