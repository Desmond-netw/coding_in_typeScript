//initiate prompt Sync
import promptSync from "prompt-sync";
const prompt = promptSync();

// take user input
let userInput : string = prompt("Enter words any word: ");

let wordArr = userInput.split(",");
wordArr = wordArr.map((word => word.trim().toLowerCase()))

let duplicatWords = wordArr.filter((word, index) => wordArr.indexOf(word) !== index && wordArr.indexOf(word) === index);

console.log("Duplicates: ", duplicatWords.join(", "));