const startingMinutes = 3;
let time = startingMinutes * 60;

const timer = document.querySelector('.timer');
const intervalID = setInterval(updateTime,1000);

function updateTime() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
   
    if(minutes < 0 && seconds < 0){
        clearInterval(intervalID)
        alert('Koniec gry!');
        timer.innerHTML = 'dupa';
    }
    
    seconds = seconds < 10 ? '0' + seconds : seconds

    if(time > 0){
        timer.innerHTML = `${minutes}:${seconds}`;
    }else{
        timer.innerHTML = '0:00';
    }
     
     time --;

    //  substractTime();
}

timer.addEventListener('click', function addTime(){
    time = time + 15;
})

 addTime()

// timer.addEventListener('click', function substractTime(){
//     time = time - 15;
// })