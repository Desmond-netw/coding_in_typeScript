"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Task: Array of Number
//Description: Ask the user to input 5 numbers, store them in an array, and 
//calculate the sum and average of the numbers.
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
//initialize arry
let arrNumb = [];
let countNum = 5;
//  input command
for (let i = 0; i < countNum; i++) {
    const input = prompt(`Enter a number ${i + 1}: `);
    const num = parseFloat(input);
    if (!isNaN(num)) {
        arrNumb.push(num);
    }
    else {
        console.log("Invalid Value,Enter a number");
        i--;
    }
    ;
}
;
// calc the sum
let sum = 0;
for (let i = 0; i < arrNumb.length; i++) {
    sum += arrNumb[i];
}
// find average
let average = sum / arrNumb.length;
// display result
console.log(" Numbers you entered are: ", arrNumb);
console.log("The sum = ", sum);
console.log("The average = ", average);
//# sourceMappingURL=array_numbers.js.map