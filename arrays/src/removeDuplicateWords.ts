//Remove duplicate words

import promptSync from "prompt-sync";
const input = promptSync();

console.log("Enter 5 numbers");

//take input
const prompt = input("");
const numbersarr = prompt.split("").map(Number);
const duplremove = numbersarr.filter((acc,index) => numbersarr.indexOf(acc)===index);

console.log(duplremove.join(''));
