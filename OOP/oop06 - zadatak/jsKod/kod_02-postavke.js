//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion
/// <reference path="kod_01-likovi.js"/>

// što će se pokrenuti kad se klikne button Setup:
let btnSetupGame = document.getElementById("btnSetupGame");
btnSetupGame.addEventListener("click", setup);

function setup() {

  GAME.clearSprites();

  let odabrana = GAME.activeWorldMap.name;
  GameSettings.output(odabrana);

  switch (odabrana) {
    case "catDog":
      setupLevel();
      break;
    case "vjezbe6":
      setupVjezbe6();
      break;

    default:
      throw "Ne postoji setup za " + GAME.activeWorldMap.name;
      break;
  }

  render_main();
}

/* LEVELS */

function setupLevel() {

  let catLayer = GAME.getSpriteLayer("macka");
  //let cat = new Animal(0, 0, catLayer);
  let cat = new Cat(catLayer);
  //cat.direction = 90;

  let dogLayer = GAME.getSpriteLayer("pas");
  let dog = new Animal(9 * 64, 0, dogLayer);
  dog.direction = 270;

  GAME.addSprite(cat);
  GAME.addSprite(dog);

  // ako se pogriješi naziv layer-a, ignorirat će
  GAME.activeWorldMap.setCollisions("platforme");

}


function setupVjezbe6() {
  // dohvatiti sprite layer racoon
  // instancirati novi objekt
  // dodati ga u igru

  let rLayer = GAME.getSpriteLayer("racoon");
  let r = new Racoon(0, 0,rLayer);
  GAME.addSprite(r);

  GAME.activeWorldMap.setCollisions("platforme");

  let itemLayer = GAME.getSpriteLayer("fast");
  let m = new Item(itemLayer);
  GAME.addSprite(m);
  m.visible = true;

  let vodaL = GAME.getSpriteLayer("voda");
  let voda = new Item(vodaL);
  GAME.addSprite(voda);
  voda.visible = true;

  let gljivaL = GAME.getSpriteLayer("gljiva");
  let gljiva = new Item(gljivaL);
  GAME.addSprite(gljiva); 
  gljiva.visible = true;

  let strelicaL = GAME.getSpriteLayer("strelica");
  let strelica = new Item(strelicaL);
  GAME.addSprite(strelica); 
  strelica.visible = true;

  // postaviti mapu kolizija

  //Item
  //fast
  //voda
}