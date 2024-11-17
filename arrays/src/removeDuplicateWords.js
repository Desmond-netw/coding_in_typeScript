"use strict";
//Remove duplicate words
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const input = (0, prompt_sync_1.default)();
console.log("Enter 5 numbers");
//take input
const prompt = input("");
const numbersarr = prompt.split("").map(Number);
//# sourceMappingURL=removeDuplicateWords.js.map