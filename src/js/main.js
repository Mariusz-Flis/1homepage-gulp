"use strict";

// service worker registration - remove if you're not going to use it

/*if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}*/

// place your code below
const navSlide = () => {
  const burgerMenu = document.querySelector('.nav__burgerMenu');
  const nav = document.querySelector('.nav__links');
  const navLinks = document.querySelectorAll('.nav__list');
  //Przełacznik navigacji
  burgerMenu.addEventListener('click',() => {
      nav.classList.toggle('nav__active');

      navLinks.forEach((link, index)=> {
          if (link.style.animation){
              link.style.animation = '';
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 +0.5}s`;
          }
      });

      //Burger animacja
     burgerMenu.classList.toggle('toggle');

  });   
}
navSlide();




