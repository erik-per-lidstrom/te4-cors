"use strict";
console.log("hello world");

let old = [];
let nev = new Array(["Saab", "Volvo", "BMW"]);

console.log(nev.indexOf("Saab"));
console.log(nev.includes("Volvo"));

console.log(nev.slice(1, 2));
nev.splice(1, 1, "Ferari");
console.log(nev);
//!-----------------------
let arr1 = [1, 2];
let arr2 = [3, 4];
let combine = [...arr1, ...arr2];
console.log(combine);
//!--------------------------

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

const dubled = nums.map((n, i) => n * i);
console.log(dubled);

nums.forEach((num) => console.log(num));

let event = nums.filter((n) => n % 2 === 0);
console.log(event);

let sum = nums.reduce((total, n) => total + n, 0);
console.log(sum);

let uhhhhh = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(uhhhhh[1][1]);
//!-------------------------------------
//*1
let movie = [
  "lord of the rings",
  "it`s raning meat balls",
  "terminator",
  "kung fu panda",
  "movie5",
];
console.log(movie[1]);
movie.push("the god fhather");
movie.shift();
console.log(movie);
//*2
let num_ex = [1, 2, 3, 4, 5];
let sqer = num_ex.map((n) => n * n);
console.log(sqer);
let odd = num_ex.filter((n) => n % 2 === 1);
console.log(odd);
//*3
let three = [
  ["", "", ""],
  ["", "x", ""],
  ["", "", ""],
];
console.log(three[1][1]);
let giv = [10, 20, 30, 40, 50];
let sum2 = giv.reduce((total, n) => total + n, 0);
console.log(sum2);
