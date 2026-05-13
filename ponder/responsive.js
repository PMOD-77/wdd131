const menu = document.querySelector('nav');
const btn = document.querySelector('.menu-btn');

btn.addEventListener('click', toggleMenu);

function toggleMenu() { 
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}

let password = '123test';
let username = 'user_testorian123';

// if 
//  (username === 'user_testorian123' && password === '123test') console.log('Welcome, user_testorian123!');
// else 
//  console.log('Invalid username or password. Please try again.');