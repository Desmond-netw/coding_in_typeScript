"use strict";
// filter words
let filtered = [2, 3, 4, 23, 45, 32, 43, 44, 5, 6, 2, 3, 4, 54];
function isBig(num) {
    return num >= 10;
}
let bigNumbers = filtered.filter(isBig);
console.log(bigNumbers);
//second method
const array = [-2, -3, -5, 0, 1, 3, 4, 5, 6, 7, 8, 12, 13];
function isPrime(num) {
    for (let i = 2; num > i; i = i + 1) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
;
console.log(array.filter(isPrime));
