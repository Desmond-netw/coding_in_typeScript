
// importing functions 
import promptSync from "prompt-sync";
import { greetBasedOnTime } from "./greetingUtils";// import from

const prompt = promptSync();
const name = prompt("Enter your name: ");
const time = parseInt(prompt("Enter the current hour (0-24): "), 10);
console.log(greetBasedOnTime(name, time));