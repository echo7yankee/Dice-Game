// This handles the buttons animations
{
const buttons_btn = document.querySelectorAll('.btn');

function handleEnter() {
    this.classList.add('active-dice-icons');
}

function handleLeave() {
    this.classList.remove('active-dice-icons');
}

buttons_btn.forEach(button => {
    button.addEventListener('mouseenter', handleEnter)
});
buttons_btn.forEach(button => {
    button.addEventListener('mouseleave', handleLeave)
});
}


// The game
{
    const gamePlayerOne = document.querySelector('.game-player-one');
    const gamePlayerTwo = document.querySelector('.game-player-two');

    const rollDice_btn = document.querySelector('.btn-roll');
    const dice_div = document.querySelector('.dice');
    const dice_img = document.querySelector('.dice-img');

    const mainScoreOne_p = document.getElementById('main-score-one');
    const mainScoreTwo_p = document.getElementById('main-score-two');
    const currentScoreOne_p = document.getElementById('current-score-one');
    const currentScoreTwo_p = document.getElementById('current-score-two');

    mainScoreOne_p.textContent = 0;
    mainScoreTwo_p.textContent = 0;
    currentScoreOne_p.textContent = 0;
    currentScoreTwo_p.textContent = 0;
    let playerScore = 0;

    dice_div.classList.add('active-dice');

    rollDice_btn.addEventListener('click', () => {
        diceRandom = Math.floor(Math.random() * 6) + 1;
        dice_div.classList.remove('active-dice');
        dice_img.src = './img/img-' + diceRandom + '.png';

        if(diceRandom === 1) {
            gamePlayerOne.classList.toggle('winner');
            gamePlayerTwo.classList.toggle('winner');
        }
  

    });



}