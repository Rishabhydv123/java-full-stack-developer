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
// console.log(car2);

class Cars {
  #count; // Private variable you cannot access out side of it
  constructor(n, b) {
    this.name = n;
    this.brand = b;
    this.#count = 100;
  }

  showDetails() {
    console.log(`${this.name} ${this.brand} ${this.#count}`);
  }

  getCount() {
    return this.#count; // Getter method to access private field
  }
}

let c11 = new Cars("Thar", "MahIndra");

console.log(c11, "this is the encapsulation"); // Won't show #count
console.log(c11.getCount()); // ✅ Now we can see the private value (100)