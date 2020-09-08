const playBtn = document.querySelector('.play-button')
const player = document.querySelector(".cart")
const timer2 = document.querySelector('.timer')
const counter = document.querySelector('.countdown')


let startGame = playBtn.addEventListener('click', () => {
  playBtn.style.display = "none"
  counter.style.display = "block"
  let startCountdown = setInterval(() => {

    counter.textContent--
    if (counter.textContent == 0) {
      player.style.display = 'block';
      timer2.style.display = "block"
      fallingObjects();
      clearInterval(startCountdown);
      counter.style.display = "none";
      timer();

    }
  }, 1000);
})