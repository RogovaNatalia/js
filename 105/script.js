"use strict";

try {
  console.log("Normal");
  console.log(a);
  console.log("resurt");
} catch (error) {
  console.log(error.name);
  console.log(error.message);
} finally {
  //работает в любом случае
}
// console.log(a);
console.log("Still normal");
