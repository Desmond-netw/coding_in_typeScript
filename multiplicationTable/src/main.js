"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mathUtils_1 = require("./mathUtils");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const number = parseInt(prompt("Enter a number: "), 10);
console.log("Multiplication Table:", (0, mathUtils_1.generateMultiplicationTable)(number));
//# sourceMappingURL=main.js.map