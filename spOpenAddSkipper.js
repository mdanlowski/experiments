// ==UserScript==
// @name         Spotify Add Skipper
// @namespace    http://spotify.com/
// @version      0.3
// @description  skip adds on open.spotify.com
// @author       mdanlowski
// @match        https://*spotify.com/*
// ==/UserScript==

// var currentSong = 0;

window.onload = function(){
  
  try {
    skipper();
    document.querySelector("div[role='grid'][aria-label='Polecane']").remove();
  }
  catch(TypeError){
    document.addEventListener('DOMContentLoaded', function(){
      // document.querySelector("div[role='grid'][aria-label='Polecane']").remove();
      // skipper();
    });  
  }
  // try {
  //   trackPlayButtons[Math.round(tracksSetLength*Math.random())].click();
  // }
  // catch(ReferenceError){
  //   skipper();
  // }


  function skipper(){
    setTimeout(function(){
      try {
        document.querySelector("div[role='grid'][aria-label='Polecane']").remove();
      } catch(e){ console.log("not in playlist view") }

      var trackPlayButtons = document.querySelectorAll("button");
      trackPlayButtons = Array.from(trackPlayButtons).filter( (e) => { return e.attributes['aria-label'] && e.attributes['aria-label'].value.includes("Odtwórz ") })

      var tracksSetLength = trackPlayButtons.length
      var randomTrack = trackPlayButtons[Math.round(tracksSetLength*Math.random())]
      var repeatButton = document.querySelector("button[class*='repeat']");
      if(randomTrack) randomTrack.click();
      if(repeatButton) repeatButton.click();

      var trackTime = document.getElementsByClassName("playback-bar__progress-time")[1];
      trackTime.addEventListener("DOMCharacterDataModified", function (event) {
        var time = trackTime.innerText;
        time = time.replace(':','.');
        time = parseFloat(time);
        if ( time <= 0.31 ){
            location.reload();
        }

        trackPlayButtons[Math.round(tracksSetLength*Math.random())].click();
        if(repeatButton) repeatButton.click();

        }, false);
        try {
        document.querySelector("div[role='grid'][aria-label='Polecane']").remove();
        } catch(e){ console.log("not in playlist or removed") }


    }, 3000);
  }

}
  
  