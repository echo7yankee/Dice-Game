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
    const gamePlayerOne = document.querySelector('.game-player-0');
    const gamePlayerTwo = document.querySelector('.game-player-1');

    const rollDice_btn = document.querySelector('.btn-roll');
    const newGame_btn = document.querySelector('.btn-new');
    const holdBtn_btn = document.querySelector('.btn-hold');

    const dice_div = document.querySelector('.dice');
    const dice_img = document.querySelector('.dice-img');

    const winnerPanel_div = document.querySelector('.winner');
    const overlay_div = document.querySelector('.overlay');
    const closeBtn_btn = document.querySelector('.close-btn');
    const playAgainBtn_btn = document.querySelector('.winner-btn');

    let winPlayer_span = document.getElementById('win-player');
    
    let roundScore, activePlayer, scores

    reset();

    rollDice_btn.addEventListener('click', () => {
        diceRandom = Math.floor(Math.random() * 6) + 1;
        dice_div.classList.remove('active-dice');
        dice_img.src = './img/img-' + diceRandom + '.png';

        if (diceRandom !== 1) {
            roundScore += diceRandom;
            document.getElementById('current-score-' + activePlayer).textContent = roundScore;
        } else {
         changePlayer();
        }


    });

    holdBtn_btn.addEventListener('click', () => {
        scores[activePlayer] += roundScore;
        document.getElementById('main-score-' + activePlayer).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 20) {
            winnerPanel_div.classList.add('active-winner');
            overlay_div.classList.add('active-overlay');
            winPlayer_span.textContent = 'Player ' + activePlayer;
        }
        changePlayer();

    });

    function changePlayer() {
        if(activePlayer === 0) {
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }
        roundScore = 0;

        document.getElementById('current-score-0').textContent = '0';
        document.getElementById('current-score-1').textContent = '0';
        dice_div.classList.add('active-dice');
        gamePlayerOne.classList.toggle('active');
        gamePlayerTwo.classList.toggle('active');
    }

    newGame_btn.addEventListener('click', reset);
    playAgainBtn_btn.addEventListener('click', () => {
        winnerPanel_div.classList.remove('active-winner');
        overlay_div.classList.remove('active-overlay');
        reset();
    });

    function reset() {

        roundScore = 0;
        activePlayer = 0;
        scores = [0, 0];
        document.getElementById('current-score-0').textContent = '0';
        document.getElementById('current-score-1').textContent = '0';
        document.getElementById('main-score-0').textContent = '0';
        document.getElementById('main-score-1').textContent = '0'
        gamePlayerOne.classList.add('active');
        gamePlayerTwo.classList.remove('active');
        dice_div.classList.add('active-dice');
    }

    closeBtn_btn.addEventListener('click', () => {
        winnerPanel_div.classList.remove('active-winner');
        overlay_div.classList.remove('active-overlay');
    })

    overlay_div.addEventListener('click', () => {
        overlay_div.classList.remove('active-overlay');
        winnerPanel_div.classList.remove('active-winner');
    })


}