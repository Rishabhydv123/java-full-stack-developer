// poly means multiple

// we have one method available in multiple class that call poly

// polymorphism is basically you have a method/property in multiple object.

class Vehicle {
  run() {
    console.log("Vehicle is running");
  }
}

class Car1 {
  run() {
    console.log("Car is running");
  }
}

class Truck {
  run() {
    console.log("Truck is running");
  }
}

let v1 = new Vehicle();
let v2 = new Car1();
let v3 = new Truck();

// v1.run();

// this is different example of polymorphism

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

function makeSound(animal) {
  animal.speak(); // Polymorphic behavior
}

let dog = new Dog();
let cat = new Cat();

makeSound(dog); // Dog barks
makeSound(cat); // Cat meows

// this is with object no class method

const printer = {
  print: () => console.log("Default print"),
};

const pdfPrinter = {
  print: () => console.log("Printing PDF"),
};

const htmlPrinter = {
  print: () => console.log("Printing HTML"),
};

function startPrint(printerObj) {
  printerObj.print();
}

startPrint(pdfPrinter); // Printing PDF
startPrint(htmlPrinter); // Printing HTML

