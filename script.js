// Game elements
const gameContainer = document.getElementById("game-container");
const startGameBtn = document.getElementById("start-game");
const gameTimerDisplay = document.getElementById("game-timer");
const scoreDisplay = document.getElementById("score");
const tomato = document.getElementById("tomato");
const gameArea = document.getElementById("game-area");

let gameTimer;
let gameTimeLeft = 15;
let score = 0;

function startGame() {
    score = 0;
    gameTimeLeft = 15;
    scoreDisplay.textContent = score;
    gameTimerDisplay.textContent = gameTimeLeft;
    startGameBtn.classList.add("hidden");

    moveTomato();

    gameTimer = setInterval(() => {
        gameTimeLeft--;
        gameTimerDisplay.textContent = gameTimeLeft;
        if (gameTimeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(gameTimer);
    alert(`Game over! Your score: ${score}`);
    startGameBtn.classList.remove("hidden");
}

function moveTomato() {
    const gameAreaWidth = gameArea.offsetWidth;
    const gameAreaHeight = gameArea.offsetHeight;
    const tomatoSize = tomato.offsetWidth;

    const randomX = Math.floor(Math.random() * (gameAreaWidth - tomatoSize));
    const randomY = Math.floor(Math.random() * (gameAreaHeight - tomatoSize));

    tomato.style.left = `${randomX}px`;
    tomato.style.top = `${randomY}px`;
}

function handleTomatoClick() {
    score++;
    scoreDisplay.textContent = score;
    moveTomato();
}

startGameBtn.addEventListener("click", startGame);
tomato.addEventListener("click", handleTomatoClick);
