const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.site-menu');

menuBtn.addEventListener('click', () => {
    if(!menuBtn.classList.contains('menu-open')) {
        menuBtn.classList.add('menu-open');
    } else {
        menuBtn.classList.remove('menu-open');
    } 
});