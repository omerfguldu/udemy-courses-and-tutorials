'use strict';

console.log(`*** CODING CHALLENGE I ***`);
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2)
    return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  else if (avgKoalas >= avgDolphins * 2)
    return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  else return console.log(`There is no winner.`);
};
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const averageDolphins = calcAverage(85, 54, 41);
const averageKoalas = calcAverage(23, 34, 27);
checkWinner(averageDolphins, averageKoalas);

console.log(`*** CODING CHALLENGE II ***`);
const calcTip = value =>
  value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;
console.log(`100 tl icin bahsis : ${calcTip(100)}`);
const bills = [125, 555, 44];
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];
const total = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[bills.length - 1] + tips[tips.length - 1],
];
console.log(bills, tips, total);

console.log(`*** CODING CHALLENGE III ***`);
const personMark = {
  fullName: `Mark Miller`,
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmiValue = (this.mass / this.height ** 2).toFixed(1);
    return this.bmiValue;
  },
};
const personJohn = {
  fullName: `John Smith`,
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmiValue = (this.mass / this.height ** 2).toFixed(1);
    return this.bmiValue;
  },
};
console.log(
  `${
    personMark.calcBMI() > personJohn.calcBMI()
      ? `Mark's BMI (${personMark.bmiValue}) is higher than John's (${personJohn.bmiValue})`
      : `John's BMI (${personJohn.bmiValue}) is higher than Mark's (${personMark.bmiValue})`
  }`
);

console.log(`*** CODING CHALLENGE IV ***`);
const billsArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsArray = [];
const totalsArray = [];
for (let i = 0; i < billsArray.length; i++) {
  tipsArray.push(calcTip(billsArray[i]));
  totalsArray.push(billsArray[i] + tipsArray[i]);
}
console.log(billsArray);
console.log(tipsArray);
console.log(totalsArray);
let sum = 0,
  avg;
const calcAverageFunc = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = sum / arr.length;
  return avg;
};
const testArr1 = [5, 10];
console.log(calcAverageFunc(testArr1));
console.log(calcAverageFunc(totalsArray));

console.log(`*** CODING CHALLENGE V ***`);
const printForecast = function (arr) {
  let str = `... `;
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  return str;
};
console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
