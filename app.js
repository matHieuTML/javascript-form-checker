'use stritct';

const pseudo = document.getElementById('pseudo');
const tel = document.getElementById('tel');
const email = document.getElementById('email');
const button = document.querySelector('button');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');

button.addEventListener('click', function (e) {
    e.preventDefault();

    const regPseudo = /^[a-zA-Z0-9]{5,10}$/;

    if(!regPseudo.test(pseudo.value)) {
        p1.classList.remove('d-none');
    } else {
        p1.classList.add('d-none');
    }

    const regTel = /^0[6-7]\d{8}$/;

    if(!regTel.test(tel.value)) {
        p2.classList.remove('d-none');
    } else {
        p2.classList.add('d-none');
    }

    const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if(!regEmail.test(email.value)) {
        p3.classList.remove('d-none');
    } else {
        p3.classList.add('d-none');
    }

    if(!regPseudo.test(pseudo.value) && !regTel.test(tel.value) && !regEmail.test(email.value)) {
        alert('Tu sais pas lire ou quoi !');
    }

    if(regPseudo.test(pseudo.value) && regTel.test(tel.value) && regEmail.test(email.value)) {
        alert('Bienvenue cher ' + pseudo.value);
    }
});