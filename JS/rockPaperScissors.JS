// SET computerChoice to rock paper or Scissors randomly
// GET input from user SET to userChoice
// IF userChoice beats computerChoice user wins
// ELSE IF computerChoice beats userChoice computer wins
// ELSE computerChoice equals userChoice the game is tied and replayed



function getComputerChoice(){
    let choices =["rock","paper","scissors"]
    let computerSelection = choices[(Math.floor(Math.random()*(choices.length)))];
    return computerSelection;
}
;

function getPlayerChoice(){
    let playerSelection = prompt("Choose rock, paper, or scissors.");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock"||"paper"||"scissors") {
        return playerSelection;
    }
}

function playRound(playerSelection,computerSelection){
    //if player chooses rock
    if ((playerSelection ==="rock") && (computerSelection ==="scissors")){
        let message = "You win! " + playerSelection + " beats " + computerSelection;
        return message;   
    }
    else if((playerSelection === "rock")&&(computerSelection ==="paper")){
        let message = "You lose! " + computerSelection + " beats " + playerSelection;
        return message;
    }
    //if player chooses paper
    else if ((playerSelection ==="paper") && (computerSelection ==="rock")){
        let message = "You win! " + playerSelection + " beats " + computerSelection;
        return message;
    }
    else if((playerSelection === "paper")&&(computerSelection ==="scissors")){
        let message = "You lose! " + computerSelection + " beats " + playerSelection;
        return message;
    }
    //if player choses scissors
    else if ((playerSelection ==="scissors") && (computerSelection ==="paper")){
        let message = "You win! " + playerSelection + " beats " + computerSelection;
        return message;
    }
    else if((playerSelection === "scissors")&&(computerSelection ==="rock")){
        let message = "You lose! " + computerSelection + " beats " + playerSelection;
        return message;
    }
    //if both player and computer have the same choice
    else{
        let message = "It's a tie!"
        return message;
    }
};

function game(){
    var i = 0;
    var playerScore = 0;
    var computerScore = 0;
    //Each game is 5 rounds
    while(i<5){
        
        i++;
        let message = playRound(getPlayerChoice(),getComputerChoice());
        console.log(message);
        if (message.includes("win")){
            playerScore++;
        }
        else if (message.includes("lose")){
            computerScore++;
        }
    }
    console.log(playerScore);
    console.log(computerScore);
    
    if (playerScore > computerScore){
        message = "You win with a score of " + playerScore + " to " + computerScore;
        return message;
    }
    else if(playerScore < computerScore){
        message = "You lose with a score of " + playerScore +" to " + computerScore;
        return message;
    }
    else{
        message = "It's a tie! with a score of " + playerScore +" to " + computerScore;
        return message;
    }
};


console.log(game());

