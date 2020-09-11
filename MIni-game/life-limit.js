const endLifeLost = document.querySelector('.end-life-lost');
const game1 = document.querySelector('.game');
const btnStart = document.querySelector('#Start-again');

var lifeCounter = 3
const icon1 = document.querySelector(".life-icon-1");
const icon2 = document.querySelector(".life-icon-2");
const icon3 = document.querySelector(".life-icon-3");


function lifeLost() {

    lifeCounter--;


    if (lifeCounter == 2) {
        icon3.style.visibility = "hidden"

    } else
    if (lifeCounter == 1) {
        icon2.style.visibility = "hidden"

    } else
    if (lifeCounter == 0) {
        youLost.play()
        gameMusic.stop()
        icon1.style.visibility = "hidden"
        endLifeLost.style.display = "flex";
        game1.style.display = "none";
        gameMusic.pause()

        clearInterval(startCountdown);
        clearTimeout(id);
        clearInterval(id)

    }
}

let startAgain = btnStart.addEventListener('click', () => {
    endLifeLost.style.display = "none";
    game1.style.display = "flex";
    lifeCounter += 3;
    gameMusic.play()
    icon3.style.visibility = "visible"
    icon2.style.visibility = "visible"
    icon1.style.visibility = "visible"
    fallingObjects();
    timer()





})