checkPositionLeft = ()=>{
    if(parseInt(document.querySelector(".cart").style.left) <= 0){
        parseInt(document.querySelector(".cart").style.left) = 0  
    }
}

checkPositionRight = ()=>{
    if(parseInt(document.querySelector(".cart").style.left) >= document.querySelector(".game").clientWidth - 195){ // max width minus wiekość wózka
        parseInt(document.querySelector(".cart").style.left) = document.querySelector(".game").clientWidth - 195; 
    }
}

movePlayer = ()=>{
    let start = document.querySelector(".cart").style.left = 0 + 'px' //Pozycja startowa wózka
    document.body.onkeydown = () =>{
    const press = event.keyCode,
    Left = parseInt(document.querySelector(".cart").style.left);
if (press == 37) { 
        checkPositionLeft()
        document.querySelector(".cart").style.left = parseInt(document.querySelector(".cart").style.left) - 20 + 'px'; // o ile ma się przesówać w lewo
        document.querySelector(".cart").style.transform = "scaleX(-1)";
        console.log(document.querySelector(".cart").style.left)
    } else if (press == 39) { 
        checkPositionRight()
        document.querySelector(".cart").style.left = parseInt(document.querySelector(".cart").style.left) + 20 + 'px'; // o ile ma się przesówać w prawo
        document.querySelector(".cart").style.transform = "scaleX(1)";
        console.log(document.querySelector(".cart").style.left)
    } 
}
}
movePlayer()
