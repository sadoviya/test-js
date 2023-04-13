"use strict";
// const message = "JS is awesome";
// console.log(message);
// let A = 10;
// console.log(A);
// let b = true;
// console.log(b);
// A = A + 10;
// console.log(A);
// const B = confirm("Please");
// console.log(B);
// const C = prompt("sorry");
// console.log(C);
// console.log(Number.parseInt("5px"));
// console.log(Number.parseFloat("5.25px"));
// console.log(Number.parseFloat((0.1 + 0.2).toFixed(1)));
// console.log(Math.round(1.5));
// console.log(Math.random());
// console.log(Math.round(Math.random()));
// const message = "Welcome to Bahamas";
// console.log(message.length);
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   switch (password) {
//     case null:
//       message = "Canceled by user!";

//     case ADMIN_PASSWORD:
//       message = "Welcome!";

//     default:
//       message = "Access denied, wrong password!";
//   }
// }
// checkPassword(123);
// for (let i = 1; i <= 20; i += 1) {
//   console.log(i);
// }
const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
  console.log("ітерація", i);
}

console.log("сума", sum);
