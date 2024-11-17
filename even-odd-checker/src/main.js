"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const numberUtils_1 = require("./numberUtils");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const numbers = prompt("Enter numbers separated by commas: ").split(",").map(Number);
console.log("Even or Odd Check:", (0, numberUtils_1.checkEvenOrOdd)(numbers));
//# sourceMappingURL=main.js.map