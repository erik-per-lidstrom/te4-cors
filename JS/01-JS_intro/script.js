"use strict";

const xy = "i dont change";
let xz = "i change";
xz = "i changed";
console.log(xy);
console.log(xz);
console.log("Hello World!");

let my_name = "Erik Lidström";
console.log(typeof my_name, my_name);

let age = 18;
console.log(typeof age, age);

let is_student = true;
console.log(typeof is_student, is_student);

age = age + 1;
console.log(age);

is_student = false;

console.log(is_student);

let introduction =
  "i am " +
  age +
  " years old my name is " +
  my_name +
  " and my student status is " +
  is_student;

console.log(introduction);
