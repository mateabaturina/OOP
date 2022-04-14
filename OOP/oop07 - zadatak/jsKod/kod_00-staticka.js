class Postavke {

    constructor() {
        if (this instanceof Postavke) {
            throw "Staticka klasa nema instance!";
        }
    }

    static coins = [];
    static spikes = [];

    static krajIgre = false;

    /** @type {Dinosaur} */
    static dinosaur = null;

    static cilj = 40; //4 novcica po 10
    
}