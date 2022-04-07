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

    this.frame_sets = {
      "up": [1],
      "walk-up": [1],
      "right": [1],
      "walk-right": [11, 12, 13, 14, 15, 16, 17, 18, 19],
      "down": [1],
      "walk-down": [1],
      "left": [2],
      "walk-left": [21, 22, 23, 24, 25, 26, 27, 28, 29]
    };

    this.layer = layer;
    this.visible = true;
    // this.okvir = true;

  }

  touching(sprite) {
    if (sprite.visible == false) return false;

    let a = {
      left: this.x,
      right: this.x + this.width,
      top: this.y,
      bottom: this.y + this.height
    };

    let b = {
      left: sprite.x,
      right: sprite.x + sprite.width,
      top: sprite.y,
      bottom: sprite.y + sprite.height
    };

    let result = a.left <= b.right &&
      b.left <= a.right &&
      a.top <= b.bottom &&
      b.top <= a.bottom;

    return result;
  }

  // prebacili smo jump u Animal tako da sve životinje mogu skakati
  jump(h = 50) {

    if (!this.jumping) {

      this.jumping = true;
      this.velocity_y -= h;

    }
  }
}

class Cat extends Animal {
  constructor(layer) {
    super(0, 0, layer);

    this.direction = 90;
  }

}

class Racoon extends Animal {
  constructor(x, y, layer) {
    super(x, y, layer);

    // rakun ima drugačije sličice
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

    this.layer = layer;
    this.visible = true;
    this.okvir = true;
  }

  //moveRight() - overload
  //može biti bez parametara ili primiti brzinu

  moveRight() {
    let a = arguments.length;
    switch(a) {
      case 0:
        super.moveRight();
        break;
      case 1:
        let v = arguments[0];
        this.direction = 90;
        this.velocity_x += v;
        break;
      default:
        break;
    }
  }

  moveLeft() {
    let a = arguments.length;
    switch(a) {
      case 0:
        super.moveLeft();
        break;
      case 1:
        let v = arguments[0];
        this.direction = 270;
        this.velocity_x -= v;
        break;
      default:
        break;
    }
  }

  // jump()
  // - prima jedan argument
  // - ako je voda, ne može skakati - ispisati poruku na konzolu

  jump() {
    let a = arguments.length;
    if (a == 1) a = typeof arguments[0];

    switch(a) {
      case "number":
        let h = arguments[0];
        super.jump(h);
        break;
      case "string":
        let vrsta = arguments[0];
        if (vrsta == "voda") {
          console.log("Nemogu skakati");
        }
        else{
          super.jump();
        }
        break;
      default:
        break;
    }
  }

}