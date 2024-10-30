//Task 9: Remove Duplicate Words
import PromptSync from "prompt-sync";
const prompt = PromptSync();


// take text
const text = prompt("Enter a sentence: ");
//let split text
const splitWords = text.split(" ");

//let use filter and indexOf to find uniquerWords
const uniqureWords = splitWords.filter((word, index) => splitWords.indexOf(word) === index);

console.log("Duplicates removed: ", uniqureWords.join(" "));