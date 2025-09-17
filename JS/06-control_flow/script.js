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
let guess = 30;

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
