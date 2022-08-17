// LECTURE VALUES AND VARIABLES ASSIGNMET
console.log(`*** Assignment I ***`);
let country = `Turkey`
const continent = `Europe`
let population = 84.3
console.log(`Country = ${country}
Continent = ${continent}
Population = ${population}`);


console.log(`*** Assignment II ***`);
let isIsland = false
let language
console.log(`typeof isIsland = ${typeof isIsland}`);
console.log(`typeof language = ${typeof language}`);
console.log(`typeof population = ${typeof population}`);
console.log(`typeof country = ${typeof country}`);


console.log(`*** Assignment III ***`);
language = 'turkish'
console.log(language);
// continent degismeyecegi icin let olan tanimini const yaptik
// continent = 'America' // const tanimli continent degiskenini Europe den America ya degistirmek istedigimizde hata aliriz.


console.log(`*** Assignment IV ***`);
population++;
console.log(population);
const populationOfFinland = 6;
console.log(population > populationOfFinland);
const averagePopulation = 33;
console.log(population < averagePopulation);
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`
console.log(description);


console.log(`*** Assignment V ***`);
console.log(description)


console.log(`*** Assignment VI ***`);
if (population >= 33) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average.`);
}


console.log(`*** Assignment VII ***`);
console.log('9' - '5'); // Tahmin : 4 Sonuc : 4 | ✔ 
console.log('19' - '13' + '17'); // Tahmin : 617 Sonuc : 617 | ✔ 
console.log('19' - '13' + 17); // Tahmin : 617 Sonuc : 23 | ❌ --> cikan sonuc number olarak gelir
console.log('123' < 57); // Tahmin : false Sonuc : false | ✔
console.log(5 + 6 + '4' + 9 - 4 - 2); // Tahmin : 117 Sonuc : 1143 | ❌ --> my bad


console.log(`*** Assignment VII ***`);
let numNeighbours = 5;
//let numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));
if (numNeighbours === 1) console.log(`Only 1 border!`);
else if (numNeighbours > 1) console.log(`More than 1 border`);
else console.log(`No borders`);


console.log(`*** Assignment VIII ***`);
if (!isIsland && language === `English` && population < 50) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}


console.log(`*** Assignment IX ***`);
switch (language) {
    case `chinese`:
    case `mandarin`:
        console.log(`MOST number of native speakers!`);
        break;
    case `spanish`:
        console.log(`2nd place in number of native speakers`);
        break;
    case `english`:
        console.log(`3rd place`);
        break;
    case `hindi`:
        console.log(`Number 4`);
        break;
    case `arabic`:
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Great language too :D`);
        break;
}


console.log(`*** Assignment IX ***`);
console.log(`${country}'s population is ${population < 33 ? `below` : `above`} average.`);