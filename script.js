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

let number = 15;
switch (number) {
  case (number = 15):
    console.log("Перша чверть години");
    break;

  case number >= 15 && number < 30:
    console.log("Друга чверть години");
    break;

  case number >= 30 && number < 45:
    console.Log("Третя чверть години");
    break;

  default:
    console.log("Четверта чверть години");
    break;
}

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
