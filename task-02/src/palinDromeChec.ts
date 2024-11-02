//initiate prompt Sync
import promptSync from "prompt-sync";
const prompt = promptSync();


const strInput : string = prompt("Enter a string: ");
console.log(strInput);

const splitStrInput: string[] = strInput.split("").reverse();
console.log ("Splited string ", splitStrInput)


const reverseStr: string[] = splitStrInput.reverse();
console.log("Reverse: ",reverseStr);

const joinedStr: string = reverseStr.join("");
console.log("Joined String", joinedStr);

if(strInput.toLowerCase() === joinedStr.toLowerCase()) {
    console.log ( joinedStr,"is Palindron");
}else {
    console.log("Not a palindrome");
};