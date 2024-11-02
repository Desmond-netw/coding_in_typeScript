"use strict";
//example one
let sums = (x, y) => {
    return x + y;
};
// function factorial(n:)
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
const numb = 5;
console.log(`The factorial of ${numb} is ${factorial(numb)}`);
