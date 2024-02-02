var timer=60;
var score = 0;
var hitrn = 0;


function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent= hitrn;
}

function makeBubble(){
var clutter="";

for(var i=0; i<=329;i++){
   var   rn =Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}


document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
   var time = setInterval(function(){
       if(timer>0){
        timer--;
        document.querySelector("#timerVal").textContent= timer;
       }else{
        clearInterval(time);
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over!!</h1>`;
       }
    },1000);
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent= score;
}



document.querySelector("#pbtm").addEventListener("click",function (dets){
    var clickedNumber = (Number(dets.target.textContent));
    if(clickedNumber=== hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});



runTimer();
makeBubble();
getNewHit();