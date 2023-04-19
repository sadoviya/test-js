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
// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більшу за нуль");
//   } else if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//   } else {
//     console.log("Операція зняття коштів проведена успішно");
//   }
// }

// withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
// withdraw(500, 300); // "Недостатньо коштів на рахунку"
// withdraw(100, 300); // "Операція зняття коштів проведена успішно"
// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більшу за нуль");
//     return;
//   }
//   if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//     return;
//   }
//   console.log("Операція зняття коштів проведена");
// }

// withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
// withdraw(500, 300); // "Недостатньо коштів на рахунку"
// withdraw(100, 300); // "Операція зняття коштів проведена"
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";

//   // Change code above this line
// }
// console.log(checkStorage(10, 5)); // The order is accepted, our manager will contact you

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
// }
// console.log(checkStorage(10, 0)); // The order is accepted, our manager will contact you

// return [array[0], array[array.length - 1]];
// function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
  // return message.split(" ").length * pricePerWord;

  // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// function makeStringFromArray(array, delimiter) {
//   return array.join(delimiter);

//   // Change code above this line
//   return string;
// }
// console.log(
//   makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// );
// function slugify(title) {
//   return title.split(" ").join("-").toLowerCase();
// }
// console.log(slugify("Arrays for begginers"));
// const fruits = ["apple", "plum", "pear", "orange", "banana"];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);
// console.log(nonExtremeEls);
// let arr = [];

// console.log(fillArray(2, 10));

// function fillArray(min, max) {
//   for (let i = min; i <= max; i += 2) {
//     return arr.push(i);
//   }
// }
// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }
// const planets = ["Earth", "Mars", "Venus"];
// let planetString = 0;
// for (let i = 0; i < planets.length; i += 1) {
//   // console.log(planets[i]);
//   // console.log(typeof i);
//   // console.log(typeof planets);
//   planetString = planets[i];
//   console.log(planetString);
//   console.log(typeof planetString);
// }
