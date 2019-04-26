function getSuperheroes(data) {
  switch(data) { // return an error for function called with an 'empty' parameter value
    case "":
    case 0:
    case "0":
      alert("Error! Function parameter is empty");
      return data;
    case null:
      alert("Error! Function parameter is null");
      return data;
    case false:
      alert("Error! Function parameter is false");
      return data;
    default:
      switch(typeof(data)) { // return an error for all data types other than object
        case "undefined":
          alert("Error! Function parameter is undefined");
          break;
        case "function":
          alert("Error! Function parameter is a function");
          break;
        case "number":
          alert("Error! Function parameter is a number");
          break;
        case "string":
          alert("Error! Function parameter is a string");
          return data;
        case "object":
          console.log("Success! Function parameter is an object");
          return data.superheroes; // return object of superhero names and abilities
      }
  }
}

// getSuperheroList function converts superhero object data into array of superhero property names
function getSuperheroList() {
  var superHeroes = getSuperheroes(marvelCharacters);
  var superheroList = Object.keys(superHeroes);
  return superheroList; // return array of superhero names
}

function getSuperhero(name) { // enter superhero name as function parameter
  var superHeroes = getSuperheroes(marvelCharacters); /*global marvelCharacters*/ // get list of superheroes
  var superHero = superHeroes[name]; // select superhero from superHeroes object with bracket notation using function parameter
  this.name = superHero.name; // add marvelCharacters object properties to getSuperhero constructor function
  this.agility = superHero.agility;
  this.intelligence = superHero.intelligence;
  this.magic = superHero.magic;
  this.speed = superHero.speed;
  this.strength = superHero.strength;
  this.technology = superHero.technology;
}

function getSupervillains(data) {
  switch(data) { // return an error for function called with an 'empty' parameter value
    case "":
    case 0:
    case "0":
      alert("Error! Function parameter is empty");
      return data;
    case null:
      alert("Error! Function parameter is null");
      return data;
    case false:
      alert("Error! Function parameter is false");
      return data;
    default:
      switch(typeof(data)) { // return an error for all data types other than object
        case "undefined":
          alert("Error! Function parameter is undefined");
          break;
        case "function":
          alert("Error! Function parameter is a function");
          break;
        case "number":
          alert("Error! Function parameter is a number");
          break;
        case "string":
          alert("Error! Function parameter is a string");
          return data;
        case "object":
          console.log("Success! Function parameter is an object");
          return data.supervillains; // return list of supervillains
      }
  }
}

function getSupervillain(name) { // enter supervillain name as function parameter
  var superVillains = getSupervillains(marvelCharacters); // get list of supervillains
  var superVillain = superVillains[name]; // select supervillain from superVillains object with bracket notation using function parameter
  this.name = superVillain.name; // add marvelCharacters object properties to getSupervillain constructor function
  this.agility = superVillain.agility;
  this.intelligence = superVillain.intelligence;
  this.magic = superVillain.magic;
  this.speed = superVillain.speed;
  this.strength = superVillain.strength;
  this.technology = superVillain.technology;
}

var slideIndex = 1; // set default value to show first slide

// target anchor element with 'prev' class
var prevSlide = document.getElementById('prev');

// add click eventlistener to target div with 'prev' class
prevSlide.addEventListener('click', function() {
  slideIndex = slideIndex - 1; // decrease slideIndex value by 1 so previous slide is made visible by showSlides function
  showSlides(slideIndex); // decrease slideIndex value by 1 so previous slide is made visible by showSlides function
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
      var dotIndex = e.target.index + 1; // get index number of clicked dot & change index base number to 1 to match  slideIndex number
      showSlides(slideIndex = dotIndex); // send clicked dot index number to showSlides function
    }, false);
  }
}

currentSlide(dots); // run currentSlide function with collection of 'dot' divs

var selectedSuperhero; // declare selectedSuperhero in global scope

function showSlides(n) {
    var superheroList = getSuperheroList();
    if (n > superheroList.length) {slideIndex = 1} // if slideIndex is > no. of slides reset to value of 1st slide
    if (n < 1) {slideIndex = superheroList.length} // if slideIndex is < 1 reset value to value of last slide

    for (var i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", ""); // loop through all dot divs and remove 'active' class name
     }

    dots[slideIndex-1].className += " active"; // add 'active' class name to dots div that matches modifed slidesIndex no.

    var slideImg = document.getElementById('slideImg');
    var slideInfo = document.getElementById('slideInfo');
    var selectHeroButton = document.getElementById('selectHeroButton');
    var selectedHeroSlide = document.getElementById('selectedHeroSlide');

    // use slideIndex number -1 as index no. of return array from getSuperheroList function to select individual superhero property name
    var superheroName = getSuperheroList()[slideIndex-1];

    // use getSuperhero constructer function with superheroName variable as parameter to get superhero object data
    var superhero = new getSuperhero(superheroName); // add object data to superhero variable

    // use slideIndex number -1 as parameter of getSuperheroList function to select individual superhero name
    var image = getSuperheroList()[slideIndex-1];
    console.log(image);

    var name = superhero.name; // use object dot notation on superhero variable to access object properties and add to corresponding variable
    var agility = superhero.agility;
    var intelligence = superhero.intelligence;
    var magic = superhero.magic;
    var strength = superhero.strength;
    var speed = superhero.speed;
    var technology = superhero.technology;

    // add superhero property name into template literal HTML image path and insert into slideImg div
    slideImg.innerHTML = `<img src="assets/img/${superheroName}.png">`;

    // add object property values to template literal HTML and insert into slideInfo div
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

// run showSlides function with inital slideIndex value when page is fully loaded
window.addEventListener('load', function() {
    showSlides(slideIndex);
}, false);
