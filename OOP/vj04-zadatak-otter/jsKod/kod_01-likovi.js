//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion

// postaviti informacije o animacijama
// za one kojih nema, možete ostaviti [1]

let frame_sets = {
  "up": [1], 
  "walk-up": [1],
  "right": [1],
  "walk-right": [11,12,13,14,15,16,17,18,19],
  "down": [1],
  "walk-down": [1],
  "left": [2],
  "walk-left": [21,22,23,24,25,26,27,28,29]
};

/**
 * Postavlja osnovne stvari za lika:
 * - animacije (frame_sets)
 * - odabrani layer
 * - vidljivost
 * - dodaje lika u popis svih koji se crtaju
 * @param {Sprite} lik odabrani lik
 * @param {string} layerName naziv layer-a u Tiled-u koji mu pripada
 */
function postavi(lik, layerName) {
  lik.frame_sets = frame_sets;
  lik.layer = GAME.getSpriteLayer(layerName);
  lik.visible = true;
  GAME.addSprite(lik);
}

