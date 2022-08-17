'use strict';

// console.log(`*** Coding Challenge I ***`)
// const whereAmI = function (...coords) {
//   fetch(
//     `https://nominatim.openstreetmap.org/reverse?lat=${coords[0]}&lon=${coords[1]}&format=json`
//   )
//     .then(response => {
//       console.log(response);
//       if (!response.ok) throw new Error(`Problem with API ${response.status}`);

//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.address.state}, ${data.address.country}`);
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${data.address.country_code}`
//       );
//     })
//     .then(([data]) => renderCountry(data))
//     .catch(err => console.log(`${err.message}`));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
// whereAmI(-33.933, `a`);

// console.log(`*** Coding Challenge II ***`);

// const wait = function (img) {
//   return new Promise(function (resolve) {
//     setTimeout(() => {
//       img.style.display = `none`;
//       resolve();
//     }, 2000);
//   });
// };

// const imagesDiv = document.querySelector(`.images`);
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener(`load`, function () {
//       imagesDiv.append(img);
//       resolve(img);
//     });

//     img.addEventListener(`error`, function () {
//       reject(new Error(`Image not found`));
//     });
//   });
// };

// createImage(`assets/img/img-1.jpg`)
//   .then(img => {
//     console.log(`Image I loaded`);
//     return wait(img);
//   })
//   .then(() => {
//     return createImage(`assets/img/img-2.jpg`);
//   })
//   .then(img => {
//     console.log(`Image II loaded`);
//     return wait(img);
//   })
//   .catch(err => console.error(err));

console.log(`*** Coding Challenge III ***`);
const wait = function (img) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      img.style.display = `none`;
      resolve();
    }, 2000);
  });
};

const imagesDiv = document.querySelector(`.images`);
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener(`load`, function () {
      imagesDiv.append(img);
      resolve(img);
    });

    img.addEventListener(`error`, function () {
      reject(new Error(`Image not found`));
    });
  });
};

const loadNPause = async function () {
  try {
    let createimg = await createImage(`assets/img/img-1.jpg`);
    await wait(createimg);
    await wait(createimg);
    createimg = await createImage(`assets/img/img-2.jpg`);
    await wait(createimg);
    await wait(createimg);
  } catch (err) {
    console.error(err);
  }
};

// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add(`parallel`));
  } catch (err) {
    console.error(err);
  }
};

loadAll([
  'assets/img/img-1.jpg',
  'assets/img/img-2.jpg',
  'assets/img/img-3.jpg',
]);
