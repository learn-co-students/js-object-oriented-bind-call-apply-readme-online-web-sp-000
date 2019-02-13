function greet() {
  console.log(`my name is ${this.name}, hi!`);
}

greet(); // my name is , hi!

let person = {
  name: 'Bob',
  greet: greet
};

person.greet(); // my name is Bob, hi!