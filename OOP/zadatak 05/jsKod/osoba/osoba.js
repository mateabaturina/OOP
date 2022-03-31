class Osoba {
  constructor(im, pr, gr) {
    this.ime = im;
    this.prezime = pr;
    this.grad = gr;
  }

  ispis() {
    console.log("osoba");
    console.log(this.ime + " " + this.prezime);
  }
}

class Student extends Osoba {
  constructor(imeS, preS){
    super(imeS, preS, "Split");
    this.godina = 1;
  }

  ispis(){
    super.ispis();
    console.log("Student na godini " + this.godina);
  }
}

let a = new Osoba("Pero", "Perić", "Split");
a.ispis();

let b = new Student("Ante", "Antić");
b.ispis();

console.log(a);
console.log(b);
