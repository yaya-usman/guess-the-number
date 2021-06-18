'use strict';

const secretNum = 1 + Math.trunc(Math.random() * 20);
document.querySelector('.number').textContent = secretNum;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //no input guess yet
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Enter your guess!';

    // guessed correctly
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = '🎉 You Win!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else {
    //guess too high
    if (score > 0 && guess > secretNum) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
      if (score === 0) {
        document.querySelector('.message').textContent = '😔 You lose!';
        document.querySelector('body').style.backgroundColor = 'red';
      }
    }
    //guess too low
    else if (score > 0 && guess < secretNum) {
      document.querySelector('.message').textContent = '📉Too low!';
      score--;
      document.querySelector('.score').textContent = score;
      if (score === 0) {
        document.querySelector('.message').textContent = '😔 You lose!';
        document.querySelector('body').style.backgroundColor = 'red';
      }
    }
  }
});
