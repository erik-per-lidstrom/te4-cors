"use strict";
console.log("hello world");

const myObject = {
  myProperty1: "Hello World",
  myProperty2: "Hello Universe",
};

console.log(myObject);

myObject.color = "red";
myObject.myProperty1 = "good bye";
delete myObject.myProperty2;

console.log(myObject);

const key = "age";

const person = new Object();
person.name = "Erik Lidstrom";
person.age = 18;
person.skole = "ntig";
console.log(person[key]);

console.log(person);

let school = {
  name: "NTI",
  Address: {
    stret: "Röntevägen 19",
    comun: "Hudinge",
    city: "Stockholm",
  },
  classes: [
    {
      name: "t4_25",
      students: 10,
    },
    {
      name: "t4_24",
      students: 10,
    },
    {
      name: "t4_23",
      students: 10,
    },
    {
      name: "t4_22",
      students: 10,
    },
  ],
};
console.log(school);

for (const item in school) {
  console.log(item, school[item]);
}
for (const item of school.classes) {
  console.log(item);
}

//! Exersise
//* A
let book = {
  titel: "wind",
  auther: "jon dow",
  year: "2000",
};
for (const item in book) {
  console.log(item, book[item]);
}
book.pages = 500;

//* B
let user = {
  name: "Alice",
  city: "Stockholm",
};
console.log(`Hi im ${user.name} from ${user.city}`);

const books = [
  {
    titel: "wind one the wind in ing ",
    auther: "jon dow",
    year: "2000",
  },
  {
    titel: "wind two return of the wind",
    auther: "jon dow",
    year: "2000",
  },
  {
    titel: "wind tree the winds end",
    auther: "jon dow",
    year: "2000",
  },
];
console.log(books[1].titel);

//* C

let classroom = {
  Teatcher: {
    name: "jon",
    subject: "math",
  },
  students: ["jeff", "jon", "michell", "stefan"],
};

for (const item of classroom.students) {
  console.log(item);
}
