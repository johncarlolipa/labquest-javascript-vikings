// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    console.log(`${this.strength}`);
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

const soldier1 = new Soldier(55, 70)
console.log(soldier1.receiveDamage());

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
