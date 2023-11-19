
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

  function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }