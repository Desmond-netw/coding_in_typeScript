import PromptSync from "prompt-sync";
const input = PromptSync();

const word = input("Enter a word: ").toLowerCase();

const stringWord : string = "The Word of God is here for everyone ";

const splitWord : string [] = word.split('').reverse();

console.log(splitWord);
