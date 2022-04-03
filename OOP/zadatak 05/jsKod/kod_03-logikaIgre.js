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
/// <reference path="kod_02-postavke.js"/>

/**
 * Promjena stanja likova - interakcije
 */
function update_main() {

  let map = GAME.activeWorldMap;

  let cat = map.sprites[0];
  let dog = map.sprites[1];

  // interakcije u igri

  // zamijenit ćemo tipke za upravljanje jer je mačka s lijeve strane

  if (SENSING.keyA.active) {
    cat.moveLeft();
  }

  if (SENSING.keyD.active){
    cat.moveRight();
  }

  if (SENSING.keyW.active){
    cat.jump();
  }

  if (SENSING.right.active) {
    dog.moveRight();
  }

  if (SENSING.left.active) {
    dog.moveLeft();
  }

  if (SENSING.up.active) {
    dog.jump();
  }

  if (dog.clicked(SENSING.mouse)) {
    dog.visible = false;
  }

  if (cat.touching(dog)) {
    console.log("Diram psa")
  }

  GAME.update(); 
};