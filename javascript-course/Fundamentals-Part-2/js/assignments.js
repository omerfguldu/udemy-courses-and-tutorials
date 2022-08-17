'use strict';



console.log(`*** ASSIGNMENT I ***`);
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}
const country1 = describeCountry(`Turkey`, 84.3, `Ankara`);
const country2 = describeCountry(`Germany`, 83.2, `Berlin`);
const country3 = describeCountry(`France`, 67.4, `Paris`);
console.log(country1);
console.log(country2);
console.log(country3);



console.log(`*** ASSIGNMENT II ***`);
const worldPopulation = 7900;
console.log(`With Function Declaration`);
function percentageOfWorld1(population) {
    return (population / worldPopulation * 100).toFixed(1);
}
const countryOnePopulation = percentageOfWorld1(1441);
console.log(`${countryOnePopulation} % of the worlds is Chinese`);
const countryTwoPopulation = percentageOfWorld1(84.3);
console.log(`${countryTwoPopulation} % of the worlds is Turks`);
const countryThreePopulation = percentageOfWorld1(67.4);
console.log(`${countryThreePopulation} % of the world is French`);
console.log(`With Function Expression`)
const percentageOfWorld2 = function (population) {
    return (population / worldPopulation * 100).toFixed(1);
}
const countryOnePopulation2 = percentageOfWorld2(1441);
console.log(`${countryOnePopulation2} % of the worlds is Chinese`);
const countryTwoPopulation2 = percentageOfWorld2(84.3);
console.log(`${countryTwoPopulation2} % of the worlds is Turks`);
const countryThreePopulation2 = percentageOfWorld2(67.4);
console.log(`${countryThreePopulation2} % of the world is French`);



console.log(`*** ASSIGNMENT III ***`);
console.log(`With Arrow Function`)
const percentageOfWorld3 = population => (population / worldPopulation * 100).toFixed(1);
const countryOnePopulation3 = percentageOfWorld3(1441);
console.log(`${countryOnePopulation3} % of the worlds is Chinese`);
const countryTwoPopulation3 = percentageOfWorld3(84.3);
console.log(`${countryTwoPopulation3} % of the worlds is Turks`);
const countryThreePopulation3 = percentageOfWorld3(67.4);
console.log(`${countryThreePopulation3} % of the world is French`);



console.log(`*** ASSIGNMENT IV ***`);
const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld3(population)} % of the world.`;
console.log(describePopulation(`Turkey`, 84.3));
console.log(describePopulation(`France`, 67.4));
console.log(describePopulation(`China`, 1441));



console.log(`*** ASSIGNMENT V ***`);
const populationOfCountries = [84.3, 1443, 67.4, 83.2];
console.log(`Population of countries array = ${populationOfCountries}`);
console.log(`Population array has 4 elements : ${populationOfCountries.length == 4}`);
const percentages = [percentageOfWorld1(populationOfCountries[0]), percentageOfWorld1(populationOfCountries[1]), percentageOfWorld1(populationOfCountries[2]), percentageOfWorld1(populationOfCountries[populationOfCountries.length - 1])];
console.log(`Percentages of country populations = ${percentages}`);



console.log(`*** ASSIGNMENT VI ***`);
const neighboursOfTurkey = [`Bulgaristan`, `Greece`, `Gurcistan`, `Azerbaycan`, `Suriye`, `Irak`, `Ermenistan`, `Iran`];
console.log(neighboursOfTurkey);
neighboursOfTurkey.push(`Utopia`);
console.log(neighboursOfTurkey);
neighboursOfTurkey.pop();
console.log(neighboursOfTurkey);
if (neighboursOfTurkey.includes(`Germany`)) console.log(`Probably not a central European country :D`);
neighboursOfTurkey[neighboursOfTurkey.indexOf(`Greece`)] = `Yunanistan`;
console.log(neighboursOfTurkey);



console.log(`*** ASSIGNMENT VII ***`);
const country = {
    country: `Turkey`,
    capital: `Ankara`,
    language: `Turkish`,
    population: 84.3,
    neighbours: [`Ermenistan`, `Gurcistan`, `Yunanistan`, `Bulgaristan`, `Azerbaycan`, `Suriye`, `Irak`, `Iran`]
}



console.log(`*** ASSIGNMENT VIII ***`);
console.log(`${country.country} has ${country.population} million ${country.language}-speaking people, ${country.neighbours.length} neighbouring countries and a capital called ${country.capital}.`);
country.population = country.population - 2;
console.log(country.population);
country.population = country.population + 2;
console.log(country.population);



console.log(`*** ASSIGNMENT IX ***`);
country.describe = function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
};
console.log(country.describe());
console.log(country);



console.log(`*** ASSIGNMENT X ***`);
for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting.`);
}



console.log(`*** ASSIGNMENT XI ***`);
const percentages2 = [];
for (let i = 0; i < populationOfCountries.length; i++) {
    percentages2.push(percentageOfWorld1(populationOfCountries[i]));
}
console.log(percentages2);




console.log(`*** ASSIGNMENT XII ***`);
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let i = 0; i < listOfNeighbours.length; i++) {
    console.log('Neighbour: ');
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`${listOfNeighbours[i][j]}`);
    }
}




console.log(`*** ASSIGNMENT XIII ***`);
const percentages3 = [];
let index = 0;
while (index < populationOfCountries.length) {
    percentages3.push(percentageOfWorld1(populationOfCountries[index]));
    index++;
}
console.log(percentages3);