// Task 4: Sum and Average with reduce

import { calculateSum, calculateAverage } from "./mathUtils";
import promptSync from "prompt-sync";

const prompt = promptSync();
const numbers = prompt("Enter numbers separated by commas: ").split(",").map(Number);
console.log("Sum:", calculateSum(numbers));
console.log("Average:", calculateAverage(numbers));
