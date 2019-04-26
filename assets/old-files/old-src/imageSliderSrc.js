// var slideIndex = 1; // set default value to show first slide
var slideIndex = Math.floor(Math.random() * 17); // returns a random integer from 0 to 16 to simulate user choosing 1 of 15 slide images plus 0 and 17 to simulate going beyond 1st and last slide
showSlides(slideIndex); // send slideIndex value to showSlides function

// accepts updated slideIndex value from prevSlide, nextSlide & currentSlide functions to change which slide is visible
function showSlides(n) {
  var slides = 15; // represents document.getElementsByClassName("slides") which targets all elements with 'slides' class name
  var dots = 15; // represents document.getElementsByClassName("dot") which targets all elements with 'dot' class name

  // if function parameter is not a number return an error
  if (typeof(n) !== "number") { alert("Error!"); } 
  
  // if slideIndex is > no. of slides reset to value of 1st slide
  if (n > slides.length) { slideIndex = 1; }
  
  // if slideIndex is < 1 reset value to value of last slide
  if (n < 1) { slideIndex = slides.length; }
  
  // loop through and hide all slide elements
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // loop through all dot divs and remove 'active' class name
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // make slides div with modifed slidesIndex no. visible
  slides[slideIndex-1].style.display = "block";
  // add 'active' class name to dots div that matches modifed slidesIndex no. 
  // dots[slideIndex-1].className += " active";

  console.log(slideIndex);
  return slideIndex; // return slide index for jasmine test

} 

