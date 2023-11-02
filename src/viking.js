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

const soldier1 = new Soldier(55, 70);
console.log(soldier1.receiveDamage(20));

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in the act of combat`;
    }
  }
  battleCry() {
    return `${this.name} "Owns you all"`;
  }
}

let viking = new Viking('Odin', 50, 60);
console.log(viking.battleCry());

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage.`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

let saxon = new Saxon(50, 60);
console.log(saxon.receiveDamage(20));

// War
class War {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
  module.exports = { Soldier, Viking, Saxon, War };
}
