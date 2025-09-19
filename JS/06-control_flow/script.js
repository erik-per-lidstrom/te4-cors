"use strict";
console.log("hello world");

let age = 18;

if (age >= 18) {
  console.log("you are 18 or older");
} else if (age < 18) {
  console.log("drink som milk");
} else {
  console.log("you fucked up");
}

let color = "green";

switch (color) {
  case "green":
    console.log("drive");
    break;
  case "yello":
    console.log("stop");
    break;
  case "red":
    console.log("stop");
    break;
  default:
    console.log("drive");
    break;
}

let nuber = 3;
let guess = 10;

if (nuber == guess) {
  console.log("corect");
} else if (nuber > guess) {
  console.log("to low");
} else if (nuber < guess && guess <= 10) {
  console.log("to high");
} else if (guess > 10) {
  console.log("invalid guess");
} else {
  console.log("somthing is wrong");
}

let mony_spent = 49;

if (mony_spent >= 100) {
  let final_prise = mony_spent * 0.8;
  console.log(final_prise);
} else if (mony_spent < 100 && mony_spent >= 50) {
  let final_prise = mony_spent * 0.9;
  console.log(final_prise);
} else if (mony_spent < 50) {
  let final_prise = mony_spent;
  console.log(final_prise);
} else {
  console.log("somthing is wrong");
}

// bmi calculator

const my_hight = 1.86;

const my_weight = 75;

const bmi = my_weight / my_hight ** 2;

console.log(bmi);
