//initiate prompt Sync
import promptSync from "prompt-sync";
const prompt = promptSync();


let numArr: number[] = [];

const inpuNumber: string = prompt("Enter a number seperate with column : ");

numArr = inpuNumber.split(',').map(Number);

let minNumber = Math.min(...numArr);
let maxNumber = Math.max(...numArr);

console.log("Minimun number: ",minNumber);
console.log("Maximum number: ",maxNumber);