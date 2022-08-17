// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 24;

age = 12; // 12.1 ' de verilebilir

// age = "6"; gecersiz islem hata verir

let userName: string = "omer";

userName = `faruk`;

let isInstructor: boolean;

isInstructor = false;

// HATA !!!!
// let hobbies: null;
// hobbies = `football`;

// More complex types

let hobbies: string[];

hobbies = [`Football`, `Basketball`, `Fishing`];
// hobbies = [`Football`, `Basketball`, `Fishing`, 12]; ERROR

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: `Omer`,
  age: 24,
};

// person tanimlamasinda isEmployee adinda bir key tanimlanmadigindan dolayi hata verir.
// person = {
//   isEmployee: false,
// }

let people: Person[];

// Type inference

let course = `React - The Complete Guide`;
// let course = `React - The Complete Guide`; = let course: string = `React - The Complete Guide`;

// course = 1234; hata verir. course atadigimiz ilk deger string oldugu icin

// bu tanimlama ile course2 degiskeni hem string hem number olabilir.
let course2: string | number = `Angular - The Complete Guide`;
course2 = 1234;

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3];
const stringArray = insertAtBeginning([`a`, `b`, `c`], `d`);

// updatedArray[0].split(``); updatedArray number type oldugu icin split hata verir.

// Classes

class Student {
  // firstName: string;
  // lastName: string;
  // age: number;
  // private courses: string[];

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {}

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student(`Omer`, `Guldu`, 24, [`Angular`, `Typescript`]);
student.enroll(`React`);
// student.courses; private oldugu icin erisilemez;
student.listCourses(); // bu sekilde courses listesine ulasilabilir.

// Interfaces

interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

let omer: Human;
omer = {
  firstName: `Omer`,
  age: 24,
  greet() {
    console.log(`Hello!`);
  },
};

class Instructor implements Human {
  firstName: string;
  age: number;
  greet() {
    console.log(`Hello!!`);
  }
}
