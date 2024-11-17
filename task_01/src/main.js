"use strict";
const anyString = "Brave new world";
console.log(anyString);
// No index was provided, used 0 as default
console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
console.log(`The character at index 1   is '${anyString.charAt(1)}'`);
console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
console.log(`The character at index 3   is '${anyString.charAt(3)}'`);
console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
console.log(`The character at index 999 is '${anyString.charAt(999)}'`);
// array map
console.log("===================================================");
let numbArr = [2, 4, 5, 6, 4, 3, 4, 5, 6];
const numblst = numbArr.map((x) => x + 2);
console.log(numblst);
numblst.filter((acc, index) => numblst.indexOf(acc) === index);
console.log(numblst);
// arrow function
//# sourceMappingURL=main.js.map