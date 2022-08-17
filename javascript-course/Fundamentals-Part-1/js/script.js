
/*
let js = 'amazing';
if (js === 'amazing') {
    console.log(`JavaScript is ${js}`)
}
console.log(26 + 18);
console.log('Jonas');
let firstName = `Jonas`
console.log(firstName);
console.log(`${firstName}
Doe`);
*/


/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
javascriptIsFun = `${javascriptIsFun} i think the same`
console.log(javascriptIsFun);
let year
console.log(year);
console.log(typeof year);
year = 2022
console.log(year);
console.log(typeof year);
console.log(typeof null); // returns object which is a bug
*/


/*
let age = 30;
age = 31;
console.log(age);
const birthYear = 1997;
//birthYear = 1999; // const oldugu icin yeni bir deger atanamaz. Hata verir.
// console.log(birthYear); // const oldugu icin yeni bir deger atanamaz. Hata verir.
// const job; // Bu kullanimda hata verir. Const degiskenlerin degerleri baslangicta atanmalidir.
var job = "Programmer" // var(ES5) ve let(ES6) birbirlerine çok benzer var artik kullanilmiyor.
job = "Teacher"
console.log(job);
lastName = "Güldü"; // Bu sekilde bir kullanimda herhangi bir hata vermeyecektir fakat degisken tanimlamasi yapilirken daima var veya const seklinde belirtilmelidir.
console.log(lastName);
*/


/*
let year = 2022;
const ageOmer = year - 1997;
const ageCafer = year - 1994;
console.log(ageOmer, ageCafer);
console.log(ageOmer * 2, ageCafer / 10, 2 ** 3);
// 2 ** 3 islemi us alma islemine esittir. Bu durumda 2 nin 3 uncu kuvveti alinarak ekrana 8 yazdirilir.
const firstName = 'Omer Faruk';
const lastName = 'Guldu';
console.log(firstName + ' ' + lastName);
let x = 10 + 5; // 15
x += 10; // 15 + 10 = 25
x *= 4 // 25 * 4 = 100
x++; // 101
x--; // 100
x--; // 99
console.log(x); // 99
console.log(ageOmer > ageCafer);
console.log(ageOmer >= 18);
const isFullAge = ageOmer >= 18;
console.log(isFullAge);
*/


/*
let a, b;
a = b = 25 - 10 - 5; // x = y = 10, x = 10
console.log(a, b); // 10 10
const averageAge = (ageOmer + ageCafer) / 2;
console.log(averageAge);
*/


/*
console.log(`String
multiple
lines
with
template
literals`);
*/


/*
const age = 15;
if (age >= 18) {
    console.log(`Sarah can start driving license 🚗`);
    // emoji keyboard --> Win + . kombinasyonu
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}
*/


/*
const inputYear = `1191`;
console.log(inputYear + 19);
console.log(Number(inputYear) + 19);
console.log(typeof NaN)
console.log(String(34), 34);
console.log(`I am ${23} years old.`);
console.log('23' - '10' - 3);
console.log('23' * '2 ');
console.log(2 + 3 + 4 + '5');
console.log('10' - '4' - '3' - 2 + '5');
*/


/*
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(`Omer`));
console.log(Boolean({}));
console.log(Boolean(''));
console.log(Boolean(``));
const money = 10;
if (money) {
    console.log(`Don't spend it all ;)`);
} else {
    console.log(`You should get a job!`);
}
let height = 71;
if (height) {
    console.log(`YAY! Height is defined`);
} else {
    console.log(`Height is UNDEFINED`);
}
*/


/*
const day = `wednesday`;
switch (day) {
    case `monday`:
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case `tuesday`:
        console.log(`Prepare theory videos`);
        break;
    case `wednesday`:
    case `thursday`:
        console.log(`Write code examples`);
        break;
    case `friday`:
        console.log(`Record videos`);
        break;
    case `saturday`:
    case `sunday`:
        console.log(`Enjoy the weekend :D`);
        break;
    default:
        console.log(`Not a valid day!`);
}
*/


/*
const age = 15;
// age >= 18 ? console.log(`I like to drink wine 🍷`) : console.log(`I like to drink water 💧`);
const drink = age >= 18 ? `wine 🍷` : `water 💧`;
console.log(`I'd like to drink ${drink}`);
console.log(`I'd like to drink ${age >= 18 ? `wine 🍷` : `water 💧`}`);
*/





// PROTEIN REACT BOOTCAMP MATHCALCULATION HARD QUESTION
// let string = "3(5)6+(8)(5)"
// let mathCalculation = (str) => {
//     let stringArray = str.split("")
//     for (let i = 0; i < stringArray.length; i++) {
//         if (stringArray[i] == ')' && stringArray[i + 1] == '(') {
//             stringArray.splice(i + 1, 0, "*")
//         }
//         if (stringArray[i] == '(' && !isNaN(Number(stringArray[i - 1]))) {
//             stringArray.splice(i, 0, "*");
//         }
//         if (stringArray[i] == ')' && !isNaN(Number(stringArray[i + 1]))) {
//             stringArray.splice(i + 1, 0, "*");
//         }
//     }
//     stringArray = stringArray.join("")
//     //console.log(eval(stringArray))
//     console.log(eval(stringArray))

// }
// mathCalculation(string)
// PROTEIN REACT BOOTCAMP MATHCALCULATION HARD QUESTION