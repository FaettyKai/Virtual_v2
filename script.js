// Selecting elements from the DOM
button = document.querySelector(".data");
buttonSpan = document.querySelector("#button-text");
candidate = document.querySelector(".candidate");
signUp = document.querySelector(".sign-up");
home = document.querySelector(".home")
news = document.querySelector(".news")
files = document.querySelector(".files")


// COMMENT: This code makes the button pulse for about 5 seconds (alternating opacity every second) after it's clicked.
//Add aria-label to help set context for user.

// Updated to take the span including the buttons context. Context now pulsates; not the button.
button.addEventListener("click", () => {
    buttonSpan.textContent = ".";
    let counter = 0;
 
    let intervalId = setInterval(() => {
        let isEven = counter % 2 === 0;
        buttonSpan.style.transition = "opacity 0.2s";
        buttonSpan.style.opacity = isEven ? "1" : "0";
        counter++;
 
        if(counter > 8){
            clearInterval(intervalId);
            buttonSpan.textContent = "401 Unauthorized";
            button.setAttribute("style", "color: red;")
            button.style.opacity = "1"
            buttonClick = true;
                 reveal()
        }
    }, 1000);
 });
 
 // reaveal candidate & sign-up upon click of button-text
 let buttonClick = false; 
 
 let reveal = () => {
     if(buttonClick === true) {
       candidate.setAttribute("style", "opacity: 1; opacity: transition: 0.2s;")
     signUp.setAttribute("style", "opacity: 1; opacity: transition: 0.2s")
   }
 };
 
 home.addEventListener("click", () => {
 })
 
// Inline Javascript added to for-candidate & sign to open google forms
// <button onclick = "window.location = 'https://forms.gle/vUfZau3JRmA1Y9pi6';" 
// class = "for-candidate"> inline to open on same tab

// Add function to scroll/move to "page-2" on click of news 11/28/23

const page2 = document.querySelector(".page2")

news.addEventListener("click", () => {
  page2.scrollIntoView({behavior: "smooth", block: "end"})
})

// Add function to scroll/move to "page-3" & Home on click of news 11/30/23

const page3 = document.querySelector(".page3")

files.addEventListener("click", () => {
  page3.scrollIntoView({behavior: "smooth", block: "end"})
})

const page1 = document.querySelector(".page1")

home.addEventListener("click", () => {
  page1.scrollIntoView({behavior: "smooth", block: "end"})
})

// rotate and close nav upon click of icon 1st try
/*
const menuIcon = document.querySelector(".menu-icon")
const nav = document.querySelector("nav")
const iconClicked = false

menuIcon.addEventListener("click", () => {
    iconClicked = true
    if(iconClicked === true)
        menuIcon.setAttribute("style", "transform: rotate(90deg;")
    else 
        menuIcon.setAttribute("style", "transform: rotate(90deg;")
})
*/

// 2nd try

let menuIcon = document.querySelector(".menu-icon");
let iconClicked = false;

menuIcon.addEventListener("click", () => {
    iconClicked = !iconClicked;
    
    // Toggle rotation
    if(iconClicked) {
        menuIcon.style.transform = "rotate(90deg)";
        menuIcon.setAttribute("aria-label", "Close Menu");
    } else {
        menuIcon.style.transform = "rotate(0deg)";
        menuIcon.setAttribute("aria-label", "Open Menu");
    }
});

// For the nav items to slide out on click 
/* Didnt work
let navItems = document.querySelectorAll(".home, .news, .files");

menuIcon.addEventListener("click", () => {
    navOpen = !navOpen;
  
    navItems.forEach((item) => {
        if (navOpen) {
            item.style.transform = "translateX(-100%)";
        } else {
            item.style.transform = "translateX(0)";
        }
    });

    // Toggle ARIA label
    if (navOpen) {
        menuIcon.setAttribute("aria-label", "Close menu");
    } else {
        menuIcon.setAttribute("aria-label", "Open menu");
    }
});
*/

// For the nav items to slide out on click 
const navItems = [home, news, files];

let menuClicked = false;

menuIcon.addEventListener("click", () => {
    menuClicked = !menuClicked;
    // Toggle rotation
    if(menuClicked) {
        menuIcon.style.transform = "rotate(90deg)";
        menuIcon.setAttribute("aria-label", "Close Menu"); 
        toggleNavItems(); // new function to slide off the nav items
    } else {
        menuIcon.style.transform = "rotate(0deg)";
        menuIcon.setAttribute("aria-label", "Open Menu");
        toggleNavItems();  // new function to slide off the nav items
    }
});

// The function to add or remove a CSS class 'slide-left'
function toggleNavItems() {
    navItems.forEach(item => {
        item.classList.toggle('slide-left');
    });
};

//sticky nav bar

window.onscroll = function() {stickyNav()};

var navbar = document.querySelector('nav');
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}