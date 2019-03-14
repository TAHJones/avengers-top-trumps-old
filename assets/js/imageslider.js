var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
/*function currentSlide(n) {
  showSlides(slideIndex = n);
}*/

// target each 'dot' div using parent div with #slideSelector id
var dots = document.querySelectorAll('#slideSelector div');

// get index number of clicked 'dot' div and send to showSlides function
function currentSlide(n) {
  for(var i=0; i < n.length; i++) {
    n[i].index = i; // use loop counter to set the index number for each div element
    n[i].addEventListener('click', function(e) { // add 'click' event listerner to div elements
      var dotIndex = e.target.index + 1; // get index number of clicked dot & change index base number to 1 so matches plusSlides function
      // console.log(dotIndex);
      showSlides(slideIndex = dotIndex); // send clicked dot index number to showSlides function
    }, false);
  }
}

// run currentSlide function with collection of 'dot' divs
currentSlide(dots);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
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