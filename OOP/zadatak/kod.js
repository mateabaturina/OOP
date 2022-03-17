//postavljanje sučelja:
let btn = document.getElementById("btnStart"); //dohvati element button
btn.addEventListener("click", start); // dodijeli mu funkciju za klik događaj

// napravi novi objekt tipa Display
const display = new Display("game");

// objekt u kojeg smo spremili slike
let slike = {
  cat: new Slika("slike/cat.png"),
  dog: new Slika("slike/dog.png")
}

// globalne varijable
let cat = null;
let dog = null;

function setup() {

  // dodavanje likova
  cat = new Sprite(slike.cat, 0, 0, 200, 200);
  dog = new Sprite(slike.dog, 300, 300, 50, 50);

}

// petlja igre - za crtanje
function gameLoop(time) {
  // console.log(time);

  display.draw(cat);
  display.draw(dog);

  window.requestAnimationFrame(gameLoop);
}

function start() {
  setup();
  gameLoop();
}