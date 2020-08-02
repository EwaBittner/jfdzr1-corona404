
const hide = ()=>{
    document.querySelector('.cookie-container').style.display = "none"
}
if (document.cookie.includes("Approve=Yes")){
    hide()
}
document.querySelector(".acpt-cookie-no").addEventListener("click", function(){
   hide()
}
);
document.querySelector(".acpt-cookie-yes").addEventListener("click", function(){
    hide()
    document.cookie="Approve=Yes; max-age=86400";
}
);