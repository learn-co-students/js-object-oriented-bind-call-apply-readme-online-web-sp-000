// use this to copy code snippets or use your browser's console
// use this to copy code snippets or use your browser's console
function greet() {
	console.log(`my name is ${this.name}, hi!`);
}

greet(); // my name is , hi!

let person = {
	name: 'Bob',
	greet: greet
};

person.greet(); // my name is Bob, hi!
VM4459:2 my name is , hi!
VM4459:2 my name is Bob, hi!
undefined