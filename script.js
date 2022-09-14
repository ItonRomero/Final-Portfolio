

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


        const projects = [
        {
          id: 1,
          title: "My Portfolio",
          category: "Portfolio",
          img1: "img/MyPortfolio-Thumbnail.jpg",
          img2: "img/MyPortfolio-Thumbnail-light.jpg",
          img3: "img/MyPortfolio-Thumbnail-light-Sscreen.jpg",
          img4: "img/MyPortfolio-Thumbnail-Sscreen.jpg",
          url: "",
          sourcecode: "https://github.com/ItonRomero/Final-Portfolio",
          technologies: "HTML, CSS, JavaScript",
          desc: "FasionWeb"        
        },
         {
          id: 2,
          title: "RedStore Ecommerce",
          category: "Ecommerce",
          img1: "img/RedStore-Thumbnail.jpeg",
          img2: "img/RedStore-Thumbnail-2nd.jpeg",
          img3: "img/RedStore-Thumbnail-3rd.jpeg",
          img4: "img/RedStore-Thumbnail-4th.jpeg",
          url: "https://itonromero.github.io/Redstore.Ecommerce/",
          sourcecode: "https://github.com/ItonRomero/Redstore.Ecommerce",
          technologies: "HTML, CSS, JavaScript",
          desc: "HTML, CSS, JavaScript"
                  
        },
         {
          id: 3,
          title: "Fashion Website",
          category: "Ecommerce", 
          img1: "img/FasionWeb-project.jpeg",
          img2: "img/Portfolio-homepage.jpeg",
          img3: "img/FasionWeb-project.jpeg",
          img4: "img/FasionWeb-project.jpeg",
          url: "https://itonromero.github.io/Xypo-Business-Website/",
          sourcecode: "https://github.com/ItonRomero/Xypo-Business-Website",
          technologies: "HTML, CSS, JavaScript",
          desc: "HTML, CSS, JavaScript"
                
        },
        {
          id: 4,
          title: "Xypo Business Website",
          category: "Business-Website", 
          img1: "img/Xypo-Thumbnail-1st.jpg",
          img2: "img/Xypo-Thumbnail-2nd.jpg",
          img3: "img/Xypo-Thumbnail-3rd.jpg",
          img4: "img/Xypo-Thumbnail-4th.jpg",
          url: "https://itonromero.github.io/Xypo-Business-Website/",
          sourcecode: "https://github.com/ItonRomero/Xypo-Business-Website",
          technologies: "HTML, CSS, JavaScript",
          desc: "HTML, CSS, JavaScript"
                  
        }
        
      
      ];



const projectSection  = document.querySelector(".projects-section")     
const projectContainer = document.querySelector(".project-container")   
const btnContainer = document.querySelector(".btn-container")




//load items
 window.addEventListener("DOMContentLoaded", function () {
   displayProjectItems(projects);
   displayCategoriesBtns();

  

});

 
 // -------- JS FOR DISPLAYING ALL PROJECT ---------- 
function displayProjectItems(projectItems) {
     let displayProjects = projectItems.map(function (item) {

        return `<div class="card">
                    <div class="box">
                        <img src=${item.img1} alt="test" class="photo" data-id=${item.id} />
                        <div class="text">${item.title}</div>
                    </div>
                </div>`;
    }); 
        
       displayProjects = displayProjects.join("")
       projectSection.innerHTML = displayProjects
    
         // -------- JS FOR DISPLAYING SELECTED PROJECT ---------- 
        const eachImgs = document.querySelectorAll('.photo')
         eachImgs.forEach(function (img) {
        img.addEventListener("click", function(e){
            
            // filtering
             const category = e.currentTarget.dataset.id
             console.log(category)
             const projectTitle = projects.filter(function (projectItems) {

                if (projectItems.id == category) {
                    return projectItems
                }
             })
         
             displaySelectedProject(projectTitle)
             projectContainer.style.display = "flex"
             removeProjectDetails()
            changeImg()
        })
    })

}


 // -------- JS FOR DISPLAYING ALL CATEGORY PROJECT BTNS ---------- 
function displayCategoriesBtns() {
      const categories = projects.reduce(function(values,item){
     if(!values.includes(item.category)){
        values.push(item.category);
      }
      return values
  },['all']
  );

  const categoryBtns = categories.map(function(category){
      return`<button class="filter-btn" type="button" data-category=${category}>${category}</button>`
  })
  .join("")
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn")
  
 // -------- JS FOR FILTERING DISPLAY PROJECTS USING BTNS ---------- 
filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
       const category = e.currentTarget.dataset.category;
       const projectCategory = projects.filter(function(projectItem){
        
          if(projectItem.category === category){
                return projectItem
               
          }
        
       });
        if(category === 'all'){
           displayProjectItems(projects)
        }
        else{
           displayProjectItems(projectCategory)
        }
    });
  });
}



// -------- JS FOR DISPLAYING SELECTED PROJECT ----------
  function displaySelectedProject(selectedProjects) {
      let displayproject = selectedProjects.map(function (item) {
          return ` <span class="closeProject">X</span>
                    <div class="small-container single-project">
			            <div class="project-row">
                            <div class="col-2">
                                <img src=${item.img1} alt="gallery 1" id="product-img">
                        
                                <div class="small-img-row">
                                    <div class="small-img-col">
                                        <img src=${item.img1} alt="gallery 1" class="small-img">
                                    </div>
                                    <div class="small-img-col">
                                        <img src=${item.img2} alt="gallery 1" class="small-img">
                                    </div>
                                    <div class="small-img-col">
                                        <img src=${item.img3} alt="gallery 1" class="small-img">
                                    </div>
                                    <div class="small-img-col">
                                        <img src=${item.img4} alt="gallery 1" class="small-img">
                                    </div>
                                </div>
                            </div>

                            <div class="col-2">
                                <p>${item.category}</p>
                                <h1><span>${item.title}</span></h1>
                                <h3>URL: <a href="${item.url}" class="btn"><span>View<span></a></h3> 
                                <h3>Source Code: <a href="${item.sourcecode}" class="btn"><span>View<span></a></h3> 
                                <h3>Technologies:<br><span> ${item.technologies}</span></h3>
                                <h3>Project Details  <i class="fa fa-indent"></i></h3>  
                                <br>
                                <p><span>${item.desc}</span></p>
                            </div>
                        </div>
                    </div>`
      });
      displayproject = displayproject.join("")
      projectContainer.innerHTML = displayproject
      
  };

// -------- JS FOR CLOSING SELECTED PROJECT ----------
  function removeProjectDetails() {
    const exBtn = document.querySelector(".closeProject")
    exBtn.addEventListener('click', function() {
       projectContainer.style.display = "none"
    })
  }



// -------- JS FOR PROJECT DETAILS ----------
function changeImg(){
  const productImg = document.querySelector('#product-img')
  const smallImg = document.querySelectorAll('.small-img')
  // console.log(smallImg)

  smallImg[0].addEventListener('click', () => {
    productImg.src = smallImg[0].src;
  })
  smallImg[1].addEventListener('click', () => {
    productImg.src = smallImg[1].src;
  })
  smallImg[2].addEventListener('click', () => {
    productImg.src = smallImg[2].src;
  })
  smallImg[3].addEventListener('click', () => {
    productImg.src = smallImg[3].src;
  })
}










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
        }
      }

    });

});
