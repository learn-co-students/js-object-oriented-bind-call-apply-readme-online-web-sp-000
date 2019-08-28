// use this to copy code snippets or use your browser's console
// function greet() {
//     console.log(`my name is ${this.name}, hi!`);
// }

// function greet(customerOne, customerTwo){
//     console.log(`Hi, ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
// };

function greet(customer){
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}

let person = {
    name: 'Bob',
    greet: greet
};

let sally = {name: "Sally"}; 


class Event{
    constructor(title, keywords){
        this.title = title;
        this.keywords = keywords;
    }
}

class User{
    constructor(name, interests){
        this.name = name;
        this.interests = interests;
    }

    // matchInterests(event){
    //     return event.keywords.some(function(word){
    //         return this.interests.includes(word);
    //     }.bind(this));
    // }

    matchInterests(event){
        return event.keywords.some(word => this.interests.includes(word));
    }
}