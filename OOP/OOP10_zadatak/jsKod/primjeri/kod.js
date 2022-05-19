class Animal {

  constructor() {
    if (this.constructor == Animal) {
      throw new Error("Apstraktna klasa se ne može instancirati");
    }
  }

  say() {
    throw new Error("Metoda say() se mora implementirati");
  }

  eat() {
    console.log("jedem...");
  }
}

class Dog extends Animal {
  say() {
    console.log("vau vau");
  }
}

class Cat extends Animal {
  say() {
    console.log("mijau");
  }

  eat() {
    console.log("pijem vodu...");
  }
}

class Mouse extends Animal { 
  say() {
    console.log("Execute order 66")
  }

  eat() {
    console.log("Ratatouile...");
  }
}

let d = new Dog();
let c = new Cat();
let m = new Mouse();

d.eat();
c.eat();
m.eat();

d.say();
c.say();
m.say();