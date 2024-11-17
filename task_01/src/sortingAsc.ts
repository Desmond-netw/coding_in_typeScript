
import PromptSync from "prompt-sync";
const prompt = PromptSync();


const inputNumb = prompt("Enter number seperated by commas: ");

const numberArr = inputNumb.split(",").map(Number);

numberArr.sort((a,b)=> a - b);
console.log("Numbers in asceding order: ",numberArr.join(","));

const rmd =numberArr.filter((number, index)=> numberArr.indexOf(number) === index);

console.log("Removed Duplicate:", rmd.join(" "));
