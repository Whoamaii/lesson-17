const Human = function (name, gender) {
  this.name = name;
  this.gender = gender;

  this.getInfo = function () {
    return this.name + " is a " + this.gender;
  };
};

const human1 = new Human("Vasil", "Male");
const human2 = new Human("Petro", "Male");

console.log(human1.getInfo());

const Flat = function () {
  this.inhabitants = [];
  this.addToFlat = function (inhabitant) {
    if (this.inhabitants) {
      return this.inhabitants.push(inhabitant);
    }
    return this.inhabitants;
  };
};

const habitant1 = new Flat();
const habitant2 = new Flat();
habitant1.addToFlat(human1);
habitant2.addToFlat(human2);
console.log(habitant1);
console.log(habitant2);

const Building = function (flatsValue) {
  this.flats = [];
  this.flatsValue = flatsValue;
  this.addToBuilding = function (flat) {
    if (this.flats.length < this.flatsValue) {
      return this.flats.push(flat);
    } else {
      console.log("To many flats!");
    }
  };
};

const blockOFflats = new Building(1);
blockOFflats.addToBuilding(habitant1);
blockOFflats.addToBuilding(habitant2);
console.dir(blockOFflats, { depth: 8 });
