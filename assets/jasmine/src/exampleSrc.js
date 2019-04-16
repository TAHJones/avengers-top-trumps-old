/*function addition(one, two) {
  if(typeof(one) == "number" && typeof(two) == "number") {
      return one + two;
  } else {
      alert("Error!");
  }
}*/

function getSuperheroes(data) {
  switch(data) { // return an error for function called with an 'empty' parameter value
    case "":
    case 0:
    case "0":
    case null:
    case false:
      alert("Error! Function parameter is empty");
      break;
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
          break;
        case "object":
          console.log("Success! Function parameter is an object");
          return data.superheroes; // return list of superheroes
      }
  }
}

// console.log(typeof(marvelCharacters));
// console.log(getSuperheroes(marvelCharacters));
// getSuperheroes(marvelCharacters);
// console.log(getSuperheroes("myString"));
// getSuperheroes("myString");

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
    case null:
    case false:
      alert("Error! Function parameter is empty");
      break;
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
          break;
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


// var drdoom = new getSupervillain("drdoom");

// console.log(drdoom);

// console.log(getSupervillains(marvelCharacters));
