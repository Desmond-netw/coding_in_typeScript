"use strict";
/**
 * TypeScript - Functions
Functions are the primary blocks of any program. In JavaScript, functions are the most important part since the JavaScript is a functional programming language. With functions, you can implement/mimic the concepts of object-oriented programming like classes, objects, polymorphism, and, abstraction.

Functions ensure that the program is maintainable and reusable, and organized into readable blocks. While TypeScript provides the concept of classes and modules, functions still are an integral part of the language.

In TypeScript, functions can be of two types: named and anonymous.

Named Functions
A named function is one where you declare and call a function by its given name.
*/
function display() {
    console.log("I love coding");
}
display(); // output
/**
 * Parameter types
 * Functions cna also include parameter types and return type
 *
 */
function sum(x, b) {
    return x + b;
}
//call sum 
console.log(sum(20, 6));
function objectFun(theobject) {
    theobject.maker = "Toyota";
}
let car = {
    maker: "Honder",
    age: 100
};
console.log("Before", car);
objectFun(car);
console.log("After: ", car);
//# sourceMappingURL=functions.js.map