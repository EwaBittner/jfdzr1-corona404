function timer() {
    const startingMinutes = 3;
    let time = startingMinutes * 60;

    const timer = document.querySelector('.timer');
    const intervalID = setInterval(updateTime, 1000);

    const endGame = document.querySelector('.end-game');

    function updateTime() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (minutes < 0 && seconds < 0) {
            youWin.play()
            clearInterval(intervalID)
            endGame.style.display = "flex";
        }
        if (lifeCounter == 0) {
            clearInterval(intervalID)

        }

        seconds = seconds < 10 ? '0' + seconds : seconds

        if (time > 0) {
            timer.innerHTML = `${minutes}:${seconds}`;
        } else {
            timer.innerHTML = '0:00';
        }

        time--;

    }

}