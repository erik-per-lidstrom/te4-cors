"use strict";

//* parse
const jsonString = '{"name":"erik","age":18}';
const parsedJson = JSON.parse(jsonString);
localStorage.setItem("person", parsedJson);
console.log(jsonString);
console.log(parsedJson);
const getLocal = localStorage.getItem("person");

//* stringfy
const obj = {
  name: "te-4 25",
  numberofstudents: 13,
  students: [
    { name: "student", age: 20 },
    { name: "student", age: 20 },
    { name: "student", age: 20 },
    { name: "student", age: 20 },
  ],
};
const jsonstring = JSON.stringify(obj);
console.log(jsonstring);

//* display
const postlist = document.getElementById("posts");

async function getposts() {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();

    console.log(data);

    data.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.titel} ${item.body}`;
      postlist.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error somthing went wrong", error);
  }
}

getposts();

//! ex 1

const studentJSON2 = '{"name":"Liam","grade":4,"passed":true}';
const parsedJson2 = JSON.parse(studentJSON2);
console.log(parsedJson2.name);
const jsonstring2 = JSON.stringify(parsedJson);

//! e 2
const userList = document.getElementById("users");

async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();

    console.log(data);

    data.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `name:${item.name} email:${item.email}`;
      userList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error somthing went wrong", error);
  }
}
getUsers();
