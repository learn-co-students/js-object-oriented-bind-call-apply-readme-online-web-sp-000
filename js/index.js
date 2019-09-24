// use this to copy code snippets or use your browser's console

function greet() {

    console.log(`my name is ${this.name}, hi!`);
}

greet();                                                // my name is , hi!


let person = {
    name: 'Bob',
    greet: greet
};

person.greet();                                         // my name is Bob, hi!


function greet() {

    console.log(`my name is ${this.name}, hi!`);
}


let sally = { name: 'Sally' };


greet.call(sally);                                     // my name is Sally, hi!

greet.apply(sally);                                    // my name is Sally, hi!


// You can use 'call' or 'apply' to invoke a function with a specified context.

// The context in which the function is to be run is passed in
// as the first argument to these methods.


// NOTE:
// your 'greet' function is actually an instance of a Function class.


// Therefore, a function instance can also have methods.

// Both 'call' and 'apply' let you set the value of 'this'
// to whatever you pass as the first argument.

// The difference between the two is
// how arguments are passed to the function.


// Let's modify your greet function:


function greet(customerOne, customerTwo) {

    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}


// When you invoke greet...
// not only do you need to explicitly set 'this',
// but you also need to pass values for customerOne and customerTwo.

// Using 'call',
// you pass the object for 'this' as the first argument,
// followed by any function arguments in order.


let sally = { name: 'Sally' };

function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}


greet.call(sally, 'Terry', 'George');
// Hi Terry and George, my name is Sally!


// What happens if you don't pass any arguments?


greet.call(sally);
// Hi undefined and undefined, my name is Sally!


// apply works similarly to call,
// except that apply only takes two arguments: the value of this, and then an Array of arguments to pass to the function, like so:


greet.apply(sally, ['Terry', 'George']);
// Hi Terry and George, my name is Sally!


// You can remember the difference because
// apply takes an array (both begin with the letter a).

// You can use either call or apply.

// The only difference is stylistic.

// Both exist because sometimes arguments need to be
// collected or bundled up (apply) versus passed directly (call).

// Introduce bind
// call and apply both explicitly set 'this'
// and then immediately execute the function call.

// Sometimes, you want to take a function,
// associate it to a context
// and return a "context-bound" version of the original function.

// Once you have the "context-bound" version of the function you can call it with (arguments, arguments, ...) or call() or apply() without having to manually set the context. Let's see it in action.

let sally = { name: 'Sally' };

function greet(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}

let newGreet = greet.bind(sally); // newGreet is context-bound to sally

newGreet('Bob');
// Hi Bob, my name is Sally!

greet('Bob');
// Hi Bob, my name is

//As you see from the above code, by calling greet.bind(sally), you return a new function that we then assign to the variable newGreet. Invoking newGreet shows that the this object is bound to sally.

//Note that the original greet function is unchanged. bind does not change it. Instead, bind copies the function, and sets the copied function's this context to whatever is passed through as an argument.

//We can actually use bind and invoke immediately:

greet.bind(sally)('Bob');
// Hi Bob, my name is Sally!

// But this is just a noisy way of doing the same work of call() or apply().


// bind(), call(), and apply() in JavaScript code
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
// Uncaught TypeError: Cannot read property 'interests' of undefined


function(word) {
  return this.interests.includes(word);
}

// bind(), call(), and apply() in JavaScript code

// Assigning 'this' to a variable like with newGreet
// makes this easily reusable and transferable.

// In complex applications, there are times when it is better that 'this'
// refers to the context you assign.

// Until the introduction of arrow functions,
// every new JavaScript function defined its own this value. Using bind,
// you can prevent this behavior.

// Let's imagine you want to create an app that matches
// user interests with keywords from upcoming events.

// You could create a User class and be able to assign properties
// to user instances, like a name and an array of interests.

// You can also include a class function, matchInterests,
// that takes in an event
// and returns true if there are any matching keywords:


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
// Uncaught TypeError: Cannot read property 'interests' of undefined



// Above
// a new User instance is created and assigned to billy.

// A name and interests are assigned as properties in the constructor.

// You've also created a new Event, with a title and keywords,
// assigned to freeMusic.

// matchInterests is a class method that takes in an event object,
// checks to see if some event keywords are included in the user's interests,
// and returns true or false accordingly.

// Except, when we call billy.matchInterests(freeMusic);,
// that is not what happens.

// The problem in our code above is here:

function(word) {
  return this.interests.includes(word);
}

// Since every new function defines its own this value,
// when the callback function is invoked, this will be undefined.

// You can see this by logging inside and outside the function:

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

billy.matchInterests(freeMusic);
// 'this' is defined:  User {name: "billy", interests: Array(3)}
// 'this' is now undefined:  undefined
// Uncaught TypeError: Cannot read property 'interests' of undefined


// In the first console.log,
// 'this' refers to the billy user instance.

// In the second, 'this' is undefined.

// To solve 'this' problem, you can use bind:

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

billy.matchInterests(freeMusic);

// Let's see why the above code works.

// When the 'matchInterests' method is invoked,
// 'this' refers to the User instance context receiving the method call.

// You are in that context when our callback function is defined.

// Using bind here lets us keep this referring to the User context.
