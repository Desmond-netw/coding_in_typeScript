"use strict";
const array1 = [4, 30, 2, 21, 200000];
console.log(array1);
for (let i = 0; i < array1.length - 1; i++) {
    if (array1[i] > array1[i - 1]) {
        console.log("Array is accessing order");
        let temp = array1[i];
        array1[i] = array1[i + 1];
        array1[i] = temp;
    }
}
console.log(array1);
