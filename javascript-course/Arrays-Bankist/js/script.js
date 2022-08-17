'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ``;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>`;
    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(` `)
      .map(name => name[0])
      .join(``);
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event Handler
let currentAcc;
btnLogin.addEventListener(`click`, function (e) {
  // Prevent form from submitting
  e.preventDefault();
  currentAcc = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAcc);

  if (currentAcc?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAcc.owner.split(` `)[0]
    }`;
    containerApp.style.opacity = 100;

    // Update UI
    updateUI(currentAcc);
  }

  // Clear input fields
  inputLoginUsername.value = inputLoginPin.value = ``;
  inputLoginPin.blur();
});

btnTransfer.addEventListener(`click`, function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = ``;
  inputTransferTo.blur();

  if (
    amount > 0 &&
    receiverAcc &&
    currentAcc.balance >= amount &&
    receiverAcc?.username !== currentAcc.username
  ) {
    // Doing the transfer
    currentAcc.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAcc);
  }
});

btnLoan.addEventListener(`click`, function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAcc.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAcc.movements.push(amount);

    // Update UI
    updateUI(currentAcc);
  }

  inputLoanAmount.value = ``;
});

btnClose.addEventListener(`click`, function (e) {
  e.preventDefault();
  const closedAccUser = inputCloseUsername.value;
  const closedIndex = accounts.findIndex(
    acc => acc.username === currentAcc.username
  );
  const closedAccPin = Number(inputClosePin.value);
  inputClosePin.value = inputCloseUsername.value = ``;
  inputClosePin.blur();
  if (
    currentAcc.username === closedAccUser &&
    currentAcc.pin === closedAccPin
  ) {
    // Delete account
    accounts.splice(closedIndex, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAcc.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

// // SPLICE
// // splice slice ile neredeyse ayni gorevi gorur. Splice slicedan farkli olarak arrayin kendisini de degistirir. Ayrica slicede ikinci parametre dahil edilmezken splice da 1. parametrede verilen indeks degerinden baslayarak 2. parametrede verilen indeks degerince veriyi diziden siler
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE
// // reverse metodu orijinal diziyide gunceller
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(` - `));

// // AT()
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // son elemani verir
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// // at metodu ile son elemani almak
// console.log(arr.at(-1));

// console.log(`omer`.at(0));
// console.log(`omer`.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdraw ${Math.abs(movement)}`);
//   }
// }

// console.log(`---------- FOREACH --------------`);
// // parametre sirasi onemli !!!
// // forEach metodunda break veya continue yaparak donguden cikilamaz.
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
//   }
// });

// // forEach on MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // forEach on SET
// const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`, `EUR`]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}`);
// });

// ////////////////////////////////// MAP -- FILTER -- REDUCE //////////////////////////////////////////////////

// /////////////////////////////////////// MAP  ////////////////////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;
// // const movementsUSD = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });
// const movementsUSD = movements.map(mov => mov * eurToUsd); // arrow func
// console.log(movements);
// console.log(movementsUSD);

// // for of loop ile ayni islemin yapilmasi
// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor);

// const movementsDesc = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDesc);

// /////////////////////////////////////// FILTER  /////////////////////////////////////////////////////////////

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// // for of loop ile ayni islemin yapilmasi
// const depositsfor = [];
// for (const mov of movements) {
//   if (mov > 0) depositsfor.push(mov);
// }
// console.log(depositsfor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// /////////////////////////////////////// REDUCE  /////////////////////////////////////////////////////////////

// console.log(movements);

// // accumulator is like a snowball
// // const balance = movements.reduce(function (acc, cur) {
// //   console.log(`Iteration number ${i}: ${acc}`);
// //   return acc + cur;
// // }, 0);
// const balance = movements.reduce((acc, mov) => acc + mov, 0);
// console.log(balance);

// // for of loop ile ayni islemin yapilmasi
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// Maximum value of an array with reduce
// const maxVal = movements.reduce(
//   (acc, val) => (acc > val ? acc : val),
//   movements[0]
// );
// console.log(maxVal);

// Chaining Methods

// const eurToUsd = 1.1;

// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// FIND METHOD

// // find metodu icerde boolena bir kosula gore buldugu ilk elemani dondurur. filter metodu verilen kosula uyan tum elemanlari bir diziye aktarirken find metodu buldugu ilk degeri doner.
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);
// const account = accounts.find(acc => (acc.owner = `Jessica Davis`));
// console.log(account);

// // ayni islem for of ile yapilisi
// for (const acc of accounts) {
//   if (acc.owner === `Jessica Davis`) {
//     console.log(acc);
//     break;
//   }
// }

// FINDINDEX METHOD

// bulunan elemanin degerini degil indexinin dondurur.

// SOME METHOD

// // includes ile dizide belli bir degerin olup olmadigi kontrol edilir. True veya false doner.
// console.log(movements);
// console.log(movements.includes(-130));

// // some metodunda ise dizi icinde kontrol edilecek deger boolean ifade ile yazilabilir. True veya false doner.
// const anyDeposits = movements.some(mov => mov > 5000);
// console.log(anyDeposits);

// EVERY METHOD

// console.log(movements.every(mov => mov >= 0));

// console.log(account4.movements.every(mov => mov >= 0));

// // Separate callback

// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(account4.movements.every(deposit));
// console.log(movements.filter(deposit));

// FLAT METHOD

// // flat metodu nested arrayleri tek bir array halinde yazdirir.
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// // nested leveli 1 den fazla ise nested levelinin degerini yazmamiz gerekir.
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// // flat metodu ile accounts dizisi icinde yer alan account objelerinin her birinde yer alan movements arraylerinin bir araya geldikten sonra flat ile tek bir array haline donusturulup toplanmasi
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// // flatMap ile ayni islemin yapilmasi. flatMap yalnizca 1 level nested arraylerle kullanilabilir.
// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// SORT METHOD

// sort metodu orijinal diziyi de etkiler.
// Strings
// const owners = [`Jonas`, `Zac`, `Adam`, `Martha`];
// console.log(owners.sort());
// console.log(owners);

// // Numbers
// console.log(movements);
// console.log(movements.sort());

// // Ascending
// movements.sort((a, b) => a - b);
// console.log(movements);

// // Descending
// movements.sort((a, b) => b - a);
// console.log(movements);

// Create New Arrays

// const array = [1, 2, 3, 4, 5, 6, 7];
// const x = new Array(7); // 7 elemanli bos bir dizi olusturur.
// console.log(x);
// console.log(x.map(() => 5)); // bu sekilde eleman eklenemez.

// // x.fill(5); // arrayi arayin uzunlugu boyunca girilen deger ile doldurur.
// // x.fill(1, 3); // 3. indexten baslayarak diziyi 1 ile doldurur.
// x.fill(1, 3, 5); // 3. indexten baslar 5. ye kadar 1 ile doldurur. 5 dahil degil.
// console.log(x);

// console.log(array);
// array.fill(23, 2, 6); // [1, 2, 23, 23, 23, 23, 7]
// console.log(array);

// // Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y); // [1, 1, 1, 1, 1, 1, 1]

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z); // [1, 2, 3, 4, 5, 6, 7]

// labelBalance.addEventListener('click', function (e) {
//   e.preventDefault();
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace(`€`, ``))
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });

///////////////////////////////////// Array Methods Practice ///////////////////////////////////////////////////

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(bankDepositSum);

// 2.
// accountlardaki butun movementlarin icinde degeri 1000 e esit veya daha buyuk olanlarin sayisini bulma
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposits1000);

// ayni islemin reduce ile yapilmasi
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => (cur >= 1000 ? ++acc : acc), 0);
console.log(numDeposits1000);

// 3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? `deposits` : `withdrawals`] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

// ayni ornek dizi kullanilarak yapilisi
const [depositsVal, withdrawalsVal] = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 0 : 1] += cur;
      return sums;
    },
    [0, 0]
  );
console.log(`Deposits sum: ${depositsVal}, Withdrawals sum: ${withdrawalsVal}`);

// 4.
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = [`a`, `an`, `and`, `the`, `but`, `or`, `on`, `in`, `with`];

  const titleCase = title
    .toLowerCase()
    .split(` `)
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(` `);
  return capitalize(titleCase);
};
console.log(convertTitleCase(`this is a nice title`));
console.log(convertTitleCase(`this is a LONG title but not too long`));
console.log(convertTitleCase(`and here is another title with an EXAMPLE`));
