"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculatorUtils_1 = require("./calculatorUtils");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const a = parseFloat(prompt("Enter the first number: "));
const b = parseFloat(prompt("Enter the second number: "));
const operation = prompt("Enter the operation (add, subtract, multiply, divide): ");
console.log("Result:", (0, calculatorUtils_1.calculate)(a, b, operation));
//# sourceMappingURL=main.js.map