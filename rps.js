// Set player name
let playerName = prompt("Please enter your name:", "Player 1");

if (playerName) {
    document.getElementById('player1-name').textContent = playerName;
}

const hands = ['Rock', 'Paper', 'Scissors'];

let player1 = {
    name: 'Player 1',
    score: 0,
    choice: ''
}

let player2 = {
    name: 'Player 2',
    score: 0,
    choice: ''
}

function getHand() {
    return hands[parseInt(Math.random()*10)%3];
}

function playRound(player1, player2) {
    let player1Hand = player1.choice;
    let player2Hand = player2.choice;
    let winner = {};

    if (player1Hand == player2Hand) {
        alert('It\'s a tie! Play again!');
    }

    else if (player1Hand == 'Rock' && player2Hand == 'Scissors' || player1Hand == 'Paper' && player2Hand == 'Rock' || player1Hand == 'Scissors' && player2Hand == 'Paper') {
        alert('You chose ' + player1.choice + ' and Player 2 chose ' + player2.choice + '. You win this round!')
        winner = player1;
    }

    else {
        alert('You chose ' + player1.choice + ' and Player 2 chose ' + player2.choice + '. You lose this round!')
        winner = player2;
    }

    return winner;
}


const player1Choice = document.getElementById("player1-choice")
const player2Choice = document.getElementById("player2-choice")
const player1Score = document.getElementById("player1-score")
const player2Score = document.getElementById("player2-score")

const rockButton = document.getElementById("rock-button")
const paperButton = document.getElementById("paper-button")
const scissorsButton = document.getElementById("scissors-button")
const playButton = document.getElementById("play-hand-button")


rockButton.addEventListener("click", () => {
    player1Choice.innerHTML = "Rock"
    player1.choice = "Rock"
  });

paperButton.addEventListener("click", () => {
    player1Choice.innerHTML = "Paper"
    player1.choice = "Paper"
  });

scissorsButton.addEventListener("click", () => {
    player1Choice.innerHTML = "Scissors"
    player1.choice = "Scissors"
  });



playButton.addEventListener("click", () => {
    if (player1Choice.innerHTML != 'Rock' && player1Choice.innerHTML != 'Paper' && player1Choice.innerHTML != 'Scissors') {
        alert('Pick A Hand!')
    }
    else {
        player2.choice = getHand();
    }

    let whoWon = playRound(player1, player2);
    if (whoWon.name === player1.name) {
        player1.score++;
        player1Score.innerHTML = player1.score;
    }
    else if (whoWon.name === player2.name) {
        player2.score++;
        player2Score.innerHTML = player2.score;
    }
  });
