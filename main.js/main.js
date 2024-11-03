// Get the navbar element
const navbar = document.querySelector(".navbar");

// Function to add or remove the 'scrolled' class based on scroll position
window.onscroll = function () {
  if (window.scrollY > 50) { // Adjust this value as needed
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};
var typed = new Typed('#element', {
    strings: ['Larry Daniels', ' Developer',' Designer' ],
    typeSpeed: 50,
    backSpeed:50,
    loop:true,
  });