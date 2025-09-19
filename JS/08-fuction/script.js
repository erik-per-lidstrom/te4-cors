"use strict";
console.log(great(65));

function great(age, name = "jon do") {
  return `hello my name is ${name} and i am ${age} years old`;
}

function greats(name) {
  console.log(`hello ${name}`);
}

const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3));

const bmi = function (name, kg, M) {
  return `${name}s bmi is ${kg / (M * M)}`;
};
console.log(bmi("erik", 80, 1.86));

const sub = (a, b) => a - b;
const sum = (a, b) => {
  return a + b;
};
console.log(sub(4, 19));
console.log(sum(50, 79));

const temp_now = function (temp) {
  if (temp <= 0) return `cold`;
  if (temp <= 10) return `cool`;
  if (temp >= 20 && temp <= 25) return `hot`;
  return `you are dead`;
};
console.log(temp_now(20));

const calculate_grade = function (name, score) {
  if (score < 1 || score > 100) return `in valid grade`;
  if (score >= 90 && score <= 100)
    return `${name} got a A wth a scor of ${score}`;
  if (score >= 80 && score < 90)
    return `${name} got a B wth a scor of ${score}`;
  if (score >= 70 && score < 80)
    return `${name} got a c wth a scor of ${score}`;
  if (score >= 60 && score < 70)
    return `${name} got a D wth a scor of ${score}`;
  if (score < 60 && score >= 50)
    return `${name} got a E wth a scor of ${score}`;
  if (score < 50 && score > 0) return `${name} got a F wth a scor of ${score}`;
};
console.log(calculate_grade("JON", 100));
console.log(calculate_grade("bob", 80));
console.log(calculate_grade("xyz", 70));
console.log(calculate_grade("erik", 60));
console.log(calculate_grade("steve", 40));
console.log(calculate_grade("h", -5));
console.log(calculate_grade("h", 120));
