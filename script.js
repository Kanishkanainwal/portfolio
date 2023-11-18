//toggle icon navbar
let menuicon = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 
}

//scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
            //active navbar links
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id+ ']').classList.add('active');
            });
        }
     });
    
     //sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
   
    //remove toggle icon and navbar when click navbar links(scroll)
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
//submit section
/*
const form = document.querySelector('form');
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kaniska0610@gamil.com",
        Password : "7182C115B57BF775B89B17CD92FB6B5B9277",
        To : 'kaniska0610@gamil.com',
        From : "kaniska0610@gamil.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
form.addEventListener("submit", (e) => { 
    e.preventDefault(); 
    sendEmail();
});/*