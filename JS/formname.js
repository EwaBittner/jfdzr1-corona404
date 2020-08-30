const formSubmit = document.getElementById('submitButton');



formSubmit.addEventListener('click', (() => {
    const name = document.getElementById('first-name').value;

    sessionStorage.setItem('Name',name);
}));