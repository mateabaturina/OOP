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

  if (GAME.activeWorldMap.name == "vjezbe9")
    vjezbe9();

  GAME.update();

};

function vjezbe9() {

  if (SENSING.left.active) {
    Postavke.racoon.moveLeft();
  }

  if (SENSING.right.active) {
    Postavke.racoon.moveRight();
  }

  if (SENSING.up.active) {
    Postavke.racoon.jump();
  }

  if (SENSING.keyA.active) {
    Postavke.dinosaur.moveLeft();
  }

  if (SENSING.keyD.active) {
    Postavke.dinosaur.moveRight();
  }

  if (SENSING.keyW.active) {
    Postavke.dinosaur.jump();
  }

  // if (Postavke.racoon.touching(Postavke.coin)) {
  //   Postavke.racoon.collect(Postavke.coin);
  // }

  // if (Postavke.racoon.touching(Postavke.gljiva)) {
  //   Postavke.racoon.collect(Postavke.gljiva);
  // }
}