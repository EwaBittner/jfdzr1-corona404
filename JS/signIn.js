const sendBtn = document.querySelector('.send-btn');
const nameInput = document.querySelector('.sign-name');
const mailInput = document.querySelector('.sign-mail');
const checkInput = document.querySelector('.sign-check')
const playBtn = document.querySelector('.play-logo')
const signInContainer = document.querySelector('.sign-in-container')

console.log(nameInput)

    
const play = sendBtn.addEventListener('click',()=>{
    if(nameInput.value.length && mailInput.value.length && checkInput.checked){
    sendBtn.disabled = true;
    signInContainer.style.display  = 'none'
    sendBtn.style.display = 'none'
    playBtn.style.display = ""

    
    }
})

