"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
Task 6: Factorial Function Using Recursion
Description: This app will ask the user for a number and display its
factorial using recursion.
*/
const mathUtils_1 = require("./mathUtils");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const number = parseInt(prompt("Enter a number for factorial calculation: "), 10);
console.log("Factorial:", (0, mathUtils_1.factorial)(number));
