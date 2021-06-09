function computerPlay(){
    const randomNumber = Math.random()
    if (randomNumber < 0.33){
        return "rock"
    }
    else if (randomNumber < 0.66){
        return "paper"
    }
    else{
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection){

    if (playerSelection === "rock"){
        if (computerSelection === "rock"){
            return "It's a tie!"
        }
        else if (computerSelection === "paper"){
            return "You lose!"
        }
        else if (computerSelection === "scissors"){
            return "You win!"
        }
    }
    
    if (playerSelection === "paper"){
        if (computerSelection === "paper"){
            return "It's a tie!"
        }
        else if (computerSelection === "rock"){
            return "You win!"
        }
        else if (computerSelection === "scissors"){
            return "You lose!"
        }
    }

    if (playerSelection === "scissors"){
        if (computerSelection === "paper"){
            return "You win!"
        }
        else if (computerSelection === "scissors"){
            return "It's a tie!"
        }
        else if (computerSelection === "rock"){
            return "You lose!"
        }
    }
}

function game(){
    if (document.getElementById('playerscore').innerHTML == '5'){
        document.getElementById('winnerphrase').textContent = "5 points, you win :)";
        document.getElementById('playerscore').innerHTML = "0";
        document.getElementById('botscore').innerHTML = "0";
    }
    else if (document.getElementById('botscore').innerHTML == '5'){
        document.getElementById('winnerphrase').textContent = "Oh no, bot got to 5 first ):";
        document.getElementById('playerscore').innerHTML = "0";
        document.getElementById('botscore').innerHTML = "0";
    }
}

const buttons = document.querySelectorAll('.img')

function logText(e){
    const playerChoice = e.target.id
    const computerSelection = computerPlay();
    let result
    
    if (playerChoice == "rockimg") {
        result = playRound('rock', computerSelection);
    }
    else if (playerChoice == "paperimg"){
        result = playRound('paper', computerSelection);
    }
    else if (playerChoice == "scissorsimg"){
        result = playRound('scissors', computerSelection);
    }
    
    if (result === "You win!"){
        document.getElementById('playerscore').innerHTML = 
        parseInt(document.getElementById('playerscore').innerHTML) + 1;
        document.getElementById('winnerphrase').textContent = `Bot chose ${computerSelection}, +1 Player!`
    }       
    else if (result === "You lose!"){
        document.getElementById('botscore').innerHTML = 
        parseInt(document.getElementById('botscore').innerHTML) + 1;
        document.getElementById('winnerphrase').textContent = `Bot chose ${computerSelection}, +1 Bot!`
    }    
    else{
        document.getElementById('winnerphrase').textContent = `Bot chose ${computerSelection}, it's a tie!`
    }

    game();

};

buttons.forEach(button => button.addEventListener('click', logText));

