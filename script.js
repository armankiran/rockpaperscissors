
let user 
let computer
let result
let playerScore = 0
let computerScore = 0
let tie = 0

//2
function computersTurn() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    switch(randomNumber) {
        case 1:
            computer = `rock`;
            break;
        case 2:
            computer = `scissors`;
            break;
        case 3:
            computer = `paper`;
            break;
    }
}

//3
function decideWinner() {
    if (user == `rock`) {
        switch(computer) {
            case `rock`:
                result = `tie`
                break;
            case 'scissors':
                result = `player`
                break;
            case `paper`:
                result = `computer`
                break;
        }
    }
    else if (user == `paper`) {
        switch(computer) {
            case `rock`:
                result = `player`
                break;
            case 'scissors':
                result = `computer`
                break;
            case `paper`:
                result = `tie`
                break;
        }
    }
    else if (user == `scissors`) {
        switch(computer) {
            case `rock`:
                result = `computer`
                break;
            case 'scissors':
                result = `tie`
                break;
            case `paper`:
                result = `player`
                break;
        }
    }
}





//4


//5
function changeScore() {
    document.querySelector(`#playerScore`).textContent = `Player: ` + playerScore
    document.querySelector(`#computerScore`).textContent = `Computer: ` + computerScore
    document.querySelector(`#tie`).textContent = `Tie: ` + tie
}

//6

let winner = ` `

function endGame() {
    if(playerScore == 5) {
        refreshGame();
        const playerWin = document.createElement(`div`);
        playerWin.setAttribute(`id`, `winner`);
        const playerWinText = document.createTextNode(`Player wins`);
        playerWin.appendChild(playerWinText);
        container.appendChild(playerWin)
        restartButton();
    } else if (computerScore == 5) {
        refreshGame();
        const computerWin = document.createElement(`div`);
        computerWin.setAttribute(`id`, `winner`);
        const computerWinText = document.createTextNode(`Computer Wins`);
        computerWin.appendChild(computerWinText);
        container.appendChild(computerWin);
        restartButton();
    }
}

function createButtons () {
    const playButtons = document.createElement(`div`);
    playButtons.setAttribute(`id`, `playButtons`);
    const rockButton = document.createElement(`button`);
    const rockButtonText = document.createTextNode(`Rock`)
    rockButton.setAttribute(`id`, `rock`);
    rockButton.appendChild(rockButtonText);
    playButtons.appendChild(rockButton);
    
    const paperButton = document.createElement(`button`);
    const paperButtonText = document.createTextNode(`Paper`);
    paperButton.setAttribute(`id`, `paper`);
    paperButton.appendChild(paperButtonText);
    playButtons.appendChild(paperButton);

    const scissorsButton = document.createElement(`button`);
    const scissorsButtonText = document.createTextNode(`Scissors`);
    scissorsButton.setAttribute(`id`, `scissors`);
    scissorsButton.appendChild(scissorsButtonText);
    playButtons.appendChild(scissorsButton);
    container.appendChild(playButtons);
}

function createScoreBoard() {
    const scoreBoard = document.createElement(`div`);
    scoreBoard.setAttribute(`id`, `scoreBoard`);
    const playerScoreDiv = document.createElement(`div`);
    playerScoreDiv.setAttribute(`id`, `playerScore`)
    const computerScoreDiv = document.createElement(`div`);
    computerScoreDiv.setAttribute(`id`, `computerScore`)
    const tieDiv = document.createElement(`div`);
    tieDiv.setAttribute(`id`, `tie`)
    const playerScoreText = document.createTextNode(`Player: 0`);
    const computerScoreText = document.createTextNode(`Computer: 0`);
    const tieText = document.createTextNode(`Tie: 0`);
    playerScoreDiv.appendChild(playerScoreText);
    computerScoreDiv.appendChild(computerScoreText);
    tieDiv.appendChild(tieText);    
    scoreBoard.appendChild(playerScoreDiv);
    scoreBoard.appendChild(computerScoreDiv);
    scoreBoard.appendChild(tieDiv);
    container.appendChild(scoreBoard);
}

function restartButton() {
    const restartScreen = document.createElement(`div`);
    restartScreen.setAttribute(`id`, `restartscrn`);
    const restartButton = document.createElement(`button`);
    restartButton.setAttribute(`id`, `restartbtn`)
    const restartButtonText = document.createTextNode(`Restart`);
    restartButton.appendChild(restartButtonText)
    restartScreen.appendChild(restartButton)
    container.appendChild(restartScreen);
    restartbtn.addEventListener(`click`, () => {
        window.location.reload();
    })
}


document.addEventListener(`click`, function(e) {
    if(e.target.id == `rock`){
        user = `rock`;
    } else if(e.target.id == `paper`){
        user = `paper`;
    } else if(e.target.id == `scissors`){
        user = `scissors`
    }
    playRound();
}
)

function refreshGame() {
    document.getElementById(`container`).textContent = ` `;
}

const startButton = document.getElementById(`starter`)
startButton.addEventListener(`click`, () => {
    refreshGame();
    startGame();
})




function score() {
    if (result == `player`) {
        playerScore++
    } else if (result == `computer`) {
        computerScore++
    } else if (result == `tie`) {
        tie++
    }
}

function playRound() {
    computersTurn();
    decideWinner();
    score();
    changeScore();
    endGame();
}

function setScore(){
    let playerScore = 0
    let computerScore = 0
    let tie = 0
}

function startGame() {
    refreshGame();
    createScoreBoard();
    createButtons();
    setScore();
}
