const chai = require('chai');
const expect = chai.expect;

const Vampire = require('../vampire.js');

describe("Vampire", function() {

  let rootVampire;
  beforeEach(function() {
    rootVampire = new Vampire("root", 1800);
  });

  describe("allMillennialVampires", function() {

    let offspring1, offspring2, offspring3, offspring4, offspring5, offspring6, offspring7, offspring8;
    beforeEach(() => {
      offspring1 = new Vampire("a",1820);
      offspring2 = new Vampire("b",1850);
      offspring3 = new Vampire("c",1890);
      offspring4 = new Vampire("d", 1970);
      offspring5 = new Vampire("e", 2000);
      offspring6 = new Vampire("f", 2005);
      offspring7 = new Vampire("g", 2010);
      offspring8 = new Vampire("h", 2000);

      rootVampire.addOffspring(offspring1);
      rootVampire.addOffspring(offspring2);
      rootVampire.addOffspring(offspring3);
      offspring3.addOffspring(offspring4);
      offspring3.addOffspring(offspring5);
      offspring5.addOffspring(offspring6);
      offspring6.addOffspring(offspring7);
      offspring2.addOffspring(offspring8);
    });

    it("should be the [offspring8] for offspring2", () => {
      expect(offspring2.allMillennialVampires).to.deep.equal([offspring8]);
    });

    it("should be the [offspring8, offspring5, offspring6, offspring7] for rootVampire", () => {
      expect(rootVampire.allMillennialVampires).to.deep.equal([offspring8, offspring5, offspring6, offspring7]);
    });

    it("should be the [] for offspring1", () => {
      expect(offspring1.allMillennialVampires).to.deep.equal([]);
    });
  });
});
