//initiate prompt Sync
import promptSync from "prompt-sync";
const prompt = promptSync();


//collect input
let userInput : string = prompt("Enter Words to count: ");

let wordArr = userInput.trim().split('');
let wordLength = wordArr.length;

console.log( "There are ",wordLength, " in" , userInput);