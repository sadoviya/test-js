"use strict";

// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;
// if (totalSpent >= 100 && totalSpent < 1000) {
// console. log( 'Бронзовый партнер, скидка 2%') ;
// discount = 0.02;
// } else if ( totalSpent >= 1000 && totalSpent < 5000) {
// console. log( 'Серебрянный партнер, скидка 5%');
// discount = 0.05;
// } else if (totalSpent >= 5000) {
// console. log( 'Золотой партнер, скидка 10%');
// discount = 0.1;
// } else {
// console. log( 'He партнёр, скидка 0%');
// }
// payment -= payment * discount;
// // payment = payment - payment * discount;
// console. log(
// `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`,
// );
// totalSpent += payment;
// console. log( `Общая сумма потраченого в магазине: ${totalSpent}`);

// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;
// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log("Bronse partner, discount 2%");
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log("Silver partner, discount 5%");
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   console.log("Gold partner, discount 10%");
//   discount = 0.1;
// } else {
//   console.log("Not a partner, no discount");
// }
// payment -= payment * discount;
// console.log(
//   `Order confirmed, total ${payment} credits, discount ${discount * 100}%`
// );
// totalSpent += payment;
// console.log(`Total spent at our shop: ${totalSpent}`);

// let number = 15;
// switch (number) {
//   case (number = 15):
//     console.log("Перша чверть години");
//     break;

//   case number >= 15 && number < 30:
//     console.log("Друга чверть години");
//     break;

//   case number >= 30 && number < 45:
//     console.Log("Третя чверть години");
//     break;

//   default:
//     console.log("Четверта чверть години");
//     break;
// }

// for (let i = 1; i <= 15; i += 1) {
//     if (i%3 === 0 && i%5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i%5 === 0) {
//         console.log('Fizz');
//     } else if (i%3 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 15; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Fizz");
//   } else if (i % 3 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// Object.values
// const salariesValues = Object.values(salaries);
// console.log(salariesValues);
// let sum = 0;
// for (const value of salariesValues) {
//   sum += value;
// }
// console.log(sum);

// for in
// console.log(salaries);
// let sum = 0;
// for (const key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);

// Object.keys + for of
const salariesKeys = Object.keys(salaries);
console.log(salariesKeys);
let sum = 0;
for (const key of salariesKeys) {
  sum += salaries[key];
}
console.log(sum);
