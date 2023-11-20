// SET computerChoice to rock paper or Scissors randomly
// GET input from user SET to userChoice
// IF userChoice beats computerChoice user wins
// ELSEIF computerChoice beats userChoice computer wins
// ELSE computerChoice equals userChoice the game is tied and replayed



function getComputerChoice(){
    var choices =["rock","paper","scissors"]
    var computerSelection = choices[Math.floor(Math.random()*choices.length)];
    return computerSelection;
}
;
console.log(getComputerChoice());
