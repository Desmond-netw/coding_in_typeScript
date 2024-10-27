// Task find arithemtic devision
const input = require ("prompt-sync")();


type cal = {
    num1: number;
    num2: number;
}

// take input
const calc:cal = {
    num1: parseInt(input("First number: ")),
    num2: parseInt(input("Second number: ")),
}

// assing arithmetic
let sum: number = calc.num1 + calc.num2;
let minus: number =calc.num1 - calc.num2;
let division: number = Math.round(calc.num1 / calc.num2);
let multi: number = calc.num1 * calc.num2;

// print the results

console.log(calc.num1, "+", calc.num2, " = ",sum);
console.log(calc.num1, "-", calc.num2, " = ",minus);
console.log(calc.num1, "/", calc.num2, " = ",division);
console.log(calc.num1, "*", calc.num2, " = ",multi);

