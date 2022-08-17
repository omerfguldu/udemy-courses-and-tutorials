// console.log(`*** Coding Challenge I ***`);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`Accelerating : ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`Braking : ${this.speed}`);
// };

// const car1 = new Car(`BMW`, 120);
// const car2 = new Car(`Mercedes`, 95);

// console.log(`${car1.make}:${car1.speed}`);
// car1.accelerate();
// car1.accelerate();
// car1.brake();

// console.log(`${car2.make}:${car2.speed}`);
// car2.accelerate();
// car2.brake();
// car2.brake();

// console.log(`*** Coding Challenge II ***`);

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`New speed is :${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`New speed is :${this.speed} km/h`);
//   }

//   get speedUS() {
//     return `Speed in US is: ${this.speed / 1.6} mp/h`;
//   }

//   set speedUS(speedVal) {
//     this.speed = speedVal * 1.6;
//   }
// }

// const ford = new Car(`Ford`, 120);
// console.log(ford);
// ford.accelerate();
// ford.brake();
// console.log(ford.speedUS);
// ford.speedUS = 100;
// console.log(ford);
// console.log(ford.speedUS);
// console.log(ford.speed);

// console.log(`*** Coding Challenge III ***`);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`Accelerating : ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`Braking : ${this.speed}`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // link the prototypes
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV(`Tesla`, 120, 23);
// console.log(tesla);
// tesla.accelerate();
// tesla.chargeBattery(90);
// tesla.accelerate();
// tesla.brake();
// console.dir(EV.prototype.constructor);

// console.log(`*** Coding Challenge IV ***`);

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//     return this;
//   }
// }

// class EVCl extends CarCl {
//   #charge;
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }

//   accelerate() {
//     this.speed += 20;
//     this.#charge--;
//     console.log(
//       `${this.make} is going at ${this.speed} km/h, with a charge of ${
//         this.#charge
//       }`
//     );
//     return this;
//   }

//   chargeBattery(batteryVal) {
//     this.#charge = batteryVal;
//     return this;
//   }
// }

// const rivian = new EVCl(`Rivian`, 120, 23);
// console.log(rivian);
// // console.log(rivian.#charge); // Private disaridan erisilemez
// // rivian.accelerate();
// // rivian.chargeBattery(90);
// // rivian.accelerate();
// // rivian.brake();
// rivian.accelerate().chargeBattery(90).accelerate().brake().accelerate();
