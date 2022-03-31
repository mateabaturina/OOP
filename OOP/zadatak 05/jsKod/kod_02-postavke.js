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
    // case "level2":
    //   setupLevel2();
    //   break;

    default:
      throw "Ne postoji setup za " + GAME.activeWorldMap.name;
      break;
  }

  render_main();
}

/* LEVELS */

function setupLevel() {

  /*let cat = new Sprite(0, 0, 64, 64);
  postavi(cat, "macka");*/
  let catLayer = GAME.getSpriteLayer("macka")
  /*let cat = new Animal(0, 0, catLayer);*/
  let cat = new Cat(catLayer);
  cat.direction = 90;

  /*cat.okvir = true;*/

  /*let dog = new Sprite(9 * 64, 0, 64 - 8, 64 - 8);
  postavi(dog, "pas");*/
  let dogLayer = GAME.getSpriteLayer("pas")
  /*let dog = new Animal(9*64, 0, dogLayer);*/
  let dog = new Dog(dogLayer);
  dog.direction = 270;

  
  GAME.addSprite(cat);
  GAME.addSprite(dog);

  GAME.activeWorldMap.setCollisions("platforme");
}
