const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById("userGuess").value);
  const messageElement = document.getElementById("message");

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    messageElement.textContent = "Invalid input: Please input a number between 1 and 10.";
    return;
  }

  attempts++;

  if (userGuess === randomNumber) {
    messageElement.textContent = `Congratulations! You've guessed the correct number (${randomNumber}) in ${attempts} attempts.`;
  } else if (userGuess < randomNumber) {
    messageElement.textContent = "Too low! Try again.";
  } else {
    messageElement.textContent = "Too high! Try again.";
  }
}
