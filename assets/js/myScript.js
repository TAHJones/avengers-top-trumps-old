
  /*var heroResult, villainResult;
  var heroImg = document.getElementById("heroImg");

  function createImgOverlay(result, parentElement){
    var result = "Winner";
    var ImgOverlay = document.createElement("div"); // create new div element
    var ImgOverlay = ImgOverlay.innerHTML = `<div class="overlay">
                                                <div class="overlay-text">${result}</div>
                                              </div>`; // insert div element with result variable
    parentElement.innerHTML += ImgOverlay; // add new overlay element to parent element of img element
  }

  var x = createImgOverlay("Winner", heroImg);

  console.log(x);*/

      // var result = "Winner";
      // var ImgOverlay = document.createElement("div"); // create new div element
      /*var ImgOverlay =  ImgOverlay.innerHTML = `<div class="overlay">
                                                  <div class="overlay-text">${result}</div>
                                                </div>`;*/ // insert div element with result variable
      // var ImgOverlay = ImgOverlay.setAttribute("class", "overlay"); // add overlay class

      // console.log(ImgOverlay);

  var selectedCatergoryIndex = 3;

  var villainCatergoryScore = (function getVillainCatergoryScore(heroCatergoryIndex){
    var villainList = document.querySelectorAll("#villainList > li > a"); // get list of anchor elements containing villain catergory scores
    var villainListArray = Array.from(villainList); // convert villainList nodelist to array
    console.log(villainListArray);
    villainListArray.forEach(function(element, index){ // loop through array of anchor elements and select element with selected-catergory class name
      if(index === heroCatergoryIndex){
        var catergoryScoreElement = element;
        catergoryScoreElement.className = "selected-catergory"; // if index number matches index for hero selected catergory get anchor element with selected-catergory class
        var catergoryScoreText = element.textContent;
        var catergoryScore = parseInt(catergoryScore.charAt(catergoryScore.length-1)); // select last character of string and convert to number
        return catergoryScore;
      }
    });
  })(selectedCatergoryIndex);

  // var villainCatergoryScore = getVillainCatergoryScore(selectedCatergoryIndex);
  // getVillainCatergoryScore(selectedCatergoryIndex);

  // console.log(villainCatergoryScore());
  // console.log(getVillainCatergoryScore(selectedCatergoryIndex));

        var heroScoreCounter = 3;
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
        });


  var myVar = 5;

  var myResult = (function myFunction(myParam){
    var myNum = 5 * myParam;
    return myNum;
  })(myVar);

  console.log(myResult);

