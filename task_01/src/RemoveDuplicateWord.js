"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Task 9: Remove Duplicate Words
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// take text
const text = prompt("Enter a sentence: ");
//let split text
const splitWords = text.split(" ");
//let use filter and indexOf to find uniquerWords
const uniqureWords = splitWords.filter((word, index) => splitWords.indexOf(word) === index);
console.log("Duplicates removed: ", uniqureWords.join(" "));
//# sourceMappingURL=RemoveDuplicateWord.js.map