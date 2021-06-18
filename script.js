'use strict';

let secretNum = 1 + Math.trunc(Math.random() * 20);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //no input guess yet
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Enter your guess!';
  }
  // guessed correctly
  else if (guess === secretNum) {
    document.querySelector('.message').textContent = '🎉 You Win!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
} 
//guessed wrong
  else {
    if (guess !== secretNum && score > 0) {
      document.querySelector('.message').textContent =
        guess > secretNum ? '📈 Too high!' : '📉Too low!';
      score--;
      document.querySelector('.score').textContent = score;
      if (score === 0) {
        document.querySelector('.message').textContent = '😔 You lose!';
        document.querySelector('body').style.backgroundColor = 'red';
      }
    }
  }
});

//Resetting the game
document.querySelector('.again').addEventListener('click', function () {
  secretNum = 1 + Math.trunc(Math.random() * 20);
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '';
  document.querySelector('.guess').value = '';
});
