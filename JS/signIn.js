const sendBtn = document.querySelector('.send-btn');
const nameInput = document.querySelector('.sign-name');
const mailInput = document.querySelector('.sign-mail');
const checkInput = document.querySelector('.sign-check')
const playBtn = document.querySelector('.play-logo')

console.log(nameInput)

    
const play = sendBtn.addEventListener('click',()=>{
    if(nameInput.value.length && mailInput.value.length && checkInput.checked){
    sendBtn.disabled = true;
    sendBtn.style.display = 'none'
    playBtn.classList.remove('play-logo');
    playBtn.classList.add('play-logo-on')

    
    }
})

