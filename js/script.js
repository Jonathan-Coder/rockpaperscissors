// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var cpuChoice = [""];
var playerChoice = "";
var wins = 0;

function elem(str){
  return document.querySelector(str);
}

function player(choice){
  if(choice === "rock"){
    elem("#userChoice").innerText = choice;
  } else if(choice=== "scissors"){
    elem("#userChoice").innerText = choice;
  } else if(choice === "paper"){
    elem("#userChoice").innerText = choice;
  } else {
    alert("Invlaid Choice: Please pick Rock, Paper or Scissors.");
  }
}

function cpu(){
  var num = Math.random() * 3;
  
}

elem("#shoot").addEventListener("click", function(){
  playerChoice = elem("#input").value.toLowerCase();
  player(playerChoice);
});