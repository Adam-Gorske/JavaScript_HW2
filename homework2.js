//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favFoods() {
    for (let i = 0; i < Object.values(person3).length; i++) {
        console.log(Object.values(person3)[i])
    }
}

console.log(favFoods())


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;


// Use an arrow to create the printInfo method
        this.printInfo = (smile, hair_color) => {
        console.log(`This person's name is ${this.name} and they're ${this.age} years young. They have a ${smile} smile, and ${hair_color} hair.`);

        return "The king has returned"
    }

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
        this.addAge = () => {
        this.age += 1
        console.log(`${this.name} just went up a year! They're now ${this.age}`)
    }
}

// Person 1
let Sheryl = new Person('Sheryl', 122);

// printing info
console.log(Sheryl.printInfo('crooked', 'black'))
// incrementing age by 3 years
console.log(Sheryl.addAge())
console.log(Sheryl.addAge())
console.log(Sheryl.addAge())


// Person 2
let Harold = new Person("Harold", 10);
// printing info
console.log(Harold.printInfo('closed', 'red'))
// incrementing age by 2 years
console.log(Harold.addAge())
console.log(Harold.addAge())
// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isBigWord = (word) => {
    return new Promise( (resolve, reject) => {
        if(word.length > 10) {
            resolve("Big word")
        } else if(word.length < 10) { 
            reject("Small Number")
        } else { 
            reject("This is a 10 lettered word") // instructions said greater than 10, or less than 10, but I wanted to see what would happen if it was 10.
        }
    })
}

isBigWord("biggiebiggiebigge")

.then( (result) => {
    console.log(result)
})

.catch( (error) => {
    console.log(error)
})


// CODE WARS

// #1
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

function sameCase(a, b) {
    if (a.toLowerCase() == a.toUpperCase() || b.toLowerCase() == b.toUpperCase()) {
        return -1
    } else if (a == a.toLowerCase() && b == b.toLowerCase() || a == a.toUpperCase() && b == b.toUpperCase()) {
        return 1
    }
    return 0
}

console.log(sameCase('H','0')) // -1
console.log(sameCase('H', 'H')) // 1
console.log(sameCase('H', 'h')) // 0


// #2
// Given a non - negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
// Input will always be valid, i.e.no negative integers.

var countSheep = function (num) {
    let count = 0;
    let list = [];
    while (count < num) {
        count++;
        list.push(`${count} sheep...`)
    } return list.join('')
}

console.log(countSheep(3)) // 1 sheep...2 sheep...3 sheep...