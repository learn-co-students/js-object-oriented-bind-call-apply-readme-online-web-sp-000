// use this to copy code snippets or use your browser's console
function greet() {
    console.log(`my name is ${this.name}, hi!`);
}
 
greet(); // my name is , hi!
 
let person = {
    name: 'Bob',
    greet: greet
};
 
person.greet();


function greet() {
    console.log(`my name is ${this.name}, hi!`);
}
 
let sally = { name: 'Sally' };
 
greet.call(sally);
// my name is Sally, hi!
 
greet.apply(sally);
// my name is Sally, hi!