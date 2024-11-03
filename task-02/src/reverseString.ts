//Application to Reverse String
//initiate prompt Sync
import promptSync from "prompt-sync";
const prompt = promptSync();

//take input

const inputString: string = prompt("Enter any String: ");

//split string
let reverStr = inputString.split("").reverse().join();
console.log("Reverse Character: ", reverStr);

const cleanedJoinedStr = reverStr.replace(/\/s+/g,"");
console.log(cleanedJoinedStr);