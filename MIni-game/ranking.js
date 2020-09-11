const rankingBTN = document.querySelector('.ranking')
const BoxL = document.querySelector('.box-left')
const BoxHidd = document.querySelector('.box-left-ranking')
const score = document.querySelector('.score')
const rankingPlace = document.querySelector('.ranking-score')




rankingBTN.addEventListener('click',()=>{
    BoxL.style.display = "none";
    BoxHidd.style.display = "block";
    rankingPlace.innerHTML = (`6. ${userName} - ${score.innerHTML}pkt`)
    rankingBTN.style.display="none"

    

})