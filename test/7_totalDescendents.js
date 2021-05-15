const chai = require('chai');
const expect = chai.expect;

const Vampire = require('../vampire.js');

describe("Vampire", function() {

  let rootVampire;
  beforeEach(function() {
    rootVampire = new Vampire("root");
  });

  describe("totalDescendents", function() {

    let offspring1, offspring2, offspring3, offspring4, offspring5, offspring6, offspring7, offspring8;
    beforeEach(() => {
      offspring1 = new Vampire("a");
      offspring2 = new Vampire("b");
      offspring3 = new Vampire("c");
      offspring4 = new Vampire("d");
      offspring5 = new Vampire("e");
      offspring6 = new Vampire("f");
      offspring7 = new Vampire("g");
      offspring8 = new Vampire("h");

      rootVampire.addOffspring(offspring1);
      rootVampire.addOffspring(offspring2);
      rootVampire.addOffspring(offspring3);
      offspring3.addOffspring(offspring4);
      offspring3.addOffspring(offspring5);
      offspring5.addOffspring(offspring6);
      offspring6.addOffspring(offspring7);
      offspring2.addOffspring(offspring8);
    });

    it("should be the 8 vampires for root", () => {
      expect(rootVampire.totalDescendents).to.equal(8);
    });

    it("should be the 0 vampires for offspring8", () => {
      expect(offspring8.totalDescendents).to.equal(0);
    });

    it("should be the 4 vampires for offspring3", () => {
      expect(offspring3.totalDescendents).to.equal(4);
    });
    
  });
});
