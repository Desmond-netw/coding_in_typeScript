"use strict";
// Task find arithemtic devision
const input = require("prompt-sync")();
// take input
const calc = {
    num1: parseInt(input("First number: ")),
    num2: parseInt(input("Second number: ")),
};
// assing arithmetic
let sum = calc.num1 + calc.num2;
let minus = calc.num1 - calc.num2;
let division = Math.round(calc.num1 / calc.num2);
let multi = calc.num1 * calc.num2;
// print the results
console.log(calc.num1, "+", calc.num2, " = ", sum);
console.log(calc.num1, "-", calc.num2, " = ", minus);
console.log(calc.num1, "/", calc.num2, " = ", division);
console.log(calc.num1, "*", calc.num2, " = ", multi);
