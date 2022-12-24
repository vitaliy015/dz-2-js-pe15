"use strict"

/* 
1.Які існують типи даних у Javascript?
string, number, boolean, null, undefined, object, symbol, bigint.

2.У чому різниця між == і ===?
== равно це порівняння значень а === це порівняння значень і типу данних
в приорітеті користуватись === це застреже нас від помилок

3.Що таке оператор?
це спеціальний символ який виконує різні дії з нашими данними
основні оператори це числові, логічні оператори, оператори присвоєння, і оператори порівняння!
*/



let userName = prompt(`напишыть своє ім'я`);
while (userName == Number(userName)) {
  alert("Некоректні дані введіть повторно!");
  userName = prompt(`напишыть своє ім'я`);
}

let userAge = Number(prompt("Скільки вам років?"));
while (!userAge * 2) {
  alert("Некоректні дані введіть повторно!");
  userAge = Number(prompt("Скільки вам років?"));
}
if (userAge < 18) {
  alert("Вам не разрешено посещать этот сайт.");
} else if (userAge >= 18 && userAge <= 22) {
  let userAnswer = confirm("Вы уверены что хотите продолжить?");
  if (userAnswer == true) {
    alert("Вітаю " + userName);
  } else {
    alert("Вам не разрешено посещать этот сайт.");
  }
} else {
  alert("Вітаю " + userName);
}