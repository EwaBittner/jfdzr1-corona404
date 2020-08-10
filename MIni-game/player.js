checkPositionLeft = ()=>{
    if(parseInt(document.querySelector(".cart").style.left) <= 0){
        parseInt(document.querySelector(".cart").style.left) = 0 
    }
}

checkPositionRight = ()=>{
    if(parseInt(document.querySelector(".cart").style.left) >= 1170 ){
        parseInt(document.querySelector(".cart").style.left) = 1170
    }
}

movePlayer = ()=>{
    let start = document.querySelector(".cart").style.left = 600 + 'px';
    document.body.onkeydown = () =>{
    const press = event.keyCode,
    Left = parseInt(document.querySelector(".cart").style.left);
if (press == 37) { 
        checkPositionLeft()
        document.querySelector(".cart").style.left = parseInt(document.querySelector(".cart").style.left) - 25 + 'px';
        document.querySelector(".cart").style.transform = "scaleX(-1)";
        console.log(document.querySelector(".cart").style.left)
    } else if (press == 39) { 
        checkPositionRight()
        document.querySelector(".cart").style.left = parseInt(document.querySelector(".cart").style.left) + 25 + 'px';
        document.querySelector(".cart").style.transform = "scaleX(1)";
        console.log(document.querySelector(".cart").style.left)
    } 
}
}
movePlayer()
