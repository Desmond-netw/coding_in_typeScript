"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEvenOrOdd = checkEvenOrOdd;
exports.oddEven = isevenodd;
/*
Description: This app will take an array of numbers from the user and
display whether each number is even or odd.

*/
function checkEvenOrOdd(arr) {
    return arr.map(num => `${num} is ${num % 2 === 0 ? "even" : "odd"}`);
}
;
function isevenodd(arr) {
    let result = [];
    arr.forEach((n) => {
        result.push(n % 2 === 0 ? "even" : "odd");
    });
    return result;
}
//# sourceMappingURL=numberUtils.js.map