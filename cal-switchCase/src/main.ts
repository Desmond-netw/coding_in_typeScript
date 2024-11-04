import { calculate } from "./calculatorUtils";
import promptSync from "prompt-sync";

const prompt = promptSync();

const a = parseFloat(prompt("Enter the first number: "));
const b = parseFloat(prompt("Enter the second number: "));
const operation = prompt("Enter the operation (add, subtract, multiply, divide): ");
console.log("Result:", calculate(a, b, operation));