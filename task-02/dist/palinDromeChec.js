"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//initiate prompt Sync
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const strInput = prompt("Enter a string: ");
console.log(strInput);
const splitStrInput = strInput.split("").reverse();
console.log("Splited string ", splitStrInput);
const reverseStr = splitStrInput.reverse();
console.log("Reverse: ", reverseStr);
const joinedStr = reverseStr.join("");
console.log("Joined String", joinedStr);
if (strInput.toLowerCase() === joinedStr.toLowerCase()) {
    console.log(joinedStr, "is Palindron");
}
else {
    console.log("Not a palindrome");
}
;