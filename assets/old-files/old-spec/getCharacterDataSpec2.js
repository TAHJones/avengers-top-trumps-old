describe("getCharacterData", function(){
    /*beforeAll(function(){
      spyOn(window, "alert");
    });*/

    it("should return a readyStateChange of 4 and status of 200", function() {
        expect(getCharacterData("assets/data/characters.json")).toBe("scarletwitch");
    });

    /*it("should return an error if readyStateChange doesn't equal 4 and HTML status equals 200", function(){
      spyOn(window, "alert");
      getCharacterData("myString");
      expect(window.alert).toHaveBeenCalledWith("Error! AJAX request failed");
    });*/

    /*it("should return an error if variable 'superheroList' doesn't contain array", function(){
      spyOn(window, "alert");
      showCharacterData("myString");
      expect(window.alert).toHaveBeenCalledWith("Error! Doesn't contain array");
    });*/

    /*it("should return an error if variable 'superheroList' is empty", function(){
      spyOn(window, "alert");
      showCharacterData(null);
      expect(window.alert).toHaveBeenCalledWith("Error! Doesn't contain array")
    });*/
});