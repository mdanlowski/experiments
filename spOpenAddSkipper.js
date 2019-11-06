// ==UserScript==
// @name         Spotify Add Skipper
// @namespace    http://spotify.com/
// @version      0.1
// @description  skip adds
// @author       mdanlowski
// @match        https://*spotify.com/*
// ==/UserScript==

// var currentSong = 0;

try {
  skipper();
  document.querySelector(".PlaylistRecommendedTracks").remove();
}
catch(TypeError){
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelector(".PlaylistRecommendedTracks").remove();
    skipper();
  });  
}
try {
  trackPlayIconElements[Math.round(tracksSetLength*Math.random())].parentElement.click();
}
catch(ReferenceError){
  skipper();
}

function skipper(){
  setTimeout(function(){
    var trackPlayIconElements = document.querySelectorAll("svg.icon-play");
    console.log(trackPlayIconElements);
    var tracksSetLength = trackPlayIconElements.length
    trackPlayIconElements[Math.round(tracksSetLength*Math.random())].parentElement.click()

    var trackTime = document.getElementsByClassName("playback-bar__progress-time")[1];
    trackTime.addEventListener("DOMCharacterDataModified", function (event) {
      var time = trackTime.innerText;
      time = time.replace(':','.');
      time = parseFloat(time);
      if ( time <= 0.31 ){
          location.reload();
      }

      trackPlayIconElements[Math.round(tracksSetLength*Math.random())].parentElement.click();

      }, false);
      document.querySelector(".PlaylistRecommendedTracks").remove();

  }, 1000);
}