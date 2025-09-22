"use strict";
console.log("hello world");
let array = ["one", "two", "three"];

array.push("zero");
array.unshift("hello");

console.log(array.indexOf("one"));

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
for (const arrays of array) {
  console.log(arrays);
}
console.log(array.includes("hello"));

const faveret = array.slice(1, 3);
console.log(faveret);
array.splice(1, 1, "parot");
console.log(array);

array.pop;
array.shift;

//!exersis 1

//* a
let colors = ["red", "blue", "pink"];

console.log(colors[0]);

console.log(colors[2]);

//* b

colors.push("green");

console.log(colors);

//* C

colors.shift();

console.log(colors);

//!exersis 2

//*A
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);

numbers.splice(2, 1, 99);
console.log(numbers);

//*B
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}

//!exersis 3

let shoping_cart = ["Bread", "milk", "potato", "chips", "soda"];

shoping_cart.push("gurca");
shoping_cart.unshift("melon");
console.log(shoping_cart);

shoping_cart.splice(3, 1);
console.log(shoping_cart);

console.log(shoping_cart.includes("milk"));

for (const items of shoping_cart) {
  console.log(items);
}
