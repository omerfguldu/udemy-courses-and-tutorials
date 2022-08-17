
console.log(`*** Coding Challenge I ***`);
let massJohn = 92, massMark = 78, heightJohn = 1.95, heightMark = 1.69;
let bmi = 0;
let calculateMarksBmi, calculateJohnsBmi;
let markHigherBMI;
// TEST I
calculateMarksBmi = massMark / (heightMark ** 2);
calculateJohnsBmi = massJohn / (heightJohn * heightJohn);
markHigherBMI = calculateMarksBmi > calculateJohnsBmi
console.log(`Mark's BMI : ${calculateMarksBmi}`);
console.log(`John's BMI : ${calculateJohnsBmi}`);
console.log(`Is Mark's BMI higher than John : ${markHigherBMI}`);
// TEST II
massJohn = 85;
heightJohn = 1.76;
massMark = 95;
heightMark = 1.88;
calculateMarksBmi = massMark / (heightMark ** 2);
calculateJohnsBmi = massJohn / (heightJohn ** 2);
markHigherBMI = calculateMarksBmi > calculateJohnsBmi
console.log(`Mark's BMI : ${calculateMarksBmi}`);
console.log(`John's BMI : ${calculateJohnsBmi}`);
console.log(`Is Mark's BMI higher than John : ${markHigherBMI}`);





if (calculateMarksBmi >= calculateJohnsBmi) {
    console.log(`Mark's BMI (${calculateMarksBmi.toFixed(1)}) is higher than John's (${calculateJohnsBmi.toFixed(1)})`);
} else {
    console.log(`John's BMI (${calculateJohnsBmi.toFixed(1)}) is higher than Mark's (${calculateMarksBmi.toFixed(1)})`);
}





const dolphinsRaceOneScore = 97;
const dolphinsRaceTwoScore = 112;
const dolphinsRaceThreeScore = 101;
const koalasRaceOneScore = 109;
const koalasRaceTwoScore = 95;
const koalasRaceThreeScore = 123;
const dolphinsAverage = ((dolphinsRaceOneScore + dolphinsRaceThreeScore + dolphinsRaceTwoScore) / 3).toFixed(1);
const koalasAverage = ((koalasRaceOneScore + koalasRaceTwoScore + koalasRaceThreeScore) / 3).toFixed(1);
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`Dolphins Average : ${dolphinsAverage} || Koalas Average : ${koalasAverage}
    Winner is : Dolphins`);
}
else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log(`Dolphins Average : ${dolphinsAverage} || Koalas Average : ${koalasAverage}
    Winner is : Koalas`);
}
else if (koalasAverage === dolphinsAverage && koalasAverage >= 100) {
    console.log(`Average scores are equal. There is no winner.`);
}
else {
    console.log(`Both team's average scores are under 100. So there is no winner.`);
}





const bill = 430;
let tip = 0;
console.log(`The bill was ${bill}, the tip was ${(bill >= 50 && bill <= 300) ? tip = (bill * 15 / 100) : tip = (bill * 20 / 100)}, and the total value ${bill + tip}`);