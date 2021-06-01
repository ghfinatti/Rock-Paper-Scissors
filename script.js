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
    
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
        alert("Not an option.")
    }

    if (playerSelection === "rock"){
        if (computerSelection === "Rock!"){
            return "It's a tie!"
        }
        else if (computerSelection === "Paper!"){
            return "You lose!"
        }
        else if (computerSelection === "Scissors!"){
            return "You win!"
        }
    }
    
    if (playerSelection === "paper"){
        if (computerSelection === "Paper!"){
            return "It's a tie!"
        }
        else if (computerSelection === "Rock!"){
            return "You win!"
        }
        else if (computerSelection === "Scissors!"){
            return "You lose!"
        }
    }

    if (playerSelection === "scissors"){
        if (computerSelection === "Paper!"){
            return "You win!"
        }
        else if (computerSelection === "Scissors!"){
            return "It's a tie!"
        }
        else if (computerSelection === "Rock!"){
            return "You lose!"
        }
    }
}

function game(){
    for (i = 0; i < 5; i++){
        const playerSelection = prompt("Rock, Paper or Scissors?")
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection));
    }
}

