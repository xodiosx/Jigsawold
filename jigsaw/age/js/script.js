
let adult = false; 
var playing = false;
var score = 0;
var action;
var timeRemaining;
var correctAnswer;
var hasPlayed = false;
function playSound () {
	let ding = new Audio('times.mp3');
ding.loop = false;
if(!hasPlayed) {
	ding.play();
hasPlayed = true;  
}
}

 

function OnTriggerEnter() {
    if(!hasPlayed) {
        ding.play();
        hasPlayed = true;  
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
  document.getElementById('startreset').classList.remove('hidden');
};

const onstatbtn = e => {
  console.log('game is playing');
  
};

document.addEventListener('DOMContentLoaded', e => {
  let assets = [
    loadaudio('a1','times.mp3'),
loadaudio('a2','times.mp3')
  ];
  Promise.all(assets).then(initgame);
  
  document.getElementById('startreset').addEventListener('click', onstatbtn);
});







//if we click on the start/reset
document.querySelector("#startreset").onclick = () =>
{
    //if we are playing
    if (playing) {
        //reload page
        location.reload();
    }
    // if we are not playing
    else {
        //change the mode of playing
        playing = true;
        //set score to 0
        score = 0;
        document.querySelector("#scorevalue").innerHTML = score;
        //show countdown box
        showElement("timeremaining");
        //countdown time
        timeRemaining = 40;
        //show countdown in sec
        document.querySelector("#timeremainingvalue").innerHTML = timeRemaining;
        //hide the game over box
        hideElement("gameOver");
        //change button to reset
        document.querySelector("#startreset").innerHTML = "اعادة";
        //start countdown
        startCountdown();
        //generate new Q&A
        generateQA();
    }
}

for (let i = 1; i < 5; i++) {
    //if we click on answer box
    document.querySelector("#box" + i).onclick = () =>
    {
        //if we are playing
        if (playing) {
            //if correct answer
            if (document.querySelector("#box" + i).innerHTML == correctAnswer) {
                //increase score by 1
                score++;
                //set score value
                document.querySelector("#scorevalue").innerHTML = score;
                //hide wrong box and show correct box
                hideElement("wrong");
                showElement("correct");
                setTimeout(() =>
                {
                    hideElement("correct");
                }, 1000);

                //generate new Q&A
                generateQA();
            }
            //if wrong answer
            else {
                //show wrong box and hide correct box
                hideElement("correct");
                showElement("wrong");
          setTimeout(() =>
                {
               score--; 
document.querySelector("#scorevalue").innerHTML = score;          hideElement("wrong");
                }, 1000);
            }
        }
    }
}

function startCountdown()
{
    action = setInterval(() =>
    {
        //reduce time by 1sec in loops
        timeRemaining -= 1;
        //show countdown in sec
if(timeRemaining<11){

//OnTriggerEnter();
playSound();
}
    document.querySelector("#timeremainingvalue").innerHTML = timeRemaining;
        //no time left
        if (timeRemaining == 0) {
            //game over
            stopCountdown();
            //show game over box
            showElement("gameOver");
            //show game over message and score
            document.querySelector("#gameOver").innerHTML = "<p>خطأ العمر غير مناسب!</p><p>المجموع : " + score + ".</p>";
            //hide countdown
           hideElement("timeremaining");
         

   //hide correct box
            hideElement("correct");
            //hide wrong box
            hideElement("wrong");
            //change the mode of playing
            playing = false;
            //change button to start 
            document.querySelector("#startreset").innerHTML = "أبدء الاختبار";
        }
if (score <= -2) {
            //game over
            stopCountdown();
            //show game over box
            showElement("gameOver");
            //show game over message and score
            document.querySelector("#gameOver").innerHTML = "<p>خطأ العمر غير مناسب!</p><p>المجموع : " + score + ".</p>";
            //hide countdown
            hideElement("timeremaining");


  //hide correct box
            hideElement("correct");
            //hide wrong box
            hideElement("wrong");
            //change the mode of playing
            playing = false;
            //change button to start 
            document.querySelector("#startreset").innerHTML = "أبدء الاختبار";
        }
if (score >=5) {
            //game over
            stopCountdown();
            //show game over box
            showElement("gameOver");
            //show game over message and score
           document.querySelector("#gameOver").style.background=" linear-gradient(green, blue)"; document.querySelector("#gameOver").innerHTML = "<p>تم التاكد من العمر بنجاح!</p><p>المجموع : " + score + ".</p>";
            //hide countdown
            hideElement("timeremaining");

adult = true; sessionStorage.setItem("adult", JSON.stringify(adult));
localStorage.setItem("adult", JSON.stringify(adult));
  //hide correct box
            hideElement("correct");
            //hide wrong box
            hideElement("wrong");
            //change the mode of playing
            playing = false;
            //change button to start 
            document.querySelector("#startreset").innerHTML = "أبدء الاختبار";
setTimeout(function(){
location=("../saw/index.html");


  },2000)

        }
    }, 1000);
}

function stopCountdown()
{
    //stop countdown
    clearInterval(action);
}

function hideElement(Id)
{
    document.querySelector("#" + Id).style.display = "none";
}

function showElement(Id)
{
    document.querySelector("#" + Id).style.display = "block";
}

function generateQA()
{
    //generating random number between 1-9
    var x = 5 + Math.round(9 * Math.random());
    var y = 3 + Math.round(9 * Math.random());
    //correct answer
    correctAnswer = x * y;
    //setting question
    document.querySelector("#question").innerHTML = x + " x " + y;
    //setting random position for correct answer
    var correctPosition = 1 + Math.round(3 * Math.random());
    document.querySelector("#box" + correctPosition).innerHTML = correctAnswer;

    var answers = [correctAnswer];

    //checking and replacing duplicate values
    for (let i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
            } while ((answers.indexOf(wrongAnswer)) > -1)
            document.querySelector("#box" + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer)
        }
    }
}
