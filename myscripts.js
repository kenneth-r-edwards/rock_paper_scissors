function computerPlay() {
    const opts = ['ROCK', 'PAPER', 'SCISSORS'];
    let compNum = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    return opts[compNum];
}

function playRound(playerSelection) {
    final.innerHTML="";
    results.appendChild(final);
    var phrase = "";
    var computerSelection = computerPlay();
    
    console.log(playerSelection, computerSelection); 
    if (playerSelection == "ROCK") {
        if (computerSelection == "ROCK") {
            //console.log("You both chose rock! Tie.");
            phrase = "You both chose rock! Tie.";
            winner.innerHTML = `${phrase}`;
            results.appendChild(winner);
            console.log(scoresObj.playerScore + ' ' + scoresObj.compScore);
            scores.innerHTML = `Player: ${scoresObj.playerScore}, Computer: ${scoresObj.compScore}`;
            
        } else if (computerSelection == "PAPER") {
            //console.log("Paper covers rock! You lost!");
            phrase = "Paper covers rock! You lost!";
            winner.innerHTML = `${phrase}`;
            results.appendChild(winner);
            scoresObj.compScore++;
            console.log(scoresObj.playerScore + ' ' + scoresObj.compScore);
            scores.innerHTML = `Player: ${scoresObj.playerScore}, Computer: ${scoresObj.compScore}`;
            
        } else if (computerSelection == "SCISSORS") {
            //console.log("Rock smashes scissors! You win!");
            phrase = "Rock smashes scissors! You win!";
            winner.innerHTML = `${phrase}`;
            results.appendChild(winner);
            scoresObj.playerScore++;
            console.log(scoresObj.playerScore + ' ' + scoresObj.compScore);
            scores.innerHTML = `Player: ${scoresObj.playerScore}, Computer: ${scoresObj.compScore}`;
           
        }
    } else if (playerSelection == "PAPER") {
        if (computerSelection == "ROCK") {
            //console.log("Paper covers rock! You win!");
            phrase = "Paper covers rock! You win!";
            winner.innerHTML = `${phrase}`;
            results.appendChild(winner);
            scoresObj.playerScore++;
            console.log(scoresObj.playerScore + ' ' + scoresObj.compScore);
            scores.innerHTML = `Player: ${scoresObj.playerScore}, Computer: ${scoresObj.compScore}`;
        } else if (computerSelection == "PAPER") {
            //console.log("You both chose paper! Tie.");
            phrase = "You both chose paper! Tie.";
            winner.innerHTML = `${phrase}`;
            results.appendChild(winner);
            console.log(scoresObj.playerScore + ' ' + scoresObj.compScore);
            scores.innerHTML = `Player: ${scoresObj.playerScore}, Computer: ${scoresObj.compScore}`;
            
        } else if (computerSelection == "SCISSORS") {
            //console.log("Scissors cuts paper! You lost!");
            phrase = "Scissors cuts paper! You lost!";
            winner.innerHTML = `${phrase}`;
            results.appendChild(winner);
            scoresObj.compScore++;
            console.log(scoresObj.playerScore + ' ' + scoresObj.compScore);
            scores.innerHTML = `Player: ${scoresObj.playerScore}, Computer: ${scoresObj.compScore}`;
            
        }
    } else if (playerSelection == "SCISSORS") {
        if (computerSelection == "ROCK") {
            //console.log("Rock smashes scissors! You lost!");
            phrase = "Rock smashes scissors! You lost!";
            winner.innerHTML = `${phrase}`;
            results.appendChild(winner);
            scoresObj.compScore++;
            console.log(scoresObj.playerScore + ' ' + scoresObj.compScore);
            scores.innerHTML = `Player: ${scoresObj.playerScore}, Computer: ${scoresObj.compScore}`;
            
        } else if (computerSelection == "PAPER") {
            //console.log("Scissors cuts paper! You win!");
            phrase = "Scissors cuts paper! You win!";
            winner.innerHTML = `${phrase}`;
            results.appendChild(winner);
            scoresObj.playerScore++;
            console.log(scoresObj.playerScore + ' ' + scoresObj.compScore);
            scores.innerHTML = `Player: ${scoresObj.playerScore}, Computer: ${scoresObj.compScore}`;
            
        } else if (computerSelection == "SCISSORS") {
            //console.log("You both chose scissors! Tie.");
            phrase = "You both chose scissors! Tie.";
            winner.innerHTML = `${phrase}`;
            results.appendChild(winner);
            console.log(scoresObj.playerScore + ' ' + scoresObj.compScore);
            scores.innerHTML = `Player: ${scoresObj.playerScore}, Computer: ${scoresObj.compScore}`;
            
        }
    } 
    if (scoresObj.playerScore === 5) {
        final.innerHTML = "Congratulations! You won!";
        results.appendChild(final);
        scoresObj.playerScore = 0;
        scoresObj.compScore = 0;
    } else if (scoresObj.compScore === 5) {
        final.innerHTML = "Sorry, you lost. Better luck next time.";
        results.appendChild(final);
        scoresObj.playerScore = 0;
        scoresObj.compScore = 0;
    }
}

const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');
const results = document.getElementById('results');

//var choice = computerPlay();


var winner = document.createElement('div');
winner.classList.add('win');
winner.innerHTML = "";
results.appendChild(winner);

var scoresObj = {playerScore: 0, compScore: 0};

var scores = document.createElement('div');
scores.classList.add('scores');
scores.innerHTML = `Player: ${scoresObj.playerScore}, Computer: ${scoresObj.compScore}`;
results.appendChild(scores);

rockBtn.addEventListener('click', function () { playRound("ROCK"); });
paperBtn.addEventListener('click', function () { playRound("PAPER"); });
scissorsBtn.addEventListener('click', function () { playRound("SCISSORS"); });

var final = document.createElement('div');
final.classList.add('final');





