class Radnik {
  constructor(imer) {
    this.ime = imer;
    this._racun = 0;
  }

  isplata(i) {
    console.log("Isplata: " + i);
    this.racun -= i;
  }

  uplata(i) {
    console.log("Uplata: " + i);
    this.racun += i
  }

  // svojstvo racun:
  get racun() {
    return this._racun;
  }

  set racun(vrijednost) {    
    if (vrijednost < 0) {
      console.log("Stanje ne može biti negativno!");
      console.log("S računa možete preuzeti: " + this._racun);
    }
    else
      this._racun = vrijednost;
  }

}

let r = new Radnik("Pero");

