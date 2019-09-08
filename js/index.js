// use this to copy code snippets or use your browser's console
function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);   
}

let sally = { name: 'Sally' };

greet.call(sally, 'Terry', 'George');

let newGreet = greet.bind(sally);

newGreet('Bob', 'Rob');
greet.bind(sally)('Arthur', 'Carol');