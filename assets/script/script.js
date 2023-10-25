const togglebtn = document.querySelector('.toggle-btn');
const navbar = document.querySelector('header .navbar');
togglebtn.addEventListener('click', function (){
    togglebtn.classList.toggle('active');
    navbar.classList.toggle('active');
});