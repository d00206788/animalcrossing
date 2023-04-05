/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const loader = document.querySelector('.loadingPage');
const main = document.querySelector('.main');

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'inline-block';
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 4000);
}

init();

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var villagers = [
    {'name':'Raymond', 'personality':'Smug','animal':'Cat'},
    {'name':'Marshal', 'personality':'Smug', 'animal':'Squirrel'},
    {'name':'Marina', 'personality':'Normal', 'animal':'Octopus'},
    {'name':'Bangle', 'personality':'Peppy', 'animal':'Tiger'},
    {'name':'Zucker', 'personality':'Lazy', 'animal':'Octopus'},
    {'name':'Bob', 'personality':'Lazy', 'animal':'Cat'},
    {'name':'Sherb', 'personality':'Lazy', 'animal':'Goat'},
    {'name':'Beau', 'personality':'Lazy', 'animal':'Deer'},
    {'name':'Audie', 'personality':'Peppy', 'animal':'Wolf'},
    {'name':'Fauna', 'personality':'Normal', 'animal':'Deer'}
]

