'use strict';

// console.log(`*** Coding Challenge I ***`);

// const testD1 = [5, 2, 3];
// const testD2 = [1, 5, 3, 9, 6, 1];

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   displayResults(type = `array`) {
//     if (type === `array`) {
//       console.log(this.answers);
//     } else if (type === `string`) {
//       console.log(`Poll results are ${this.answers.join(`,`)}`);
//     } else {
//       console.log(`Sonuclar yalnizca array veya string olarak gosterilebilir`);
//     }
//   },
// };

// poll.registerNewAnswer = function () {
//   const input = Number(
//     prompt(
//       `${this.question}\n${this.options.join(`\n`)}\n(Write option number)`
//     )
//   );
//   typeof input === `number` &&
//     input < this.answers.length &&
//     this.answers[input]++;
//   this.displayResults();
//   this.displayResults(`string`);
// };
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, `string`);

console.log(`*** Coding Challenge II ***`);

(function () {
  const header = document.querySelector(`h1`);
  header.style.color = `red`;
  document.body.addEventListener(`click`, function () {
    header.style.color = `blue`;
  });
})();
