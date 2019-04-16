// describe("Calculator", function() {
//     describe("Addition tests", function() {
//         it("should return 42", function() {
//             expect(addition(20, 22)).toBe(42);
//         });
//         it("should return 26", function() {
//             expect(addition(7, 19)).toBe(26);
//         });
//         it("should return an error if we don't supply two numbers", function() {
//             spyOn(window, "alert");
//             addition("Hitchhikers", "Guide");
//             expect(window.alert).toHaveBeenCalledWith("Error!");


//         });
//     });
// });

// describe("suite wide usage", function() {
//     beforeEach(function() {
//       jasmine.Ajax.install();
//     });

//     afterEach(function() {
//       jasmine.Ajax.uninstall();
//     });

//     it("specifying response when you need it", function() {
//       var doneFn = jasmine.createSpy("success");

//       var xhr = new XMLHttpRequest();
//       xhr.onreadystatechange = function() {
//         if (this.readyState == this.DONE) {
//           doneFn(this.responseText);
//         }
//       };

//      xhr.open("GET", "assets/data/characters.json");
//      xhr.send();

//      expect(jasmine.Ajax.requests.mostRecent().url).toBe('assets/data/characters.json');
//      expect(doneFn).not.toHaveBeenCalled();

//      jasmine.Ajax.requests.mostRecent().response({
//       "status": 200,
//       "contentType": 'text/plain',
//       "responseText": 'awesome response'
//      });

//      expect(doneFn).toHaveBeenCalledWith('awesome response');
//     });

// });

 /*global marvelCharacters getSuperheroes getSuperhero expect spyOn getSupervillains getSupervillain */
describe("AVENGERS TOP TRUMPS", function() {
  describe("Object containing list of superheroes", function() {
    it("should retrieve object containing list of superheroes and their catergory scores", function() {
      var superheroesList = {
        antman: {
          name: "Antman",
          agility: 10,
          intelligence: 6,
          magic: 0,
          strength: 8,
          speed: 6,
          technology: 9
        },
        blackwidow: {
          name: "Black Widow",
          agility: 9,
          intelligence: 8,
          magic: 0,
          strength: 4,
          speed: 7,
          technology: 6
        },
        captainamerica: {
          name: "Captain America",
          agility: 8,
          intelligence: 7,
          magic: 0,
          strength: 8,
          speed: 8,
          technology: 4
        },
        captainmarvel: {
          name: "Captain Marvel",
          agility: 7,
          intelligence: 6,
          magic: 8,
          strength: 9,
          speed: 10,
          technology: 8
        },
        deadpool: {
          name: "Deadpool",
          agility: 9,
          intelligence: 7,
          magic: 0,
          strength: 7,
          speed: 10,
          technology: 0
        },
        drstrange: {
          name: "Dr Strange",
          agility: 3,
          intelligence: 10,
          magic: 10,
          strength: 4,
          speed: 4,
          technology: 0
        },
        falcon: {
          name: "Falcon",
          agility: 5,
          intelligence: 7,
          magic: 0,
          strength: 6,
          speed: 8,
          technology: 8
        },
        hawkeye: {
          name: "Hawkeye",
          agility: 8,
          intelligence: 7,
          magic: 0,
          strength: 6,
          speed: 8,
          technology: 4
        },
        hulk: {
          name: "Hulk",
          agility: 4,
          intelligence: 2,
          magic: 0,
          strength: 10,
          speed: 8,
          technology: 0
        },
        ironman: {
          name: "Ironman",
          agility: 7,
          intelligence: 10,
          magic: 0,
          strength: 9,
          speed: 9,
          technology: 10
        },
        scarletwitch: {
          name: "Scarlet Witch",
          agility: 5,
          intelligence: 7,
          magic: 10,
          strength: 4,
          speed: 7,
          technology: 0
        },
        spiderman: {
          name: "Spiderman",
          agility: 10,
          intelligence: 7,
          magic: 0,
          strength: 8,
          speed: 10,
          technology: 7
        },
        thor: {
          name: "Thor",
          agility: 7,
          intelligence: 7,
          magic: 9,
          strength: 10,
          speed: 9,
          technology: 8
        },
        warmachine: {
          name: "War Machine",
          agility: 5,
          intelligence: 7,
          magic: 0,
          strength: 8,
          speed: 8,
          technology: 9
        },
        vision: {
          name: "Vision",
          agility: 8,
          intelligence: 8,
          magic: 9,
          strength: 9,
          speed: 9,
          technology: 0
        }
      } // variable containing superheroes object
      var superHeroes = getSuperheroes(marvelCharacters); // getSuperheroes function that retrieves list of superheros from marvelcharacters object
      expect(superHeroes).toEqual(superheroesList);
    });
    it('should return an error if function parameter is ""', function() {
      spyOn(window, "alert"); // spy on window object alert method
      getSuperheroes(""); // call getSuperheroes function with undefined as parameter
      expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is empty");
    });
    it('should return an alert message if function parameter is 0', function() {
      spyOn(window, "alert"); // spy on window object alert method
      getSuperheroes(0); // call getSuperheroes function with undefined as parameter
      expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is empty");
    });
    it('should return an alert message if function parameter is "0"', function() {
      spyOn(window, "alert"); // spy on window object alert method
      getSuperheroes("0"); // call getSuperheroes function with undefined as parameter
      expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is empty");
    });
    it('should return an alert message if function parameter is null', function() {
      spyOn(window, "alert"); // spy on window object alert method
      getSuperheroes(null); // call getSuperheroes function with undefined as parameter
      expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is empty");
    });
    it('should return an alert message if function parameter is false', function() {
      spyOn(window, "alert"); // spy on window object alert method
      getSuperheroes(false); // call getSuperheroes function with undefined as parameter
      expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is empty");
    });
    it("should return an alert message if function parameter is undefined", function() {
      spyOn(window, "alert"); // spy on window object alert method
      getSuperheroes(undefined); // call getSuperheroes function with undefined as parameter
      expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is undefined");
    });
    it("should return an alert message if function parameter is a function", function() {
      spyOn(window, "alert"); // spy on window object alert method
      var myFunction = function(){return "this is a function"};
      getSuperheroes(myFunction); // call getSuperheroes function with function as parameter
      expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is a function");
    });
    it("should return an alert message if function parameter is a number", function() {
      spyOn(window, "alert"); // spy on window object alert method
      var myNumber = 444.444;
      getSuperheroes(myNumber); // call getSuperheroes function with number as parameter
      expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is a number");
    });
    it("should return an alert message if function parameter is a string", function() {
      spyOn(window, "alert"); // spy on window object alert method
      var myString = "fhdksksxlflskasjiwowsa";
      getSuperheroes(myString); // call getSuperheroes function with string as parameter
      expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is a string");
    });
    it('should return "Tom" if function parameter is an object with property name "superheroes"', function() {
      spyOn(window, "alert"); // spy on window object confirm method
      var myObject = {superheroes: "Tom"};
      var superTomsSecretIdentity = getSuperheroes(myObject); // call getSuperheroes function with object as parameter
      expect(superTomsSecretIdentity).toEqual("Tom");
    });
  });

  describe("Superhero Names and Catergory Scores", function() {
    it("Captain America's name should be 'Captain America'", function() {
      var captainamerica = new getSuperhero("captainamerica");
      expect(captainamerica.name).toBe("Captain America");
    });
    it("Antman's strength score should be 8", function() {
      var antman = new getSuperhero("antman");
      expect(antman.strength).toBe(8);
    });
    it("Ironman's technology score should be 10", function() {
      var ironman = new getSuperhero("ironman");
      expect(ironman.intelligence).toBe(10);
    });
    it("Vision's magic score should be 9", function(){
      var vision = new getSuperhero("vision");
      expect(vision.magic).toBe(9);
    });
  });

  describe("Object containing list of supervillains", function() {
    it("should retrieve object containing list of supervillains and their catergory scores", function() {
      var supervillainsList = {
      blackdwarf: {
        name: "Black Dwarf",
        agility: 2,
        intelligence: 4,
        magic: 0,
        strength: 9,
        speed: 4,
        technology: 9
      },
      drdoom: {
        name: "Dr Doom",
        agility: 7,
        intelligence: 10,
        magic: 0,
        strength: 9,
        speed: 7,
        technology: 10
      },
      dormannu: {
        name: "Dormannu",
        agility: 6,
        intelligence: 9,
        magic: 9,
        strength: 9,
        speed: 7,
        technology: 0
      },
      ebonymaw: {
        name: "Ebony Maw",
        agility: 4,
        intelligence: 9,
        magic: 10,
        strength: 2,
        speed: 2,
        technology: 8
      },
      loki: {
        name: "Loki",
        agility: 8,
        intelligence: 10,
        magic: 9,
        strength: 7,
        speed: 7,
        technology: 9
      },
      magneto: {
        name: "Magneto",
        agility: 7,
        intelligence: 8,
        magic: 9,
        strength: 6,
        speed: 6,
        technology: 9
      },
      mandarin: {
        name: "Mandarin",
        agility: 7,
        intelligence: 8,
        magic: 0,
        strength: 8,
        speed: 7,
        technology: 7
      },
      modok: {
        name: "M.O.D.O.K",
        agility: 5,
        intelligence: 9,
        magic: 0,
        strength: 2,
        speed: 6,
        technology: 10
      },
      redskull: {
        name: "Red Skull",
        agility: 7,
        intelligence: 8,
        magic: 0,
        strength: 8,
        speed: 8,
        technology: 7
      },
      thanos: {
        name: "Thanos",
        agility: 9,
        intelligence: 10,
        magic: 0,
        strength: 10,
        speed: 9,
        technology: 10
      },
      ultron: {
        name: "Ultron",
        agility: 8,
        intelligence: 9,
        magic: 0,
        strength: 9,
        speed: 9,
        technology: 9
      },
      venom: {
        name: "Venom",
        agility: 8,
        intelligence: 6,
        magic: 0,
        strength: 9,
        speed: 8,
        technology: 0
      },
      vulture: {
        name: "Vulture",
        agility: 7,
        intelligence: 7,
        magic: 0,
        strength: 7,
        speed: 8,
        technology: 8
      },
      whiplash: {
        name: "Whiplash",
        agility: 6,
        intelligence: 8,
        magic: 0,
        strength: 7,
        speed: 6,
        technology: 8
      },
      yondu: {
        name: "Yondu",
        agility: 6,
        intelligence: 7,
        magic: 0,
        strength: 6,
        speed: 6,
        technology: 9
      }
    }; // variable containing supervillains object
      var superVillains = getSupervillains(marvelCharacters); // getSupervillains function that retrieves list of supervillains from marvelCharacters object
      expect(superVillains).toEqual(supervillainsList);
    });
    it('should return an error if function parameter is "" ', function() {
      spyOn(window, "alert"); // spy on window object alert method
      getSupervillains(""); // call getSuperheroes function with undefined as parameter
      expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is empty");
    });
    it('should return an alert message if function parameter is 0', function() {
      spyOn(window, "alert"); // spy on window object alert method
      getSupervillains(0); // call getSuperheroes function with undefined as parameter
      expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is empty");
    });
    it('should return an alert message if function parameter is "0" ', function() {
      spyOn(window, "alert"); // spy on window object alert method
      getSupervillains("0"); // call getSuperheroes function with undefined as parameter
      expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is empty");
    });
    it('should return an alert message if function parameter is null', function() {
      spyOn(window, "alert"); // spy on window object alert method
      getSupervillains(null); // call getSuperheroes function with undefined as parameter
      expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is empty");
    });
    it('should return an alert message if function parameter is false', function() {
      spyOn(window, "alert"); // spy on window object alert method
      getSupervillains(false); // call getSuperheroes function with undefined as parameter
      expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is empty");
    });
    it("should return an alert message if function parameter is undefined", function() {
      spyOn(window, "alert"); // spy on window object alert method
      getSupervillains(undefined); // call getSuperheroes function with undefined as parameter
      expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is undefined");
    });
    it("should return an alert message if function parameter is a function", function() {
      spyOn(window, "alert"); // spy on window object alert method
      var myFunction = function(){return "this is a function"};
      getSupervillains(myFunction); // call getSuperheroes function with function as parameter
      expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is a function");
    });
    it("should return an alert message if function parameter is a number", function() {
      spyOn(window, "alert"); // spy on window object alert method
      var myNumber = 666.666;
      getSupervillains(myNumber); // call getSuperheroes function with number as parameter
      expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is a number");
    });
    it("should return an alert message if function parameter is a string", function() {
      spyOn(window, "alert"); // spy on window object alert method
      var myString = "fhdksksxlflskasjiwowsa";
      getSupervillains(myString); // call getSuperheroes function with string as parameter
      expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is a string");
    });
    it('should return "Evil Tom" if function parameter is an object with property name "supervillains"', function() {
      spyOn(window, "alert"); // spy on window object confirm method
      var myObject = {supervillains: "Evil Tom"};
      var evilTomsSecretIdentity = getSupervillains(myObject); // call getSupervillains function with object as parameter
      expect(evilTomsSecretIdentity).toEqual("Evil Tom");
    });
  });

  describe("Supervillain Names and Catergory Scores", function() {
    it("Ultron's name should be 'Ultron'", function() {
      var ultron = new getSupervillain("ultron");
      expect(ultron.name).toBe("Ultron");
    });
    it("Mandarin's strength score should be 8", function() {
      var mandarin = new getSupervillain("mandarin");
      expect(mandarin.strength).toBe(8);
    });
    it("Vulture's technology score should be 8", function() {
      var vulture = new getSupervillain("vulture");
      expect(vulture.technology).toBe(8);
    });
    it("Dormannu's magic score should be 9", function(){
      var dormannu = new getSupervillain("dormannu");
      expect(dormannu.magic).toBe(9);
    });
  });

});