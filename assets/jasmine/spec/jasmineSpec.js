/*global jasmine expect spyOn marvelCharacters getSuperheroes getSuperhero getSupervillains getSupervillain getInfinityStone getHeroCatergoryScore getVillainCatergoryScore compareCatergoryScore  marvelData*/
describe("JASMINE TESTING FOR AVENGERS TOP TRUMPS", function() {
  describe("mock ajax request to marvel api for character data", function() {
    var myData = {"code": 200,
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
                      };
    beforeEach(function() {
      jasmine.Ajax.install();
    });
    afterEach(function() {
      jasmine.Ajax.uninstall();
    });
    it("should return object data for marvel character Thor", function () {
      var successfulAjaxRequest = jasmine.createSpy("success");
      var myURL = "https://gateway.marvel.com/v1/public/characters?name=Thor&apikey=e8e6c4f6d9f4f13655a0a25d4649f754";

      jasmine.Ajax.stubRequest(myURL).andReturn({
        "responseText": myData
      });

      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          successfulAjaxRequest(this.responseText);
        }
      };

      xhr.open("GET", myURL);
      xhr.send();
      expect(successfulAjaxRequest).toHaveBeenCalledWith(myData);
    });
    it("should return superhero name 'Thor' from marvel api data object", function() {
      expect(marvelData(myData, "Thor", 1)).toBe("Thor");
    });
    it("should return superhero description for 'Thor' from marvel api data object", function() {
      var descriptionOfThor = "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.";
      expect(marvelData(myData, "Thor", 2)).toBe(descriptionOfThor);
    });
    it("should return link name 'detail' from marvel api data object", function() {
      expect(marvelData(myData, "Thor", 3)).toBe("detail");
    });
    it("should return url address for link named 'detail' from marvel api data object", function() {
      expect(marvelData(myData, "Thor", 4)).toBe("http://marvel.com/characters/1009664/thor/featured?utm_campaign=apiRef&utm_source=e8e6c4f6d9f4f13655a0a25d4649f754");
    });
    it("should return link name 'wiki' from marvel api data object", function() {
      expect(marvelData(myData, "Thor", 5)).toBe("wiki");
    });
    it("should return url address for link named 'wiki' from marvel api data object", function() {
      expect(marvelData(myData, "Thor", 6)).toBe("http://marvel.com/universe/Thor_(Thor_Odinson)?utm_campaign=apiRef&utm_source=e8e6c4f6d9f4f13655a0a25d4649f754");
    });
    it("should return link name 'comiclink' from marvel api data object", function() {
      expect(marvelData(myData, "Thor", 7)).toBe("comiclink");
    });
    it("should return url address for link named 'comiclink' from marvel api data object", function() {
      expect(marvelData(myData, "Thor", 8)).toBe("http://marvel.com/comics/characters/1009664/thor?utm_campaign=apiRef&utm_source=e8e6c4f6d9f4f13655a0a25d4649f754");
    });
    it("should return url address for image of 'Thor' from marvel api data object", function() {
      expect(marvelData(myData, "Thor", 9)).toBe("https://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg");
    });
    it("should return HTML content for results modal containing data from marvel api data object", function() {
    var resultsModal = `<div><img src="https://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg" alt="Thor"></img>
                                <div><h2>Thor</h2></div>
                                <div><p>As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.</p></div>
                                <div><ul><li><a href="http://marvel.com/characters/1009664/thor/featured?utm_campaign=apiRef&utm_source=e8e6c4f6d9f4f13655a0a25d4649f754" target="_blank">detail</a></li><li><a href="http://marvel.com/universe/Thor_(Thor_Odinson)?utm_campaign=apiRef&utm_source=e8e6c4f6d9f4f13655a0a25d4649f754" target="_blank">wiki</a></li><li><a href="http://marvel.com/comics/characters/1009664/thor?utm_campaign=apiRef&utm_source=e8e6c4f6d9f4f13655a0a25d4649f754" target="_blank">comiclink</a></li></ul></div>
                                <button id="marvelDataButton" class="marvel-data-button" type="button">Return</button>`;
      expect(marvelData(myData, "Thor", 10)).toBe(resultsModal);
    });
  });

  describe("object containing list of superheroes", function() {
    it("should retrieve object containing list of superheroes and their catergory scores", function() {
      var superheroesList = {
        antman: {
          name: "Antman",
          agility: 10,
          intelligence: 6,
          magic: 1,
          strength: 8,
          speed: 6,
          technology: 9
        },
        blackwidow: {
          name: "Black Widow",
          agility: 9,
          intelligence: 8,
          magic: 1,
          strength: 4,
          speed: 7,
          technology: 6
        },
        captainamerica: {
          name: "Captain America",
          agility: 8,
          intelligence: 7,
          magic: 1,
          strength: 8,
          speed: 8,
          technology: 4
        },
        captainmarvel: {
          name: "Captain Marvel",
          agility: 7,
          intelligence: 5,
          magic: 8,
          strength: 9,
          speed: 10,
          technology: 8
        },
        deadpool: {
          name: "Deadpool",
          agility: 9,
          intelligence: 4,
          magic: 1,
          strength: 7,
          speed: 10,
          technology: 2
        },
        drstrange: {
          name: "Dr Strange",
          agility: 5,
          intelligence: 10,
          magic: 10,
          strength: 4,
          speed: 4,
          technology: 1
        },
        falcon: {
          name: "Falcon",
          agility: 5,
          intelligence: 7,
          magic: 1,
          strength: 6,
          speed: 8,
          technology: 8
        },
        hawkeye: {
          name: "Hawkeye",
          agility: 8,
          intelligence: 7,
          magic: 1,
          strength: 6,
          speed: 8,
          technology: 4
        },
        hulk: {
          name: "Hulk",
          agility: 4,
          intelligence: 2,
          magic: 1,
          strength: 10,
          speed: 8,
          technology: 1
        },
        ironman: {
          name: "Ironman",
          agility: 7,
          intelligence: 10,
          magic: 1,
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
          technology: 1
        },
        spiderman: {
          name: "Spiderman",
          agility: 10,
          intelligence: 7,
          magic: 1,
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
          magic: 1,
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
          technology: 1
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
    describe("alert messages for function calls with empty parameter", function() {
      beforeEach(function(){
        spyOn(window, "alert"); // add spy on window object alert method before specs
      });
      it('should return an alert message if function parameter is ""', function() {
        getSuperheroes(""); // call getSuperheroes function with undefined as parameter
        expect(getSuperheroes("")).toBe("");
        expect(getSuperheroes("")).toBeFalsy();
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
        magic: 1,
        strength: 9,
        speed: 4,
        technology: 9
      },
      drdoom: {
        name: "Dr Doom",
        agility: 7,
        intelligence: 10,
        magic: 1,
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
        technology: 1
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
        magic: 1,
        strength: 8,
        speed: 7,
        technology: 7
      },
      modok: {
        name: "M.O.D.O.K",
        agility: 5,
        intelligence: 9,
        magic: 1,
        strength: 2,
        speed: 6,
        technology: 10
      },
      redskull: {
        name: "Red Skull",
        agility: 7,
        intelligence: 8,
        magic: 1,
        strength: 8,
        speed: 8,
        technology: 7
      },
      thanos: {
        name: "Thanos",
        agility: 9,
        intelligence: 10,
        magic: 1,
        strength: 10,
        speed: 9,
        technology: 10
      },
      ultron: {
        name: "Ultron",
        agility: 8,
        intelligence: 9,
        magic: 1,
        strength: 9,
        speed: 9,
        technology: 9
      },
      venom: {
        name: "Venom",
        agility: 8,
        intelligence: 6,
        magic: 1,
        strength: 9,
        speed: 8,
        technology: 1
      },
      vulture: {
        name: "Vulture",
        agility: 7,
        intelligence: 7,
        magic: 1,
        strength: 7,
        speed: 8,
        technology: 8
      },
      whiplash: {
        name: "Whiplash",
        agility: 6,
        intelligence: 8,
        magic: 1,
        strength: 7,
        speed: 6,
        technology: 8
      },
      yondu: {
        name: "Yondu",
        agility: 6,
        intelligence: 7,
        magic: 1,
        strength: 6,
        speed: 6,
        technology: 9
      }
    }; // variable containing supervillains object
      var superVillains = getSupervillains(marvelCharacters); // getSupervillains function that retrieves list of supervillains from marvelCharacters object
      expect(superVillains).toEqual(supervillainsList);
    });
    it('should return "Evil Tom" if function parameter is an object with property name "supervillains"', function() {
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

  describe("function that uses score counter variable to return infinity stone name ", function() {
    it("should return string containing name of infinity stone aquired/lost/retained when result is calculated ", function() {
      var infinityStone;
      infinityStone = getInfinityStone(1);
      expect(infinityStone).toEqual("No Stone");
      infinityStone = getInfinityStone(2);
      expect(infinityStone).toEqual("Power Stone");
      infinityStone = getInfinityStone(4);
      expect(infinityStone).toEqual("Reality Stone");
      infinityStone = getInfinityStone(6);
      expect(infinityStone).toEqual("Time Stone");
    });
  });
  describe("alert message if heroScoreCounter parameter is empty, false, greater than 7 or not an integer", function() {
    beforeEach(function(){
      spyOn(window, "alert"); // add spy on window object alert method before specs
    });
    it('should return an alert message if function parameter is ""', function() {
      getInfinityStone(""); // call getInfinityStone function with "" as parameter
      expect(getInfinityStone("")).toBe("");
      expect(getInfinityStone("")).toBeFalsy();
      expect(window.alert).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith("Error! heroScoreCounter variable is empty");
    });
    it('should return an alert message if function parameter is 0', function() {
      getInfinityStone(0); // call getInfinityStone function with 0 as parameter
      expect(getInfinityStone(0)).toBe(0);
      expect(getInfinityStone(0)).toBeFalsy();
      expect(window.alert).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith("Error! heroScoreCounter variable is empty");
    });
    it('should return an alert message if function parameter is "0"', function() {
      getInfinityStone("0"); // call getInfinityStone function with "0" as parameter
      expect(getInfinityStone("0")).toBe("0");
      expect(getInfinityStone("0")).not.toBeFalsy();
      expect(window.alert).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith("Error! heroScoreCounter variable is empty");
    });
    it('should return an alert message if function parameter is null', function() {
      getInfinityStone(null); // call getInfinityStone function with null as parameter
      expect(getInfinityStone(null)).toBe(null);
      expect(getInfinityStone(null)).toBeFalsy();
      expect(window.alert).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith("Error! heroScoreCounter variable is null");
    });
    it('should return an alert message if function parameter is false', function() {
      getInfinityStone(false); // call getInfinityStone function with false as parameter
      expect(getInfinityStone(false)).toBe(false);
      expect(getInfinityStone(false)).toBeFalsy();
      expect(window.alert).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith("Error! heroScoreCounter variable is false");
    });
    it('should return an alert message if function parameter is undefined', function() {
      getInfinityStone(undefined); // call getInfinityStone function with undefined as parameter
      expect(getInfinityStone(undefined)).toBe(undefined);
      expect(getInfinityStone(undefined)).toBeFalsy();
      expect(window.alert).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith("Error! heroScoreCounter variable is undefined");
    });
    it('should return an alert message if function parameter is > 7', function() {
      getInfinityStone(8); // call getInfinityStone function with number greater than 7
      expect(window.alert).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith("Error! heroScoreCounter variable is greater than 7");
    });
    it('should return an alert message if function parameter is an object rather than an integer', function() {
      var myObject = {superheroes: "Tom"};
      getInfinityStone(myObject); // call getInfinityStone function with object as parameter
      expect(window.alert).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith("Error! heroScoreCounter variable is not an integer");
    });
    it('should return an alert message if function parameter is a function rather than an integer', function() {
      var myFunction = function(){return "this is a function"};
      getInfinityStone(myFunction); // call getInfinityStone function with function as parameter
      expect(window.alert).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith("Error! heroScoreCounter variable is not an integer");
    });
    it('should return an alert message if function parameter is a string rather than an integer', function() {
      var myString = "fhdk65sksxl4lskasjiw9wsaZ";
      getInfinityStone(myString); // call getInfinityStone function with string as parameter
      expect(window.alert).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith("Error! heroScoreCounter variable is not an integer");
    });
    it('should return an alert message if function parameter is a decimal rather than an integer', function() {
      var myDecimal = 3.333;
      getInfinityStone(myDecimal); // call getInfinityStone function with decimal as parameter
      expect(window.alert).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith("Error! heroScoreCounter variable is not an integer");
    });
  });

  describe("getHeroCatergoryScore function returns hero catergory score and index no. from selected catergory", function() {
    it("should return Dr Stranges magic score of 10 and index number of 2", function(){
      expect(getHeroCatergoryScore("drstrange").heroCatergoryScore).toEqual(10); // index number of magic catergory in Dr Strange nodelist
      expect(getHeroCatergoryScore("drstrange").selectedCatergoryIndex).toEqual(2); // index number of magic catergory in Dr Strange nodelist
    });
    it("should return Ironmans technology score of 10 and index number of 5", function(){
      expect(getHeroCatergoryScore("ironman").heroCatergoryScore).toEqual(10); // technology catergory score for Ironman extracted from nodelist
      expect(getHeroCatergoryScore("ironman").selectedCatergoryIndex).toEqual(5); // index number of technology catergory in Ironman nodelist
    });
    it("should return Hulks intelligence score of 2 and index number of 1", function(){
      expect(getHeroCatergoryScore("hulk").heroCatergoryScore).toEqual(2); // intelligence catergory score for Hulk extracted from nodelist
      expect(getHeroCatergoryScore("hulk").selectedCatergoryIndex).toEqual(1); // index number of intelligence catergory in Hulk nodelist
    });
    it("should return Captain Marvels agility score of 7 and index number of 0", function(){
      expect(getHeroCatergoryScore("captainmarvel").heroCatergoryScore).toEqual(7); // agility catergory score for Captain Marvel extracted from nodelist
      expect(getHeroCatergoryScore("captainmarvel").selectedCatergoryIndex).toEqual(0); // index number of agility catergory in Captain Marvel nodelist
    });
    it("should return Hawkeyes magic score of 1 and index number of 2", function(){
      expect(getHeroCatergoryScore("hawkeye").heroCatergoryScore).toEqual(1); // magic catergory score for Hawkeye extracted from nodelist
      expect(getHeroCatergoryScore("hawkeye").selectedCatergoryIndex).toEqual(2); // index number of magic catergory in Hawkeye nodelist
    });
    it("should return Antmans speed score of 6 and index number of 4", function(){
      expect(getHeroCatergoryScore("antman").heroCatergoryScore).toEqual(6); // speed catergory score for Antman extracted from nodelist
      expect(getHeroCatergoryScore("antman").selectedCatergoryIndex).toEqual(4);  // index number of speed catergory in Antman nodelist
    });
  });

  describe("getVillainCatergoryScore function returns hero and villain catergory score and index no. from selected catergory", function() {
    it("should return Dr Stranges magic score of 10, index number of 2 and Ultrons magic score of 1", function(){
      var drstrange = getHeroCatergoryScore("drstrange");
      expect(getVillainCatergoryScore(drstrange, "ultron").heroCatergoryScore).toEqual(10); // magic catergory score for Dr Strange extracted from nodelist
      expect(getVillainCatergoryScore(drstrange, "ultron").selectedCatergoryIndex).toEqual(2); // index number of magic catergory in Dr Strange nodelist
      expect(getVillainCatergoryScore(drstrange, "ultron").villainCatergoryScore).toEqual(1); // magic catergory score for Ultron extracted from nodelist
    });
    it("should return Ironmans technology score of 10, index number of 5 and Ebony Maws technology score of 8", function(){
      var ironman = getHeroCatergoryScore("ironman");
      expect(getVillainCatergoryScore(ironman, "ebonymaw").heroCatergoryScore).toEqual(10); // technology catergory score for Ironman extracted from nodelist
      expect(getVillainCatergoryScore(ironman, "ebonymaw").selectedCatergoryIndex).toEqual(5); // index number of technology catergory in Ironman nodelist
      expect(getVillainCatergoryScore(ironman, "ebonymaw").villainCatergoryScore).toEqual(8); // technology catergory score for Ebony Maw extracted from nodelist
    });
    it("should return Hulks intelligence score of 2, index number of 1 and Mandarins intelligence score of 8", function(){
      var hulk = getHeroCatergoryScore("hulk");
      expect(getVillainCatergoryScore(hulk, "mandarin").heroCatergoryScore).toEqual(2); // intelligence catergory score for Hulk extracted from nodelist
      expect(getVillainCatergoryScore(hulk, "mandarin").selectedCatergoryIndex).toEqual(1); // index number of intelligence catergory in Hulk nodelist
      expect(getVillainCatergoryScore(hulk, "mandarin").villainCatergoryScore).toEqual(8); // intelligence catergory score for Mandarin extracted from nodelist
    });
    it("should return Captain Marvels agility score of 7, index number of 0 and Lokis agility score of 8", function(){
      var captainmarvel = getHeroCatergoryScore("captainmarvel");
      expect(getVillainCatergoryScore(captainmarvel, "loki").heroCatergoryScore).toEqual(7); // agility catergory score for Captain Marvel extracted from nodelist
      expect(getVillainCatergoryScore(captainmarvel, "loki").selectedCatergoryIndex).toEqual(0); // index number of agility catergory in Captain Marvel nodelist
      expect(getVillainCatergoryScore(captainmarvel, "loki").villainCatergoryScore).toEqual(8); // agility catergory score for Loki extracted from nodelist
    });
    it("should return Hawkeyes magic score of 1, index number of 2 and Thanos magic score of 1", function(){
      var hawkeye = getHeroCatergoryScore("hawkeye");
      expect(getVillainCatergoryScore(hawkeye, "thanos").heroCatergoryScore).toEqual(1); // magic catergory score for Hawkeye extracted from nodelist
      expect(getVillainCatergoryScore(hawkeye, "thanos").selectedCatergoryIndex).toEqual(2); // index number of magic catergory in Hawkeye nodelist
      expect(getVillainCatergoryScore(hawkeye, "thanos").villainCatergoryScore).toEqual(1); // magic catergory score for Thanos extracted from nodelist
    });
    it("should return Antmans speed score of 6, index number of 4 and Magnetos speed score of 6", function(){
      var antman = getHeroCatergoryScore("antman");
      expect(getVillainCatergoryScore(antman, "magneto").heroCatergoryScore).toEqual(6); // speed catergory score for Antman extracted from nodelist
      expect(getVillainCatergoryScore(antman, "magneto").selectedCatergoryIndex).toEqual(4); // index number of speed catergory in Antman nodelist
      expect(getVillainCatergoryScore(antman, "magneto").villainCatergoryScore).toEqual(6); // speed catergory score for Magneto extracted from nodelist
    });
  });

  describe("compareCatergoryScore function that compares selected hero and villain catergory score then returns result", function() {
    it("Dr Stranges magic score of 10 beats Ultrons magic score of 1", function(){
      var drstrange = getHeroCatergoryScore("drstrange");
      var ultron = getVillainCatergoryScore(drstrange, "ultron");
      expect(compareCatergoryScore(ultron, 1)).toEqual("WIN"); // Dr Stranges magic catergory beats Ultrons so result is "WIN"
      expect(compareCatergoryScore(ultron, 7)).toEqual("COMPLETE"); // 7th win in a row so result is "COMPLETE"
    });
    it("Ironmans technology score of 10 beats Ebony Maws technology score of 8", function(){
      var ironman = getHeroCatergoryScore("ironman");
      var ebonymaw = getVillainCatergoryScore(ironman, "ebonymaw");
      expect(compareCatergoryScore(ebonymaw, 5)).toEqual("WIN"); // Ironman technology catergory beats Ebony Maw so result is "WIN"
      expect(compareCatergoryScore(ebonymaw, 7)).toEqual("COMPLETE"); // 7th win in a row so result is "COMPLETE"
    });
    it("Hulks intelligence score of 2 loses to Mandarins intelligence score of 8", function(){
      var hulk = getHeroCatergoryScore("hulk");
      var mandarin = getVillainCatergoryScore(hulk, "mandarin");
      expect(compareCatergoryScore(mandarin, 3)).toEqual("LOSE"); // Hulk intelligence catergory is less than Mandarin so result is "LOSE"
      expect(compareCatergoryScore(mandarin, 0)).toEqual("FIRST-RESULT-LOSE"); // 1st result is a loss so result is "FIRST-RESULT-LOSE"
    });
    it("Captain Marvels agility score of 7 loses to Lokis agility score of 8", function(){
      var captainmarvel = getHeroCatergoryScore("captainmarvel");
      var loki = getVillainCatergoryScore(captainmarvel, "loki");
      expect(compareCatergoryScore(loki, 2)).toEqual("LOSE"); // Captain Marvel agility catergory is less than Loki so result is "LOSE"
      expect(compareCatergoryScore(loki, 0)).toEqual("FIRST-RESULT-LOSE"); // 1st result is a loss so result is "FIRST-RESULT-LOSE"
    });
    it("Hawkeyes magic score of 1 draws with Thanos magic score of 1", function(){
      var hawkeye = getHeroCatergoryScore("hawkeye");
      var thanos = getVillainCatergoryScore(hawkeye, "thanos");
      expect(compareCatergoryScore(thanos, 4)).toEqual("DRAW"); // Hawkeye magic catergory draws with Thanos so result is "DRAW"
      expect(compareCatergoryScore(thanos, 1)).toEqual("FIRST-RESULT-DRAW"); // 1st result is a draw so result is "FIRST-RESULT-DRAW"
    });
    it("Antmans speed score of 6 draws with Magnetos speed score of 6", function(){
      var antman = getHeroCatergoryScore("antman");
      var magneto = getVillainCatergoryScore(antman, "magneto");
      expect(compareCatergoryScore(magneto, 6)).toEqual("DRAW"); // Antman speed catergory is a draw with Magneto so result is "DRAW"
      expect(compareCatergoryScore(magneto, 1)).toEqual("FIRST-RESULT-DRAW"); // 1st result is a draw so result is "FIRST-RESULT-DRAW"
    });
  });
});
