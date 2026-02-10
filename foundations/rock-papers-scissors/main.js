console.log("Hello Nerd!")

function getComputerChoice() {
    let number = Math.random();
    if (number <= 0.34) {
        return 'rock'
    }
    else if (number < 0.67) {
        return 'paper'
    }
    else {
        return 'scissors'
    }
}

function getHumanChoice() {
    let user_input = prompt("Rock, paper or scissors?").toLowerCase();

    while (user_input !== 'rock' && user_input !== 'paper' && user_input !== 'scissors') {
        user_input = prompt("Invalid! Please type 'rock', 'paper' or 'scissors':").toLowerCase();
    }

    if (user_input == 'rock') {
        return 'rock'
    }
    else if (user_input == 'paper') {
        return 'paper'
    }
    else if (user_input == 'scissors') {
        return 'scissors'
    }
}


function playGame() {

    let humanScore = 0
    let computerScore = 0

    for (let i=0; i<5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        let result = playRound(humanSelection, computerSelection)

        if (result == 'win') {
            humanScore += 1;
        }
        else if (result == 'lose') {
            computerScore += 1;
        }

        alert(`🤖 : ${computerScore} \n 👱🏻 : ${humanScore}`)
    }
    if (humanScore > computerScore) {
        return alert("Congratulations! You beat the 🤖!")
    }
    else if (humanScore < computerScore) {
        return alert("Unfortunately for you, you lost against the 🤖!")
    }
    else {
        return alert("You draw against the 🤖")
    }
}



function playRound(humanChoice, computerChoice) {
    if ((humanChoice == 'rock' && computerChoice == 'rock') || (humanChoice == 'paper' && computerChoice == 'paper') || (humanChoice == 'scissors' && computerChoice == 'scissors')) {
        return 'draw'
        // return alert(`Draw! ${humanChoice} same as ${computerChoice}`)
    }
    else if ((humanChoice == 'rock' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'rock')) {
        return 'lose'
        // return alert(`You LOSE! ${humanChoice} loses to ${computerChoice}`)
    }
    else if ((humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissors' && computerChoice == 'paper') || (humanChoice == 'rock' && computerChoice == 'scissors')) {
        return 'win'
        // return alert(`You WIN! ${humanChoice} beats ${computerChoice}`)
    }
}



playGame();
