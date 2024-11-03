//initiate prompt Sync
import promptSync from "prompt-sync";
const prompt = promptSync();

//Enter any sentences 
const userInput:string = prompt("Enter any Sentence: ");

let charSplit = userInput.split("");

const vowels: string[] = ['a','e','i','o','u'];
let vowelsCount: number = 0;
let vowes:string[] = [];

//loop through character
for (let char of charSplit){
    if(vowels.includes(char)){
        vowelsCount++;
        vowes.push(char);
    }
};
console.log(`The vowels in ${userInput} are ${vowelsCount} and is = :${vowes} `);