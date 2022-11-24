/*===================== 1.1================================ */
let right = 0.1 + 0.2;
let rightNumber = right.toFixed(1);
alert(`Сумою додавання 0,1 і 0,2 є - ${rightNumber}`);
/*================================ 1.2 ====================================*/
/*====================== 1,3 ================================= */
let flash = prompt(`Вкажіть обсяг флешки`);
let fileNum = Math.trunc((flash * 1000) / 820);
alert(`Кількість файлів розміром 820Мб яка поміщаНа флешку - ${fileNum} `);
/*===================== 2.1 ===================================*/
let sumOfMoney = prompt("ВВедіть суму грошей в гаманці");
let ChocoPrize = prompt("Введіть ціну одніжї шоколадки");
let chocoNumber = Math.trunc(sumOfMoney / ChocoPrize);
let change = sumOfMoney % ChocoPrize;

alert(
  `Кількість шоколадок яку ви зможете купити - ${chocoNumber} , кількість гривень яка у вас залишиться - ${change}`
);
/*================================ 2,2 ================================= */

let number = prompt(`Будь-ласка введіть трьохзначне число`);

let thIrd = Math.trunc(number / 100);
let numberTwo = Math.trunc(number / 10 - third * 10);
let numberOne = number % (thIrd * 100 + numberTwo * 10);
let num = numberOne * 100 + numberTwo * 10 + thIrd;

alert(`${num}`);
/*==================== 3,first_task ================================= */

let deposit = prompt("ВВедіть суму вкладу");
let sumWithTax = ((deposit * 0.05) / 365) * 58;
let sumWithoutTax = Math.trunc(sumWithTax * 0.195);
alert(
  `Клієнт отримає на руки з вирахуванням військового збору(1.5%) та податку на доходифізичних осіб(18%) - ${sumWithoutTax} гривень`
);
/*==================== 3,second_task ================================= */
let first = 2 && 0 && 3;
alert(`Вираз: 2 && 0 && 3 - поверне - ${first}`);

let second = 2 || 0 || 3;
alert(`Вираз: 2 || 0 || 3 - поверне - ${second}`);

let third = (2 && 0) || 3;
alert(`Вираз: 2 && 0 || 3 - поверне - ${third}`);
