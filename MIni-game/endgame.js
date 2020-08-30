/*     Dodanie Imienia do ekranu końcowego     */
const userName = sessionStorage.getItem('Name');
const name = document.getElementById('name');

name.innerText = userName;
/* ---- */

const codeButton = document.getElementById('getCode');