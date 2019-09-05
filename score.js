var player1button = document.querySelector("#p1");
var player2button = document.getElementById("p2");
var d1=  document.getElementById("player1score");
var d2=  document.getElementById("player2score");
var reset = document.getElementById("reset");
var input1 = document.querySelector("input");
var maxscoredisplay = document.getElementById("maxscore");
var gameOver = false;
var winningScore = 5;


var max = document.getElementById("maxscore");
 var p1score= 0;
 var p2score = 0;

player1button.addEventListener("click", function(){
    if(!gameOver)
    {p1score++;
    console.log(p1score);
    d1.textContent = p1score;}
    if (p1score === winningScore){
        d1.classList.add("winner");
        gameOver = true;
        console.log("GAME OVER!");
    }

});

player2button.addEventListener("click", function(){
    if(!gameOver){
        p2score++;
    console.log(p2score);
    d2.textContent = p2score;
                 }
   if (p2score === winningScore){
       d2.classList.add("winner");
       gameOver = true;
       console.log("GAME OVER!");
   }
  
});

reset.addEventListener("click", function(){
    p1score= 0;
    p2score = 0;
    d1.textContent= 0;
    d2.textContent= 0;
    d1.classList.remove("winner");
    d2.classList.remove("winner");
    gameOver = false;
    
});

input1.addEventListener("change", function(){
 maxscoredisplay.textContent = input1.value;
 winningScore= Number(input1.value);
});

