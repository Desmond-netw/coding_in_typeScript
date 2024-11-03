"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//initiate prompt Sync
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
//Enter any sentences 
const userInput = prompt("Enter any Sentence: ");
let charSplit = userInput.split("");
const vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelsCount = 0;
let vowes = [];
//loop through character
for (let char of charSplit) {
    if (vowels.includes(char)) {
        vowelsCount++;
        vowes.push(char);
    }
}
;
console.log(`The vowels in ${userInput} are ${vowelsCount} and is = :${vowes} `);
