"use strict";

const heading = document.getElementById("title");
console.log(heading);

const msg = document.querySelector(".mesege");
console.log(msg.textContent);

const headings = document.querySelectorAll(".item");
for (const element of headings) {
  element.style.color = "red";
  console.log(element.textContent);
}

const subtitel = document.getElementById("subtitel");
subtitel.textContent = "this text has changed";

const list = document.getElementById("list");
const newitem = document.createElement("li");
newitem.textContent = "item 2";
list.appendChild(newitem);

const box = document.getElementById("box");
box.addEventListener("mouseover", () => {
  box.style.background = "red";
});
box.addEventListener("mouseout", () => {
  box.style.background = "white";
});

const button = document.getElementById("btn");
button.addEventListener("click", () => {
  button.textContent = "you click the button";
});

const input = document.getElementById("input");
const log = document.getElementById("log");
input.addEventListener("keydown", (event) => {
  log.textContent = `key pressed ${event.key}`;
});
input.addEventListener("mouseout", () => {
  log.textContent = "key released";
});

const nameinput = document.getElementById("nameinput");
const greet = document.getElementById("greet");
nameinput.addEventListener("input", () => {
  greet.textContent = `Hello ${nameinput.value}`;
});

const scrollmsg = document.getElementById("scroll-mesige");
window.addEventListener("scroll", () => {
  scrollmsg.textContent = `Hello ${window.scrollY}px`;
});
