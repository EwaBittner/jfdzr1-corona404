const endLifeLost = document.querySelector('.end-life-lost');



var lifeCounter = 3

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
        icon1.remove()

        timer.innerHTML = '0:00'

        endLifeLost.style.display = "flex";

    }
}