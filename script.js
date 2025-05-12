function rollDice(){
    var dice1 = Math.floor(6*Math.random()+1);
    var dice2 = Math.floor(6*Math.random()+1);
    document.querySelector(".one").setAttribute("src","images/dice"+dice1+".png");
    document.querySelector(".two").setAttribute("src","images/dice"+dice2+".png");
    if (dice1>dice2){
        document.querySelector(".heading").textContent="🚩 Player 1 Wins.";
    }
    else if (dice1<dice2){
        document.querySelector(".heading").textContent="Player 2 Wins 🚩.";
    }
    else{
        document.querySelector(".heading").textContent="Draw.";
    }
}
document.querySelector(".btn").onclick = function() {rollDice()};
