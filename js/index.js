function greet() {
	console.log(`my name is ${this.name}, hi!`);
}

greet();

let person = {
	name: 'Bob',
	greet: greet
};

person.greet();
