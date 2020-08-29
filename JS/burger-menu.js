const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
const nav = document.querySelector('.site-menu');

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuOpen = true;
        menuBtn.classList.add('open');
        // nav.classList.toggle('.site-menu-active');
    } else {
        menuOpen = false;
        menuBtn.classList.remove('open');
    } 
});