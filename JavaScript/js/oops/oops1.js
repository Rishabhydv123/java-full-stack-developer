class ClassRoom {
  #contact;

  constructor(name, batch) {
    this.studentName = name;
    this.studentBatch = batch;
    this.#contact = "7052331551";
  }

  showDetails() {
    return `this is my number ${this.#contact}`;
  }
}

const std1 = new ClassRoom("Rishabh Yadav", "FSD-3");

// console.log("👉 std1:", std1.contact);
// console.log("👉 std1:", std1.studentBatch);
// console.log("👉 std1:", std1.studentName);
// console.log("👉 std1:", std1.showDetails());

class Car {
  constructor(n, b) {
    this.name = n;
    this.brand = b;
  }
  showDetails() {
    console.log(`${this.name} ${this.brand}`);
  }
}

// let c1 = new Car("desire", "suzuki");
// console.log(c1);
// console.log(c1.showDetails());


class SUV extends Car {
  constructor(x, y) {
    super(x, y);
    this.buyer = "mehFuz_khan";
  }
}

class miniSUV extends SUV {
  constructor(x, y) {
    super(x, y);
    this.type = "mini-suv";
  }
}

// let car2 = new miniSUV("audi", "audi");
// console.log(car2)

class Cars {
  #count; 
  constructor(n, b) {
    this.name = n;
    this.brand = b;
    this.#count = 100;
  }

  showDetails() {
    console.log(`${this.name} ${this.brand} ${this.#count}`);
  }

  getCount() {
    return this.#count; 
  }
}

let c11 = new Cars("Thar", "MahIndra");

// console.log(c11, "this is the encapsulation");
// console.log(c11.getCount()); 

