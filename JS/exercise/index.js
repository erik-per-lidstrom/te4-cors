"use strict";

import { count, students } from "./data.js";

import { nameSH } from "./extra.js";

import log from "./utils.js";
let num = students.length;
log(`we have ${num} students at ${nameSH}`);

for (let i = 0; i < num; i++) {
  log(students[i]);
}
