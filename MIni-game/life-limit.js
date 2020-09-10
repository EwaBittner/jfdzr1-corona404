const endLifeLost = document.querySelector('.end-life-lost');
const game1 = document.querySelector('.game');
const btnStart = document.querySelector('#Start-again');
// const timer3 = document.querySelector('.timer');
var lifeCounter = 3
let startCountdown = null;

function lifeLost() {
    lifeCounter--;

    const icon1 = document.querySelector(".life-icon-1");
    const icon2 = document.querySelector(".life-icon-2");
    const icon3 = document.querySelector(".life-icon-3");

    if (lifeCounter == 2) {
        icon3.remove()
    } else
    if (lifeCounter == 1) {
        icon2.remove()
    } else
    if (lifeCounter == 0) {
        icon1.remove();
        endLifeLost.style.display = "flex";
        game1.style.display = "none";
        onGameLost()
        clearInterval(startCountdown);


    }
}

let startAgain = btnStart.addEventListener('click', () => {
    endLifeLost.style.display = "none";
    game1.style.display = "flex";
    // timer.innerHTML = '3.00';

})