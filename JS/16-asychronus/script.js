"use strict";

let promis = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(() => console.log("done"));
    reject(() => console.log("reject"));
  }, 2000);
});

promis
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("all done");
  });

//!---------------------------------------------

//! ex

//* A

async function greetLater() {
  setTimeout(() => {
    console.log("hello async world");
  }, 3000);
}
greetLater();

async function fechdata() {
  try {
    let respons = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!respons.ok) {
      console.warn("somthing is wrong");
      return;
    }
    let data = await respons.json();
    console.log(data);
  } catch {
    console.error("Error somthing went wrong", error);
  }
}
fechdata();

//* B

async function loadData(id) {
  try {
    const [user, posts] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
        res.json()
      ),
      fetch(`https://jsonplaceholder.typicode.com/posts?userid=${id}`).then(
        (res) => res.json()
      ),
    ]);
    console.log(user, posts);
  } catch (error) {
    console.error("Error somthing went wrong", error);
  }
}
loadData(2);

async function fechdata2() {
  try {
    let respons = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!respons.ok) {
      let respons = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      if (!respons.ok) {
        let respons = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        return respons;
      }
      return respons;
    }
    let data = await respons.json();
    console.log(data);
  } catch {
    console.error("Error somthing went wrong", error);
  }
}
fechdata2();

async function fechWithRetry(url, optinos = {}, retries = 3, backOffMs = 500) {
  let attempt = 0;
  while (attempt <= retries) {
    try {
      const res = await fetch(url, optinos);
      if (!res.ok) throw new Error(res.status);
      return res;
    } catch (error) {
      if (attempt === retries) throw error;
      await wait(backOffMs * (attempt + 1));
      attempt++;
    }
  }
}
async function demoRetry() {
  try {
    const res = await fechWithRetry();
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}
demoRetry();
//* C

async function loadpost(id) {
  try {
    const [comment, post] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com//comments?postId=${id}`).then(
        (res) => res.json()
      ),
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
        res.json()
      ),
    ]);
    console.log(post, comment);
  } catch (error) {
    console.error("Error somthing went wrong", error);
  }
}
loadpost(2);

async function loadpost(id) {
  const [user, post, comment] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
      res.json()
    ),
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
      res.json()
    ),
    fetch(`https://jsonplaceholder.typicode.com//comments?postId=${id}`).then(
      (res) => res.json()
    ),
  ]);
}

async function fechdata2() {
  try {
    let respons = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    if (!respons.ok) {
      console.warn("somthing is wrong");
      return;
    }
    let data = await respons.json();
    console.log(data);
  } catch {
    console.error("Error somthing went wrong", error);
  }
  try {
    let respons = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!respons.ok) {
      console.warn("somthing is wrong");
      return;
    }
    let data = await respons.json();
    console.log(data);
  } catch {
    console.error("Error somthing went wrong", error);
  }
  try {
    let respons = await fetch(
      `https://jsonplaceholder.typicode.com//comments?postId=${id}`
    );
    if (!respons.ok) {
      console.warn("somthing is wrong");
      return;
    }
    let data = await respons.json();
    console.log(data);
  } catch {
    console.error("Error somthing went wrong", error);
  }
}
fechdata2();
