import { generateMultiplicationTable } from "./mathUtils";
import promptSync from "prompt-sync";

const prompt = promptSync();
const number = parseInt(prompt("Enter a number: "), 10);
console.log("Multiplication Table:", generateMultiplicationTable(number));
