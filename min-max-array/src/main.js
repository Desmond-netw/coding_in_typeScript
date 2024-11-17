"use strict";
/*
 * Task 8: Find Minimum and Maximum in an Array
Description: This app will take an array of numbers
from the user and display the minimum and maximum values.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrayUtils_1 = require("./arrayUtils");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const numbers = prompt("Enter numbers separated by commas: ").split(",").map(Number);
const { min, max } = (0, arrayUtils_1.findMinMax)(numbers);
console.log("Minimum:", min, "Maximum:", max);
//# sourceMappingURL=main.js.map