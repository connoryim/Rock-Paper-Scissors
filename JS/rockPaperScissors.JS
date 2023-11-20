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

const playerSelection = "rock";
const computerSelection = "scissors";

function playRound(playerSelection,computerSelection){
    if ((playerSelection ==="rock") && (computerSelection ==="scissors")){
        let message = "You win!" + playerSelection + " beats " + computerSelection;
        return message;   
    }
    else if((playerSelection =s== "rock")&&(computerSelection ==="papper")){
        let message = "You lose!" + computerSelection + " beats " + playerSelection;
        return message;
    }

    else if ((playerSelection ==="paper") && (computerSelection ==="rock")){
        let message = "You win!" + playerSelection + " beats " + computerSelection;
        return message;
    }
    else if((playerSelection === "paper")&&(computerSelection ==="scissors")){
        let message = "You lose!" + computerSelection + " beats " + playerSelection;
        return message;
    }

    else if ((playerSelection ==="scissors") && (computerSelection ==="paper")){
        let message = "You win!" + playerSelection + " beats " + computerSelection;
        return message;
    }
    else if((playerSelection === "scissors")&&(computerSelection ==="rock")){
        let message = "You lose!" + computerSelection + " beats " + playerSelection;
        return message;
    }
    else{
        let message = "It's a tie!"
        return message;
    }
};


console.log(playRound("rock","scissors"));
