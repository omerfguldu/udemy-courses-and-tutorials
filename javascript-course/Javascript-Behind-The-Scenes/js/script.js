'use strict';

// function calcAge(birthYear) {
//   const age = 2022 - birthYear;

//   function printAge() {
//     let output = `${firstName} you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = `Faruk`;
//       const msg = `Oh, and you are a millenial, ${firstName}`;
//       console.log(msg);

//       function add(a, b) {
//         return a + b;
//       }

//       // Reassigning outer scope's variable
//       output = `new output`;
//     }
//     // console.log(msg); block disindan msg degiskenine ulasilamaz.
//     console.log(millenial); // var ile tanimlandigi icin function scopetur ve if blogu disindan erisilebilir.
//     // console.log(add(3, 5)); if blogunun disindan cagirilamaz
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// // HOISTING DERSLERI

// const firstName = `Omer`;
// calcAge(1996);

// // me = `Faruk`;
// console.log(me);

// // loglar uninitialized hatasi verir.
// // console.log(job);
// // console.log(year);

// var me = `Omer`;
// let job = `teacher`;
// const year = 1997;

// console.log(addDecl(2, 3));
// // loglar uninitialized hatasi verir. Const ve let ile tanimlandiklari surece.
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3)); addArrow is not a function hatasi verir.

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// // var ile tanimlandiginda ise addArrow function olarak degil undefined olarak tanimlanir. Hata verir.
// var addArrow = (a, b) => a + b;

// // Example
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`All products deleted!`);
// }

// var x = 1;
// let y = 2;
// const z = 3;
// // var ile tanimlanan x degiskenine window objesinden ulasabilirken let ve const ile tanimlanan degiskenlere ulasamayiz.
// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // true

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2022 - birthYear);
//   console.log(this);
// };
// calcAge(1997);

// const calcAgeArrow = birthYear => {
//   console.log(2022 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1994);

// const omer = {
//   year: 1997,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
// };
// omer.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = omer.calcAge;
// matilda.calcAge();

// const f = omer.calcAge;
// f();

/*
var firstName = `Matilda`;

const omer = {
  firstName: `Omer`,
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  // arrow function taniminda this keywordu global objecte referans verecektir.
  // bu durumda window objesinde firstName aranacaktir ve undefined donecektir.
  // fakat var ile tanimlanmis bir firstName olursa bu degisken window objesinde property seklinde yer alacagi icin arrow func Hey Matilda olarak calisir. !!!
  // greet: () => {
  //   console.log(`Hey ${this.firstName}`);
  // },

  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};
omer.greet();
omer.calcAge();

// function expr tanimlamasinda arguments keywordu ile parametre degerlerine ulasilabilir.
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

// arrow funclarda arguments keywordu tanimli degildir. arguments is not defined hatasi verir.
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);
*/

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: `Omer`,
  age: 30,
};

const friend = me;
friend.age = 27;

console.log(me.age);
console.log(friend.age);
*/

// Primitive Types
let lastName = `Saruhan`;
let oldLastName = lastName;
lastName = `Guldu`;
console.log(lastName, oldLastName);

// Reference Types
const jessica = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = `Davis`;
console.log(`Before marriage: `, jessica);
console.log(`After marriage: `, marriedJessica);

//Copying Objects
const jessica2 = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
  family: [`Alice`, `Bob`],
};

// object.assign shallow (first level) bir kopyalama yapar
// yani objenin icerisinde baska objeler varsa bu objeler degistirildiginde kopyasini aldigimiz arrayde de veriler degisecektir.
const jessica2Copy = Object.assign({}, jessica2);
jessica2Copy.lastName = `Davis`;
console.log(`Before marriage: `, jessica2);
console.log(`After marriage: `, jessica2Copy);

jessica2Copy.family.push(`Mary`);
jessica2Copy.family.push(`John`);
console.log(`Before marriage: `, jessica2);
console.log(`After marriage: `, jessica2Copy);
