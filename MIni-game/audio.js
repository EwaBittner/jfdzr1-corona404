function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}



let gameMusic = new sound(src = "./music/Game-music.mp3");
var bomb = new sound(src = "./music/bomb.mp3");
var collectItem = new sound(src = "./music/collect-item.mp3");
var youLost = new sound(src = "./music/you-lost.mp3");
var youWin = new sound(src = "./music/You-win.mp3");
var reward = new sound(src = "./music/reward.mp3");