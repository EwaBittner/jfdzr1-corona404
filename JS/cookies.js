
if (document.cookie === "Approve=Yes"){

    document.querySelector('.cookie-container').style.display = "none"
}

document.querySelector(".acpt-cookie-no").addEventListener("click", function(){

    document.querySelector('.cookie-container').style.display = "none"

}
);


document.querySelector(".acpt-cookie-yes").addEventListener("click", function(){

    document.querySelector('.cookie-container').style.display = "none"
    document.cookie="Approve=Yes";

}
);

 
