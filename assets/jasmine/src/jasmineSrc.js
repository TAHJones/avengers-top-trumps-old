
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
}

function calculateResult(selectData, heroScoreCounter, hero, villain){ // contains getHeroCatergoryScore, getVillainCatergoryScore & compareCatergoryScore IIFE functions

  var heroCatergoryScore; // create variable to store catergory of anchor tab with selected-catergory class
  var selectedCatergoryIndex; // create variable to store index number of anchor tab with selected-catergory class
  var heroListElement = `#${hero} > li > a`;
  (function getHeroCatergoryScore(){ // IIFE function that returns index number and score of selected catergory
    var heroList = document.querySelectorAll(heroListElement); // get list of anchor elements containing hero catergory scores
    var heroListArray = Array.from(heroList); // convert heroList nodelist to array
    heroListArray.forEach(function(element, index){ // loop through array of anchor elements and select element with selected-catergory class name
      if(element.className === "selected-catergory"){
        selectedCatergoryIndex = index;
        var heroCatergoryScoreText = element.textContent;
        heroCatergoryScore = parseInt(heroCatergoryScoreText.charAt(heroCatergoryScoreText.length-1)); // select last character of string and convert to number
        heroCatergoryScore === 0 ? heroCatergoryScore = 10 : heroCatergoryScore; // if heroCatergoryScore = 0 convert to 10
      }
    });
  })(); // getHeroCatergoryScore function end

  var villainListElement = `#${villain} > li > a`;
  var villainCatergoryScore; // create variable to store catergory of anchor element with selected-catergory class
  (function getVillainCatergoryScore(heroCatergoryIndex){
    var villainList = document.querySelectorAll(villainListElement); // get list of anchor elements containing villain catergory scores
    var villainListArray = Array.from(villainList); // convert villainList nodelist to array
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

  var resultsModal; // create variable to record result
  (function compareCatergoryScore(){
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
  })(); // compareCatergoryScore function end

  if(selectData === 1){ // conditional statement which uses function parameters to select which values to return
    return selectedCatergoryIndex;
  } else if(selectData === 2) {
    return heroCatergoryScore;
  } else if(selectData === 3) {
    return villainCatergoryScore;
  } else if(selectData === 4) {
    return resultsModal;
  }
} // calculateResult function end



