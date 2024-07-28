const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const choiceElements = document.querySelectorAll(".choice");
const resultText = document.getElementById("result-text");
const computerChoiceImg = document.getElementById("computer-choice");
const scoreText = document.getElementById("score");

choiceElements.forEach(choiceElement => {
    choiceElement.addEventListener("click", () => {
        const playerChoice = choiceElement.id;
        const computerChoice = getRandomChoice();
        computerChoiceImg.src = `${computerChoice}.png`;
        computerChoiceImg.classList.remove("d-none");

        const winner = getWinner(playerChoice, computerChoice);
        displayResult(winner);

        if (winner === "player") {
            playerScore++;
        } else if (winner === "computer") {
            computerScore++;
        }

        scoreText.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    });
});

function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getWinner(player, computer) {
    if (player === computer) {
        return "draw";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

function displayResult(winner) {
    if (winner === "player") {
        resultText.textContent = "You win!";
        resultText.style.color = "green";
    } else if (winner === "computer") {
        resultText.textContent = "Computer wins!";
        resultText.style.color = "red";
    } else {
        resultText.textContent = "It's a draw!";
        resultText.style.color = "black";
    }
}
