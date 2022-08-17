'use strict';

// const bookings = [];

// const createBooking = function (
//   // ES6 default values
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking(`LH123`);
// createBooking(`LH123`, 2, 800);
// createBooking(`LH123`, 5);

// createBooking(`LH123`, undefined, 1000); // 2. parametreyi default olarak vermemizi saglar

// console.log(bookings);

// const flight = `LH234`;
// const omer = {
//   name: `Omer Guldu`,
//   passport: 6547895642,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = `LH999`;
//   passenger.name = `Mr. ` + passenger.name;

//   if (passenger.passport === 6547895642) {
//     alert(`Check in`);
//   } else {
//     alert(`Wrong passport`);
//   }
// };

// checkIn(flight, omer);
// console.log(flight);
// console.log(omer);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(omer);
// checkIn(flight, omer);
// console.log(omer);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(` `);
//   return [first.toUpperCase(), ...others].join(` `);
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name} function`);
// };

// transformer(`JavaScript is the best!`, upperFirstWord);
// transformer(`JavaScript is the best!`, oneWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet(`Hey`);
// greeterHey(`Omer`);
// greeterHey(`Jonas `);

// greet(`Hello`)(`Omer`);

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet(`Hey`);
// greeterHey(`Omer`);
// greeterHey(`Jonas `);
// greet(`Hello`)(`Omer`);

// const lufthansa = {
//   airline: `Lufthansa`,
//   iataCode: `LH`,
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, `Omer Faruk Guldu`);
// lufthansa.book(635, `John Smith`);
// console.log(lufthansa);

// const eurowings = {
//   airline: `Eurowings`,
//   iataCode: `EW`,
//   bookings: [],
// };

// const book = lufthansa.book;

// // Does NOT work
// // book(23, `Sarah Williams`);

// // Call Method
// book.call(eurowings, 23, `Sarah Williams`);
// console.log(eurowings);

// book.call(lufthansa, 239, `Mary Cooper`);
// console.log(lufthansa);

// const swiss = {
//   airline: `Swiss Airlines`,
//   iataCode: `LX`,
//   bookings: [],
// };

// book.call(swiss, 583, `Omer Guldu`);

// // Apply Method
// book.apply(swiss, [398, `Omer Faruk`]);
// console.log(swiss);

// book.call(swiss, ...[398, `Omer Faruk`]);

// // Bind Method
// // book.call(eurowings, 23, `Sarah Williams`);

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, `Steven Williams`);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23(`James Williams`);
// bookEW23(`Martha Cooper`);

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application

// // const addTax = (rate, value) => value + value * rate;
// // console.log(addTax(0.1, 200));

// // const addVAT = addTax.bind(null, 0.23);
// // // addVAT = value => value + value * 0.23;

// // console.log(addVAT(100));
// // console.log(addVAT(23));

// const addTax = rate => val => val + val * rate;

// const addVAT = addTax(0.23);
// console.log(addVAT(100));
// console.log(addVAT(23));

// /////////////////////// Immediately Invoked Function Expressions (IIFE) //////////////////////////////////

// const runOnce = function () {
//   console.log(`This will never run again`);
// };
// runOnce();

// (function () {
//   console.log(`This will never run again`);
// })();

// (() => console.log(`This will also never run again`))();

// ///////////////////////////////////////// CLOSURES ///////////////////////////////////////////////////////

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

// // Example 1

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// // Re-assigning f function
// h();
// f();
// console.dir(f);

// // Example 2

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds.`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);
