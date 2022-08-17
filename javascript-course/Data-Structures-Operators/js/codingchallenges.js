// console.log(`*** Coding Challenge I ***`);
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// const printGoals = function (...playerNames) {
//   console.log(`${playerNames.length} goals were scored by`);
//   playerNames.forEach(names => {
//     console.log(names);
//   });
// };
// const [players1, players2] = game.players;
// console.log(players1, players2);
// const [gkNeuer, ...fieldPlayers] = players1;
// console.log(gkNeuer, fieldPlayers);
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// const players1Final = [...players1, `Thiago`, `Coutinho`, `Perisic`];
// console.log(players1Final);
// // const { odds: { team1, x: draw, team2 } } = game;
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
// printGoals(`Davies`, `Muller`, `Lewandowski`, `Kimmich`);
// printGoals(`Lewandowski`, `Kimmich`);
// printGoals(...game.scored);
// team1 < team2 && console.log(`Team 1 is more likely to win`);
// team1 > team2 && console.log(`Team 2 is more likely to win`);

// console.log(`*** Coding Challenge II ***`);
// // 1.
// for (const [key, goals] of game.scored.entries()) {
//   console.log(`Goal ${key + 1}: ${goals}`);
// }
// // 2.
// const oddEntries = Object.values(game.odds);
// let oddSum = 0;
// for (const val of oddEntries) {
//   oddSum += val;
// }
// console.log(oddSum / oddEntries.length);
// // 3.
// // dogru cozum
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === `x` ? `draw` : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
// // benim yazdigim kod:
// // console.log(`Odd of victory ${game.team1}: ${team1}`);
// // console.log(`Odd of draw: ${draw}`);
// // console.log(`Odd of victory ${game.team2}: ${team2}`);
// // 4.
// let scorers = {};
// for (const propNames of game.scored) {
//   scorers[propNames] = scorers[propNames] ? scorers[propNames] + 1 : 1;
// }
// console.log(scorers);

// console.log(`*** Coding Challenge III ***`);
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.
// const lastEvent = [...gameEvents.keys()].pop();
// console.log(lastEvent);
// console.log(
//   `An event happened, on average, every ${
//     lastEvent > 90 ? lastEvent / gameEvents.size : 90 / gameEvents.size
//   } minutes`
// );

// // 4.
// for (const [min, event] of gameEvents.entries()) {
//   console.log(`[${min < 45 ? `FIRST` : `SECOND`} HALF] ${min}: ${event}`);
// }

console.log(`*** Coding Challenge IV ***`);
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const btnCamelCase = document.querySelector(`button`);
btnCamelCase.textContent = `Convert`;
btnCamelCase.addEventListener(`click`, function (text) {
  const textareaData = document.querySelector('textarea').value;
  const textareaDataArray = textareaData.split(`\n`);
  let index = 1;

  // BU BENIM COZUMUM
  //   for (let data of textareaDataArray) {
  //     data = data.trim().toLowerCase().replace(`_`, ` `);
  //     const dataArr = data.split(` `);
  //     // dataArr[1] = dataArr[1][0].toUpperCase() + dataArr[1].slice(1);
  //     dataArr[1] = dataArr[1].replace(dataArr[1][0], dataArr[1][0].toUpperCase());
  //     console.log(dataArr.join(``).padEnd(20, ` `), `✅`.repeat(index));
  //     index++;
  //   }

  // BU DA EGITMENIN COZUMU
  for (let [i, data] of textareaDataArray.entries()) {
    const [first, second] = data.toLowerCase().trim().split(`_`);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

// LATER EXERCISE
console.log(`*** LATER EXERCISE ***`);
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split(`+`)) {
  const [type, from, to, hour] = flight.split(`;`);
  const output = `${type.startsWith(`_Del`) ? `🔴` : ``} ${type.replaceAll(
    `_`,
    ` `
  )} from ${getCode(from)} to ${getCode(to)} (${hour.replace(
    `:`,
    `h`
  )})`.padStart(45);
  console.log(output);
}
