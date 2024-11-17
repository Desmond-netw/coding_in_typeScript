"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arryUtils_1 = require("./arryUtils");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const userInput = prompt("Enter numbers separated by commas: ");
const threshold = parseFloat(prompt("Enter threshold value: "));
const arr = userInput.split(",").map(Number);
const result = (0, arryUtils_1.filterArray)(arr, num => num > threshold);
console.log("Filtered array:", result);
//# sourceMappingURL=main.js.map