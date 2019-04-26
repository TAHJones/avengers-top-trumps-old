/*describe("Calculator", function() {
    describe("Addition tests", function() {
        it("should return 42", function() {
            expect(addition(20, 22)).toBe(42);
        });
        it("should return 26", function() {
            expect(addition(7, 19)).toBe(26);
        });
        it("should return an error if we don't supply two numbers", function() {
            spyOn(window, "alert");
            addition("Hitchhikers", "Guide");
            expect(window.alert).toHaveBeenCalledWith("Error!");


        });
    });
});
*/
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
  describe("object containing list of superheroes", function() {
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
    it('should return "Tom" if function parameter is an object with property name "superheroes"', function() {
      var myObject = {superheroes: "Tom"};
      var superTomsSecretIdentity = getSuperheroes(myObject); // call getSuperheroes function with object as parameter
      expect(superTomsSecretIdentity).toEqual("Tom");
    });
  // });
    describe("alert messages for function calls with empty parameter", function() {
      beforeEach(function(){
        spyOn(window, "alert"); // add spy on window object alert method before specs
      });
      it('should return an alert message if function parameter is ""', function() {
        getSuperheroes(""); // call getSuperheroes function with undefined as parameter
        expect(getSuperheroes("")).toBe("");
        expect(getSuperheroes("")).toBeFalsy();
        // expect(getSuperheroes("")).not.toMatch(/\w*/); // don't match any string containing one or more alphanumeric characters using regular expression
        expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is empty");
      });
      it('should return an alert message if function parameter is 0', function() {
        getSuperheroes(0); // call getSuperheroes function with undefined as parameter
        expect(getSuperheroes(0)).toBe(0);
        expect(getSuperheroes(0)).toBeFalsy();
        expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is empty");
      });
      it('should return an alert message if function parameter is "0"', function() {
        getSuperheroes("0"); // call getSuperheroes function with undefined as parameter
        expect(getSuperheroes("0")).not.toBeFalsy();
        expect(getSuperheroes("0")).toBe("0");
        expect(getSuperheroes("0")).toMatch(/^\d$/); // match any string containing single digit character using regular expression
        expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is empty");
      });
      it('should return an alert message if function parameter is null', function() {
        getSuperheroes(null); // call getSuperheroes function with undefined as parameter
        expect(getSuperheroes(null)).toBeNull();
        expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is null");
      });
      it('should return an alert message if function parameter is false', function() {
        getSuperheroes(false); // call getSuperheroes function with undefined as parameter
        expect(getSuperheroes(false)).toBeFalsy();
        expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is false");
      });
    });
    describe("alert messages for function calls with wrong data type as parameter", function() {
      var myFunction = function(){return "this is a function"};
      var myNumber = 333.333;
      var myString = "fhdk65sksxl4lskasjiw9wsaZ";
      beforeEach(function(){
        spyOn(window, "alert"); // add spy on window object alert method before specs
      });
      it("should return an alert message if function parameter is undefined", function() {
        getSuperheroes(undefined); // call getSuperheroes function with undefined as parameter
        expect(getSuperheroes(undefined)).not.toBeDefined();
        expect(getSuperheroes(undefined)).toBeUndefined();
        expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is undefined");
      });
      it("should return an alert message if function parameter is a function", function() {
        getSuperheroes(myFunction); // call getSuperheroes function with function as parameter
        expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is a function");
      });
      it("should return an alert message if function parameter is a number", function() {
        getSuperheroes(myNumber); // call getSuperheroes function with number as parameter
        expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is a number");
      });
      it("should return an alert message if function parameter is a string", function() {
        getSuperheroes(myString); // call getSuperheroes function with string as parameter
        expect(myString).toMatch(/\w*/); // match any string containing alphanumeric characters using regular expression
        expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is a string");
      });
    });
  });

  describe("Superhero Names and Catergory Scores", function() {
    it("Captain America's name should be 'Captain America'", function() {
      var captainamerica = new getSuperhero("captainamerica");
      expect(captainamerica.name).toBe("Captain America");
    });
    it("Scarlet Witch's name should be 'Scarlet Witch'", function() {
      var scarletwitch = new getSuperhero("scarletwitch");
      expect(scarletwitch.name).toBe("Scarlet Witch");
    });
    it("Spiderman's agility score should be 10", function() {
      var spiderman = new getSuperhero("spiderman");
      expect(spiderman.agility).toBe(10);
    });
    it("Thor's intelligence score should be 7", function() {
      var thor = new getSuperhero("thor");
      expect(thor.intelligence).toBe(7);
    });
    it("Vision's magic score should be 9", function(){
      var vision = new getSuperhero("vision");
      expect(vision.magic).toBe(9);
    });
    it("Antman's strength score should be 8", function() {
      var antman = new getSuperhero("antman");
      expect(antman.strength).toBe(8);
    });
    it("Black Widow's speed score should be 7", function() {
      var blackwidow = new getSuperhero("blackwidow");
      expect(blackwidow.speed).toBe(7);
    });
    it("Ironman's technology score should be 10", function() {
      var ironman = new getSuperhero("ironman");
      expect(ironman.intelligence).toBe(10);
    });
  });

  describe("object containing list of supervillains", function() {
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
    it('should return "Evil Tom" if function parameter is an object with property name "superheroes"', function() {
      var myObject = {supervillains: "Evil Tom"};
      var evilTomsSecretIdentity = getSupervillains(myObject); // call getSupervillains function with object as parameter
      expect(evilTomsSecretIdentity).toEqual("Evil Tom");
    });
    describe("alert messages for function calls with empty parameter", function() {
      beforeEach(function(){
        spyOn(window, "alert"); // add spy on window object alert method before specs
      });
      it('should return an alert message if function parameter is ""', function() {
        getSupervillains(""); // call getSupervillains function with undefined as parameter
        expect(getSupervillains("")).toBe("");
        expect(getSupervillains("")).toBeFalsy();
        expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is empty");
      });
      it('should return an alert message if function parameter is 0', function() {
        getSupervillains(0); // call getSuperheroes function with undefined as parameter
        expect(getSupervillains(0)).toBe(0);
        expect(getSupervillains(0)).toBeFalsy();
        expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is empty");
      });
      it('should return an alert message if function parameter is "0"', function() {
        getSupervillains("0"); // call getSupervillains function with undefined as parameter
        expect(getSupervillains("0")).not.toBeFalsy();
        expect(getSupervillains("0")).toBe("0");
        expect(getSupervillains("0")).toMatch(/^\d$/); // match any string containing single digit character using regular expression
        expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is empty");
      });
      it('should return an alert message if function parameter is null', function() {
        getSupervillains(null); // call getSupervillains function with undefined as parameter
        expect(getSupervillains(null)).toBeNull();
        expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is null");
      });
      it('should return an alert message if function parameter is false', function() {
        getSupervillains(false); // call getSuperheroes function with undefined as parameter
        expect(getSupervillains(false)).toBeFalsy();
        expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is false");
      });
    });
    describe("alert messages for function calls with wrong data type as parameter", function() {
      var myFunction = function(){return "this is a function"};
      var myNumber = 666.666;
      var myString = "fhdk65sksxl4lskasjiw9wsaZ";
      beforeEach(function(){
        spyOn(window, "alert"); // add spy on window object alert method before specs
      });
      it("should return an alert message if function parameter is undefined", function() {
        getSupervillains(undefined); // call getSupervillains function with undefined as parameter
        expect(getSupervillains(undefined)).not.toBeDefined();
        expect(getSupervillains(undefined)).toBeUndefined();
        expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is undefined");
      });
      it("should return an alert message if function parameter is a function", function() {
        getSupervillains(myFunction); // call getSupervillains function with function as parameter
        expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is a function");
      });
      it("should return an alert message if function parameter is a number", function() {
        getSupervillains(myNumber); // call getSupervillains function with number as parameter
        expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is a number");
      });
      it("should return an alert message if function parameter is a string", function() {
        getSupervillains(myString); // call getSupervillains function with string as parameter
        expect(myString).toMatch(/\w*/); // match any string containing alphanumeric characters using regular expression
        expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Error! Function parameter is a string");
      });
    });
  });

  describe("Supervillain Names and Catergory Scores", function() {
    it("Ultron's name should be 'Ultron'", function() {
      var ultron = new getSupervillain("ultron");
      expect(ultron.name).toBe("Ultron");
    });
    it("Red Skull's name should be 'Red Skull'", function() {
      var redskull= new getSupervillain("redskull");
      expect(redskull.name).toBe("Red Skull");
    });
    it("Loki's agility score should be 8", function() {
      var loki = new getSupervillain("loki");
      expect(loki.agility).toBe(8);
    });
    it("Ebony Maw's intelligence score should be 9", function() {
      var ebonymaw = new getSupervillain("ebonymaw");
      expect(ebonymaw.intelligence).toBe(9);
    });
    it("Dormannu's magic score should be 9", function(){
      var dormannu = new getSupervillain("dormannu");
      expect(dormannu.magic).toBe(9);
    });
    it("Mandarin's strength score should be 8", function() {
      var mandarin = new getSupervillain("mandarin");
      expect(mandarin.strength).toBe(8);
    });
    it("Thanos's speed score should be 9", function() {
      var thanos = new getSupervillain("thanos");
      expect(thanos.speed).toBe(9);
    });
    it("Vulture's technology score should be 8", function() {
      var vulture = new getSupervillain("vulture");
      expect(vulture.technology).toBe(8);
    });
  });

});