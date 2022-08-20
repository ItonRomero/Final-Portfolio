$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 20});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script

   //owl carousel script
    $('.carousel').owlCarousel({

      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0:{
          items: 1,
          nav: false
        },
        600:{
          items: 2,
          nav: false
        },
        1000:{
          items: 3,
          nav: false
        }
      }

    });

});


let lightMode = localStorage.getItem('lightMode'); 
const lightModeToggle = document.querySelector('#light-mode-toggle');


const enableLightMode = () => {
  //const currentScreenSize = screen.width 
  const menuBg = document.querySelector('.home')
 
  // 1. Add the class to the body
  document.body.classList.add('lightmode');
 
  // 2. Update darkMode in localStorage
  localStorage.setItem('lightMode', 'enabled');

  //3. Change image per screen size
   menuBg.classList.add('light-bg')

}


const disableLightMode = () => {
 // const currentScreenSize = screen.width 
  const menuBg = document.querySelector('.home')
 
  // 1. Remove the class from the body
  document.body.classList.remove('lightmode');
  
  // 2. Update darkMode in localStorage 
  localStorage.setItem('lightMode', null);

  //3. Change image per screen size
  menuBg.classList.remove('light-bg')

}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (lightMode === 'enabled') {
  enableLightMode();
} else {
  disableLightMode();
}

lightModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  const toggleIcon = document.querySelector("#toggle-icon");
  lightMode = localStorage.getItem('lightMode'); 
 
  
  // if it not current enabled, enable it
  if (lightMode !== 'enabled' && toggleIcon.classList.contains("fa-toggle-off") ) {
    enableLightMode();
    toggleIcon.classList.remove("fa-toggle-off")
    toggleIcon.classList.add("fa-toggle-on")

   
  // if it has been enabled, turn it off  
  } else {  
    disableLightMode();
    toggleIcon.classList.remove("fa-toggle-on")
    toggleIcon.classList.add("fa-toggle-off")
  
    
  }
});



var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
  for(tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}