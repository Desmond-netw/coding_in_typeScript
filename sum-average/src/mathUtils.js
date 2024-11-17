"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSum = calculateSum;
exports.calculateAverage = calculateAverage;
/*
Task 4: Sum and Average with reduce
Description: This app will prompt the user to enter a series of numbers,
then calculate and display the sum and average.
*/
function calculateSum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}
function calculateAverage(arr) {
    return arr.length > 0 ? calculateSum(arr) / arr.length : 0;
}
//# sourceMappingURL=mathUtils.js.map