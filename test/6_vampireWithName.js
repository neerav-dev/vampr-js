const chai = require('chai');
const expect = chai.expect;

const Vampire = require('../vampire.js');

describe("Vampire", function() {

  let rootVampire;
  beforeEach( function() {
    rootVampire = new Vampire("root");
  });

  describe("vampireWithName", function() {

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

    it("should be the root for root", () => {
      expect(rootVampire.vampireWithName('root')).to.equal(rootVampire);
    })

    it("should be offspring8 for 'h'", () => {
      expect(rootVampire.vampireWithName('h')).to.equal(offspring8);
    })

    it("should be offspring7 for 'g'", () => {
      expect(rootVampire.vampireWithName('g')).to.equal(offspring7);
    })

    it("should be '' for ''", () => {
      expect(rootVampire.vampireWithName('')).to.equal(null);
    })
    
  });
});
