document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "Web Designer.", "UX/UI Developer.", "Frontend Developer.", "Backend Developer!"];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
                StartTextAnimation(0);
            }, 20000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function(){
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);
});

//------------------------- active menu-------------------------//

let menuLi = document.querySelectorAll('.navList li a');
let section = document.querySelectorAll('section');

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY +97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

//------------------------- sticky navBar -------------------------//

const header = document.querySelector("header");
window.addEventListener("scroll",function () {
    header.classList.toggle("sticky",window.scrollY > 50)
})

//------------------------- toggle icon  navBar -------------------------//

let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navList");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("open");
}

/*-----------------------parallax---------------------------*/

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else {
            entry.target.classList.remove("show-items")
        }
    })
})

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((e1)=>observer.observe(e1));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((e1)=>observer.observe(e1));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((e1)=>observer.observe(e1));


/*------------------------------send and email using------------------------------*/

function sendEmail() {

    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let address = document.querySelector('#address').value;
    let contact = document.querySelector('#phone').value;
    let message = document.querySelector('#message').value;
    let subject = document.querySelector('#subject').value;

    let body = "Name :" + name + "<br/> Email :" + email + "<br/> Contact Number :" + contact + "<br/> Subject :" + subject + "<br/> Message :" + message;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sahanudana90@gmail.com",
        Password : "E9582F081599CABBA35DF416482333B3066F",
        To : 'sahanudana90@gmail.com',
        From : "sahanudana90@gmail.com",
        Subject : "This is the subject",
        Body : body
    }).then(
        message => alert(message)
    );
}

// preloader
var loader =document.getElementById("preloader");

window.addEventListener("load",function (){
    loader.style.display = "none";
})

/*-------------------------------------------dark-theme icon-------------------------------------*/

var icon = document.getElementById("icon");

icon.onclick = function (){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        icon.classList.add("bxs-sun");
        icon.classList.remove("bxs-moon");
    }else {
        icon.classList.add("bxs-moon");
        icon.classList.remove("bxs-sun");
    }
}



















