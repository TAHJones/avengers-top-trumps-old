
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

function calculateResult(returnValue, heroScoreCounter, hero, villain){ // contains getHeroCatergoryScore, getVillainCatergoryScore & compareCatergoryScore IIFE functions

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

  if(returnValue === 1){ // conditional statement which uses function parameters to select which values to return
    return selectedCatergoryIndex;
  } else if(returnValue === 2) {
    return heroCatergoryScore;
  } else if(returnValue === 3) {
    return villainCatergoryScore;
  } else if(returnValue === 4) {
    return resultsModal;
  }
} // calculateResult function end

var apiData = { "code": 200,
              "status": "Ok",
              "copyright": "© 2019 MARVEL",
              "attributionText": "Data provided by Marvel. © 2019 MARVEL",
              "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2019 MARVEL</a>",
              "etag": "94bf3ad0579d1ca47fed7db16760ad00d1a28848",
              "data": {
                "offset": 0,
                "limit": 20,
                "total": 1,
                "count": 1,
                "results": [
                  {
                    "id": 1009664,
                    "name": "Thor",
                    "description": "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
                    "modified": "2019-02-06T18:10:24-0500",
                    "thumbnail": {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350",
                      "extension": "jpg"
                    },
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                    "comics": {
                      "available": 1685,
                      "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009664/comics",
                      "items": [
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/43506",
                          "name": "A+X (2012) #7"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/30090",
                          "name": "Age of Heroes (2010) #1"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/46852",
                          "name": "Alpha: Big Time (2013) #4"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/12637",
                          "name": "Alpha Flight (1983) #1"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/12725",
                          "name": "Alpha Flight (1983) #61"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/12668",
                          "name": "Alpha Flight (1983) #127"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/43170",
                          "name": "Amazing Spider-Man (1999) #57"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/43171",
                          "name": "Amazing Spider-Man (1999) #58"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/6748",
                          "name": "The Amazing Spider-Man (1963) #339"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/277",
                          "name": "Amazing Spider-Man (1999) #500"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/5808",
                          "name": "Amazing Spider-Man (1999) #538"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/16904",
                          "name": "Amazing Spider-Man Annual (1964) #3"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/16890",
                          "name": "Amazing Spider-Man Annual (1964) #16"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1262",
                          "name": "Amazing Spider-Man Vol. 6 (Trade Paperback)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/39896",
                          "name": "Art of Marvel Studios TPB Slipcase (Hardcover)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/32769",
                          "name": "Astonishing Thor (2010) #1"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/33652",
                          "name": "Astonishing Thor (2010) #1 (FOILOGRAM VARIANT)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/32771",
                          "name": "Astonishing Thor (2010) #2"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/32774",
                          "name": "Astonishing Thor (2010) #3"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/32776",
                          "name": "Astonishing Thor (2010) #4"
                        }
                      ],
                      "returned": 20
                    },
                    "series": {
                      "available": 479,
                      "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009664/series",
                      "items": [
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
                          "name": "A+X (2012 - Present)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/9790",
                          "name": "Age of Heroes (2010)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
                          "name": "Alpha Flight (1983 - 1994)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/17650",
                          "name": "Alpha: Big Time (2013 - Present)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
                          "name": "Amazing Spider-Man (1999 - 2013)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
                          "name": "Amazing Spider-Man Annual (1964 - 2018)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/318",
                          "name": "Amazing Spider-Man Vol. 6 (2004)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/14779",
                          "name": "Art of Marvel Studios TPB Slipcase (2011 - Present)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/9858",
                          "name": "Astonishing Thor (2010)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
                          "name": "Astonishing X-Men (2004 - 2013)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/24229",
                          "name": "Avengers (2018 - Present)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/9085",
                          "name": "Avengers (2010 - 2012)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
                          "name": "Avengers (1998 - 2004)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
                          "name": "Avengers (1963 - 1996)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/22547",
                          "name": "Avengers (2016 - 2018)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
                          "name": "Avengers (1996 - 1997)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/9859",
                          "name": "Avengers & the Infinity Gauntlet (2010)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/9086",
                          "name": "Avengers Academy (2010 - 2012)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/23945",
                          "name": "Avengers Annual (2001)"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
                          "name": "Avengers Annual (1967 - 1994)"
                        }
                      ],
                      "returned": 20
                    },
                    "stories": {
                      "available": 2585,
                      "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009664/stories",
                      "items": [
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/876",
                          "name": "THOR (1998) #76",
                          "type": "cover"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/877",
                          "name": "Interior #877",
                          "type": "interiorStory"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/879",
                          "name": "Interior #879",
                          "type": "interiorStory"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/880",
                          "name": "THOR (1998) #77",
                          "type": "cover"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/881",
                          "name": "Interior #881",
                          "type": "interiorStory"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/882",
                          "name": "THOR (1998) #83",
                          "type": "cover"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/883",
                          "name": "Interior #883",
                          "type": "interiorStory"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/884",
                          "name": "THOR (1998) #82",
                          "type": "cover"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/885",
                          "name": "Interior #885",
                          "type": "interiorStory"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/886",
                          "name": "THOR (1998) #78",
                          "type": "cover"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/887",
                          "name": "Interior #887",
                          "type": "interiorStory"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/888",
                          "name": "THOR (1998) #79",
                          "type": "cover"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/889",
                          "name": "Interior #889",
                          "type": "interiorStory"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/890",
                          "name": "THOR (1998) #80",
                          "type": "cover"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/891",
                          "name": "Interior #891",
                          "type": "interiorStory"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/892",
                          "name": "THOR (1998) #81",
                          "type": "cover"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/893",
                          "name": "Interior #893",
                          "type": "interiorStory"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/894",
                          "name": "THOR (1998) #84",
                          "type": "cover"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/895",
                          "name": "AVENGERS DISASSEMBLED TIE-IN! “RAGNAROK” PART 4 (OF 6) What makes a god? Is it birthright, is it happenstance, or is it in the m",
                          "type": "interiorStory"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/896",
                          "name": "THOR (1998) #85",
                          "type": "cover"
                        }
                      ],
                      "returned": 20
                    },
                    "events": {
                      "available": 24,
                      "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009664/events",
                      "items": [
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
                          "name": "Acts of Vengeance!"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
                          "name": "Atlantis Attacks"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
                          "name": "Avengers Disassembled"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
                          "name": "Avengers VS X-Men"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/235",
                          "name": "Blood and Thunder"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
                          "name": "Chaos War"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
                          "name": "Civil War"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
                          "name": "Dark Reign"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
                          "name": "Evolutionary War"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
                          "name": "Fear Itself"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
                          "name": "Inferno"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
                          "name": "Infinity"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
                          "name": "Infinity War"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
                          "name": "Maximum Security"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/263",
                          "name": "Mutant Massacre"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
                          "name": "Onslaught"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
                          "name": "Secret Empire"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
                          "name": "Secret Invasion"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
                          "name": "Secret Wars"
                        },
                        {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
                          "name": "Secret Wars II"
                        }
                      ],
                      "returned": 20
                    },
                    "urls": [
                      {
                        "type": "detail",
                        "url": "http://marvel.com/characters/1009664/thor/featured?utm_campaign=apiRef&utm_source=e8e6c4f6d9f4f13655a0a25d4649f754"
                      },
                      {
                        "type": "wiki",
                        "url": "http://marvel.com/universe/Thor_(Thor_Odinson)?utm_campaign=apiRef&utm_source=e8e6c4f6d9f4f13655a0a25d4649f754"
                      },
                      {
                        "type": "comiclink",
                        "url": "http://marvel.com/comics/characters/1009664/thor?utm_campaign=apiRef&utm_source=e8e6c4f6d9f4f13655a0a25d4649f754"
                      }
                    ]
                  }
                ]
              }
            }; // data for marvel character Thor from marvel api

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


// console.log(marvelData(myJSON, "Thor", 1));
// console.log(marvelData(myJSON, "Thor", 2));
// console.log(marvelData(myJSON, "Thor", 3));
// console.log(marvelData(myJSON, "Thor", 4));
// console.log(marvelData(myJSON, "Thor", 5));
// console.log(marvelData(myJSON, "Thor", 6));
// console.log(marvelData(myJSON, "Thor", 7));
// console.log(marvelData(myJSON, "Thor", 8));
// console.log(marvelData(myJSON, "Thor", 9));
// console.log(marvelData(myJSON, "Thor", 10));
// marvelData(myJSON, "Thor", 2);
// marvelData(myJSON, "Thor", 3);
// marvelData(myJSON, "Thor", 4);
// marvelData(myJSON, "Thor", 5);
// marvelData(myJSON, "Thor", 6);







