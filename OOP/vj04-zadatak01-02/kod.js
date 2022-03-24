//postavljanje sučelja:
let btn = document.getElementById("btnStart"); //dohvati element button
btn.addEventListener("click", start); // dodijeli mu funkciju za klik događaj

let btnCat = document.getElementById("btnCat");
let btnDog = document.getElementById("btnDog");
btnCat.addEventListener("click", pomicanjeMacke);
btnDog.addEventListener("click", pomicanjePsa);

// konstante
const DISPLAY = new Display("game");
const GAME = new Game();

// objekt u kojeg smo spremili slike
let slike = {
  cat: new Slika("slike/cat.png"),
  dog: new Slika("slike/dog.png")
}

// globalne varijable
let cat = null;
let dog = null;

function setup() {
  GAME.clearSprites();

  // dodavanje likova
  cat = new Sprite(slike.cat, 0, 0, 50, 50);
  dog = new Sprite(slike.dog, 0, 60, 50, 50);

  GAME.addSprite(cat);
  GAME.addSprite(dog);

  window.addEventListener("keydown", provjeriZnak);

}

// petlja igre - za crtanje
function gameLoop(time) {
  // console.log(time);

  DISPLAY.drawAll(GAME.sprites);

  window.requestAnimationFrame(gameLoop);
}

function start() {
  setup();
  gameLoop();
}

function pomicanjeMacke() {
  cat.move(50);
}

function pomicanjePsa() {
  dog.move(50);
}

function provjeriZnak(event) {
  //console.log(event);
  if (event.key == 'a')
    cat.move(50, "lijevo");
  if (event.key == 'd')
    cat.move(50, "desno");
  if (event.key == 'w')
    cat.move(50, "gore");
  if (event.key == 's')
    cat.move(50, "dolje");
}

