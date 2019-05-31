function greet() {
    console.log(`my name is ${this.name}, hi!`);
}

greet();

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

greet.apply(sally);

function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

let sally = { name: 'Sally' };

function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

greet.call(sally, 'Terry', 'George');

greet.call(sally);

greet.apply(sally, ['Terry', 'George']);
/
let sally = { name: 'Sally' };

function greet(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}

let newGreet = greet.bind(sally); // newGreet is context-bound to sally

newGreet('Bob');

greet('Bob');

class Event {
    constructor(title, keywords) {
        this.title = title;
        this.keywords = keywords;
    }
}

class User {
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }

    matchInterests(event) {
        return event.keywords.some(function(word) {
            return this.interests.includes(word);
        });
    }
}

let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);

billy.matchInterests(freeMusic);

function(word) {
  return this.interests.includes(word);
}
Since every new function defines its own this value, when the callback function is invoked, this will be undefined. We can see this by logging inside and outside the function:

class Event {
    constructor(title, keywords) {
        this.title = title;
        this.keywords = keywords;
    }
}

class User {
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }

    matchInterests(event) {
        console.log("'this' is defined: ", this);
        return event.keywords.some(function(word) {
            console.log("'this' is now undefined: ", this);
            return this.interests.includes(word);
        });
    }
}

let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);

class Event {
    constructor(title, keywords) {
        this.title = title;
        this.keywords = keywords;
    }
}

class User {
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }

    matchInterests(event) {
        return event.keywords.some(
            function(word) {
                return this.interests.includes(word);
            }.bind(this) // added to the and of the callback function
        );
    }
}

let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);

matchInterests(event) {
  return event.keywords.some(word => this.interests.includes(word));
}
