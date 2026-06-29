// Parent Class
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

// Child Class - Cat
class Cat extends Animal {
  meow() {
    console.log(`${this.name} says Meow!`);
  }
}

// Child Class - Dog
class Dog extends Animal {
  bark() {
    console.log(`${this.name} says Woof!`);
  }
}

// Create Cat object
const cat = new Cat("Kitty");
cat.eat();    // Inherited from Animal
cat.meow();   // Cat's own method

console.log("----------------");

// Create Dog object
const dog = new Dog("Bruno");
dog.eat();    // Inherited from Animal
dog.bark();   // Dog's own method