class Slika {
  constructor(path) {
    this.path = path; //putanja do slije

    this.image = new Image(); //novi Image objekt
    this.image.src = path; //spremanje putanje

    this.loaded = false; // informacija o tome je li slika učitana

    // ovo za sad ne morate znati
    // izvršava se tek kad se slika učitat do kraja (onload je zadana metoda koja pripada elementu image)
    this.image.onload = () => {
      this.loaded = true;
      console.log(this.path + " loaded"); // ispisuje informaciju na konzolu
    }
  }
}

class Display {
  constructor(id) {
    this.canvas = document.getElementById(id);
    this.context = this.canvas.getContext("2d");
  }

  drawAll(sprites) {
    this.context.fillStyle = "#f2f2f2";
    this.context.fillRect(0, 0, 640, 480);
    for (let i = 0; i < sprites.length; i++) {
      const s = sprites[i];
      this.draw(s);
    }
  }

  draw(sprite) {
    if (sprite.slika.loaded == false) throw "Slika nije učitana!";

    // treba obojati pozadinu da ne ostanu tragovi lika

    this.context.drawImage(sprite.slika.image, sprite.x, sprite.y, sprite.width, sprite.height);
  }
}


class Sprite {
  constructor(slika, x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;

    this.slika = slika;
  }

  moveRight(k) {
    this.x += k;
    if (this.x + this.width > 640)
      this.x = 640 - this.width;
  }

  moveLeft(k) {
    this.x -= k;
    if (this.x < 0)
      this.x = 0;
  }

  moveUp(k) {
    this.y -= k;
  }

  moveDown(k) {
    this.y += k;
  }

  move(k, smjer = "desno") {
    if (smjer == "desno") {
      this.moveRight(k);
    }
    else if (smjer == "lijevo") {
      this.moveLeft(k);
    }
    else if (smjer == "gore") {
      this.moveUp(k);
    }
    else if (smjer == "dolje") {
      this.moveDown(k);
    }
  }

}

// dodajmo klasu Game koja će pratiti stanje igre

class Game {
  constructor() {
    //svi likovi koji se nalaze u igri
    this.sprites = [];
  }

  addSprite(s) {
    this.sprites.push(s);
  }

  clearSprites() {
    this.sprites = [];
  }

}