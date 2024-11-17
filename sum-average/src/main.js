"use strict";
// Task 4: Sum and Average with reduce
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mathUtils_1 = require("./mathUtils");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const numbers = prompt("Enter numbers separated by commas: ").split(",").map(Number);
console.log("Sum:", (0, mathUtils_1.calculateSum)(numbers));
console.log("Average:", (0, mathUtils_1.calculateAverage)(numbers));
//# sourceMappingURL=main.js.map