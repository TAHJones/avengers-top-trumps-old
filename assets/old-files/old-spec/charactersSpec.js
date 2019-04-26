describe("Avengers Top Trumps", function(){
  /*beforeAll(function() {
    DOMCustomMatchers is the global window object got from dom-matchers.js
    jasmine.addMatchers(DOMCustomMatchers);
    this.newDiv = document.createElement('DIV');
  });*/

  describe("getCharacterData", function(){
    beforeAll(function(){
      spyOn(window, "alert");
    });

    it("should return an error if readyStateChange doesn't equal 4 and HTML status equals 200", function(){
      // spyOn(window, "alert");
      showSlides("myString");
      expect(window.alert).toHaveBeenCalledWith("Error! AJAX request failed");
    });

    it("should return an error if variable 'superheroList' doesn't contain array", function(){
      // spyOn(window, "alert");
      showCharacterData("myString");
      expect(window.alert).toHaveBeenCalledWith("Error! Doesn't contain array");
    });

    it("should return an error if variable 'superheroList' is empty", function(){
      // spyOn(window, "alert");
      showCharacterData(null);
      expect(window.alert).toHaveBeenCalledWith("Error! Doesn't contain array")
    });
  });

  /*describe("showCharacterData", function() {
  });*/

  // describe("showSlides", function(){
    //DOMCustomMatchers is the global window object got from dom-matchers.js
    /*beforeAll(function() {
      jasmine.addMatchers(DOMCustomMatchers);
      this.newDiv = document.createElement('DIV');
    });*/

    /*it("should return an error if we don't supply a number parameter", function() {
      spyOn(window, "alert");
      showSlides("myString");
      expect(window.alert).toHaveBeenCalledWith("Error!");
    });*/

    /*it("should be a number greater than 0", function() {
      expect(1).toBeGreaterThan(0);
    });*/

    /*it("should be a number less than 16", function() {
      expect(15).toBeLessThan(16);
    });*/
  // });

});