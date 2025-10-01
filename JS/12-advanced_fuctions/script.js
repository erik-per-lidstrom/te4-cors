"use strict";
console.log("hello world");
const myfunction1 = function () {
  console.log("hello");
};
const myfunction2 = (a, b) => a + b; //* explisetreturn
const myfunction3 = () => 5 + 6;
const myfunction4 = (a, b) => {
  //* expliset
  return a + b;
};

myfunction1();
console.log(myfunction2(5, 6));

//!---------------------------------------

const myfunction5 = (cb) => {
  //* expliset
  cb();
};
const myfunction7 = () => {
  console.log("hello from me");
};
myfunction5(myfunction7);

//!--------------------------------------

function multiplie(factor) {
  return function (number) {
    return number * factor;
  };
}
const dubele = multiplie(2);
const triple = multiplie(3);

console.log(triple(2));

//!-------------------------------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const sum = (...numaray) => {
  let total = 0;

  for (const num of numaray) {
    total += num;
  }
  return total;
};
console.log(sum(4, 5, 55));
//!-------------------------------------

//* ex1
const squer = (x) => x * x;

//* ex2

function dohomework(subject, callback) {
  console.log(`finish my ${subject} homework`);
  callback();
}
function giveup() {
  console.log("no more");
}
dohomework("math", giveup);

//* ex3

function mult(a, b = 1) {
  return a * b;
}
console.log(mult(2));
console.log(mult(2, 6));

//* ex4
let m = 5;
let b = 6;
m = b;
console.log(m);
let max = 0;
function maxnum(...nums) {
  for (const num of nums) {
    if (max < num) {
      max = num;
    } else {
    }
  }
  return max;
}
console.log(maxnum(4, 80, 10, 5, 6));

//* ex5

const names = ["jon", "erik", "dave", "michel"];
const newname = [...names, "frank", "manhal"];

console.log(names);
console.log(newname);
