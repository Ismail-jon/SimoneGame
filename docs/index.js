let gamePattern = [];
let playerPattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];

// Start the game on a keypress
document.addEventListener("keydown", startGame);

// Function to start the game
function startGame() {
  if (gamePattern.length === 0) {
    document.getElementById("level-title").textContent = "Level 1";
    nextSequence();
  }
}

// Function to generate the next sequence
function nextSequence() {
  playerPattern = []; // Reset player pattern for the new level
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  // Animate the new sequence
  playButtonAnimation(randomChosenColor);
  playSound(randomChosenColor);

  document.getElementById(
    "level-title"
  ).textContent = `Level ${gamePattern.length}`;
}

// Function to handle player button clicks
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {
    const clickedColor = this.id;
    playerPattern.push(clickedColor);

    playButtonAnimation(clickedColor);
    playSound(clickedColor);

    // Check the player's input
    checkAnswer(playerPattern.length - 1);
  });
});

// Function to check player's answer
function checkAnswer(currentIndex) {
  if (playerPattern[currentIndex] === gamePattern[currentIndex]) {
    // If the player completed the sequence
    if (playerPattern.length === gamePattern.length) {
      setTimeout(nextSequence, 1000); // Generate the next sequence
    }
  } else {
    // Game Over
    playSound("wrong");
    document.getElementById("level-title").textContent =
      "Game Over! Press Any Key to Restart";
    resetGame();
  }
}

// Function to reset the game
function resetGame() {
  gamePattern = [];
  playerPattern = [];
}

// Function to animate a button
function playButtonAnimation(color) {
  const button = document.getElementById(color);
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 100);
}

// Function to play a sound
function playSound(color) {
  const audio = new Audio(`./sounds/${color}.mp3`);
  audio.play();
}
  console.log("this");
  
  