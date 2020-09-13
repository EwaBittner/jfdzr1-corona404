var speed = 1;
var i = -400;
var j = -200;
var k = -400;

function smallElement() {
    i++
    let smallCloud = document.getElementById('small');
    smallCloud.style.backgroundPosition = i++/30 + 'px';

    setTimeout('smallElement()', speed);

    if (i > 24000) {
        i = -400;
    }
}


function mediumElement() {
    j++
    let mediumCloud = document.getElementById('medium');
    mediumCloud.style.backgroundPosition = j++/9 + 'px';
    
    setTimeout('mediumElement()', speed);

    if (j > 11000) {
        j = -500;
    }
}

function bigElement() {
    k++
    let bigCloud = document.getElementById('big');
    bigCloud.style.backgroundPosition = k++/17 + 'px';

    setTimeout('bigElement()', speed);

    if (k > 17000) {
        k = -500;
    }
}
