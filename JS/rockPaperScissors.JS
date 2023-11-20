// SET computerChoice to rock paper or Scissors randomly
// GET input from user SET to userChoice
// IF userChoice beats computerChoice user wins
// ELSEIF computerChoice beats userChoice computer wins
// ELSE computerChoice equals userChoice the game is tied and replayed



function getComputerChoice(){
    let choices =["rock","paper","scissors"]
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    return computerSelection;
}
;

function getPlayerChoice(){
    let playerSelection = prompt("Choose rock, paper, or scissors.");
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection)
    if (playerSelection === "rock"||"paper"||"scissors") {
        return playerSelection;
    }
}


console.log(getPlayerChoice());
