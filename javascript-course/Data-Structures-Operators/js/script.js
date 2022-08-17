'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // new syntax
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // ES6 enhanced object literals
  openingHours,

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIng, ...otherIngs) {
    console.log(mainIng);
    console.log(otherIngs);
  },
};

// Split and join
console.log(`a+very+nice+string`.split(`+`));
console.log(`Omer Faruk Guldu`.split(` `));
const [firstN, middleN, lastN] = `Omer Faruk Guldu`.split(` `);
console.log(firstN, middleN, lastN);

const newN = [`Mr.`, firstN, middleN, lastN.toUpperCase()].join(` `);
console.log(newN);

// benim yaptigim cozum
// const capitalizeName = function (name) {
//   const nameArray = name.split(` `);
//   for (let i = 0; i < nameArray.length; i++) {
//     // nameArray[i] = nameArray[i][0].toUpperCase() + nameArray[i].slice(1);
//     nameArray[i] = nameArray[i].replace(
//       nameArray[i][0],
//       nameArray[i][0].toUpperCase()
//     ); // farkli cozumun benim yazdigim kodda uygulamasi
//   }
//   console.log(nameArray.join(` `));
// };

// egitmenin yaptigi cozum
const capitalizeName = function (name) {
  const names = name.split(` `);
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); // farkli bir cozum
  }
  console.log(namesUpper.join(` `));
};

const passenger = `jessica ann smith davis`;
capitalizeName(passenger);
capitalizeName(`omer faruk guldu`);

// Padding
const message = `Go to gate 23`;
console.log(message.padStart(22, `+`).padEnd(30, `+`));
console.log(`Omer`.padStart(16, `+`).padEnd(30, `+`));

const maskCreditCard = function (number) {
  const str = number + ``; // numarayi stringe cevirir
  const last = str.slice(-4);
  return last.padStart(str.length, `*`);
};
console.log(maskCreditCard(61321546));
console.log(maskCreditCard(65468461321546));
console.log(maskCreditCard(`45654684951321531`));

// Repeat
const message2 = `Bad weather... All Departures Delayed... `;
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${`✈`.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

// ///////////////////////////////// WORKING WITH STRINGS PART II ///////////////////////////////////////////

// const airline = `TAP Air Portugal`;

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// console.log(`omer`.toUpperCase());

// // Fix capitalization in name
// const passenger = `JoNaS`; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = `hello@jonas.io`;
// const loginEmail = ` Hello@Jonas.Io \n`;

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const priceGB = `288,97₤`;
// const priceUS = priceGB.replace(`₤`, `$`).replace(`,`, `.`);
// console.log(priceUS);

// const announcement = `All passengers come to boarding door 23. Boarding door 23!`;

// console.log(announcement.replace(`door`, `gate`));
// console.log(announcement.replaceAll(`door`, `gate`));
// console.log(announcement.replace(/door/g, `gate`));

// // Booleans
// const newPlane = `Airbus A320neo`;
// console.log(newPlane.includes(`A320`));
// console.log(newPlane.includes(`Boeing`));
// console.log(newPlane.startsWith(`Air`));
// console.log(newPlane.startsWith(`Aib`));

// if (newPlane.startsWith(`Airbus`) && newPlane.endsWith(`neo`)) {
//   console.log(`Part of the new airbus family`);
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
//     console.log(`You are not allowed on board`);
//   } else {
//     console.log(`Welcome aboard!`);
//   }
// };
// checkBaggage(`I have a laptop, some Food and a pocket Knife`);
// checkBaggage(`Socks and camera`);
// checkBaggage(`Got some snacks and a gun for protection`);

////////////////////////////////// WORKING WITH STRINGS PART I //////////////////////////////////////////////

// const airline = `TAP Air Portugal`;
// const plane = `A320`;

// console.log(plane[0]);
// console.log(`B737`[0]);

// console.log(airline.length);
// console.log(`B737`.length);

// console.log(airline.indexOf(`r`));
// console.log(airline.lastIndexOf(`r`));
// console.log(airline.indexOf(`Portugal`));
// console.log(airline.indexOf(`portugal`));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(` `)));
// console.log(airline.slice(airline.lastIndexOf(` `) + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats in small planes
//   const s = seat.slice(-1);
//   if (s === `B` || s === `E`) console.log(`You got the middle seat 😬`);
//   else console.log(`You got lucky 😎`);
// };

// checkMiddleSeat(`11B`);
// checkMiddleSeat(`23C`);
// checkMiddleSeat(`3E`);

////////////////////////////////////////////// MAPS /////////////////////////////////////////////////////////

// const rest = new Map();
// rest.set(`name`, `Classico Italiano`);
// rest.set(1, `Firenze, Italy`);
// rest.set(2, `Lisbon, Portugal`);
// console.log(rest.set(3, `Istanbul, Turkey`));

// rest
//   .set(`categories`, ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set(`open`, 11)
//   .set(`close`, 23)
//   .set(true, `We are open :)`)
//   .set(false, `We are closed :(`);

// console.log(rest.get(`name`));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get(`open`) && time < rest.get(`close`)));

// console.log(rest.has(`categories`));
// rest.delete(2);
// //rest.clear();
// console.log(rest);
// console.log(rest.size);

// const arr = [1, 2];
// rest.set(arr, `Test`);
// //rest.set([1, 2], `Test`);
// console.log(rest);
// console.log(rest.size);
// // console.log(rest.get([1, 2])); bu sekilde calismaz
// console.log(rest.get(arr));
// rest.set(document.querySelector(`h1`), `Heading`);
// console.log(rest);

// const question = new Map([
//   [`question`, `What is the best programming language in the world?`],
//   [1, `C`],
//   [2, `Java`],
//   [3, `JavaScript`],
//   [`correct`, 3],
//   [true, `Correct 🎉`],
//   [false, `Try again!`],
// ]);
// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz App
// console.log(question.get(`question`));
// for (const [key, val] of question) {
//   if (typeof key === `number`) console.log(`Option ${key}: ${val}`);
// }
// // const answer = Number(prompt(`Your answer`));
// // console.log(question.get(answer === question.get(`correct`)));

// // Convert map to array
// console.log([...question]);
// // console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

//////////////////////////////////////////// SETS ///////////////////////////////////////////////////////////

// const ordersSet = new Set([
//   `Pasta`,
//   `Pizza`,
//   `Pizza`,
//   `Risotto`,
//   `Pasta`,
//   `Pizza`,
// ]);
// console.log(ordersSet);

// console.log(new Set(`Omer`));

// console.log(ordersSet.size);
// console.log(ordersSet.has(`Pizza`));
// console.log(ordersSet.has(`Bread`));
// ordersSet.add(`Garlic Bread`);
// ordersSet.add(`Garlic Bread`);
// ordersSet.delete(`Risotto`);
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// //Example
// const staff = [`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`];
// const staffUnique = [...new Set(staff)];
// console.log(staff);
// console.log(staffUnique);

// console.log(new Set(staff).size);
// console.log(
//   new Set([`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`]).size
// );

// console.log(new Set(`asparagas`).size);

/////////////////////////////////////// Looping Objects /////////////////////////////////////////////////////

// // Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length} days: `;
// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property Values
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}.`);
// }

//////////////////////////////////// OPTIONAL CHAINING //////////////////////////////////////////////////////

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // with optional chaining
// // restaurant objesi icerisinde openingHours var ise ve mon da var ise open i yazdir.
// // soru isaretleri bu keylerin olup olmadigini kontrol ediyor. Eger yoksa undefined doner.
// // console.log(restaurant.openingHours?.mon?.open);

// // Example
// const weekdays1 = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
// for (const day of weekdays1) {
//   const openingHour = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`On ${day} we open at ${openingHour}`);
// }

// // optional chaining on methods
// console.log(restaurant.order?.(0, 1) ?? `Method doesn't exist`);
// console.log(restaurant.orderHamburger?.(0, 1) ?? `Method doesn't exist`);

// // optional chaining on arrays
// // const users = [{ name: `Omer`, email: `omerfguldu@gmail.com` }];
// const users = [];
// console.log(users[0]?.name ?? `User array empty`);

// //////////////////////////////// for - of loop ///////////////////////////////////////////////////////////

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// /////////////////////////////////// OR assignment operator ///////////////////////////////////////////////

// const rest1 = {
//   name: `Capri`,
//   numGuests: 0,
// };

// const rest2 = {
//   name: `La Pizza`,
//   owner: `Giovanni Rossi`,
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// //////////////////////////////////// AND assignment operator /////////////////////////////////////////////

// // rest1.owner = rest1.owner && `<ANONYMOUS>`;
// // rest2.owner = rest2.owner && `<ANONYMOUS>`;
// rest1.owner &&= `<ANONYMOUS>`;
// rest2.owner &&= `<ANONYMOUS>`;
// console.log(rest1);
// console.log(rest2);

// ///////////////////////////// The Nullish Coalescing Operator ////////////////////////////////////////////

// restaurant.numGuests = 0;
// const guest = restaurant.numGuests || 10;
// console.log(guest);

// // Nullish: null and undefined (NOT 0 or ``)
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// ////////////////////////// Short Circuiting (&& and ||) //////////////////////////////////////////////////

// console.log(`----- OR -----`);
// // Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || `Omer`);
// console.log(`` || `Omer`);
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || `` || `Hello` || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log(`----- AND -----`);
// console.log(0 && `Omer`);
// console.log(7 && `Omer`);

// console.log(`Hello` && 23 && null && `omer`);

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza(`mushrooms`, `spinach`);
// }

// restaurant.orderPizza && restaurant.orderPizza(`mushrooms`, `spinach`);

// //////////////////////////////////// REST OPERATOR ///////////////////////////////////////////////////////

// // 1) Destructring
// // spread, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // rest, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   numbers.forEach(number => {
//     sum += number;
//   });
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza(`mushrooms`, `onion`, `olives`, `spinach`);
// restaurant.orderPizza(`mushrooms`);

// //////////////////////////////////////// The Spread Operator /////////////////////////////////////////////

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays or more
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = `Omer`;
// const letters = [...str, ` `, `G.`];
// console.log(letters);
// console.log(...str);
// // *** console.log(`${...str} Guldu`); virgulle ayirilmis degerler yalnizca bir fonksiyonda veya dizide calisir. spread opearatoru template literals ile kullanilamaz. ***

// // Real world example
// // const ingredients = [
// //   prompt(`Let's make pasta! Ingredient 1?`),
// //   prompt(`Let's make pasta! Ingredient 2?`),
// //   prompt(`Let's make pasta! Ingredient 3?`),
// // ];
// // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: `1988`, ...restaurant, founder: `Guiseppe` };
// console.log(newRestaurant);

// const restaurantCopy = { ...newRestaurant };
// restaurantCopy.name = `Ristorante Roma`;
// console.log(restaurantCopy.name);
// console.log(newRestaurant.name);

// /////////////////////////////////////////// DESTRUCTRING OBJECTS /////////////////////////////////////////

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

////////////////////////////////////// DESTRUCTRING ARRAYS //////////////////////////////////////////////////
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr; // array destructring
// console.log(a, b, c);
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories; // ikinci elemani almadan ucuncu elemani aldik.
// console.log(main, secondary);

// // // destructring yapmadan main ve secondarynin degerlerini caprazlamak
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // destructring ile iki degiskenin degerlerini caprazlamak
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// ARRAY SIRALAMA DENEMESI

// const randomArr = [1, 5, 3, 9, 2, 6, 10, 4, 8, 7];
// console.log(randomArr);
// for (let i = 0; i < randomArr.length - 1; i++) {
//   for (let j = 0; j < randomArr.length - 1; j++) {
//     let [less, more] = [randomArr[j], randomArr[j + 1]];
//     if (less > more) {
//       [randomArr[j], randomArr[j + 1]] = [more, less];
//     }
//   }
// }
// console.log(randomArr);
