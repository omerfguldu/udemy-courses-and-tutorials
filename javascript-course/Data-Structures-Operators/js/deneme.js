console.log(`---------------------- DENEME JS ----------------------`);
const user = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
  siblings: [`Martin`, `Lizzie`, `Kevin`],
};

// Array Destructring
const [sibling1, sibling2, sibling3] = user.siblings;
console.log(sibling1, sibling2, sibling3);

// Object Destructring
const {
  address: {
    street,
    suite,
    city,
    zipcode,
    geo: { lat, lng },
  },
} = user;
console.log(street, suite, city, zipcode, lat, lng);

// Spread Operator Arrays
console.log(`Siblings array with spread operator: `, ...user.siblings);

// Spread Operator Object
console.log(`Address info with spread operator: `, { ...user.address });

// Rest Operator Arrays
const newSiblings = [`Michael`, `Kellie`, ...user.siblings];
const [newSibling1, newSibling2, ...oldSiblings] = newSiblings;
console.log(newSibling1, newSibling2, oldSiblings);

// Rest Operator Objects
const {
  address: { street: st, suite: su, ...restAddress },
} = user;
console.log(
  `Street:`,
  st,
  `\nSuite: `,
  su,
  `\nOther Adress Info: `,
  restAddress
);

// Short Circuiting && Operator
user.birthPlace;
// && operatoru false olarak gordugu ilk degeri doner. birthPlace undefined old. dolayi undefined loglanir.
//             false              true
console.log(user.birthPlace && `Eskisehir`);

// Short Circuiting || Operator
// || operatoru true olarak gordugu ilk degeri doner. birthPlace undefined ve undefined falsy value old. dolayi ekrana true deger olan Eskisehir yazdirilir.
console.log(user.birthPlace || `Eskisehir`);

// Short Circuiting Assignment Operator
user.age; // su anda undefined
user.age |= 25; // user.age true bir deger var ise degistirmez. falsy bir value var ise 25 degerini atar.
console.log(user.age); // 25 degeri yazar.

user.numberOfChildren = 3; // ilk degeri 3
user.numberOfChildren &= 0; // ilk deger true olsa bile 0 olan falsy value yeni deger olarak atanir.
console.log(user.numberOfChildren); // 0 yazar.
// 0 yerine herhangi bir true value olsaydi da true valuenin atamasi yapilacakti. son kosul oldugundan

// For - Of Loop Array
for (const siblings of user.siblings) {
  console.log(siblings);
}

// For - Of Loop Object
for (const [key, values] of Object.entries(user?.address)) {
  // Optional Chaining
  console.log(`${key}: ${values}`);
}
