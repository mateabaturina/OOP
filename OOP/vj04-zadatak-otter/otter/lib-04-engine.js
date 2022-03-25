/**
 * Klasa: Engine
 */
class Engine {

  // ENGINE = new Engine(1000 / 30, render_f, update_f);
  //! zašto radi ako su zamijenjene render i update?!
  constructor(time_step, renderFunction, updateFunction) {

    this.accumulated_time = 0; // Amount of time that's accumulated since the last update.
    this.animationFrameRequest_ID = undefined; // reference to the AFR
    this.time = undefined; // The most recent timestamp of loop execution.
    this.time_step = time_step; // 1000/30 = 30 frames per second

    this.updated = false; // Whether or not the update function has been called since the last cycle.

    this.update = updateFunction; // The update function
    this.render = renderFunction; // The render function

    //arrow funkcija kako bi moglo raditi za event handler
    //! arrow
    this.handleRun = (time_step) => {
      this.runLoop(time_step);  //? this se odnosi na engine
    };

    this.START = false;

  } //// constructor

  /**
   * Game loop
   * @param  {number} time_stamp - Vrijeme ...?
   */
  runLoop(time_stamp) { // This is one cycle of the game loop

    this.accumulated_time += time_stamp - this.time;
    this.time = time_stamp;

    /* If the device is too slow, updates may take longer than our time step. If
    this is the case, it could freeze the game and overload the cpu. To prevent this,
    we catch a memory spiral early and never allow three full frames to pass without
    an update. This is not ideal, but at least the user won't crash their cpu. */
    if (this.accumulated_time >= this.time_step * 3) {

      this.accumulated_time = this.time_step;

    }

    /* Since we can only update when the screen is ready to draw and requestAnimationFrame
    calls the run function, we need to keep track of how much time has passed. We
    store that accumulated time and test to see if enough has passed to justify
    an update. Remember, we want to update every time we have accumulated one time step's
    worth of time, and if multiple time steps have accumulated, we must update one
    time for each of them to stay up to speed. */
    while (this.accumulated_time >= this.time_step) {

      this.accumulated_time -= this.time_step;

      this.update(time_stamp);

      this.updated = true; // If the game has updated, we need to draw it again.

    }

    /* This allows us to only draw when the game has updated. */
    // todo: provjeriti, radi update iako se nije ništa pomaklo
    if (this.updated) {

      this.updated = false;
      this.render(time_stamp);

    }

    if (this.START)
      this.animationFrameRequest_ID = window.requestAnimationFrame(this.handleRun);

  }; //// run

  /**
   * Pokreće engine (loop).
   */
  start() {

    this.START = true;

    this.accumulated_time = this.time_step;
    this.time = window.performance.now();

    //todo: window.requestAnimationFrame(callback);
    /* callback
    The function to call when it's time to update your animation for the next repaint. The callback function is passed one single argument, a DOMHighResTimeStamp similar to the one returned by performance.now(), indicating the point in time when requestAnimationFrame() starts to execute callback functions.
    */
    this.animationFrameRequest_ID = window.requestAnimationFrame(this.handleRun);

  } //// start
  /**
   * Zaustavlja animation frame pomoću cancelAnimationFrame. Mora imati id od AFR.
   */
  stop() {
    this.START = false;
    window.cancelAnimationFrame(this.animationFrameRequest_ID);
  } //// stop

} //// Engine

// Napomena: ANIMATE ------------------------------------------------------------

// game-05

// 349
// class Player sadrži animacije (fame sets) za svaku akciju

// 447
/* An array of all the frames in the tile sheet image. */


/* The Frame class just defines a region in a tilesheet to cut out. It's a rectangle.
It has an x and y offset used for drawing the cut out sprite image to the screen,
which allows sprites to be positioned anywhere in the tile sheet image rather than
being forced to adhere to a grid like tile graphics. This is more natural because
sprites often fluctuate in size and won't always fit in a 16x16 grid. */
class AnimationFrame {
  constructor(x, y, width, height, offset_x, offset_y) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.offset_x = offset_x;
    this.offset_y = offset_y;
  }
} //// AnimationFrame

class Animator {
  constructor(frame_set, delay) {

    this.count = 0;
    this.delay = (delay >= 1) ? delay : 1;
    this.frame_set = frame_set;
    this.frame_index = 0;
    this.frame_value = frame_set[0];
    this.mode = "pause";

  }

  //ako je "pause", onda se zaustavi
  animate() {

    switch (this.mode) {

      case "loop": this.loop(); break;
      case "pause": break;

    }

  } //// animate

  changeFrameSet(frame_set, mode, delay = 10, frame_index = 0) {

    if (this.frame_set === frame_set) { return; }

    this.count = 0;
    this.delay = delay;
    this.frame_set = frame_set;
    this.frame_index = frame_index;
    this.frame_value = frame_set[frame_index];
    this.mode = mode;

  } //// changeFrameSet

  loop() {

    this.count++;

    while (this.count > this.delay) {

      this.count -= this.delay;

      this.frame_index = (this.frame_index < this.frame_set.length - 1) ? this.frame_index + 1 : 0;

      this.frame_value = this.frame_set[this.frame_index];

    }
  } //// loop

} //// Animator
