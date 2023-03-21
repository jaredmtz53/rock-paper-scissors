let playerScore = 0;
let computerScore = 0;
const score = document.createElement('p');
const p = document.createElement('p');
const buttons = document.querySelectorAll('button')
const outcomediv = document.querySelector('.outcome')
const PlayerScoreSpan = document.querySelector('.player-score');
const ComputerScoreSpan = document.querySelector('.computer-score');
const resetbutton = document.querySelector('.rstbutton');

resetbutton.addEventListener('click', () => location.reload())

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return "Player"
    }
    else {
        return "Computer"
    }
}
function playRound(playerSelection, computerSelection) {

    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        p.innerText = 'You Tied you both picked ' + playerSelection;
    }
    else if (result == "Player") {
        playerScore += 1;
        p.innerText = `${playerSelection} beats ${computerSelection}`;
    }
    else {
        computerScore += 1;
        p.innerText = `${computerSelection} beats ${playerSelection}`;
    }
    console.log(playerScore, computerScore);
    outcomediv.appendChild(p);
}

function getComputerChoice() {
    //get computer choice 
    const choices = ["rock", "paper", "scissors"];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}
function scoretrack(playerScore, computerScore)  {
    PlayerScoreSpan.innerText = `Your Score: ${playerScore}`;
    ComputerScoreSpan.innerText = `Computer Score: ${computerScore}`;
 
}

function playGame(playerScore, computerScore) {
    
    if(playerScore === 5) { 
        
        outcomediv.removeChild(p);
        score.innerText = 'You won the game';
        score.style.color = 'green';
        buttons.forEach(button => {
            button.disabled = true;
            resetbutton.disabled = false;
        })
    }
    if(computerScore === 5) {
        outcomediv.removeChild(p);
        score.innerText = 'You lost the game';
        score.style.color ='red';
        buttons.forEach(button => {
            button.disabled = true;
            resetbutton.disabled = false;
        })
    }
    
    outcomediv.appendChild(score);
}



buttons.forEach(button => {
button.addEventListener("click", () => {
    const playerSelection = `${button.className}`;   
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    playGame(playerScore, computerScore);
    scoretrack(playerScore, computerScore);

})
    
})
