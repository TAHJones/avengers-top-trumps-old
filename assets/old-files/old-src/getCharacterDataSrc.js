function getCharacterData(callBack) {
    var filePath = "assets/data/characters.json";
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            // console.log("Success!", this.readyState, this.status, this.statusText);
            callBack(JSON.parse(this.responseText));
        } else {
            // console.log("Error!", this.readyState, this.status, this.status);
            alert("Error!");
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
    superheroList = data.superheros; // add list of superheros to superheroList variable


    function empty(e) {
      switch (e) {
        case "":
        case 0:
        case "0":
        case null:
        case false:
        case typeof this == "undefined":
          return true;
          alert("Error! variable 'superheroList' is empty");
        default:
          return false;
      }
    }

    empty(superheroList);
    /*if (empty(superheroList)) {
        alert("Error! variable 'superheroList' is empty");
    }*/
    // empty(superheroList) ? console.log("Data!") : console.log("No data!");

    console.log(superheroList);

    if(Array.isArray(superheroList) !== true) {
        alert("Error! Variable 'superheroList' doesn't contain array");
    }
    supervillainList = data.supervillains; // add list of supervillains to supervillainsList variable
    // console.log(typeof(supervillainList));

    if(Array.isArray(supervillainList) !== true) {
        alert("Error! Variable 'superheroList' doesn't contain array");
    }
    showSlides(slideIndex); // run showSlide function to set default slide image
}
