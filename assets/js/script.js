'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
function DetectMobilePhoneID(){
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  if (userAgent.includes("Android")) {
      window.location.replace("https://play.google.com/store/apps/details?id=com.bsm.id");
  } else if (userAgent.includes("iPhone")) {
      window.location.replace("https://apps.apple.com/us/app/investor-daily/id1492034848");
  }
  }
function DetectMobilePhoneBsatu(){
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  if (userAgent.includes("Android")) {
      window.location.replace("https://play.google.com/store/apps/details?id=com.beritasatu");
  } else if (userAgent.includes("iPhone")) {
      window.location.replace("https://apps.apple.com/id/app/beritasatu/id726879438");
  }
  }
  function DetectMobilePhone(){
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  if (userAgent.includes("Android")) {
      window.location.replace("https://play.google.com/store/apps/details?id=com.lippomalls.styles");
  } else if (userAgent.includes("iPhone")) {
      window.location.replace("https://apps.apple.com/id/app/styles-lippo-malls/id1450646539");
  }
  }
