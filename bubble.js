var hit
var score =0
var time
var rn
var bt


function makebubble(){
   
    for(var i = 1; i < 152;i++){
        var rn = Math.floor(Math.random()*10) 

        document.querySelector("#btm").innerHTML += `<div class="elem">${rn}</div>`
    }
    
}

function getAhit(){
     hit = Math.floor(Math.random()*10)
    document.querySelector("#gethit").textContent = hit

}
function getTimer(){
    var time = 60
   setInterval(function(){
    if(time>0){
      time--
    document.querySelector("#timeout").textContent = time  }
    else {
        clearInterval(time)
        document.querySelector("#btm").innerHTML = `<h1>Game over  <br> <span>Your score was ${score}<span/><h1/>`
    }

    },1000)}
   
function getScore(){

    score = score + 10
    document.querySelector("#getscore").textContent = score

}
var btm = document.querySelector("#btm")
 btm.addEventListener("click",function gameStart(dets){
    if (Number(dets.target.textContent) === hit){
        getScore()
        getAhit()
        makebubble()
        
        
      

          }
       
   })
    
makebubble()
getTimer()
getAhit()