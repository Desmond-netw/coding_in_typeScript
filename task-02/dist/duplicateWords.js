"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//initiate prompt Sync
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// take user input
let userInput = prompt("Enter words any word: ");
let wordArr = userInput.split(",");
wordArr = wordArr.map((word => word.trim().toLowerCase()));
let duplicatWords = wordArr.filter((word, index) => wordArr.indexOf(word) !== index && wordArr.indexOf(word) === index);
console.log("Duplicates: ", duplicatWords.join(", "));
