// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var choices = ["rock", "paper", "scissors"];
var randomNum = 0;
var cpuChoice = "";
var playerChoice = "";
var wins = 0;
var losses = 0;
var pos = 0;

function elem(str){
  return document.querySelector(str);
}

function update(target, val){
  elem(target).innerHTML = val;
}

function player(choice){
  var invalid = 0;
  choices.forEach(function(val, idx){
    if(choice === choices[idx]){
      update("#userChoice", choice);
    } else {
      invalid++;
    }
  });
  if(invalid === choices.length){
    alert("Invalid Option: Please choose rock, paper, or scissors.");
  }
}

function cpu(){
  randomNum = Math.floor(Math.random() * choices.length);
  cpuChoice = choices[randomNum];
  update("#computerChoice", cpuChoice);
}

function check(){
  choices.forEach(function(val, idx){
    if(playerChoice === cpuChoice){
      update("#result", `<p style="color: white;">Tie!</p>`);
    } else if(playerChoice === choices[idx]){
      if(idx === 0){
        if(cpuChoice === "paper"){
          update("#result", `<p style="color: red;">Computer Wins!</p>`);
          losses++;
        } else if(cpuChoice === "scissors"){
          update("#result", `<p style="color: lightgreen;">You Won!</p>`);
          wins++;
        }
      } else if(idx === 1){
        if(cpuChoice === "rock"){
          update("#result", `<p style="color: green;">You Won!</p>`);
          wins++;
        } else if(cpuChoice === "scissors"){
          update("#result", `<p style="color: red;">Computer Wins!</p>`);
          losses++;
        }
      } else {
        if(cpuChoice === "paper"){
          update("#result", `<p style="color: green;">You Won!</p>`);
          wins++;
        } else if(cpuChoice === "rock"){
          update("#result", `<p style="color: red;">Computer Wins!</p>`);
          losses++;
        }
      }
    }
  });
  update("#wins", wins);
  update("#losses", losses);
}

function play(inpt){
  player(inpt);
  cpu();
  check();
}

function reset(){
  wins = 0;
  losses = 0;
  update("#wins", 0);
  update("#losses", 0);
  update("#result", "");
  update("#userChoice", "");
  update("#computerChoice", "");
}

elem("#shoot").addEventListener("click", function(){
  playerChoice = elem("#input").value.toLowerCase();
  play(playerChoice);
  elem("#input").value = "";
});

elem("#reset").addEventListener("click", function(){
  reset();
});

elem("#difficulty").addEventListener("click", function(){
  if(pos === 0){
    update("#difficulty", "Difficulty: Hard");
    pos++;
  } else {
    update("#difficulty", "Difficulty: Easy");
    pos--;
  }
});