//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion

class Animal extends Sprite {
  constructor(x, y, layer) {

    super(x + 4, y + 4, 64 - 8, 64 - 8);

    if (this.constructor == Animal) {
      throw new Error("Animal se ne može instacirati");
    }

    this.frame_sets = {};

    this.layer = layer;
    this.visible = true;

  }

  jump(h = 50) {

    if (!this.jumping) {

      this.jumping = true;
      this.velocity_y -= h;

    }
  }

}

class Racoon extends Animal {
  constructor(layer) {
    super(0, 0, layer);

    this.frame_sets = {
      "up": [1],
      "walk-up": [1],
      "right": [1],
      "walk-right": [2, 3, 4, 5, 6, 7, 8],
      "down": [1],
      "walk-down": [1],
      "left": [11],
      "walk-left": [12, 13, 14, 15, 16, 17, 18]
    };

    this.okvir = true;
    this.bodovi = 0;
    this._zivoti = 3;
  }

  get zivoti() {
    return this._zivoti;
  }

  set zivoti(v) {
    if (v <= 0) {
      console.log("GAME OVER: " + this.bodovi);
      btnStop_click();
    }

    else if (v > 4) {
      this._zivoti = 4;
    }

    else {
      this._zivoti = v;
    }
  }

  moveRight() {
    this.direction = 90;
    this.velocity_x += 1.5;
  }

  moveLeft() {
    this.direction = 270;
    this.velocity_x -= 1.5;
  }

  updatePosition() {
    super.updatePosition(2, 0.8);

    if (this.y >= Postavke.dno) {
      this.start();
      this.zivoti--;
    }
  }

  start() {
    this.x = 0;
    this.y = 6 * 64;
  }

  collect(c) {

    if (c == Postavke.coin) {
      this.bodovi += c.value;
      c.start();

      if (this.bodovi % 3 == 0) {
        Postavke.gljiva.start;
      }

      GameSettings.output("Bodovi: " + this.bodovi, true);
    }

    else {
      this._zivoti += c.value;
      GameSettings.output("Životi: " + this._zivoti, true);
    }
    
  }

}

class Collectable extends Item {

  constructor(layer) {
    super(layer);

    if (this.constructor == Collectable) {
      throw new Error("Collectable se ne može instacirati");
    }

  }

  getType() {
    return this.constructor.name;
  }

}

class Coin extends Collectable {

  constructor(layer) {
    super(layer);
    this.visible = true;
    this.value = 10;
  }

  start() {
    this.x = Postavke.random(0, 19 * 64);
    this.y = 0;
  }
}

class Gljiva extends Collectable {

  constructor(layer) {
    super(layer);
    this.visible = true;
    this.value = 1;
  }

  start() {
    this.x = Postavke.random(0, 19 * 64);
    this.y = 0;
  }
}

class Dinosaur extends Animal {
  constructor(layer) {
    super(10 * 64, 0, layer);

    this.pozicije = [[10, 6], [11, 6], [12, 6], [13, 6]];

    while (this.visible == true) {
      for (let step = 0; step < 4; step++) {
        let poz = this.pozicije[step];
        this.x = poz[0] * 64;
        this.y = poz[1] * 64;
      }
    }
    

    this.frame_sets = {
      "up": [1],
      "walk-up": [1],
      "right": [1],
      "walk-right": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      "down": [1],
      "walk-down": [1],
      "left": [21],
      "walk-left": [22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    };

    this.okvir = true;
  }

  moveRight() {
    this.direction = 90;
    this.velocity_x += 1.5;
  }

  moveLeft() {
    this.direction = 270;
    this.velocity_x -= 1.5;
  }
}