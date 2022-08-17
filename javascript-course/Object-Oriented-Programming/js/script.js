// 'use strict';

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this
//   // this.calcAge = function () {
//   //   console.log(2022 - this.birthYear);
//   // };
// };

// const omer = new Person(`Omer`, 1997);
// console.log(omer);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to a prototype
// // 4. function automatically return {}

// const jonas = new Person(`Jonas`, 1991);
// const jack = new Person(`Jack`, 1975);
// console.log(jonas, jack);

// const jay = `Jay`;

// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);

// // Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// jonas.calcAge();
// omer.calcAge();
// jack.calcAge();

// console.log(omer.__proto__);
// console.log(omer.__proto__ === Person.prototype); // true

// console.log(Person.prototype.isPrototypeOf(omer)); // true
// console.log(Person.prototype.isPrototypeOf(jack)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false

// // .prototypeOfLinkedObjects
// Person.prototype.species = `Homo Sapiens`;
// console.log(omer, jonas);
// console.log(omer.species, jonas.species);

// console.log(omer.hasOwnProperty(`firstName`)); // true
// console.log(omer.hasOwnProperty(`species`)); // false cunku species Person constructor fonksiyonunun direkt icinde degilde prototype'inin icinde olusturuldu.

// console.log(omer.__proto__);
// console.log(omer.__proto__.__proto__); // Object.prototype (top of prototype chain)
// console.log(omer.__proto__.__proto__.__proto__); // null

// const arr = [3, 6, 6, 5, 6, 9, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__ === Array.prototype); // true

// // Array kurucu fonksiyonunun prototype ina unique isimli fonksiyonu ekledik.
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector(`h1`);
// console.dir(h1);
// console.dir(x => x + 1);

// class expression
// const PersonCl = class {};

// class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2022 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     if (name.includes(` `)) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log(`Hey there 👋`);
//   }
// }

// const jessica = new PersonCl(`Jessica Davis`, 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype); // true

// // Bu sekilde de metotlar eklenebilir.
// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };

// jessica.greet();

// // 1. Classes are NOT hoisted
// // 2. Class are first-class citizens
// // 3. Classes are executed in strict mode

// const walter = new PersonCl(`Walter White`, 1995);

// const account = {
//   owner: `jonas`,
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// PersonCl.hey();
// // walter.hey(); // Uncaught TypeError: walter.hey is not a function // hey static bir method oldugundan kurucu fonksiyondan olusturulan objeler erisemez.

// // Object.create()

// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.name = `Steven`;
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__);
// console.log(steven.__proto__ === PersonProto); // true

// const sarah = Object.create(PersonProto);
// sarah.init(`Sarah`, 1979);
// sarah.calcAge();

////////////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student(`Mike`, 2020, `Computer Science`);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

///////////////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2022 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     if (name.includes(` `)) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log(`Hey there 👋`);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2022 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2022 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl(`Martha Jones`, 2012, `Computer Science`);
// martha.introduce();
// martha.calcAge();

/////////////////////////////////////////
// Inheritance Between "Classes": Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// const jay = Object.create(StudentProto);
// jay.init(`Jay`, 2001, `Computer Science`);
// jay.introduce = function () {
//   console.log(
//     `My name is ${this.firstName}. I was born in ${this.birthYear} and I am studying ${this.course} now.`
//   );
// };
// console.log(jay);
// jay.introduce();
// jay.calcAge();
/////////////////////////////////////////////////

// class Account {
//   // 1) public fields (instances)
//   locale = navigator.language;

//   // 2) Private fields
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     // protected property
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // 3) Public methods
//   // Public interface
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdrawal(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     // if (this.#approveLoan(val)) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//     return this;
//   }

//   static helper() {
//     console.log(`Helper`);
//   }

//   // 4) Private methods
//   // #approveLoan(val) {
//   _approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account(`Jonas`, `EUR`, 1111);
// console.log(acc1);

// // acc1.movements.push(250);
// // acc1.movements.push(-140);
// acc1.deposit(250);
// acc1.withdrawal(-140);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements());

// console.log(acc1);

// // console.log(acc1.#movements); Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class
// // console.log(acc1.#pin);
// // console.log(acc1.#approveLoan(100));

// Account.helper();
// // acc1.helper();

// // Chaining
// acc1
//   .deposit(300)
//   .deposit(500)
//   .withdrawal(35)
//   .requestLoan(25000)
//   .withdrawal(4000);
// console.log(acc1.getMovements());
