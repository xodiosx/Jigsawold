let ssop;

let timmrr;
let bgm = new Audio('../bgm.mp3');
bgm.loop = true;

setInterval(function(){
 timmrr = JSON.parse(localStorage.getItem("timmrr"));
if(bgm.paused) {

bgm.play();
}
  },100)

var hasPlayed = false;
var hasPlayed2 = false;
function playSound () {
	 ding = new Audio('good.mp3');
ding.loop = false;
if(!hasPlayed) {

ding.play();
hasPlayed = true;  
}
}

function playpops () {
	let pop2 =  new Audio('times/pops1.mp3');
pop2.loop = false;
if(!hasPlayed2) {
	pop2.play();
hasPlayed2 = true;  
}
}




var globalassets = [];

const loadaudio = (id, src) => {
  return new Promise((resolve, reject) => {
    let audio = new Audio();
    audio.id = id;
    audio.oncanplay = resolve(audio);
    audio.onerror = reject(audio);
    audio.src = src;
  });
};

       
const initgame = assets => {
  globalassets = assets;
  console.log('initiate game');
  document.getElementById('start').classList.remove('hidden')
document.getElementById('btn').click();

};

function pp(){

globalassets.find(asset => asset.id = 'a2').play();


}

const onstatbtn = e => {
  console.log('game is playing');
  globalassets.find(asset => asset.id = 'a2').play();
globalassets.find(asset => asset.id = 'a2').pause();



document.querySelector(".popup-image").style.display = "none";

document.getElementById('start').style.display = "none";
};

document.addEventListener('DOMContentLoaded', e => {
  let assets = [
    loadaudio('a3','good.mp3'),
loadaudio('a2','music.mp3')
  ];
  Promise.all(assets).then(initgame);
  
  document.getElementById('start').addEventListener('click', onstatbtn);
});



document.querySelector(".popup-image").style.display = "block";


var pops1 = new Audio('times/pops1.mp3');
let deadr = JSON.parse(localStorage.getItem("deadr"));

sessionStorage.setItem("deadr", JSON.stringify(deadr));
localStorage.setItem("deadr", JSON.stringify(deadr));


let timesr = JSON.parse(localStorage.getItem("timesr"));
let timemr = JSON.parse(localStorage.getItem("timemr"));

var timess = new Audio('times/times.mp3');
var ttup = new Audio('times/up.mp3');
if(deadr=="yes"){
loseGame()
}
if(timemr!=null){

var xmins=timemr//3;
var ssecs=timesr.toString();
var xsecs=timesr.toString();
   // alert(times)
//alert(timem)
} else {
var xmins=6;
  var ssecs=xmins*60;
var xsecs=xmins*60;  
}
    

    function countdown() {
        setTimeout('Decrement()',60);
    }
    function Decrement() {
        if(document.getElementById) {
            minutes=document.getElementById("minutes");
            seconds=document.getElementById("seconds");
            if(seconds<59) {
                seconds.value=xsecs;

            }
            else {
                minutes.value=getminutes();
                seconds.value=getseconds();
            }
            if(xmins<8) {
                minutes.style.color="red";
                seconds.style.color="red";
            }
            if(xsecs<1) {
                
                minutes.value=0;
                seconds.value=0;
pops1 = new Audio('times/pops1.mp3');
setTimeout(function(){
pops1.play();
navigator.vibrate([
  100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100,
]);
deadr = "yes";

sessionStorage.setItem("deadr", JSON.stringify(deadr));
localStorage.setItem("deadr", JSON.stringify(deadr));
document.querySelector(".popup-image").style.display = "block";
       pops1.play();
navigator.vibrate([
  100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100,
]);
document.querySelector(".popup-image img").style.width = "100%";
document.querySelector(".popup-image img").style.height = "100%";  document.querySelector(".popup-image img").src = "../ovrr.gif";


  },100)

setTimeout(function(){

document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = "../ovrr.png";


document.querySelector(".popup-image img").style.width = "100%";
document.querySelector(".popup-image img").style.height = "100%"; 
document.querySelector(".popup-image span").onclick = () =>{
   location=("../saw/index.html"); document.querySelector(".popup-image").style.display = "none";
}

  },1300)
            }
            else {

if (timmrr==1){

//alert ("55")


//playSound();
} else {


}
                
            
sessionStorage.setItem("timemr", JSON.stringify(xmins));
localStorage.setItem("timemr", JSON.stringify(xmins));
sessionStorage.setItem("timesr", JSON.stringify(xsecs));
localStorage.setItem("timesr", JSON.stringify(xsecs));
 setTimeout('Decrement()',1000);
            }
           
    }

if(xsecs==11&&ssop==null) {
ssop=1;
          setTimeout('tup()',10000);   
 seconds.style.fontSize="40px"; 
minutes.style.bottom="90%";
          minutes.style.left="60%";      seconds.style.left="68%";

timess.play();

}
if(xsecs<6) {

    ttup.play();
}
        }

function tup(){
timess.pause();

setTimeout(function(){


  },1000)


}
 
    function getminutes() {
        xmins=Math.floor(xsecs/60);
        return xmins;
    }
 
    function getseconds() {
var xsecd = xsecs-Math.round(xmins*60);
        return ":" + xsecd;
    }
countdown();



function loseGame(){
  deadr = "yes";

sessionStorage.setItem("deadr", JSON.stringify(deadr));
localStorage.setItem("deadr", JSON.stringify(deadr)); 
  
 

 

setTimeout(function(){

document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = "../ovrr.png";


document.querySelector(".popup-image img").style.width = "100%";
document.querySelector(".popup-image img").style.height = "100%"; 
document.querySelector(".popup-image span").onclick = () =>{
   location=("../saw/index.html"); document.querySelector(".popup-image").style.display = "none";
}

  },100)

}
const enn =setInterval(function(){
if (timmrr==1){

//alert ("55")
pp();
clearInterval(enn);

}
},100)
enn();
