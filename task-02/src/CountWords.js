"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//initiate prompt Sync
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
//collect input
let userInput = prompt("Enter Words to count: ");
let wordArr = userInput.trim().split('');
let wordLength = wordArr.length;
console.log("There are ", wordLength, " in", userInput);
//# sourceMappingURL=CountWords.js.map