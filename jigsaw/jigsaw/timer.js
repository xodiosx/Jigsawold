let ssop;
let timmrj;
let bgm = new Audio('../bgm.mp3');
bgm.loop = true;

setInterval(function(){
 timmrj = JSON.parse(localStorage.getItem("timmrj"));
if(bgm.paused) {

bgm.play();
}
  },100)



var pops1 = new Audio('times/pops1.mp3');

let timesj = JSON.parse(localStorage.getItem("timesj"));
let timemj = JSON.parse(localStorage.getItem("timemj"));

var timess = new Audio('times/times.mp3');
var ttup = new Audio('times/up.mp3');



let deadj = JSON.parse(localStorage.getItem("deadj"));

sessionStorage.setItem("deadj", JSON.stringify(deadj));
localStorage.setItem("deadj", JSON.stringify(deadj));


if(deadj=="yes"){
loseGame()
}

function loseGame(){
  deadj = "yes";

sessionStorage.setItem("deadj", JSON.stringify(deadj));
localStorage.setItem("deadj", JSON.stringify(deadj)); 
  
 

 

setTimeout(function(){

document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = "../ovrj.png";


document.querySelector(".popup-image img").style.width = "100%";
document.querySelector(".popup-image img").style.height = "100%"; 
document.querySelector(".popup-image span").onclick = () =>{
   location=("../saw/index.html"); document.querySelector(".popup-image").style.display = "none";
}

  },100)

}





if(timemj!=null){

var xmins=timemj//3;
var ssecs=timesj.toString();
var xsecs=timesj.toString();
   // alert(timesj)
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
            if(xmins<10) {
                minutes.style.color="red";
                seconds.style.color="red";
            }
            if(xsecs<1) {
                
                minutes.value=0;
                seconds.value=0;

setTimeout(function(){
pops1.play();
navigator.vibrate([
  100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100,
]);
deadj = "yes";
navigator.vibrate([
  100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100,
]);
sessionStorage.setItem("deadj", JSON.stringify(deadj));
localStorage.setItem("deadj", JSON.stringify(deadj));
document.querySelector(".popup-image").style.display = "block";
       document.querySelector(".popup-image img").style.width = "100%";
document.querySelector(".popup-image img").style.height = "100%";  document.querySelector(".popup-image img").src = "../ovrj.gif";


  },100)

setTimeout(function(){
pops1.play();
navigator.vibrate([
  100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100,
]);
navigator.vibrate([
  100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100,
]);
document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = "../ovrj.png";


document.querySelector(".popup-image img").style.width = "100%";
document.querySelector(".popup-image img").style.height = "100%"; 
document.querySelector(".popup-image span").onclick = () =>{
   location=("../saw/index.html"); document.querySelector(".popup-image").style.display = "none";
}

  },1200)
            }
            else {


                if (timmrj==1){

//alert ("55")

} else {
xsecs--;
}
            
sessionStorage.setItem("timemj", JSON.stringify(xmins));
localStorage.setItem("timemj", JSON.stringify(xmins));
sessionStorage.setItem("timesj", JSON.stringify(xsecs));
localStorage.setItem("timesj", JSON.stringify(xsecs));
 setTimeout('Decrement()',1000);
            }
           
    }

if(xsecs<11&&ssop==null) {
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
times.pause();

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
