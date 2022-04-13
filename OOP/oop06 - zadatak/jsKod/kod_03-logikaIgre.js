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

  // ovdje smo prebacili kod od prošlih vježbi u posebnu funkciju
  // kako bi mogli imati više "levela" u istom projektu
  if (GAME.activeWorldMap.name == "catDog")
    mackaPas();
  else if (GAME.activeWorldMap.name == "vjezbe6")
    vjezbe6();

  GAME.update();

};

function mackaPas() {
  // ovo imate riješeno za domaći
  console.log("domaći!");
}


function vjezbe6() {
  /** @type {Racoon} */
  let r = GAME.activeWorldMap.sprites[0];
  //brojevi ovise o redoslijedu kako su likovi dodani
  let fast = GAME.activeWorldMap.sprites[1];
  let voda = GAME.activeWorldMap.sprites[2];
  let gljiva = GAME.activeWorldMap.sprites[3];
  let strelica = GAME.activeWorldMap.sprites[4];

  if (SENSING.right.active) {
    //ako dodiruje sprite "fast", ide desno brzinom 5
    if (r.touching(fast)) {
      r.moveRight(5);
    }
    if (r.touching(strelica)) {
      ENGINE.stop();
      GameSettings.output("Igra je gotova!");
      GameSettings.output("Engine stopped");
    }
    else {
      r.moveRight();
    }
  }

  if (SENSING.left.active) {
    if (r.touching(fast)) {
      r.moveLeft(5);
    }
    else {
      r.moveLeft();
    }
  }

  if (SENSING.up.active) {
    //ako dira vodu, postavi da je pod = "voda"
    if (r.touching(voda)) {
      r.jump("voda");
    }
    if (r.touching(gljiva)) {
      r.jump(100);
    }
    else {
      r.jump(50);
    }
  }

};