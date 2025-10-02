"use strict";
console.log("hello world");
const global = "i am global";

const repet = () => {
  const scoped = "2";
  console.log(global);
  console.log(scoped);
};

repet();

if (true) {
  let block = "i am";
  console.log(block);
  var block2 = "i am 2";
}

console.log(block2);

//!----------------------------

function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}
const count = outer();
count();
count();
count();
count();

//!-------------------------

//* ex 1

function multiplie(factor) {
  return function (number) {
    return number * factor;
  };
}
const dubele = multiplie(2);
const triple = multiplie(3);

console.log(triple(2));
//* ex 2

function cunter() {
  let counter = 0;

  return {
    incrament: () => {
      counter++;
      return counter;
    },
    reset: () => {
      counter = 0;
      return counter;
    },
  };
}

const mycounter = cunter();
console.log(mycounter.incrament());
console.log(mycounter.incrament());
console.log(mycounter.incrament());
console.log(mycounter.incrament());
console.log(mycounter.incrament());
console.log(mycounter.incrament());
console.log(mycounter.incrament());
console.log(mycounter.reset());
console.log(mycounter.incrament());
console.log(mycounter.incrament());
