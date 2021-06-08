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
    if (document.getElementById('playerscore').innerHTML == '5'){
        document.getElementById('winnerphrase').textContent = "You Win :)";
        document.getElementById('playerscore').innerHTML = "0";
        document.getElementById('botscore').innerHTML = "0";
    }
    else if (document.getElementById('botscore').innerHTML == '5'){
        document.getElementById('winnerphrase').textContent = "Bot Wins ):";
        document.getElementById('playerscore').innerHTML = "0";
        document.getElementById('botscore').innerHTML = "0";
    }
}

const buttons = document.querySelectorAll('.img');

for (const button of buttons){
    button.addEventListener('click', function(){
        
        const computerSelection = computerPlay();
        const result = playRound('rock', computerSelection);
        
        if (result === "You win!"){
            document.getElementById('playerscore').innerHTML = 
            parseInt(document.getElementById('playerscore').innerHTML) + 1;
            document.getElementById('winnerphrase').textContent = "+1 Player!"
        }
        
        else if (result === "You lose!"){
            document.getElementById('botscore').innerHTML = 
            parseInt(document.getElementById('botscore').innerHTML) + 1;
            document.getElementById('winnerphrase').textContent = "+1 Bot!"
        } 

        else{
            document.getElementById('winnerphrase').textContent = "Tie!"
        }
    game();
    });
}
