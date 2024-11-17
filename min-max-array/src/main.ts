/*
 * Task 8: Find Minimum and Maximum in an Array
Description: This app will take an array of numbers 
from the user and display the minimum and maximum values.
 */

import { findMinMax } from "./arrayUtils";
import promptSync from "prompt-sync";

const prompt = promptSync();


const numbers = prompt("Enter numbers separated by commas: ").split(",").map(Number);
const { min, max } = findMinMax(numbers);
console.log("Minimum:", min, "Maximum:", max);
