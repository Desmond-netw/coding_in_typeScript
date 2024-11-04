import { filterArray } from "./arryUtils";
import promptSync from "prompt-sync";

const prompt = promptSync();
const userInput = prompt("Enter numbers separated by commas: ");
const threshold = parseFloat(prompt("Enter threshold value: "));

const arr = userInput.split(",").map(Number);
const result = filterArray(arr, num => num > threshold);
console.log("Filtered array:", result);
