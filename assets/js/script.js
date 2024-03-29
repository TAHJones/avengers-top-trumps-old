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

// get comic character data from the Marvel API using XMLHttpRequest object
function getMarvelData(callBack) {
  var marvelHero = function(){
      switch(superheroName) { // match superhero name to marvel api name identifier and add to marvelHero variable
        case "":
        case 0:
        case "0":
        case null:
        case false:
        case "undefined":
          alert("Error! superheroName variable is empty");  // return an error for function called with an 'empty' parameter value
          break;
        case "antman":
          return 'Ant-Man (Scott Lang)';
        case "blackwidow":
          return "Black Widow/Natasha Romanoff (MAA)";
        case "captainamerica":
          return "Captain America";
        case "captainmarvel":
          return "Captain Marvel (Carol Danvers)";
        case "deadpool":
          return "Deadpool";
        case "drstrange":
          return "Doctor Strange";
        case "falcon":
          return "Falcon";
        case "hawkeye":
          return "Hawkeye/Clint Barton (MAA)";
        case "hulk":
          return "Hulk";
        case "ironman":
          return "Iron Man";
        case "scarletwitch":
          return "Scarlet Witch (Ultimate)";
        case "spiderman":
          return "Spider-Man";
        case "thor":
          return "Thor";
        case "warmachine":
          return "War Machine (Ultimate)";
        case "vision":
          return "Vision";
      }
  };

  var marvelHeroName = marvelHero();
  var apiEndpoint = 'https://gateway.marvel.com/v1/public/';
  var resourceType = 'characters';
  var apiKey = 'e8e6c4f6d9f4f13655a0a25d4649f754';
  var apiURL = apiEndpoint + resourceType + '?name=' + marvelHeroName + '&apikey=' + apiKey;
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
          console.log("success!", this.readyState, this.status, this.statusText);
          callBack(JSON.parse(this.responseText));
          // console.log(apiURL);
          // console.log(JSON.parse(this.responseText));
      } else {
          console.log("error!", this.readyState, this.status, this.statusText);
      }
  };
  xhr.open("GET", apiURL, true);
  xhr.send();
}

// callback function that retrieves comic character data from getMarvelData function and adds to index.html using page section functions
// function that uses character data object from marvel api and extracts selected characters name, description and urls to other sites about selectedcharacter
function marvelData(data) {
    var marvelData = document.getElementById('marvelData');
    var marvelName = data.data.results[0].name;
    var marvelDescription = data.data.results[0].description;
    var marvelResources = data.data.results[0].urls;
    // console.log(marvelResources);

    // loop through array of objects containing external urls and generate list of page links
    var marvelResourceList;
    for (var item in marvelResources) {
        var type = marvelResources[item].type;
        var url = marvelResources[item].url;
        marvelResourceList += `<li><a href="${url}" target="_blank">${type}</a></li>`;
    }

    // removed 'undefined from the beginning of the list'
    marvelResourceList = marvelResourceList.replace('undefined','');

    var thumbnailPath = data.data.results[0].thumbnail.path;
    // modifiy path name to https to avoid getting blocked mixed content
    thumbnailPath = thumbnailPath.replace('http','https');
    // console.log(thumbnailPath);
    var thumbnailExtension = data.data.results[0].thumbnail.extension;

    var fullThumbnailPath = thumbnailPath + "." + thumbnailExtension;

        marvelData.innerHTML = `<div><img src="${fullThumbnailPath}" alt="${marvelName}"></img>
                                <div><h2>${heroName}</h2></div>
                                <div><p>${marvelDescription}</p></div>
                                <div><ul>${marvelResourceList}</ul></div>
                                <button id="marvelDataButton" class="marvel-data-button" type="button">Return</button>`;
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
    heroImg.innerHTML = `<img src="assets/img/${superheroName}.png">
                        <div id="infoOverlayId" class="info-overlay">
                          <button id="infoOverlayButton" class="info-overlay-text">More Info</button>
                        </div>`;

    var marvelDataBg = document.getElementById("marvelDataBg");
    var infoOverlayButton = document.getElementById("infoOverlayButton"); // add event listener to infoOverlayButton to reveal marvelData modal
    infoOverlayButton.addEventListener("click", function(){
      marvelDataBg.classList.remove("marvel-data-hide");
      marvelDataBg.classList.add("marvel-data-reveal");
      var marvelDataButton = document.getElementById("marvelDataButton");
      marvelDataButton.addEventListener("click", function(){ // when modal is visible add event listener to marvelData button which closes modal when clicked
        marvelDataBg.classList.add("marvel-data-hide");
        marvelDataBg.classList.remove("marvel-data-reveal");
      }, false);
    }, false);

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

    getMarvelData(marvelData); // get marvel api data when hero is displayed but not yet selected

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
        selectHeroButton.style.border = "4px solid #a46e32";
        selectHeroButton.className = "select-hero select-hero-selected";
        heroImg.firstElementChild.style.border = "4px solid #FFA94A";
        hideDots.style.visibility = "hidden"; // hide scrolling icons when hero has been selected
        prevSlide.style.visibility = "hidden";
        nextSlide.style.visibility = "hidden";
        selectVillainButton.className = "select-villain select-villain-active";
        var infoOverlayId = document.getElementById("infoOverlayId");
        var infoOverlayParent = infoOverlayId.parentNode;
        infoOverlayParent.removeChild(infoOverlayId); // remove info overlay when hero is selected
      }
    }, false);
}

var villainName; // declare villainName variable in global scope so it can be used by multiple functions
var supervillainName;

function showSupervillain() {
  var selectVillainButton = document.getElementById('selectVillainButton'); // target select villain button
  if(selectVillainButton.classList.contains("select-villain-active")){ // check that button is active before adding data & changing styles
    var villainImg = document.getElementById('villainImg');
    var villainInfo = document.getElementById('villainInfo');
    var randomNumber =  Math.floor(Math.random() * 15); // generate a random number between 0 and 14 to match index of slides

    // use randomNumber variable as index no. of return array from getSupervillainList function to randomly select individual supervillain property name
    supervillainName = getSupervillainList()[randomNumber];

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
    selectVillainButton.style.border = "4px solid #a46e32";
    selectVillainButton.className = "select-villain select-villain-selected";
    villainImg.firstElementChild.style.border = "4px solid #FFA94A";
  }
}

var heroScoreCounter;  // variable to record number of times heroes win

if(heroScoreCounter > 1){ // check if variable already has recorded score, if it does don't declare variable again as this will reset value
  heroScoreCounter;
} else {
  heroScoreCounter = 1; // if variable does exist i.e is > 0 declare variable in global scope with value of 1
}

function getHeroCatergoryScore(){ // function that returns index number and score of selected catergory
  var heroCatergoryScoreObject = {}; // create object to hold hero catergory score and selected catergory index no.
  var heroList = document.querySelectorAll("#heroList > li > a"); // get list of anchor elements containing hero catergory scores
  var heroListArray = Array.from(heroList); // convert heroList nodelist to array
  heroListArray.forEach(function(element, index){ // loop through array of anchor elements and select element with selected-catergory class name
    if(element.className === "selected-catergory"){
      heroCatergoryScoreObject.selectedCatergoryIndex = index; // add selected catergory index no. to catergoryScoreObject
      var heroCatergoryScoreText = element.textContent;
      var heroCatergoryScore = parseInt(heroCatergoryScoreText.charAt(heroCatergoryScoreText.length-1)); // select last character of string and convert to number
      heroCatergoryScore === 0 ? heroCatergoryScore = 10 : heroCatergoryScore; // if heroCatergoryScore = 0 convert to 10 and add to catergoryScoreObject
      heroCatergoryScoreObject.heroCatergoryScore = heroCatergoryScore;
    }
  });
  return heroCatergoryScoreObject; // return catergoryScoreObject
} // getHeroCatergoryScore function end

function getVillainCatergoryScore(heroCatergoryScoreObject){  // function that recieves heroCatergoryScoreObject, renames it as catergoryScoreObject and adds villain catergory score to object then returns object
  var catergoryScoreObject = heroCatergoryScoreObject;
  var villainList = document.querySelectorAll("#villainList > li > a"); // get list of anchor elements containing villain catergory scores
  var villainListArray = Array.from(villainList); // convert villainList nodelist to array
  villainListArray.forEach(function(element, index){ // loop through array of anchor elements and select element with selected-catergory class name
    if(index === catergoryScoreObject.selectedCatergoryIndex){ // if index no. of list item equals index no. of selected hero catergory list item store in catergoryScoreElement variable
      var catergoryScoreElement = element;
      catergoryScoreElement.className = "selected-catergory"; // if index number matches index for hero selected catergory get anchor element with selected-catergory class
      var catergoryScoreText = element.textContent;
      var villainCatergoryScore = parseInt(catergoryScoreText.charAt(catergoryScoreText.length-1)); // select last character of string and convert to number
      villainCatergoryScore === 0 ? villainCatergoryScore = 10 : villainCatergoryScore;  // if villainCatergoryScore = 0 convert to 10
      catergoryScoreObject.villainCatergoryScore = villainCatergoryScore; // add/create villainCatergoryScore key to catergoryScoreObject and add villainCatergoryScore variable as value
    }
  });
  return catergoryScoreObject;
} // getVillainCatergoryScore function end

function compareCatergoryScore(catergoryScoreObject){
  var heroCatergoryScore = catergoryScoreObject.heroCatergoryScore;
  // console.log(catergoryScoreObject.heroCatergoryScore);
  var villainCatergoryScore = catergoryScoreObject.villainCatergoryScore;

  var villainImg = document.getElementById("villainImg");
  var heroImg = document.getElementById("heroImg");

  var infinityStoneId; // declare infinityStoneId variable in compareCatergoryScore scope so is also avaliable to showResultsModal function

  function createImgOverlay(result, parentElement, overlayId){
    var ImgOverlay = document.createElement("div"); // create new div element
    ImgOverlay = ImgOverlay.innerHTML = `<div id="${overlayId}" class="overlay">
                                                <div class="overlay-text">${result}</div>
                                              </div>`; // insert div element with result variable
    parentElement.innerHTML += ImgOverlay; // add new overlay element to parent element of img element
  }

  function showResultsModal(result){ // insert HTML content into resultsModal div according to result
    var infinityStoneName_Won;
    var infinityStoneColor_Won;
    var infinityStoneName_Lost;
    var infinityStoneColor_Lost;
    switch(heroScoreCounter) { // match infinity stone name with counter score number
      case "":
      case 0:
      case "0":
        alert("Error! heroScoreCounter variable is empty");  // return an error for function called with an 'empty' parameter value
        return heroScoreCounter;
      case null:
        alert("Error! heroScoreCounter variable is null");
        return heroScoreCounter;
      case false:
        alert("Error! heroScoreCounter variable is false");
        return heroScoreCounter;
      case undefined:
        alert("Error! heroScoreCounter variable is undefined");
        return heroScoreCounter;
      case 1:
        infinityStoneName_Lost = "Power Stone";
        infinityStoneColor_Lost = "power-stone-color";
        // console.log(heroScoreCounter);
        break;
      case 2:
        infinityStoneName_Won = "Power Stone";
        infinityStoneColor_Won = "power-stone-color";
        infinityStoneName_Lost = "Space Stone";
        infinityStoneColor_Lost = "space-stone-color";
        // console.log(heroScoreCounter);
        break;
      case 3:
        infinityStoneName_Won = "Space Stone";
        infinityStoneColor_Won = "space-stone-color";
        infinityStoneName_Lost = "Reality Stone";
        infinityStoneColor_Lost = "reality-stone-color";
        // console.log(heroScoreCounter);
        break;
      case 4:
        infinityStoneName_Won = "Reality Stone";
        infinityStoneColor_Won = "reality-stone-color";
        infinityStoneName_Lost = "Soul Stone";
        infinityStoneColor_Lost = "soul-stone-color";
        // console.log(heroScoreCounter);
        break;
      case 5:
        infinityStoneName_Won = "Soul Stone";
        infinityStoneColor_Won = "soul-stone-color";
        infinityStoneName_Lost = "Time Stone";
        infinityStoneColor_Lost = "time-stone-color";
        // console.log(heroScoreCounter);
        break;
      case 6:
        infinityStoneName_Won = "Time Stone";
        infinityStoneColor_Won = "time-stone-color";
        infinityStoneName_Lost = "Mind Stone";
        infinityStoneColor_Lost = "mind-stone-color";
        // console.log(heroScoreCounter);
        break;
      case 7:
        infinityStoneName_Won = "Mind Stone";
        infinityStoneColor_Won = "mind-stone-color";
        // console.log(heroScoreCounter);
        break;
        default:
          switch(true){
            case (heroScoreCounter >= 8):
              alert("Error! heroScoreCounter variable is greater than 7");  // return an error if heroScoreCounter is  greater than 7
              return heroScoreCounter;
            default:
              alert("Error! heroScoreCounter variable is not an integer"); // return an error if heroScoreCounter is not an integer
        }
    }
    if(result === "win"){
      resultsModal.innerHTML = `<div class="results-modal-inner">
                                  <h2>${heroName} defeats ${villainName}</h2>
                                  <img class="hero-modal-image" src="assets/img/${superheroName}.png">
                                  <p>Congratulations you have obtained the <span class="${infinityStoneColor_Won}">${infinityStoneName_Won}</span></p>
                                  <img class="blinking-border infinitystone-modal-image" src="assets/img/${infinityStoneId}.png">
                                  <p>Collect all six infinity stones to win the game!</p>
                                </div>
                                <button id="playAgainButton" class="play-again-button" type="button">Play Again</button>`;
    } else if (result === "firstResultLose"){
      resultsModal.innerHTML = `<div class="results-modal-inner">
                                  <h2>${villainName} defeats ${heroName}</h2>
                                  <img class="hero-modal-image" src="assets/img/${supervillainName}.png">
                                  <p>You must fight again and win to aquire the <span class="power-stone-color">Power Stone</span></p>
                                  <img class="blinking-border infinitystone-modal-image" src="assets/img/infinitystone2.png">
                                  <p>Collect all six infinity stones to win the game!</p>
                                </div>
                                <button id="playAgainButton" class="play-again-button" type="button">Play Again</button>`;
    } else if (result === "lose"){
      resultsModal.innerHTML = `<div class="results-modal-inner">
                                  <h2>${villainName} defeats ${heroName}</h2>
                                  <img class="hero-modal-image" src="assets/img/${supervillainName}.png">
                                  <p>You have lost the <span class="${infinityStoneColor_Lost}">${infinityStoneName_Lost}</span></p>
                                  <img class="blinking-border infinitystone-modal-image" src="assets/img/${infinityStoneId}.png">
                                  <p>To complete your mission you must regain the ${infinityStoneName_Lost}!</p>
                                </div>
                                <button id="playAgainButton" class="play-again-button" type="button">Play Again</button>`;
    } else if (result == "firstResultDraw"){
      resultsModal.innerHTML = `<div class="results-modal-inner">
                                  <h2>${heroName} draws with ${villainName}</h2>
                                  <img class="hero-modal-image" src="assets/img/${superheroName}.png">
                                  <p>You must fight again and win to aquire the <span class="power-stone-color">Power Stone</span></p>
                                  <img class="blinking-border infinitystone-modal-image" src="assets/img/infinitystone2.png">
                                  <p>Collect all six infinity stones to win the game!</p>
                                </div>
                                <button id="playAgainButton" class="play-again-button" type="button">Play Again</button>`;
    } else if (result == "draw"){
      resultsModal.innerHTML = `<div class="results-modal-inner">
                                  <h2>${heroName} draws with ${villainName}</h2>
                                  <img class="hero-modal-image" src="assets/img/${superheroName}.png">
                                  <p>You live to fight another day and still possess the <span class="${infinityStoneColor_Won}">${infinityStoneName_Won}</span></p>
                                  <img class="blinking-border infinitystone-modal-image" src="assets/img/${infinityStoneId}.png">
                                  <p>Collect all six infinity stones to win the game!</p>
                                </div>
                                <button id="playAgainButton" class="play-again-button" type="button">Play Again</button>`;
    } else if (result === "complete"){
      resultsModal.innerHTML = `<div class="results-modal-inner">
                                  <h2>You are a Top Trumps Champion!</h2>
                                  <img class="hero-modal-image" src="assets/img/ironman-infinity-gauntlet2.jpg">
                                  <div class="score-counter">
                                    <ul class="game-complete-list">
                                      <li><img class="glow-effect" src="assets/img/infinitystone2.png"></img></li>
                                      <li><img class="glow-effect" src="assets/img/infinitystone3.png"></img></li>
                                      <li><img class="glow-effect" src="assets/img/infinitystone4.png"></img></li>
                                      <li><img class="glow-effect" src="assets/img/infinitystone5.png"></img></li>
                                      <li><img class="glow-effect" src="assets/img/infinitystone6.png"></img></li>
                                      <li><img class="glow-effect" src="assets/img/infinitystone7.png"></img></li>
                                    </ul>
                                  </div>
                                  <p>You have collected all six infinity stones and won the game!</p>
                                </div>
                                <button id="playAgainButton" class="play-again-button" type="button">Start Again</button>`;
    } else {
      alert("Error! No result was found");
    }
  } // showResultsModal function end

  var infinityStoneList = document.querySelectorAll(".score-counter-list > li");
  var infinityStoneArray = Array.from(infinityStoneList);
  // console.log("hero score is " + heroCatergoryScore);
  // console.log("villain score is " + villainCatergoryScore);

  if(heroCatergoryScore > villainCatergoryScore){
      heroScoreCounter += 1;
      // console.log("should be incremental " + heroScoreCounter);
      createImgOverlay("Winner", heroImg, "heroOverlayId");
      createImgOverlay("Loser", villainImg, "villainOverlayId");
      infinityStoneId = "infinitystone" + heroScoreCounter.toString();
      infinityStoneArray.forEach(function(element, index){
        if(heroScoreCounter === index + 2){
          element.setAttribute("id", infinityStoneId);
          element.innerHTML = `<img class="glowing-border" src="assets/img/${infinityStoneId}.png">`;
        }
      });
      var heroOverlayId = document.getElementById("heroOverlayId"); // target overlay id for hero image
      var villainOverlayId = document.getElementById("villainOverlayId"); // target overlay id for villain image
      heroOverlayId.classList.add("overlay-fadein");
      villainOverlayId.classList.add("overlay-fadein");
      if(heroCatergoryScore > villainCatergoryScore && heroScoreCounter === 7){
        showResultsModal("complete");
      } else if(heroCatergoryScore > villainCatergoryScore && heroScoreCounter < 7){
        showResultsModal("win");
      }
      resultsModal.classList.add("modal-fadein");
  } else if(heroCatergoryScore < villainCatergoryScore){
    createImgOverlay("Loser", heroImg, "heroOverlayId");
    createImgOverlay("Winner", villainImg, "villainOverlayId");
    heroScoreCounter -= 1;
    var lostinfinityStone = heroScoreCounter + 1;
    infinityStoneId = "infinitystone" + lostinfinityStone.toString(); // updated infinityStoneId variable to display current infinity stone
    infinityStoneArray.forEach(function(element, index){
      if(heroScoreCounter === index + 1){
        element.innerHTML = `<img src="assets/img/placeholderinfinitystone.png">`; // reset lost infinity stone to placeholder image
      }
    });
    var heroOverlayId = document.getElementById("heroOverlayId"); // target overlay id for hero image
    var villainOverlayId = document.getElementById("villainOverlayId"); // target overlay id for villain image
    heroOverlayId.classList.add("overlay-fadein");
    villainOverlayId.classList.add("overlay-fadein");
    if(heroCatergoryScore < villainCatergoryScore && heroScoreCounter < 1){
      heroScoreCounter = 1;
      showResultsModal("firstResultLose");
    } else if(heroCatergoryScore < villainCatergoryScore && heroScoreCounter >= 1){
      showResultsModal("lose");
    }
    resultsModal.classList.add("modal-fadein");
} else if(heroCatergoryScore === villainCatergoryScore) {
  createImgOverlay("Draw", heroImg, "heroOverlayId");
    createImgOverlay("Draw", villainImg, "villainOverlayId");
    heroScoreCounter += 0; // keep heroScoreCounter value the same
    infinityStoneId = "infinitystone" + heroScoreCounter.toString(); // add updated result counter to infinityStoneId variable
    var heroOverlayId = document.getElementById("heroOverlayId"); // target overlay id for hero image
    var villainOverlayId = document.getElementById("villainOverlayId"); // target overlay id for villain image
    heroOverlayId.classList.add("overlay-fadein");
    villainOverlayId.classList.add("overlay-fadein");
    if(heroCatergoryScore === villainCatergoryScore && heroScoreCounter === 1){
      showResultsModal("firstResultDraw");
    } else if(heroCatergoryScore === villainCatergoryScore && heroScoreCounter > 1){
      showResultsModal("draw");
    }
    resultsModal.classList.add("modal-fadein");
  }
}; // compareCatergoryScore function end

function resetGame(){
  if(heroScoreCounter === 7){ // if game is complete modify playagain button
    var scoreCounter = document.getElementById("scoreCounter");
    scoreCounter.innerHTML = `<ul class="score-counter-list">
                              <li><img src="assets/img/placeholderinfinitystone.png"></img></li>
                              <li><img src="assets/img/placeholderinfinitystone.png"></img></li>
                              <li><img src="assets/img/placeholderinfinitystone.png"></img></li>
                              <li><img src="assets/img/placeholderinfinitystone.png"></img></li>
                              <li><img src="assets/img/placeholderinfinitystone.png"></img></li>
                              <li><img src="assets/img/placeholderinfinitystone.png"></img></li>
                            </ul>`;
    heroScoreCounter = 1; // reset score counter back to default value
  }
    var heroImg = document.getElementById('heroImg');
    var heroInfo = document.getElementById('heroInfo');
    heroImg.innerHTML = `<img src="assets/img/questionmarkorange.png">`; // reset image path back to red question mark image
    heroInfo.innerHTML = `<h2>Superhero</h2>
                            <ul id="heroList" class="hero-list">
                              <li><a class="hero-list-inactive">Agility: ?</a></li>
                              <li><a class="hero-list-inactive" >Intelligence: ?</a></li>
                              <li><a class="hero-list-inactive">Magic: ?</a></li>
                              <li><a class="hero-list-inactive" >Strength: ?</a></li>
                              <li><a class="hero-list-inactive">Speed: ?</a></li>
                              <li><a class="hero-list-inactive">Technology: ?</a></li>
                            </ul>`; // reset property values back to question mark default and insert into heroInfo div
    var selectHeroButton = document.getElementById("selectHeroButton");
    selectHeroButton.className = "select-hero select-hero-inactive";
    selectHeroButton.textContent = "Select Hero";
    selectHeroButton.style.border = "solid 4px #5C5787";
    var activeDot= document.querySelector("div.active");
    activeDot.classList.remove("active");

    hideDots.style.visibility = "visible";
    prevSlide.style.visibility = "visible";
    nextSlide.style.visibility = "visible";

    var villainImg = document.getElementById("villainImg");
    var villainInfo = document.getElementById('villainInfo');

    villainImg.innerHTML = `<img src="assets/img/questionmarkorange.png">`;  // add supervillain property name into template literal HTML image path and insert into villainImg div

    villainInfo.innerHTML = `<h2>Supervillain</h2>
                            <ul id="villainList" class="villain-list">
                              <li><a class="villain-list-inactive">Agility: ?</a></li>
                              <li><a class="villain-list-inactive">Intelligence: ?</a></li>
                              <li><a class="villain-list-inactive">Magic: ?</a></li>
                              <li><a class="villain-list-inactive">Strength: ?</a></li>
                              <li><a class="villain-list-inactive">Speed: ?</a></li>
                              <li><a class="villain-list-inactive">Technology: ?</a></li>
                            </ul>`;  // add object property values to template literal HTML and insert into slideInfo div
    var selectVillainButton = document.getElementById("selectVillainButton");
    selectVillainButton.className = "select-villain select-villain-inactive";
    selectVillainButton.textContent = "Select Villain";
    selectVillainButton.style.border = "solid 4px #5C5787";
    if(resultsModal.className === "results-modal modal-fadein modal-fadeout"){
      setTimeout(function(){
        resultsModal.className = "results-modal";
      },2500); // delay rest of class names until fadeout effect is complete
    }
} // resetGame function end

var selectVillainButton = document.getElementById('selectVillainButton'); // target select villain button

selectVillainButton.addEventListener('click', function(){ // when selectVillainButton is clicked select/show villain & calculate winner
   if(selectVillainButton.classList.contains("select-villain-active")){ // only make changes if villain button is active
    showSupervillain();
    var heroCatergoryScoreObject = getHeroCatergoryScore(); // store returned object in heroCatergoryScoreObject variable
    var catergoryScoreObject = getVillainCatergoryScore(heroCatergoryScoreObject); // pass heroCatergoryScoreObject to getVillainCatergoryScore function and store returned object in catergoryScoreObject variable
    compareCatergoryScore(catergoryScoreObject); // pass catergoryScoreObject to compareCatergoryScore function which compares catergory scores and calculates result
   }
}, false);

var resultsModal = document.getElementById("resultsModal"); // declare resultsModal in global scope so is available to showResultsModal and playAgain.addEventListener

resultsModal.addEventListener('click', function(e){
  if(e.target.id === "playAgainButton"){ // when playAgainButton is clicked add modal-fadeout class to remove modal
    resultsModal.classList.add("modal-fadeout");
    resetGame(); // reset all elements to 'inactive' state when results modal has been removed
  }
},false);
