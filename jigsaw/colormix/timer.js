let ssop;
let timr = JSON.parse(localStorage.getItem("timr"));
sessionStorage.setItem("timr", JSON.stringify(timr));
localStorage.setItem("timr", JSON.stringify(timr));
let timmrc;

setInterval(function(){
 timmrc = JSON.parse(localStorage.getItem("timmrc"));

  },100)




var hasPlayed = false;
var hasPlayed2 = false;
function playSound () {
	let ding = new Audio('times/times.mp3');
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

var pops1 = new Audio('times/pops1.mp3');
let deadc = JSON.parse(localStorage.getItem("deadc"));

sessionStorage.setItem("deadc", JSON.stringify(deadc));
localStorage.setItem("deadc", JSON.stringify(deadc));


let timesc = JSON.parse(localStorage.getItem("timesc"));
let timemc = JSON.parse(localStorage.getItem("timemc"));

var timess = new Audio('times/times.mp3');
var ttup = new Audio('times/up.mp3');
if(deadc=="yes"){
loseGame()
}
if(timemc!=null){

var xmins=timemc//3;
var ssecs=timesc.toString();
var xsecs=timesc.toString();
   // alert(times)
//alert(timem)
} else {
var xmins=3;
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
            if(xmins<4) {
                minutes.style.color="red";
                seconds.style.color="red";
            }
            if(xsecs<1) {
                
                minutes.value=0;
                seconds.value=0;
pops1 = new Audio('times/pops1.mp3');
setTimeout(function(){
//pops1.play();
playpops();
navigator.vibrate([
  100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100,
]);
deadc = "yes";

sessionStorage.setItem("deadc", JSON.stringify(deadc));
localStorage.setItem("deadc", JSON.stringify(deadc));
document.querySelector(".popup-image").style.display = "block";
      // pops1.play();
playpops();
navigator.vibrate([
  100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100,
]);
document.querySelector(".popup-image img").style.width = "100%";
document.querySelector(".popup-image img").style.height = "100%";  document.querySelector(".popup-image img").src = "../ovrc.gif";


  },100)

setTimeout(function(){

document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = "../ovrc.png";


document.querySelector(".popup-image img").style.width = "100%";
document.querySelector(".popup-image img").style.height = "100%"; 
document.querySelector(".popup-image span").onclick = () =>{
   location=("../saw/index.html"); document.querySelector(".popup-image").style.display = "none";
}

  },1300)
            }
            else {
                   if (timmrc==1){

//alert ("55")

} else {
xsecs--;
}
            
sessionStorage.setItem("timemc", JSON.stringify(xmins));
localStorage.setItem("timemc", JSON.stringify(xmins));
sessionStorage.setItem("timesc", JSON.stringify(xsecs));
localStorage.setItem("timesc", JSON.stringify(xsecs));
 setTimeout('Decrement()',1000);
            }
           
    }

if(xsecs==11&&ssop==null) {
ssop=1;
          setTimeout('tup()',10000);   
 seconds.style.fontSize="40px"; 
minutes.style.bottom="90%";
          minutes.style.left="60%";      seconds.style.left="68%";
playSound();

//timess.play();

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
  deadc = "yes";

sessionStorage.setItem("deadc", JSON.stringify(deadc));
localStorage.setItem("deadc", JSON.stringify(deadc)); 
  
 

 

setTimeout(function(){

document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = "../ovrc.png";


document.querySelector(".popup-image img").style.width = "100%";
document.querySelector(".popup-image img").style.height = "100%"; 
document.querySelector(".popup-image span").onclick = () =>{
   location=("../saw/index.html"); document.querySelector(".popup-image").style.display = "none";
}

  },100)

}
