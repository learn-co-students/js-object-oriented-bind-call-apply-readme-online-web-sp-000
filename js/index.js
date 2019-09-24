// use this to copy code snippets or use your browser's console
//Point of lesson that - general context of functions requires defining
//attributes ahead of time: 
function greet() {
    console.log(`my name is ${this.name}, hi!`);
}
 
greet(); // my name is , hi!
 
let person = {
    name: 'Bob',
    greet: greet
};
 
person.greet(); // my name is Bob, hi!

//however with call and apply:
function greet() {
    console.log(`my name is ${this.name}, hi!`);
}
 
let sally = { name: 'Sally' };
 
greet.call(sally);
// my name is Sally, hi!
 
greet.apply(sally);
// my name is Sally, hi!

//another example:
function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
    
 //with these additons:   
    let sally = { name: 'Sally' };
 
    function greet(customerOne, customerTwo) {
        console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
    }
     
    greet.call(sally, 'Terry', 'George');
    // Hi Terry and George, my name is Sally!

//However, this will happen if this is tried
greet.call(sally);
// Hi undefined and undefined, my name is Sally!

//some diff in call and apply:
greet.apply(sally, ['Terry', 'George']);
// Hi Terry and George, my name is Sally!

//As the lesson describes further:
//"You can remember the difference because apply takes an array (both begin with the letter a). You can use either call or apply. The only difference is stylistic. Both exist because sometimes arguments need to be collected or bundled up (apply) versus passed directly (call)."

//Using Bind:
let sally = { name: 'Sally' };
 
function greet(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}
 
let newGreet = greet.bind(sally); // newGreet is context-bound to sally
 
newGreet('Bob');
// Hi Bob, my name is Sally!
 
greet('Bob');
// Hi Bob, my name is !
//Explained "As you see from the above code, by calling greet.bind(sally), we return a new function that we then assign to the variable newGreet. Invoking newGreet shows that the this object is bound to sally.
//Note that the original greet function is unchanged. bind does not change it. Instead, bind copies the function, and sets the copied function's this context to whatever is passed through as an argument."

//and invoked immediately:
greet.bind(sally)('Bob');
// Hi Bob, my name is Sally!


//bind complex example:
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

//arrow functions description:
//"In modern JavaScript, arrow functions don't have their own this, so this will refer to whatever context the arrow function was invoked in. Using an arrow function, we could rewrite matchInterests as:"

matchInterests(event) {
    return event.keywords.some(word => this.interests.includes(word));
  }

//as described: "Here, this will refer to the User instance context."