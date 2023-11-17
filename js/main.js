
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

document.querySelector('.menu-icon').onclick = () =>{
    menu.classList.toggle('move');
}

document.querySelector('.menu').onclick = () =>{
    navbar.classList.toggle('active');
}

menu.onclick = () =>{
    navbar.classList.toggle('active');
    bell.classList.remove('active');
}
    
let bell = document.querySelector('.notification');

document.querySelector('#bell-icon').onclick = () =>{
    bell.classList.toggle('active');
}

