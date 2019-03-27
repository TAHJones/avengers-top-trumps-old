
// get character data from json file at assets/data/characters.json using XMLHttpRequest object
function getCharacterData(callBack) {
    var filePath = "assets/data/characters.json";
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            // console.log("Success!", this.readyState, this.status, this.statusText);
            callBack(JSON.parse(this.responseText));
        } else {
            // console.log("Error!", this.readyState, this.status, this.status);
        }
    };
    
    xhr.open("GET", filePath, true);
    xhr.send();
}

var slideIndex = 1; // set default value to show first slide
var superheroList; // declare global variable for superhero object data
var supervillainList; // declare global variable for superhero object data
    

// callback function that retrieves object data from getCharacterData function
function showCharacterData(data) {
    superheroList = data.superheros;
    supervillainList = data.supervillains;
    showSlides(slideIndex);
}

// target anchor element with 'prev' class
var prevSlide = document.getElementById('prev');

// add click eventlistener to target div with 'prev' class
prevSlide.addEventListener('click', function() {
  slideIndex = slideIndex - 1; // decrease slideIndex value by 1 so previous slide is made visible by showSlides function
  showSlides(slideIndex); // run showSlide function to set default slide image
}, false);

// target anchor element with 'next' class
var nextSlide = document.getElementById('next');

// add click eventlistener to target div with 'prev' class
nextSlide.addEventListener('click', function() {
  slideIndex = slideIndex + 1; // increase slideIndex value by 1 so next slide is made visible by showSlides function
  showSlides(slideIndex);
}, false);

var dots = document.getElementsByClassName("dot"); // target all elements with 'dot' class name

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

function showSlides(n) {
    if (n > superheroList.length) {slideIndex = 1} // if slideIndex is > no. of slides reset to value of 1st slide
    if (n < 1) {slideIndex = superheroList.length} // if slideIndex is < 1 reset value to value of last slide
     
    for (var i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", ""); // loop through all dot divs and remove 'active' class name
     }

    dots[slideIndex-1].className += " active"; // add 'active' class name to dots div that matches modifed slidesIndex no. 

    var slideImg = document.getElementById('slideImg');
    var slideInfo = document.getElementById('slideInfo');  
    
    for (var i=0; i < superheroList.length; i++) { // loop through superhero array of objects
        superheroList[i].index = i + 1; // assign a index number to each object in array, starting at 1

        if(superheroList[i].index === slideIndex) { // if object index no. equals slideIndex add to index.html
            var id = superheroList[i].id;
            var name = superheroList[i].name;
            var agility = superheroList[i].agility;
            var intelligence = superheroList[i].intelligence;
            var magic = superheroList[i].magic;
            var strength = superheroList[i].strength;
            var speed = superheroList[i].speed;
            var technology = superheroList[i].technology;
        
            slideImg.innerHTML = `<img src="assets/img/${id}.png">`;
        
            slideInfo.innerHTML = `<h2>${name}</h2>
                                    <ul>
                                        <li>Agility: ${agility}</li>
                                        <li>Intelligence: ${intelligence}</li>
                                        <li>Magic: ${magic}</li>
                                        <li>Strength: ${strength}</li>
                                        <li>Speed: ${speed}</li>
                                        <li>Technology: ${technology}</li>
                                    </ul>`;
        }
    }
}

// only run script when page is fully loaded 
window.addEventListener('load', function() {
    getCharacterData(showCharacterData);
}, false);

