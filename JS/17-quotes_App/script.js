"use strict";

const quote = document.getElementById("quotes");
const author = document.getElementById("author");
async function getUsers() {
  try {
    const res = await fetch("http://api.quotable.io/random");
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    console.log(data);

    quote.textContent = ``;
    quote.textContent = `${data.content}`;
    author.textContent = ``;
    author.textContent = `-${data.author}`;
  } catch (error) {
    console.error("Error somthing went wrong", error);
  }
}
getUsers();
