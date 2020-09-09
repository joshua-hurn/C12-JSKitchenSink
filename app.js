let myName = "Josh";
console.log(myName); // Josh
myName = "John"
console.log(myName); // John

const numOfStates = 50;

let sumOfNumbers = (5 + 4) + (5 + 4);

function sayHello() {
    alert("Hello Jake");
}
sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
}
// checkAge("Garrett", 20);
// checkAge("Josh", 26);
// checkAge("Jake", 25);
// checkAge("Charles", 19);

let myFavVeggies = ["Broccoli", "Squash", "Carrots", "Asparagus"];
console.log(myFavVeggies[0]) // "Broccoli"
console.log(myFavVeggies[1]) // "Squash"
console.log(myFavVeggies[2]) // "Carrots"
console.log(myFavVeggies[3]) // "Asparagus"

for (let i = 0; i < myFavVeggies.length; i++) {
    console.log(myFavVeggies[i])
}

let myPet = {
    name: "Wilbur",
    breed: "pig"
}

console.log(myPet.breed, myPet.name);

let people = [
    {
        name: "Josh",
        age: 26
    },
    {
        name: "Garrett",
        age: 20
    },
    {
        name: "Jake",
        age: 25
    },
    {
        name: "Pete",
        age: 26
    },
    {
        name: "Will",
        age: 26
    }
];

people[0].name // Josh

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

function getLength(string) {
   return string.length
}

let stringLength = getLength("hello world");
if (stringLength % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}
