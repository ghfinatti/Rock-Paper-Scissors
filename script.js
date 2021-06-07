function computerPlay(){
    const randomNumber = Math.random()
    if (randomNumber < 0.33){
        return "Rock!"
    }
    else if (randomNumber < 0.66){
        return "Paper!"
    }
    else{
        return "Scissors!"
    }
}

function playRound(playerSelection, computerSelection){

    if (playerSelection === "rock"){
        if (computerSelection === "Rock!"){
            console.log("It's a tie!")
        }
        else if (computerSelection === "Paper!"){
            console.log("You lose!")
        }
        else if (computerSelection === "Scissors!"){
            console.log("You win!")
        }
    }
    
    if (playerSelection === "paper"){
        if (computerSelection === "Paper!"){
            console.log("It's a tie!")
        }
        else if (computerSelection === "Rock!"){
            console.log("You win!")
        }
        else if (computerSelection === "Scissors!"){
            console.log("You lose!")
        }
    }

    if (playerSelection === "scissors"){
        if (computerSelection === "Paper!"){
            console.log("You win!")
        }
        else if (computerSelection === "Scissors!"){
            console.log("It's a tie!")
        }
        else if (computerSelection === "Rock!"){
            console.log("You lose!")
        }
    }
}

const rockButton = document.querySelector('#rockimg');
const paperButton = document.querySelector('#paperimg');
const scissorsButton = document.querySelector('#scissorsimg');

rockButton.addEventListener('click', function() {
    const computerSelection = computerPlay();
    playRound('rock', computerSelection);
});

paperButton.addEventListener('click', function() {
    const computerSelection = computerPlay();
    playRound('paper', computerSelection);
});

scissorsButton.addEventListener('click', function() {
    const computerSelection = computerPlay();
    playRound('scissors', computerSelection);
});