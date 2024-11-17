"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const input = (0, prompt_sync_1.default)();
const word = input("Enter a word: ").toLowerCase();
const stringWord = "The Word of God is here for everyone ";
const splitWord = word.split('').reverse();
const joinWord = splitWord.join("");
console.log(splitWord);
console.log(joinWord);
//# sourceMappingURL=reverseWord.js.map