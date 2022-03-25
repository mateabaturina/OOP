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

  // kako bi izbjegli globalne varijable, znamo gdje su spremljeni
  let cat = map.sprites[0];
  let dog = map.sprites[1];

  // kretanje likova pišete ovdje:
  if(SENSING.left.active){
    cat.moveLeft();
  }

  if(SENSING.right.active){
    cat.moveRight();
  }

  if(SENSING.keyD.active){
    dog.moveRight();
  }

  if(SENSING.keyA.active){
    dog.moveLeft();
  }

  GAME.update();

};
