//24. Cycle


//1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
// let num1 = +prompt("Enter number 1");
// let num2 = +prompt("Enter number 2");
// sum = 0;
// while (num1 <= num2) {
//     sum += num1;
//     num1++;
//     console.log(sum)
// }

//2.Запросить 2 числа и найти только наибольший общий делитель.
//!!!!!!!!!!!!!!error

// let num1 = +prompt("Enter number 1");
// let num2 = +prompt("Enter number 2");

// for (let i = 1; i <= num1; i++) {
//     if (num1 % i && num2 % i) {
//         i++;
//         console.log(i)
//     }
// }
// console.log(i);

//3.Запросить у пользователя число и вывести все делители этого числа.

// let num = +prompt("Enter number"),
//     i = 1;
// for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//         console.log(i);
//     };
// }

//4.Определить количество цифр в введенном числе.
// let num = +prompt("Enter number");
// alert(String(num).length)

//5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, 
// отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. 
// Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
//!!!! Problem with zero
// let i = 0,
//     positive = 0,
//     negative = 0,
//     zero = 0,
//     even = 0,
//     odd = 0;

// while (i < 10) {
//     let num = +prompt("Enter number");
//     if (num > 0) {
//         positive++
//     } else if (num < 0) {
//         negative++
//     } else (num === 0); {
//         zero++
//     };
//     if (num % 2 === 0) {
//         even++
//     } else {
//         odd++
//     }

//     i++
// }
// console.log(`You entered ${positive} positive numbers`);
// console.log(`You entered ${negative} negative numbers`);
// console.log(`You entered ${zero} null`);
// console.log(`You entered ${even} even numbers`);
// console.log(`You entered ${odd} odd numbers`);

//6.Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

// let i = confirm("Do you want to calculate?");

// while (i == true) {

//     const number1 = +prompt("Enter number 1"),
//         number2 = +prompt("Enter number 2");
//     switch (prompt("Enter number math action")) {
//         case "+":
//             console.log(number1 + number2);
//             break;
//         case "-":
//             console.log(number1 - number2);
//             break;
//         case "/":
//             console.log(number1 / number2);
//             break;

//         case "*":
//             console.log(number1 * number2);
//             break;
//         default:
//             console.error("Wrong")
//             break
//     }
//     break
// }

// while (i == false) {
//     alert("Ok")
//     break
// }
// let i = confirm("Do you want to calculate?");


//7. Запросить у пользователя число и на сколько цифр его сдвинуть. 
//Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

// let num = prompt("Enter number");
// const a = +prompt("Enter amount of movement");

// for (let i = 1; i <= a; i++) {
//     first = num.slice(0, 1);
//     second = num.slice(1);
//     num = second + first;
// }
// console.log(`Your number is ${num}`)

//8.Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

// const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let currDay = 0;

// while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
//     currDay = (currDay + 1) % days.length;
// }

//9.Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

// for (i = 1; i < 10; i++)
//     for (j = 1; j < 10; j++)
//         document.write("<p>" + i + "*" + j + " = " + (i * j) + "</p>");

//10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: 
//каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, 
//< N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. 
//Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.