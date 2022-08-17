// 'use strict';

// console.log(`*** Coding Challenge I ***`);
// // const dogsJulia = [3, 5, 2, 12, 7];
// // const dogsKate = [9, 16, 6, 8, 3];
// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];

// const checkDogs = function (arrOne, arrTwo) {
//   const copyArr = arrOne.slice();
//   copyArr.splice(0, 1);
//   copyArr.splice(-2);
//   const dogsArr = copyArr.concat(arrTwo);
//   console.log(dogsArr);
//   dogsArr.forEach(function (dogAge, i) {
//     const status = dogAge >= 3 ? `adult` : `puppy 🐶`;
//     console.log(
//       `Dog number ${i + 1} is still a ${status}, and is ${dogAge} years old.`
//     );
//   });
// };

// checkDogs(dogsJulia, dogsKate);

// console.log(`*** Coding Challenge II ***`);

// const calcAverageHumanAge = function (dogsAges) {
//   let humanAges = dogsAges.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//   console.log(`Dogs ages in human years : ${humanAges}`);
//   humanAges = humanAges.filter(val => val >= 18);
//   console.log(`Dogs that over 18 years old in human age : ${humanAges}`);
//   humanAges = humanAges.reduce((acc, val, _, arr) => acc + val / arr.length, 0);
//   console.log(`Average age of that dogs : ${humanAges}`);
// };

// console.log(`Calculations for [5, 2, 4, 1, 15, 8, 3] array:`);
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// console.log(`Calculations for [16, 6, 10, 5, 6, 1, 4] array:`);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(`*** Coding Challenge III ***`);

// const calcAverageHumanAge = dogsAges => {
//   return dogsAges
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(val => val >= 18)
//     .reduce((acc, val, _, arr) => acc + val / arr.length, 0);
// };

// console.log(`Calculations for [5, 2, 4, 1, 15, 8, 3] array:`);
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// console.log(`Calculations for [16, 6, 10, 5, 6, 1, 4] array:`);
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

///////////////////////////////////////////////// BENIM COZUMLERIM /////////////////////////////////////////////
//current > (recommended * 0.90) && current < (recommended * 1.10)
console.log(`*** Coding Challenge IV ***`);
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  dog.maxLimit = Math.trunc(dog.recommendedFood * 1.1);
  dog.minLimit = Math.trunc(dog.recommendedFood * 0.9);
  dog.okayAmount =
    dog.curFood < dog.maxLimit && dog.curFood > dog.minLimit ? true : false;
});
console.log(dogs);

// 2.
const sarahsdog = dogs.filter(dog => dog.owners.includes(`Sarah`))[0];
console.log(
  sarahsdog.curFood > sarahsdog.maxLimit ? `Eats too much` : `Eats too little`
);

// 3.
const eatHabit = function (dogArr) {
  const ownersEatTooMuch = dogArr
    .filter(dog => dog.curFood > dog.maxLimit)
    .map(dog => dog.owners);
  const ownersEatTooLittle = dogArr
    .filter(dog => dog.curFood < dog.minLimit)
    .map(dog => dog.owners);
  return [ownersEatTooMuch, ownersEatTooLittle];
};
const [tooMuch, tooLittle] = eatHabit(dogs);
console.log(`Too much: ${tooMuch} --- Too little: ${tooLittle}`);

// 4.
console.log(`${tooMuch.flat().join(` and `)}'s dogs eat too much!`);
console.log(`${tooLittle.flat().join(` and `)}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
console.log(dogs.some(dog => dog.okayAmount));

// 7.
const okayAmount = dogs.filter(dog => dog.okayAmount);
console.log(okayAmount);

// 8.
const recommendedfood = dogs.slice().map(dog => Number(dog.recommendedFood));
const sorteddogs = dogs
  .slice()
  .map(dog => Number(dog.recommendedFood))
  .sort((a, b) => a - b)
  .map(dog => dogs[recommendedfood.indexOf(dog)]);
console.log(sorteddogs);

////////////////////////////////////////// EGITMENIN COZUMLERI /////////////////////////////////////////////////

const dogs2 = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// 1.
dogs2.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs2);

// 2.
const dogSarah = dogs2.find(dog => dog.owners.includes(`Sarah`));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recommendedFood ? `much` : `little`
  }`
);

// 3.
const ownersEatTooMuch2 = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch2);

const ownersEatTooLittle2 = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle2);

// 4.
console.log(`${ownersEatTooMuch2.join(` and `)} dogs eat too much!`);
console.log(`${ownersEatTooLittle2.join(` and `)} dogs eat too little!`);

// 5.
console.log(dogs2.some(dog => dog.curFood === dog.recommendedFood));

// 6.
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs2.some(checkEatingOkay));

// 7.
console.log(dogs2.filter(checkEatingOkay));

// 8.
const dogsSorted = dogs2
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
