'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2021-11-18T21:31:17.178Z',
    '2021-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-02-01T10:17:24.185Z',
    '2022-03-08T14:11:59.604Z',
    '2022-04-07T17:01:17.194Z',
    '2022-04-11T20:36:17.929Z',
    '2022-04-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const sortMovements = function (movs, dates) {
  const arrCombined = [],
    sortedMovs = [],
    sortedDates = [];
  movs.forEach((el, i) => arrCombined.push([movs[i], dates[i]]));
  arrCombined.sort((a, b) => a[0] - b[0]);
  arrCombined.forEach(el => {
    sortedMovs.push(el[0]);
    sortedDates.push(el[1]);
  });
  return [sortedMovs, sortedDates];
};

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: `currency`,
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const [movs, dates] = sort
    ? sortMovements(acc.movements, acc.movementsDates)
    : [acc.movements, acc.movementsDates];

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(dates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${formatCur(
    acc.balance,
    acc.locale,
    acc.currency
  )}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formatCur(incomes, acc.locele, acc.currency)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${formatCur(
    Math.abs(out),
    acc.locele,
    acc.currency
  )}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${formatCur(
    interest,
    acc.locele,
    acc.currency
  )}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }

    // Decrease 1s
    time--;
  };

  // Set time to 5 mins
  let time = 300;

  // Call the timer every sec
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const options = {
      day: `numeric`,
      hour: `numeric`,
      minute: `numeric`,
      month: `numeric`,
      year: `numeric`,
      //weekday: `short`,
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//////////////////////////////////// CONVERTING AND CHECKING NUMBERS ///////////////////////////////////////////
// console.log(23 === 23.0); // true

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3); // false

// // Conversion
// console.log(Number(`23`)); // convert to number
// console.log(+`23`); // convert to number

// // Parsing
// console.log(Number.parseInt(`30px`, 10)); // 30
// console.log(Number.parseInt(`px30`, 10)); // NaN

// console.log(Number.parseInt(`  2.5rem  `)); // 2
// console.log(Number.parseFloat(`  2.5rem  `)); // 2.5

// // console.log(parseFloat(`  2.5rem  `)); // 2.5

// // Check if value is NaN
// console.log(Number.isNaN(20)); // false
// console.log(Number.isNaN(`20`)); // false
// console.log(Number.isNaN(+`20x`)); // true
// console.log(Number.isNaN(23 / 0)); // false

// // Checking if a value is a number
// console.log(Number.isFinite(20)); // true
// console.log(Number.isFinite(`20`)); // false
// console.log(Number.isFinite(+`20x`)); // false
// console.log(Number.isFinite(23 / 0)); // false

// console.log(Number.isInteger(23)); // true
// console.log(Number.isInteger(23.0)); // true
// console.log(Number.isInteger(23 / 0)); // false

/////////////////////////////////////////// MATH AND ROUNDING //////////////////////////////////////////////////

// console.log(Math.sqrt(81)); // karekok
// console.log(25 ** (1 / 2)); //karekok
// console.log(25 ** (1 / 3)); //kupkok

// console.log(Math.max(5, 18, 23, 54, 2)); // 54
// console.log(Math.max(5, 18, 23, `54`, 2)); // 54
// console.log(Math.max(5, 18, 23, `54px`, 2)); // NaN

// console.log(Math.min(5, 18, 23, 54, 2)); // 2

// console.log(Math.PI * Number.parseFloat(`10px`) ** 2); // pi r^2

// console.log(Math.trunc(Math.random() * 6) + 1); // 1 - 6 arasi random sayi

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20));

// // Rounding integers
// console.log(Math.trunc(23.3)); // 23

// console.log(Math.round(23.3)); // 23
// console.log(Math.round(23.9)); // 24

// console.log(Math.ceil(23.3)); // 24
// console.log(Math.ceil(23.9)); // 24

// console.log(Math.floor(23.3)); // 23
// console.log(Math.floor(`23.9`)); // 23

// console.log(Math.trunc(23.3)); // 23
// console.log(Math.floor(23.9)); // 23

// console.log(Math.trunc(-23.3)); // -23
// console.log(Math.floor(-23.9)); // -24

// // Rounding decimals
// console.log((2.7).toFixed(0)); // string 3
// console.log((2.7).toFixed(3)); // string 2.700
// console.log((2.345).toFixed(2)); // string 2.35
// console.log(+(2.345).toFixed(2)); // number 2.35

// THE REMAINDER OPERATOR

// console.log(5 % 2); // 1
// console.log(5 / 2); // 2.5 --> 2 --> 2 * 2 + 1

// console.log(8 % 3); // 2
// console.log(8 / 3); // 2.6 --> 2 --> 2 * 3 + 2

// console.log(6 % 2); // 0
// console.log(6 / 2); // 3

// console.log(7 % 2); // 1
// console.log(7 / 2); // 3 * 2 + 1

// const isEven = n => n % 2 === 0;
// console.log(isEven(8)); // true
// console.log(isEven(23)); // false
// console.log(isEven(514)); // true

// labelBalance.addEventListener(`click`, function () {
//   [...document.querySelectorAll(`.movements__row`)].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });

//////////////////////////////////////////// NUMERIC SEPERATOR /////////////////////////////////////////////////

// // 287,460,000,000
// const diameter = 287_460_000_000;
// console.log(diameter); // 287460000000

// const price = 345_99;
// console.log(price); // 34599

// const transferFee = 15_00;
// const transferFee1 = 1_500;

// const PI = 3.14_15;
// // const PI2 = _3_._14_15_; hatali kullanim yerleri
// console.log(PI); // 3.1415

// console.log(Number(`230000`)); // 230000
// console.log(Number(`230_000`)); // NaN
// console.log(parseInt(`230_000`)); // 230

/////////////////////////////////////////////// BIGINT /////////////////////////////////////////////////////////

// console.log(2 ** 53 - 1); // max int number
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(4342343453453251345134543253532451n);
// console.log(BigInt(4342343453));

// // Operations
// console.log(10000n + 10000n);
// console.log(128364283764826123123123827143n * 10000000n);
// // console.log(Math.sqrt(16n)); Cannot convert a BigInt value to a number

// const huge = 234923874928374982374982374n;
// const num = 23;
// // console.log(huge * num); // Cannot mix BigInt and other types, use explicit conversions
// console.log(huge * BigInt(num));

// // Exceptions
// console.log(20n > 15); // true
// console.log(20n === 20); // false
// console.log(typeof 20n);
// console.log(`20` == 20n); // true

// console.log(huge + ` is REALLY big!!!`); // 234923874928374982374982374 is REALLY big!!!

// // Divisions
// console.log(10n / 3n); // 3n
// console.log(10 / 3); // 3.3333333333333335

//////////////////////////////////////// CREATING DATES ////////////////////////////////////////////////////////
// const now = new Date();
// console.log(now);

// console.log(new Date(`Wed Apr 13 2022 11:55:12`));
// console.log(new Date(`December 24, 2015`));
// console.log(new Date(`November 18, 1997`));
// console.log(new Date(account1.movementsDates[0]));

// // javascriptde aylar 0-11 arasi belirtilir.
// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31)); // kasim ayi 31 gun surmez. 1 Aralik olarak cikti verir.
// console.log(new Date(2037, 10, 33)); // kasim ayi 33 gun surmez. 3 Aralik olarak cikti verir.

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear()); // 2037
// console.log(future.getMonth()); // 10
// console.log(future.getDate()); // 19
// console.log(future.getDay()); // 4
// console.log(future.getHours()); // 15
// console.log(future.getMinutes()); // 23
// console.log(future.getSeconds()); // 0
// console.log(future.toISOString()); // 2037-11-19T12:23:00.000Z
// console.log(future.getTime()); // 2142246180000
// console.log(new Date(2142246180000)); // Thu Nov 19 2037 15:23:00 GMT+0300 (GMT+03:00) - kodun yazildigi gun

// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
// console.log(days1);

//////////////////////////////////////// INTL NUMBER FORMAT ////////////////////////////////////////////////////

// const num = 234234234.23;
// const options = {
//   style: `currency`,
//   unit: `celsius`,
//   currency: `EUR`,
// };

// console.log(`US: `, new Intl.NumberFormat(`en-US`, options).format(num));
// console.log(`Germany : `, new Intl.NumberFormat(`de-DE`, options).format(num));
// console.log(`Syria : `, new Intl.NumberFormat(`ar-SY`, options).format(num));
// console.log(`Turkey : `, new Intl.NumberFormat(`tr-TR`, options).format(num));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language, options).format(num)
// );

//////////////////////////////// TIMERS / SETTIMEOUT / SETINTERVAL /////////////////////////////////////////////

// SETTIMEOUT

// const ingredients = [`olives`, `spinach`];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
//   3000,
//   ...ingredients // ingredients dizisi icinde yer alan elemanlari param olarak gonderdik
//   //`olives`, // birinci param
//   //`spinach` // ikinci param
// ); // settimeout fonksiyonlarina parametre gondermek
// console.log(`Waiting...`);

// // eger ingredientsin icinde spinach var ise pizzaTimer degiskeninde calisan timeout fonksiyonunun zamanlayicisini clearlayarak iptal ettik.
// if (ingredients.includes(`spinach`)) clearTimeout(pizzaTimer);

// SETINTERVAL

// setInterval(function () {
//   const now = new Date();
//   console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
// }, 1000);
