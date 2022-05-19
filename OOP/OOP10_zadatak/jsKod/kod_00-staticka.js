class Postavke {

  constructor() {
    if (this instanceof Postavke) {
      throw new Error("Statička klasa nema instance!");
    }
  }

  /** @type {Racoon} */
  static racoon;

  /** @type {Dinosaur} */
  static racoon;

  /** @type {Coin} */
  static coin;

  /** @type {Gljiva} */
  static gljiva;

  static random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  static dno = 9 * 64;

}