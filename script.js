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
"use strict";
let totalSpent = 2000;
let payment = 500;
let discount = 0;
if (totalSpent >= 100 && totalSpent < 1000) {
  console.log("Bronse partner, discount 2%");
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  console.log("Silver partner, discount 5%");
  discount = 0.05;
} else if (totalSpent >= 5000) {
  console.log("Gold partner, discount 10%");
  discount = 0.1;
} else {
  console.log("Not a partner, no discount");
}
payment -= payment * discount;
console.log(
  `Order confirmed, total ${payment} credits, discount ${discount * 100}%`
);
totalSpent += payment;
console.log(`Total spent at our shop: ${totalSpent}`);