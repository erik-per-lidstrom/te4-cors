"use strict";
console.log("hello world");

//for loop

let count = 1;
while (count <= 20) {
  console.log(count);

  count++;
}

let count2 = 1;
do {
  console.log(`the cod will run att lest once ${count2}`);
  count2++;
} while (count2 <= 5);

const items = ["pinappel", "appel", "stuf", "things"];

for (const item of items) {
  console.log(`my faveret thing is ${item}`);
}

//* exersis

for (let i = 1; i <= 10; i++) {
  console.log(`i = ${i}`);
}

let count3 = 10;
while (count3 >= 1) {
  console.log(count3);

  count3--;
}

let sum = null;
do {
  console.log(`add nuber ${sum}`);
  sum + 5;
} while (sum > 20);

const classmats = [
  "Erkan Akdag",

  "Manhal Alothman",

  "Samragya Gurung",

  "Michell Issa",

  "Tunahan Kursun",

  "Albin Milton",

  "Abinash Navaseelan",

  "Lucas Norbäck",

  "Nirari Yaro",
];

for (const mats of classmats) {
  console.log(`my classmats are ${mats}`);
}
