let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');

// end change
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');


let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let phBtn = document.querySelectorAll('.ph-btn');



window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});
formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');

});


var moon = document.getElementById("moon");

moon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        moon.src = "./imgs/img/sun10.png";
    }else{
        moon.src = "./imgs/img/moon.png";
    }
}
// add here gallery
var gallerySwiper = new Swiper('.swiper', {

    autoplay: {
    delay: 2500
    },
    onMouseEnter: function hoverIn() {
    document.querySelector('.content').classList.add('active');
    },
  
    onMouseLeave: function hoverOut() {
    document.querySelector('.content').classList.remove('active');
    }
  });

phBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#ba').src = src;
    });
});


var reviewSwiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var brandSwiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4, 
        },
        // 1200: {
        //     slidesPerView: 5,
        // },
    },
});


