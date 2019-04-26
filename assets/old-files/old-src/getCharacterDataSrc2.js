function getCharacterData(filepath) {
    // filePath = "assets/data/characters.json";
    var filePath = filepath;
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log("Success!", this.readyState, this.status, this.statusText);
                var data = JSON.parse(this.responseText);
            // var myArray = myObject.superheros;
            // var myArray = Array.from(myObject.superheros);
            // var myReadyState, myStatus;
            // myReadyState = this.readyState;
            // myStatus = this.status;
            // console.log(`${myReadyState} and ${myStatus}`);
            // console.log(myObject);
            // console.log(typeof(myArray));
            //console.log(myArray[10].id);
            // return myArray[10].id;
            superheroList = data.superheros; // add list of superheros to superheroList variable
            // console.log(superheroList[10].id);
            // return superheroList[10].id;
            console.log(data);

        } else {
            console.log("Error!", this.readyState, this.status, this.status);
            // alert("Error!");
        }
    };

    xhr.open("GET", filePath, true);
    xhr.send();
}

// console.log(getCharacterData("assets/data/characters.json"));

// callback function that retrieves object data from getCharacterData function
function showCharacterData(data) {
    superheroList = data.superheros; // add list of superheros to superheroList variable

    console.log(superheroList[10].id);
    // return superheroList[10].id;
    return "scarletwitch";
}
