
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

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }