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
          // console.log("Success! Function parameter is an object");
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
          // console.log("Success! Function parameter is an object");
          return data.supervillains; // return list of supervillains
      }
  }
}

// getSupervillainList function converts supervillain object data into array of supervillain property names
function getSupervillainList() {
  var superVillains = getSupervillains(marvelCharacters);
  var supervillainList = Object.keys(superVillains);
  return supervillainList; // return array of supervillain names
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

var slideIndex = 0; // set default value to show first slide

// target anchor element with 'prev' id
var prevSlide = document.getElementById('prev');

// add click eventlistener to target div with 'prev' id
prevSlide.addEventListener('click', function() {
  slideIndex = slideIndex - 1; // decrease slideIndex value by 1 so previous slide is made visible by showSuperhero function
  showSuperhero(slideIndex); // decrease slideIndex value by 1 so previous slide is made visible by showSuperhero function
}, false);

// target anchor element with 'next' id
var nextSlide = document.getElementById('next');

// add click eventlistener to target div with 'prev' id
nextSlide.addEventListener('click', function() {
  slideIndex = slideIndex + 1; // increase slideIndex value by 1 so next slide is made visible by showSuperhero function
  showSuperhero(slideIndex);
}, false);

var dots = document.getElementsByClassName("dot"); // target all elements with 'dot' class name
var hideDots = document.getElementById("dotSelector");

// get index number of clicked 'dot' div and send to showSuperhero function
(function currentSlide(n) {
  for(var i=0; i < n.length; i++) {
    n[i].index = i; // use loop counter to set the index number for each div element
    n[i].addEventListener('click', function(e) { // add 'click' event listerner to div elements
      var dotIndex = e.target.index + 1; // get index number of clicked dot & change index base number to 1 to match  slideIndex number
      showSuperhero(slideIndex = dotIndex); // send clicked dot index number to showSuperhero function
    }, false);
  }
})(dots); // run currentSlide IIFE function as with collection of 'dot' divs

var heroName; // declare superheroName variable in global scope so it can be used by multiple functions
var superheroName; // declare superheroName variable in global scope so it can be used by multiple functions

function showSuperhero(n) {
    var superheroList = getSuperheroList();
    if (n > superheroList.length) {slideIndex = 1} // if slideIndex is > no. of slides reset to value of 1st slide
    if (n < 1) {slideIndex = superheroList.length} // if slideIndex is < 1 reset value to value of last slide

    for (var i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", ""); // loop through all dot divs and remove 'active' class name
     }

    dots[slideIndex-1].className += " active"; // add 'active' class name to dots div that matches modifed slidesIndex no.

    var heroImg = document.getElementById('heroImg');
    var heroInfo = document.getElementById('heroInfo');
    // use slideIndex number -1 as index no. of return array from getSuperheroList function to select individual superhero property name
    superheroName = getSuperheroList()[slideIndex-1];

    // use getSuperhero constructer function with superheroName variable as parameter to get superhero object data
    var superhero = new getSuperhero(superheroName); // add object data to superhero variable

    // use object dot notation on superhero variable to access object properties and add to corresponding variable
    heroName = superhero.name;
    var agility = superhero.agility;
    var intelligence = superhero.intelligence;
    var magic = superhero.magic;
    var strength = superhero.strength;
    var speed = superhero.speed;
    var technology = superhero.technology;

    // add superhero property name into template literal HTML image path and insert into heroImg div
    heroImg.innerHTML = `<img src="assets/img/${superheroName}.png">`;

    // add object property values to template literal HTML and insert into heroInfo div
    heroInfo.innerHTML = `<h2>${heroName}</h2>
                            <ul id="heroList" class="hero-list">
                              <li><a class="hero-list-active">Agility: ${agility}</a></li>
                              <li><a class="hero-list-active">Intelligence: ${intelligence}</a></li>
                              <li><a class="hero-list-active">Magic: ${magic}</a></li>
                              <li><a class="hero-list-active">Strength: ${strength}</a></li>
                              <li><a class="hero-list-active">Speed: ${speed}</a></li>
                              <li><a class="hero-list-active">Technology: ${technology}</a></li>
                            </ul>`;

    var heroInfoLink = document.getElementById("heroList");
    var heroInfoList = document.querySelectorAll(".hero-list a");
    var selectHeroButton = document.getElementById('selectHeroButton');

    // each time a new hero is selected reset css styles to inactive if set to active
    if(selectHeroButton.className === "select-hero select-hero-active"){
      selectHeroButton.className = "select-hero select-hero-inactive";
    }

    // add selected styles to selected catergory
    heroInfoLink.addEventListener('click', function(e){
      if(e.target.className === "hero-list-active"){
        e.target.className = "selected-catergory";
      }
      // add inactive styles to unselected catergories
      for(var i=0; i<heroInfoList.length; i++){
        if(heroInfoList[i].className === "hero-list-active"){
          heroInfoList[i].className = "hero-list-inactive";
        }
      }
      // replace inactive styles with active styles when superhero catergory is selected
      if(selectHeroButton.classList.contains("select-hero-inactive")){
        selectHeroButton.className = "select-hero select-hero-active";
      }
    }, false);

    // change hero image border and button styles when hero is selected
    selectHeroButton.addEventListener('click', function(){
      if(selectHeroButton.classList.contains("select-hero-active")){ // check that button is active before adding changes
        selectHeroButton.textContent = `${heroName}`; // add superhero name to 'selectHero' button
        selectHeroButton.style.border = "4px solid #ecec4d";
        selectHeroButton.className = "select-hero select-hero-selected";
        heroImg.firstElementChild.style.border = "4px solid #ecec4d";
        hideDots.style.visibility = "hidden";
        prevSlide.style.visibility = "hidden";
        nextSlide.style.visibility = "hidden";
        selectVillainButton.className = "select-villain select-villain-active";
      }
    }, false);
}

var villainName; // declare villianName variable in global scope so it can be used by multiple functions

function showSupervillain() {
  var selectVillainButton = document.getElementById('selectVillainButton'); // target select villain button
  if(selectVillainButton.classList.contains("select-villain-active")){ // check that button is active before adding data & changing styles
    var villainImg = document.getElementById('villainImg');
    var villainInfo = document.getElementById('villainInfo');
    var randomNumber =  Math.floor(Math.random() * 15); // generate a random number between 0 and 14 to match index of slides

    // use randomNumber variable as index no. of return array from getSupervillainList function to randomly select individual supervillain property name
    var supervillainName = getSupervillainList()[randomNumber];

    // use getSupervillain constructer function with supervillainName variable as parameter to get supervillain object data
    var supervillain = new getSupervillain(supervillainName); // add object data to supervillain variable

    villainName = supervillain.name; // use object dot notation on superhero variable to access object properties and add to corresponding variable
    var agility = supervillain.agility;
    var intelligence = supervillain.intelligence;
    var magic = supervillain.magic;
    var strength = supervillain.strength;
    var speed = supervillain.speed;
    var technology = supervillain.technology;

    // add supervillain property name into template literal HTML image path and insert into villainImg div
    villainImg.innerHTML = `<img src="assets/img/${supervillainName}.png">`;

    // add object property values to template literal HTML and insert into slideInfo div
    villainInfo.innerHTML = `<h2>${villainName}</h2>
                            <ul id="villainList" class="villain-list">
                              <li><a class="villain-list-inactive">Agility: ${agility}</a></li>
                              <li><a class="villain-list-inactive">Intelligence: ${intelligence}</a></li>
                              <li><a class="villain-list-inactive">Magic: ${magic}</a></li>
                              <li><a class="villain-list-inactive">Strength: ${strength}</a></li>
                              <li><a class="villain-list-inactive">Speed: ${speed}</a></li>
                              <li><a class="villain-list-inactive">Technology: ${technology}</a></li>
                            </ul>`;

    // change villain button and images styles when villain is selected
    selectVillainButton.textContent = `${villainName}`;
    selectVillainButton.style.border = "4px solid #ecec4d";
    selectVillainButton.className = "select-villain select-villain-selected";
    villainImg.firstElementChild.style.border = "4px solid #ecec4d";
  }
}


var heroScoreCounter;  // variable to record number of times heroes win
if(heroScoreCounter > 0){ // check if variable already has recorded value, if it does don't declare variable again as this will reset value
  heroScoreCounter;
} else {
  var heroScoreCounter = 0; // if variable does exist i.e is > 0 declare variable in global scope with value of 0
}

// var infinityStoneNumber; // create variable in global scope so can be used by multiple functions
var infinityStoneId; // create variable in global scope so can be used by multiple functions
console.log(infinityStoneId);
var infinityStoneName;

function calculateResult(){
  var selectVillainButton = document.getElementById('selectVillainButton'); // target select villain button
      var heroCatergoryScore; // create variable to store catergory of anchor tab with selected-catergory class
      var selectedCatergoryIndex; // create variable to store index number of anchor tab with selected-catergory class
      (function getHeroCatergoryScore(){ // IIFE function that returns index number and score of selected catergory
        var heroList = document.querySelectorAll("#heroList > li > a"); // get list of anchor elements containing hero catergory scores
        var heroListArray = Array.from(heroList); // convert heroList nodelist to array
        heroListArray.forEach(function(element, index){ // loop through array of anchor elements and select element with selected-catergory class name
          if(element.className === "selected-catergory"){
            selectedCatergoryIndex = index;
            heroCatergoryScore = element.textContent;
            heroCatergoryScore = parseInt(heroCatergoryScore.charAt(heroCatergoryScore.length-1)); // select last character of string and convert to number
            heroCatergoryScore === 0 ? heroCatergoryScore = 10 : heroCatergoryScore; // if heroCatergoryScore = 0 convert to 10
          }
        });
    })();

    var villainCatergoryScore; // create variable to store catergory of anchor element with selected-catergory class

    (function getVillainCatergoryScore(heroCatergoryIndex){
      var villainList = document.querySelectorAll("#villainList > li > a"); // get list of anchor elements containing villain catergory scores
      var villainListArray = Array.from(villainList); // convert villainList nodelist to array
      // console.log(villainListArray);
      villainListArray.forEach(function(element, index){ // loop through array of anchor elements and select element with selected-catergory class name
        if(index === heroCatergoryIndex){
          var catergoryScoreElement = element;
          catergoryScoreElement.className = "selected-catergory"; // if index number matches index for hero selected catergory get anchor element with selected-catergory class
          var catergoryScoreText = element.textContent;
          villainCatergoryScore = parseInt(catergoryScoreText.charAt(catergoryScoreText.length-1)); // select last character of string and convert to number
          villainCatergoryScore === 0 ? villainCatergoryScore = 10 : villainCatergoryScore;  // if villainCatergoryScore = 0 convert to 10
        }
      });
    })(selectedCatergoryIndex); // getVillainCatergoryScore function end


    (function compareCatergoryScore(){
      var villainImg = document.getElementById("villainImg");
      var heroImg = document.getElementById("heroImg");

      function createImgOverlay(result, parentElement, overlayId){
        var ImgOverlay = document.createElement("div"); // create new div element
        ImgOverlay = ImgOverlay.innerHTML = `<div id="${overlayId}" class="overlay">
                                                    <div class="overlay-text">${result}</div>
                                                  </div>`; // insert div element with result variable
        parentElement.innerHTML += ImgOverlay; // add new overlay element to parent element of img element
      }

      if(heroCatergoryScore > villainCatergoryScore){
        createImgOverlay("Winner", heroImg, "heroOverlayId");
        createImgOverlay("Loser", villainImg, "villainOverlayId");
        heroScoreCounter += 1;
        console.log(heroScoreCounter);

        // var infinityStoneNumber = heroScoreCounter;
        var powerStoneList = document.querySelectorAll(".score-counter-list > li");
        var powerStoneArray = Array.from(powerStoneList);
        powerStoneArray.forEach(function(element, index){
          if(heroScoreCounter === index + 1){
            infinityStoneId = "infinitystone" + heroScoreCounter.toString();
            console.log(infinityStoneId);
            element.setAttribute("id", infinityStoneId);
            console.log(element);
            element.innerHTML = `<img src="assets/img/${infinityStoneId}.png">`;
          }
        });
      } else if(heroCatergoryScore < villainCatergoryScore){
        createImgOverlay("Loser", heroImg, "heroOverlayId");
        createImgOverlay("Winner", villainImg, "villainOverlayId");
        heroScoreCounter = 0;
      } else {
        createImgOverlay("Draw", heroImg, "heroOverlayId");
        createImgOverlay("Draw", villainImg, "villainOverlayId");
      }
    })(); // compareCatergoryScore function end
} // calculateResult function end

function showResult(overlayId){
  overlayId.style.opacity = "1";
}


var resultsModal = document.getElementById("resultsModal"); // declare resultsModal in global scope so is available to showResultsModal and playAgain.addEventListener
var playAgain = document.getElementById("playAgain");

function showResultsModal(){
  var infinityStoneName;

  switch(heroScoreCounter) { // return an error for function called with an 'empty' parameter value
    case 0:
      alert("Error! infinityStoneNumber variable is empty");
      break;
    case 1:
      infinityStoneName = "Power Stone";
      console.log(infinityStoneName);
      break;
    case 2:
      infinityStoneName = "Space Stone";
      break;
    case 3:
      infinityStoneName = "Reality Stone";
      break;
    case 4:
      infinityStoneName = "Soul Stone";
      break;
    case 5:
      infinityStoneName = "Time Stone";
      break;
    case 6:
      infinityStoneName = "Mind Stone";
      break;
  }

  if(heroScoreCounter > 0 || heroScoreCounter < 6){
    playAgain.style.display = "block";
    resultsModal.style.display = "block";
    resultsModal.innerHTML = `<div class="result-modal-inner">
                                <img class="hero-modal-image" src="assets/img/${superheroName}.png">
                                <h2>Congratulations ${heroName}</h2>
                                <p>You have defeated <span>${villainName}</span> and collected the ${infinityStoneName}.</p>
                                <img class="infinitystone-modal-image" src="assets/img/${infinityStoneId}.png">
                                <p>Collect all six infinity stones to save the universe and win the game!</p>
                              </div>`;
  }
}

function resetGame(){
    var heroImg = document.getElementById('heroImg');
    var heroInfo = document.getElementById('heroInfo');
    heroImg.innerHTML = `<img src="assets/img/questionmarkred.png">`; // reset image path back to red question mark image
    // reset property values back to question mark default and insert into heroInfo div
    heroInfo.innerHTML = `<h2>Superhero</h2>
                            <ul id="heroList" class="hero-list">
                              <li><a class="hero-list-inactive">Agility: ?</a></li>
                              <li><a class="hero-list-inactive" >Intelligence: ?</a></li>
                              <li><a class="hero-list-inactive">Magic: ?</a></li>
                              <li><a class="hero-list-inactive" >Strength: ?</a></li>
                              <li><a class="hero-list-inactive">Speed: ?</a></li>
                              <li><a class="hero-list-inactive">Technology: ?</a></li>
                            </ul>`;
    var selectHeroButton = document.getElementById("selectHeroButton");
    selectHeroButton.className = "select-hero select-hero-inactive";
    selectHeroButton.textContent = "Select Hero";
    selectHeroButton.style.border = "solid 4px #222";
    var activeDot= document.querySelector("div.active");
    activeDot.classList.remove("active");

   /* selectHero.innerHTML = `<a id="prev" class="prev">&#10094;</a>
                            <a id="next" class="next">&#10095;</a>
                            <button id="selectHeroButton" class="select-hero select-hero-inactive" type="button">Select Hero</button>`;*/

    // var slideIndex = 0; // set default value to show first slide
    // target anchor element with 'prev' id
    // var prevSlide = document.getElementById('prev');
    // target anchor element with 'next' id
    // var nextSlide = document.getElementById('next');
    // target div with dotSelector div
    // var hideDots = document.getElementById("dotSelector");
    hideDots.style.visibility = "visible";
    prevSlide.style.visibility = "visible";
    nextSlide.style.visibility = "visible";

    var villainImg = document.getElementById("villainImg");

    var villainInfo = document.getElementById('villainInfo');

    // add supervillain property name into template literal HTML image path and insert into villainImg div
    villainImg.innerHTML = `<img src="assets/img/questionmarkgrey.png">`;

    // add object property values to template literal HTML and insert into slideInfo div
    villainInfo.innerHTML = `<h2>Supervillain</h2>
                            <ul id="villainList" class="villain-list">
                              <li><a class="villain-list-inactive">Agility: ?</a></li>
                              <li><a class="villain-list-inactive">Intelligence: ?</a></li>
                              <li><a class="villain-list-inactive">Magic: ?</a></li>
                              <li><a class="villain-list-inactive">Strength: ?</a></li>
                              <li><a class="villain-list-inactive">Speed: ?</a></li>
                              <li><a class="villain-list-inactive">Technology: ?</a></li>
                            </ul>`;
    var selectVillainButton = document.getElementById("selectVillainButton");
    // selectVillain.innerHTML = `<button id="selectVillainButton" class="select-villain select-villain-inactive" type="button">Select Villain</button>`;
    selectVillainButton.className = "select-villain select-villain-inactive";
    selectVillainButton.textContent = "Select Villain";
    selectVillainButton.style.border = "solid 4px #222";
}

var selectVillainButton = document.getElementById('selectVillainButton'); // target select villain button

selectVillainButton.addEventListener('click', function(){
   if(selectVillainButton.classList.contains("select-villain-active")){ // only make changes if villain button is active
    showSupervillain();
    calculateResult();
    var heroOverlayId = document.getElementById("heroOverlayId"); // target overlay id for hero image
    var villainOverlayId = document.getElementById("villainOverlayId"); // target overlay id for villain image
    setTimeout(function(){ // change overlay opacity from 0 to 1 to reveal overlay with result 2 secs after images appear
      showResult(heroOverlayId);
      showResult(villainOverlayId);
      setTimeout(function(){
        resetGame();
      },2000);
    },2000);
    showResultsModal();
   }
}, false);

console.log(playAgain);

playAgain.addEventListener('click', function(){
  resultsModal.style.display = "none";
  playAgain.style.display = "none";
  // console.log(resultsModal);
});

        /*var heroScoreCounter = 3;
        var powerStoneList = document.querySelectorAll(".score-counter-list > li");
        console.log(powerStoneList);
        var powerStoneArray = Array.from(powerStoneList);
        console.log(powerStoneArray);
        powerStoneArray.forEach(function(element, index){
          if(index < heroScoreCounter){
            // element[0];
            console.log(element);
            console.log(index);
            var infinityStoneNumber = index + 1;
            console.log(infinityStoneNumber);
            var infinityStoneId = "infinityStone" + infinityStoneNumber.toString();
            console.log(infinityStoneId);
            element.setAttribute("id", infinityStoneId);
            console.log(element);
            element.innerHTML = `<img src="assets/img/${infinityStoneId}.png">`;
          }
        });*/


// run showSuperhero function with inital slideIndex value when page is fully loaded
/*window.addEventListener('load', function() {
    showSuperhero(slideIndex);
}, false);*/
