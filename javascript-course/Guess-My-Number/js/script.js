'use strict';

/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;
document.querySelector(`.guess`).value = 23;
*/

const againBtn = document.querySelector(`.again`);
// create random number and assign it to a variable
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

// select the button with class name check and set a click function
document.querySelector(`.check`).addEventListener(`click`, function () {
  // store the input value in a variable
  const guess = Number(document.querySelector(`.guess`).value);
  // if guess value equals to falsu value then set message text content to no number.
  if (!guess) {
    displayMessage(`⛔ No number!`);
  }
  // if randomNumber equals to guess value
  else if (guess === randomNumber) {
    displayMessage(`🎉 Correct Number!`); // change message content
    document.querySelector(`.number`).textContent = randomNumber; // change number text content
    document.querySelector(`body`).style.backgroundColor = `#60b347`; // change body bg color
    document.querySelector(`.number`).style.width = `30rem`; // change number text element's width
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  }
  // when guess is different
  else if (guess !== randomNumber) {
    if (score > 1) {
      // if score greater than 1 then change text content and reduce score by 1
      displayMessage(guess > randomNumber ? `📈 Too High!` : `📉 Too Low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      // if score is lower than 1 than change the message text content and set score to 0
      displayMessage(`💥 You lost the game`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});
// set a click function to the button with class name `again`
againBtn.addEventListener(`click`, function () {
  // set all the values to default and create a new random number
  score = 20;
  document.querySelector(`.score`).textContent = score;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing...`);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.guess`).value = ``;
});
