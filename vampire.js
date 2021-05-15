class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampire = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampire++;
    }

    return numberOfVampire;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    if (this === vampire) {
      return this;
    }

    if (this.creator === null) {
      return this;
    } else if (vampire.creator === null) {
      return vampire;
    } else if (this.numberOfVampiresFromOriginal > vampire.numberOfVampiresFromOriginal) {
      return vampire;
    } else if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return this;
    } else if (this.numberOfVampiresFromOriginal === vampire.numberOfVampiresFromOriginal) {
      return this.creator;
    } else {
      return this.closestCommonAncestor(vampire);
    }
  }

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    let vampire = null;

    if (this.name === name) {
      return this;
    }

    for (const vamp of this.offspring) {
      if (!vampire) {
        vampire = (vamp.vampireWithName(name));
      }
    }
    
    return vampire;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let totalDescendent = 0;

    
    for (const vamp of this.offspring) {
      totalDescendent += 1;
      
      const offSpringTotalDescendent = vamp.totalDescendents;
      
      totalDescendent += offSpringTotalDescendent;
    }

    return totalDescendent;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let vampires = [];

    if (this.yearConverted > 1980) {
      vampires.push(this);
    }

    for (const vamp of this.offspring) {
      const vamps = vamp.allMillennialVampires;
      vampires = vampires.concat(vamps);
    }

    return vampires;
  }
}

module.exports = Vampire;

