import { checkEvenOrOdd } from "./numberUtils";
import promptSync from "prompt-sync";

const prompt = promptSync();
const numbers = prompt("Enter numbers separated by commas: ").split(",").map(Number);
console.log("Even or Odd Check:", checkEvenOrOdd(numbers));

