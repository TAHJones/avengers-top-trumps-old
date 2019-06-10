
function marvelData(apiData, heroName, returnValue) { // callcack function that receives marvel api data after successful AJAX request
    var marvelDataObject = apiData;
    var marvelName = marvelDataObject.data.results[0].name;
    var marvelDescription = marvelDataObject.data.results[0].description;
    var marvelResources = marvelDataObject.data.results[0].urls;

    // loop through array of objects containing external urls and generate list of page links
    var marvelResourceList;
    for (var item in marvelResources) {
        var type = marvelResources[item].type;
        var url = marvelResources[item].url;
        marvelResourceList += `<li><a href="${url}" target="_blank">${type}</a></li>`;
    }

    // removed 'undefined from the beginning of the list'
    marvelResourceList = marvelResourceList.replace('undefined','');

    var thumbnailPath = marvelDataObject.data.results[0].thumbnail.path;

    // modifiy path name to https to avoid getting blocked mixed content
    thumbnailPath = thumbnailPath.replace('http','https');

    var thumbnailExtension = marvelDataObject.data.results[0].thumbnail.extension;

    var fullThumbnailPath = thumbnailPath + "." + thumbnailExtension;

    var resultsModal = `<div><img src="${fullThumbnailPath}" alt="${marvelName}"></img>
                                <div><h2>${heroName}</h2></div>
                                <div><p>${marvelDescription}</p></div>
                                <div><ul>${marvelResourceList}</ul></div>
                                <button id="marvelDataButton" class="marvel-data-button" type="button">Return</button>`;

  if(returnValue === 1){ // conditional statement which uses function parameters to select which values to return
    return marvelName;
  } else if(returnValue === 2) {
    return marvelDescription;
  } else if(returnValue === 3) {
    return marvelResources[0].type;
  } else if(returnValue === 4) {
    return marvelResources[0].url;
  } else if(returnValue === 5) {
    return marvelResources[1].type;
  } else if(returnValue === 6) {
    return marvelResources[1].url;
  } else if(returnValue === 7) {
    return marvelResources[2].type;
  } else if(returnValue === 8) {
    return marvelResources[2].url;
  } else if(returnValue === 9) {
    return fullThumbnailPath;
  } else if(returnValue === 10) {
    return resultsModal;
  }
} // marvelData function end

function getSuperheroes(data) {
  switch(data) { // return an error for function called with an 'empty' parameter value
    case "":
    case 0:``
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
          return data.superheroes; // return list of superheroes
      }
  }
} // getSuperheroes function end

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
} // getSuperhero function end

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
} // getSupervillains function end

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
} // getSupervillain function end

function getInfinityStone(heroScoreCounter){
  var infinityStoneName;
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
      return infinityStoneName = "No Stone";
    case 2:
      return infinityStoneName = "Power Stone";
    case 3:
      return infinityStoneName = "Space Stone";
    case 4:
      return infinityStoneName = "Reality Stone";
    case 5:
      return infinityStoneName = "Soul Stone";
    case 6:
      return infinityStoneName = "Time Stone";
    case 7:
      return infinityStoneName = "Mind Stone";
    default:
      switch(true){
        case (heroScoreCounter >= 8):
          alert("Error! heroScoreCounter variable is greater than 7");  // return an error if heroScoreCounter is  greater than 7
          return heroScoreCounter;
        default:
          alert("Error! heroScoreCounter variable is not an integer"); // return an error if heroScoreCounter is not an integer
      }
  }
} // getInfinityStone function end

function getHeroCatergoryScore(heroName){ // function that returns index number and score of selected catergory
  var heroCatergoryScoreObject = {}; // create object to hold hero catergory score and selected catergory index no.
  var heroListElement = `#${heroName} > li > a`;
  var heroList = document.querySelectorAll(heroListElement); // get list of anchor elements containing hero catergory scores
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
}; // getHeroCatergoryScore function end

function getVillainCatergoryScore(heroCatergoryScoreObject, villainName){
  var catergoryScoreObject = heroCatergoryScoreObject;
  var villainListElement = `#${villainName} > li > a`;
  var villainList = document.querySelectorAll(villainListElement); // get list of anchor elements containing villain catergory scores
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
}; // getVillainCatergoryScore function end

function compareCatergoryScore(catergoryScoreObject, heroScoreCounter){
  var resultsModal; // create variable to record result
  var heroCatergoryScore = catergoryScoreObject.heroCatergoryScore;
  var villainCatergoryScore = catergoryScoreObject.villainCatergoryScore;
  function showResultsModal(result){ // add result to resultsModal variable to match function parameter
    if(result === "win"){
      resultsModal = `WIN`;
    } else if (result === "firstResultLose"){
      resultsModal = `FIRST-RESULT-LOSE`;
    } else if (result === "lose"){
      resultsModal = `LOSE`;
    } else if (result == "firstResultDraw"){
      resultsModal = `FIRST-RESULT-DRAW`;
    } else if (result == "draw"){
      resultsModal = `DRAW`;
    } else if (result === "complete"){
      resultsModal = `COMPLETE`;
    } else {
      alert("Error! No result was found");
    }
  } // showResultsModal function end

  if(heroCatergoryScore > villainCatergoryScore){
      if(heroCatergoryScore > villainCatergoryScore && heroScoreCounter === 7){
        showResultsModal("complete");
      } else if(heroCatergoryScore > villainCatergoryScore && heroScoreCounter < 7){
        showResultsModal("win");
      }
  } else if(heroCatergoryScore < villainCatergoryScore){
    if(heroCatergoryScore < villainCatergoryScore && heroScoreCounter < 1){
      showResultsModal("firstResultLose");
    } else if(heroCatergoryScore < villainCatergoryScore && heroScoreCounter >= 1){
      showResultsModal("lose");
    }
  } else if(heroCatergoryScore === villainCatergoryScore) {
    if(heroCatergoryScore === villainCatergoryScore && heroScoreCounter === 1){
      showResultsModal("firstResultDraw");
    } else if(heroCatergoryScore === villainCatergoryScore && heroScoreCounter > 1){
      showResultsModal("draw");
    }
  }
  return resultsModal;
}; // compareCatergoryScore function end










