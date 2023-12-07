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

function playRound(playerSelection,computerSelection){
    //if player chooses rock
    console.log("Round");
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


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        console.log("Hello");
        let playerSelection = button.id;
        const results = document.querySelector("#results");

        const para = document.createElement("p");
        let node = document.createTextNode(playRound(playerSelection,getComputerChoice()));

        para.appendChild(node);
        console.log(para);
        results.appendChild(para);
    });
});
