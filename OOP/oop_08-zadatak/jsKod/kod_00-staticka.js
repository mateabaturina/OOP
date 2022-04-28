class Postavke {

  constructor() {
    if (this instanceof Postavke) {
      throw "Statička klasa nema instance!";
    }
  }

  //dinosaur, coin, gljiva
  //random(min, max)

  static dinosaur;

  static coin;

  static gljiva;
}