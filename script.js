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
// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
//   console.log("ітерація", i);
// }

// console.log("сума", sum);
// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }
// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");
// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }
// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(i, clients[i]);
// }
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }
// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"
