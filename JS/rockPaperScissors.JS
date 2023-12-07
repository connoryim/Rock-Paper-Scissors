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
    
    if ((playerSelection ==="rock") && (computerSelection ==="scissors")){
        let message = "You win! " + playerSelection + " beats " + computerSelection;
        return message;   
    }
    else if((playerSelection === "rock")&&(computerSelection ==="paper")){
        let message = "You lose! " + computerSelection + " beats " + playerSelection;
        return message;
    }
    
    else if ((playerSelection ==="paper") && (computerSelection ==="rock")){
        let message = "You win! " + playerSelection + " beats " + computerSelection;
        return message;
    }
    else if((playerSelection === "paper")&&(computerSelection ==="scissors")){
        let message = "You lose! " + computerSelection + " beats " + playerSelection;
        return message;
    }
    
    else if ((playerSelection ==="scissors") && (computerSelection ==="paper")){
        let message = "You win! " + playerSelection + " beats " + computerSelection;
        return message;
    }
    else if((playerSelection === "scissors")&&(computerSelection ==="rock")){
        let message = "You lose! " + computerSelection + " beats " + playerSelection;
        return message;
    }
    
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

const results = document.querySelector("#results");
const buttons = document.querySelectorAll("button");
const score = document.querySelector("#score");

var playerScore = 0;
var computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        let node = document.createTextNode(playRound(button.id,getComputerChoice()));
        console.log(node.textContent);
        if(node.textContent.includes("win")){
            ++playerScore;
            console.log(playerScore);
        }
        else if(node.textContent.includes("lose")){
            ++computerScore;
            console.log(computerScore);
        }
        const para = document.createElement("p");
        para.appendChild(node);
        results.appendChild(para);
        
        scoreUpdate(playerScore,computerScore);

        if(playerScore === 5){
            const para = document.createElement("p");
            let node = document.createTextNode("You've won the game!")
            para.appendChild(node);
            results.appendChild(para);
            playerScore = 0;
            computerScore = 0;
            return playerScore, computerScore;
        }
        else if(computerScore === 5){
            const para = document.createElement("p");
            let node = document.createTextNode("You've lost the game...")
            para.appendChild(node);
            results.appendChild(para);
            playerScore = 0;
            computerScore = 0;
            return playerScore, computerScore;
        }
    });
});


function scoreUpdate (playerScore,computerScore){
    score.textContent = "Player Score: " + playerScore + " Computer Score: " + computerScore; 
}


scoreUpdate(playerScore,computerScore);