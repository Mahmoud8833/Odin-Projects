const user = document.getElementById('user');
const computer = document.getElementById('computer');
const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const userChoice = button.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);
    user.textContent = `You: ${userChoice}`;
    computer.textContent = `Computer: ${computerChoice}`;
    result.textContent = winner;
  });
});

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function getWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Draw!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'You Win!';
    } else {
      return 'Computer Wins!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'You Win!';
    } else {
      return 'Computer Wins!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'You Win!';
    } else {
      return 'Computer Wins!';
    }
  }
}
