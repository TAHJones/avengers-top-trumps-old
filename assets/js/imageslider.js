var slideIndex = 1; // set default value to show first slide
showSlides(slideIndex); // send default slideIndex value to showSlides function

// target anchor element with 'prev' class
var prevSlide = document.getElementById('prev');

// add click eventlistener to target div with 'prev' class
prevSlide.addEventListener('click', function(){
  slideIndex = slideIndex - 1; // decrease slideIndex value by 1 so previous slide is made visible by showSlides function
  showSlides(slideIndex);
}, false);

// target anchor element with 'next' class
var nextSlide = document.getElementById('next');

// add click eventlistener to target div with 'prev' class
nextSlide.addEventListener('click', function(){
  slideIndex = slideIndex + 1; // increase slideIndex value by 1 so next slide is made visible by showSlides function
  showSlides(slideIndex);
}, false);

// target each div with 'dot' class using parent div with #slideSelector id
var dots = document.querySelectorAll('#slideSelector div');

// get index number of clicked 'dot' div and send to showSlides function
function currentSlide(n) {
  for(var i=0; i < n.length; i++) {
    n[i].index = i; // use loop counter to set the index number for each div element
    n[i].addEventListener('click', function(e) { // add 'click' event listerner to div elements
      var dotIndex = e.target.index + 1; // get index number of clicked dot & change index base number to 1 so matches plusSlides function
      showSlides(slideIndex = dotIndex); // send clicked dot index number to showSlides function
    }, false);
  }
}

// run currentSlide function with collection of 'dot' divs
currentSlide(dots);

// accepts updated slideIndex value from prevSlide, nextSlide & currentSlide functions to change which slide is visible
function showSlides(n) {
  // var i;
  var slides = document.getElementsByClassName("slides"); // target all elements with 'slides' class name
  var dots = document.getElementsByClassName("dot"); // target all elelmts with 'dot' class name
  if (n > slides.length) {slideIndex = 1} // if slideIndex is > no. of slides reset to value of 1st slide
  if (n < 1) {slideIndex = slides.length} // if slideIndex is < 1 reset value to value of last slide
  for (var i = 0; i < slides.length; i++) { 
      slides[i].style.display = "none"; // loop through all slide elements and hide
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); // loop through all dot divs and remove 'active' class name
  }
  slides[slideIndex-1].style.display = "block"; // make slides div with modifed slidesIndex no. visible
  dots[slideIndex-1].className += " active"; // add 'active' class name to dots div that matches modifed slidesIndex no. 
} 
