let ssop;
var pops1 = new Audio('times/pops1.mp3');

let timmrp;

setInterval(function(){
 timmrp= JSON.parse(localStorage.getItem("timmrp"));

  },100)


let timesp = JSON.parse(localStorage.getItem("timesp"));
let timemp = JSON.parse(localStorage.getItem("timemp"));

var timess = new Audio('times/times.mp3');
var ttup = new Audio('times/up.mp3');

if(timemp!=null){

var xmins=timemp//3;
var ssecs=timesp
.toString();
var xsecs=timesp.toString();
   // alert(times)
//alert(timem)
} else {
var xmins=2;
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
            if(xmins<3) {
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
let deadp = "yes";
sessionStorage.setItem("deadp", JSON.stringify(deadp));
localStorage.setItem("deadp", JSON.stringify(deadp));
document.querySelector(".popup-image").style.display = "block";
       document.querySelector(".popup-image img").style.width = "100%";
document.querySelector(".popup-image img").style.height = "100%";  document.querySelector(".popup-image img").src = "../ovrp.gif";


  },100)

setTimeout(function(){

document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = "../ovrp.png";


document.querySelector(".popup-image img").style.width = "100%";
document.querySelector(".popup-image img").style.height = "100%"; 
document.querySelector(".popup-image span").onclick = () =>{
   location=("../saw/index.html"); document.querySelector(".popup-image").style.display = "none";
}

  },1100)
            }
            else {
              if (timmrp==1){

//alert ("55")

} else {
xsecs--;
}
           
            
sessionStorage.setItem("timemp", JSON.stringify(xmins));
localStorage.setItem("timemp", JSON.stringify(xmins));
sessionStorage.setItem("timesp", JSON.stringify(xsecs));
localStorage.setItem("timesp", JSON.stringify(xsecs));
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
if(xsecs==6) {

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
