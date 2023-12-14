//toggle icon navbar
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 
}


     //sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
   
    //remove toggle icon and navbar when click navbar links(scroll)
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');

