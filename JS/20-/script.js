"use strict";
console.log("hello world");

class animal {
  makeSound() {
    console.log("Some generic animal sound");
  }
}

class Dog extends animal {
  makeSound() {
    console.log("Woof! Woof!");
  }
}

class Cat extends animal {
  makeSound() {
    console.log("Meow!");
  }
}

class Bird extends animal {
  makeSound() {
    console.log("Chirp!");
  }
}

const animals = [new Dog(), new Cat(), new Bird()];

animals.forEach((animal) => animal.makeSound());
