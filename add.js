var timer = 30;
var score = 0;
var hitrn = 0;

function increaseScoer (){
     score += 10;
     document.querySelector("#scoreVal").textContent = score

}

function getNewHit() {
   hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn
}

function makeBubble () {
    let clutter = ('')

for(var i=1; i<155; i++){
    var rn= Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML=clutter;
}

function runTimer (){
     var timerint = setInterval(() => {
        if(timer>0){
         timer--;
         document.querySelector("#timerVal").textContent = timer;
        }
        else{
        clearInterval(timerint) 
        document.querySelector("#pbtm").innerHTML = `<h2>Game Over</h2>`
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets){
   var clickNumber= (Number(dets.target.textContent))
   if(clickNumber === hitrn){
       getNewHit()
       makeBubble();
       increaseScoer ()

   }

})

runTimer();
makeBubble();
getNewHit();






