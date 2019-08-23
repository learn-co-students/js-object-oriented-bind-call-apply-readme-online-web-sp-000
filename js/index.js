let sally = { name: 'Sally' };

function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

greet.call(sally, 'Terry', 'George');

greet.apply(sally, ['Terry', 'George']);

let newGreet = greet.bind(sally);

newGreet('Bob');
