window.addEventListener('scroll', scrollFunction); 

function scrollFunction() {
    const heroElement = document.getElementById('Hero');
    if (document.documentElement.scrollTop > 80) {
        heroElement.style.padding = '6px 8px 4px 8px';
    } else {
        heroElement.style.padding = '15px 8px';
    }
}