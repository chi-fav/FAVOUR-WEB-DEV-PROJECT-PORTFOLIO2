// LOADER ANIMATION
let loader = document.getElementById("preloader");
window.addEventListener("load",
  function () {
    setTimeout(function () {
      loader.style.display = "none"
    }, 4000);
  })
// loader.style.display = "none";


// AUTOMATIC SLIDE STYLE
let counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);



// STICKY BAR ANIMATION   '.sticky-bar-text' 

function stickybar(targetchange, text, url ) {
  const element = document.querySelector(targetchange);
  const texts = ['DESLMR', 'SKWKL', 'MVROVRO', 'REJSCIS', 'MVROVRO', 'IICBEICB',text];
  let index = 0;
  const intervalId = setInterval(() => {
    element.innerHTML = texts[index];
    index = (index + 1) % texts.length;
    if (index == 0) {
      clearInterval(intervalId);
    }
  }, 100); // change text every 0.5 seconds
  document.querySelector('#sticky-bar').style.backgroundImage = url;
  document.querySelector('#sticky-bar').style.transition = 'background-image .3s ease';
}

// RESUME
const resume = document.getElementById("resume");
const options = {
  root: null,
  rootmargin: "0px",
  threshold: ".2"
}
const callback = (entries) => {
  entries.forEach(entry => {
    console.log("Intersection observed!");
    console.log("Is intersecting:", entry.isIntersecting);
    console.log("Intersection ratio:", entry.intersectionRatio);
    if(entry.isIntersecting){
      stickybar('.sticky-bar-text', 'RESUME', "url(../MEDIA/IMAGES/resume.jpg)");
    }

  })
}
const observer1 = new IntersectionObserver(callback, options);
observer1.observe(resume);




// ABOUTME
const about = document.getElementById("aboutme");
const callback2 = (entries) => {
  entries.forEach(entry => {
    console.log("Intersection observed!");
    console.log("Is intersecting:", entry.isIntersecting);
    console.log("Intersection ratio:", entry.intersectionRatio);
    if(entry.isIntersecting){
      stickybar('.sticky-bar-text', 'ABOUT', "url(../MEDIA/IMAGES/aboutme.jpg)");
    }
    

  })
}
const observer2 = new IntersectionObserver(callback2, options);
observer2.observe(about);


// SERVICES
const services = document.getElementById("services");
const callback3 = (entries) => {
  entries.forEach(entry => {
    console.log("Intersection observed!");
    console.log("Is intersecting:", entry.isIntersecting);
    console.log("Intersection ratio:", entry.intersectionRatio);
    if(entry.isIntersecting){
      stickybar('.sticky-bar-text', 'SERVICES', "url(../MEDIA/IMAGES/services.jpg)");
    }

  })
}
const observer3 = new IntersectionObserver(callback3, options);
observer3.observe(services);


// SKILLS
const skills = document.getElementById("skillssection");
const callback4 = (entries) => {
  entries.forEach(entry => {
    console.log("Intersection observed!");
    console.log("Is intersecting:", entry.isIntersecting);
    console.log("Intersection ratio:", entry.intersectionRatio);
    if(entry.isIntersecting){
      stickybar('.sticky-bar-text', 'SKILLS', "url(../MEDIA/IMAGES/skills.jpg)");
    }

  })
}
const observer4 = new IntersectionObserver(callback4, options);
observer4.observe(skills);


// LANGUAGE
const language = document.getElementById("languagesection");
const callback5 = (entries) => {
  entries.forEach(entry => {
    console.log("Intersection observed!");
    console.log("Is intersecting:", entry.isIntersecting);
    console.log("Intersection ratio:", entry.intersectionRatio);
    if(entry.isIntersecting){
      stickybar('.sticky-bar-text', 'LANGUAGE', "url(../MEDIA/IMAGES/language.jpg)");
    }

  })
}
const observer5 = new IntersectionObserver(callback5, options);
observer5.observe(language);




// PROGRESS BAR ANIMATION  
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateProgressBars();
      animateCircularProgress();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
const skillsSection = document.querySelector('#skillssection');
observer.observe(skillsSection);

function animateProgressBars() {
  const progressElements = document.querySelectorAll(".progress");
  progressElements.forEach((progressElement) => {
    const progressDone = progressElement.querySelector(".progress-done");
    const progressValue = progressElement.querySelector(".progressvalue");
    animateProgressBar(progressDone, progressValue);
  });
}

function animateProgressBar(progressDone, progressValue) {
  const dataDone = parseInt(progressDone.getAttribute('data-done'));
  let width = 0;
  const animationInterval = setInterval(() => {
    if (width >= dataDone) {
      clearInterval(animationInterval);
    } else {
      width++;
      progressDone.style.width = width + "%";
      progressValue.textContent = width + "%";
    }
  }, 30);
}

function animateCircularProgress() {
  const circularProgressElements = document.querySelectorAll(".circular-progress");
  circularProgressElements.forEach((element) => {
    const progressValue = element.querySelector(".circularprogress-value");
    const progressEndValue = parseInt(element.getAttribute('data-done'));
    let progressStartValue = 0;
    const speed = 100;

    const circularInterval = setInterval(() => {
      progressStartValue++;
      progressValue.textContent = `${progressStartValue}%`;
      element.style.background = `conic-gradient(var(--secondary-color) ${progressStartValue * 3.6}deg, var(--primary-color) 0deg)`;

      if (progressStartValue >= progressEndValue) {
        clearInterval(circularInterval);
      }
    }, speed);
  });
}



// SERVICE LIST SCRIPT FOR CLICK FUNCTION  
$(".development").on("click", function () {
  $(this).css("background", "var(--secondary-color)");
  $("#developmenticon i").css("color", "white");
  $("#developmenttext").css("color", "white");
  $('.imgcontainerimg').attr('src', '../MEDIA/IMAGES/development.jpg');
  $(".graphicsdesign").css("background", "var(--trans-secondary-color)");
  $("#graphicsdesignicon i").css("color", "var(--secondary-color)");
  $("#graphicsdesigntext").css("color", "var(--primary-color)");
  $(".branding").css("background", "var(--trans-secondary-color)");
  $("#brandingicon i").css("color", "var(--secondary-color)");
  $("#brandingtext").css("color", "var(--primary-color)");
  $(".webdesign").css("background", "var(--trans-secondary-color)");
  $("#webdesignicon i").css("color", "var(--secondary-color)");
  $("#webdesigntext").css("color", "var(--primary-color)");
});

$(".graphicsdesign").on("click", function () {
  $(this).css("background", "var(--secondary-color)");
  $("#graphicsdesignicon i").css("color", "white");
  $("#graphicsdesigntext").css("color", "white");
  $('.imgcontainerimg').attr('src', '../MEDIA/IMAGES/graphics design.jpg');
  $(".development").css("background", "var(--trans-secondary-color)");
  $("#developmenticon i").css("color", "var(--secondary-color)");
  $("#developmenttext").css("color", "var(--primary-color)");
  $(".branding").css("background", "var(--trans-secondary-color)");
  $("#brandingicon i").css("color", "var(--secondary-color)");
  $("#brandingtext").css("color", "var(--primary-color)");
  $(".webdesign").css("background", "var(--trans-secondary-color)");
  $("#webdesignicon i").css("color", "var(--secondary-color)");
  $("#webdesigntext").css("color", "var(--primary-color)");

});

$(".branding").on("click", function () {
  $(this).css("background", "var(--secondary-color)");
  $("#brandingicon i").css("color", "white");
  $("#brandingtext").css("color", "white");
  $('.imgcontainerimg').attr('src', '../MEDIA/IMAGES/branding2.jpg');
  $(".development").css("background", "var(--trans-secondary-color)");
  $("#developmenticon i").css("color", "var(--secondary-color)");
  $("#developmenttext").css("color", "var(--primary-color)");
  $(".graphicsdesign").css("background", "var(--trans-secondary-color)");
  $("#graphicsdesignicon i").css("color", "var(--secondary-color)");
  $("#graphicsdesigntext").css("color", "var(--primary-color)");
  $(".webdesign").css("background", "var(--trans-secondary-color)");
  $("#webdesignicon i").css("color", "var(--secondary-color)");
  $("#webdesigntext").css("color", "var(--primary-color)");


});

$(".webdesign").on("click", function () {
  $(this).css("background", "var(--secondary-color)");
  $("#webdesignicon i").css("color", "white");
  $("#webdesigntext").css("color", "white");
  $('.imgcontainerimg').attr('src', '../MEDIA/IMAGES/web design.jpg');
  $(".development").css("background", "var(--trans-secondary-color)");
  $("#developmenticon i").css("color", "var(--secondary-color)");
  $("#developmenttext").css("color", "var(--primary-color)");
  $(".graphicsdesign").css("background", "var(--trans-secondary-color)");
  $("#graphicsdesignicon i").css("color", "var(--secondary-color)");
  $("#graphicsdesigntext").css("color", "var(--primary-color)");
  $(".branding").css("background", "var(--trans-secondary-color)");
  $("#brandingicon i").css("color", "var(--secondary-color)");
  $("#brandingtext").css("color", "var(--primary-color)");
});

$("#all").on("click", function(){
  $(this).css("background-color", "var(--secondary-color)"); 
  $(this).css("color", "white"); 
})

