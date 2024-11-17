"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import prompt-sync to take user input
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const numbers = [];
for (let i = 0; i < 3; i++) {
    const input = prompt(`Enter number ${i + 1}: `);
    const Inputnumber = parseFloat(input);
    if (!isNaN(Inputnumber)) {
        numbers.push(Inputnumber);
    }
    else {
        console.log("Invalid input. Please enter a valid number.");
        i--;
    }
    ;
}
;
let largestNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
}
// const largestNumber = Math.max(...numbers);
// console.log(`The largest number is ${largestNumber}`);
//# sourceMappingURL=largerNumber.js.map