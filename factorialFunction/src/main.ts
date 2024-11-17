/* 
Task 6: Factorial Function Using Recursion
Description: This app will ask the user for a number and display its 
factorial using recursion.
*/
import { factorial } from "./mathUtils";
import promptSync from "prompt-sync";
const prompt = promptSync();


const number = parseInt(prompt("Enter a number for factorial calculation: "), 10);
console.log("Factorial:", factorial(number));