let lives = 3;
let score = 0;
let gameOver = false;

const rgbValueElement = document.getElementById('rgbValue');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restartButton');
const colorOptions = document.querySelectorAll('.color-box');

// Generate a random RGB value
function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Set up the game
function setupGame() {
    if (gameOver) return;

    const correctColor = getRandomRGB();
    rgbValueElement.textContent = `RGB: ${correctColor}`;

    // Generate random colors including the right one
    const randomColors = [correctColor, getRandomRGB(), getRandomRGB()];
    randomColors.sort(() => Math.random() - 0.5); // Shuffle

    // Assign colors and add event listeners
    colorOptions.forEach((box, index) => {
        box.style.backgroundColor = randomColors[index];
        box.onclick = () => handleGuess(randomColors[index], correctColor);
    });

    feedbackElement.textContent = '';
}

// Handle user guesses
function handleGuess(selectedColor, correctColor) {
    if (gameOver) return; // Stops the user from clicking after the game has ended

    if (selectedColor === correctColor) {
        feedbackElement.textContent = 'Correct!';
        score++;
    } else {
        feedbackElement.textContent = 'Wrong! Try Again.';
        lives--;
    }

    // Check if game is over
    if (lives <= 0) {
        feedbackElement.textContent = `Game Over! Your score: ${score}`;
        scoreElement.textContent = `Lives: 0`;
        gameOver = true;
        restartButton.style.display = 'block';
    } else {
        scoreElement.textContent = `Lives: ${lives}`;
        setupGame();
    }
}

// Restart game
restartButton.addEventListener('click', () => {
    lives = 3;
    score = 0;
    gameOver = false;
    scoreElement.textContent = `Lives: ${lives}`;
    restartButton.style.display = 'none';   
    setupGame();
});

setupGame();
