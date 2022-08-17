'use strict';

/*
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);
const interface = `Audio`; // script.js:8 Uncaught SyntaxError: Unexpected strict mode reserved word
const private = 534; // Uncaught SyntaxError: Unexpected strict mode reserved word
const if = 23;
*/

/*
function logger() {
    console.log(`My name is Omer`);
}
logger();
logger();
logger();
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
const calcAge = birthYear => 2022 - birthYear;
const myAge = calcAge(1997);
console.log(myAge);
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1997, `Omer`));
console.log(yearsUntilRetirement(1994, `Cafer`));
console.log(yearsUntilRetirement(1992, `Ahmet`));
*/

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
const appleOrangeJuice = fruitProcessor(2, 3);
console.log(appleOrangeJuice);
*/

/*
const friends = [`Omer`, `Cafer`, `Metin`, `Ahmet`];
friends.push(`Taha`);
console.log(friends);
friends.unshift(`Yuucel`);
console.log(friends);
const poppedValue = friends.pop();
console.log(`Popped Value : ${poppedValue}`);
console.log(friends);
const shiftedValue = friends.shift();
console.log(`Shifted Value : ${shiftedValue}`);
console.log(friends);
console.log(`Index of Omer is : ${friends.indexOf(`Omer`)}`);
console.log(`Index of Metin is : ${friends.indexOf(`Metin`)}`);
console.log(`Friends arrayinde Ahmet var mi ? ${friends.includes(`Ahmet`)}`);
*/

/*
const person = {
    firstName: `Omer`,
    lastName: `Guldu`,
    age: 2022 - 1997,
    job: `student`,
    friends: [`Cafer`, `Metin`, `Berzan`]
}
console.log(person);
console.log(person.lastName);
console.log(person[`lastName`]);
const personName = `Name`;
console.log(person[`first${personName}`]);
console.log(person[`last${personName}`]);
const interestedIn = prompt(`What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends`);
if (person[interestedIn]) {
    console.log(person[interestedIn]);
} else {
    console.log(`Wrong request! Choose between firstName, lastName, age, job and friends`)
}
person.location = `Turkey`;
person[`twitter`] = `@emeklizorakiadc`;
console.log(person);
console.log(`${person.firstName} has ${person.friends.length} friends, and his best friend is called ${person.friends[0]}`)
*/

/*
const person = {
    firstName: `Omer`,
    lastName: `Guldu`,
    birthYear: 1997,
    job: `student`,
    friends: [`Cafer`, `Metin`, `Berzan`],
    hasDriverLicense: true,
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    summary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriverLicense ? `a` : `no`} driver's license`;
    },
};
console.log(person.calcAge());
console.log(person.age);
console.log(person.age);
console.log(person.age);
console.log(person[`calcAge`]());
console.log(person.summary());
*/

/*
const person = [
    `Omer`,
    `Guldu`,
    2022 - 1997,
    `student`,
    [`Cafer`, `Metin`, `Berzan`]
];
const personTypes = [];
for(let i=0; i<person.length;i++){
    console.log(person[i]);
    personTypes[i] = typeof person[i];
    personTypes.push(typeof person[i]);
}
console.log(personTypes);
for(let i = person.length -1 ; i >=0 ; i--){
    console.log(person[i]);
}
*/

/*
for(let exercise = 1; exercise < 4; exercise++){
    console.log(`----------- Starting exercise ${exercise}`);
    for(let rep = 1; rep <  6; rep++){
        console.log(`Lifting weight repetition ${rep} 🤸‍♀️`)
    }
}
*/

/* PRETTIER DENEME
const x = `23`;
const deneme = 'abc';
const birthYear = year => 2022 - year;
*/
