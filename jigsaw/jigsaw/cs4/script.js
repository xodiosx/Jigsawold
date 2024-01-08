let vid = document.getElementById("vc");
let vdd;
let vd;


var launchFullScreen = function(el) {

    // alert('launching');

    // var el = $el[0];

    if (el.requestFullscreen) {
        console.log('requestFullscreen');
        el.requestFullscreen();
    } else if (el.mozRequestFullScreen) {
        console.log('mozRequestFullScreen');
        el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
        console.log('webkitRequestFullscreen');
        el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
        console.log('msRequestFullscreen');
        el.msRequestFullscreen();
    } else {
        console.log('no full screen');
    }

};

var exitFullscreen = function() {

    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }

};


// window.addEventListener('orientationchange', function() {
window.screen.orientation.onchange = function() {
    console.log(window.screen.orientation);
    if (this.type.startsWith("landscape")) {
        // document.querySelector("#container").webkitRequestFullscreen();
        launchFullScreen(document.querySelector("#container"));
    } else {
        // document.webkitExitFullscreen();
        exitFullscreen();
    }
};

var container = document.querySelector("#container");
var video = document.querySelector("video");

var vdc = video.duration;

var controls = document.querySelector("#controls");
var play = document.querySelector("#play");
        play.innerHTML = "⬅️";
play.style.display = "none";
var fullscreen = document.querySelector("#fullscreen");

play.onclick = function() {
    if (video.paused) {
        //video.play();
        play.innerHTML = "⬅️";
play.style.display = "none";
location=("../index.html");
//play.remove()
    } else {
        //video.pause();
play.style.display = "none";
        //play.innerHTML = "⬅️";
location=("../index.html");
    }
};

fullscreen.onclick = function() {
    if (document.webkitFullscreenElement != container) {
        container.webkitRequestFullScreen();
        window.screen.orientation.lock("landscape");
        fullscreen.innerHTML = "🔼";
    } else {
        document.webkitExitFullscreen();
        fullscreen.innerHTML = "↔️";
    }
};

// document.onwebkitfullscreenchange = function() {
//     if (document.webkitFullscreenElement != container) {
//         fullscreen.innerHTML = "🔼";
//     }
// };
setTimeout(function(){
document.getElementById('vc');  
 //video.autoplay = true;


//video.muted = !video.muted;
//play.style.display = "none";
//play.remove();
//video.play();
 vd = JSON.stringify(video.duration);


 vdd = vd.trim().replace(".","");
  },1000)

setInterval(function(){

   //alert(vdd)


  },8000)

video.onplay = function(e) {
      /*Do things here!*/
        play.innerHTML = "⬅️";
play.style.display = "block";
    };
        
    video.onended = function(e) {
   play.innerHTML = "⬅️";
play.style.display = "block";
//alert("end")
    };
       

  
