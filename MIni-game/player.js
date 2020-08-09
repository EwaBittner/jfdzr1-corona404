checkPositionLeft = ()=>{
    if(parseInt(document.querySelector(".cart").style.left) <= 0){
        parseInt(document.querySelector(".cart").style.left) = 10 
    }
}

checkPositionRight = ()=>{
    if(parseInt(document.querySelector(".cart").style.left) >= 1200 ){
        parseInt(document.querySelector(".cart").style.left) = 1200
    }
}

movePlayer = ()=>{
    let start = document.querySelector(".cart").style.left = 0;
    document.body.onkeydown = () =>{
    const press = event.keyCode,
    Left = parseInt(document.querySelector(".cart").style.left);
if (press == 37) { 
        checkPositionLeft()
        document.querySelector(".cart").style.left = parseInt(document.querySelector(".cart").style.left) - 10 + 'px';
        console.log(document.querySelector(".cart").style.left)
    } else if (press == 39) { 
        checkPositionRight()
        document.querySelector(".cart").style.left = parseInt(document.querySelector(".cart").style.left) + 10 + 'px';
        console.log(document.querySelector(".cart").style.left)
    } 
}
}
movePlayer()