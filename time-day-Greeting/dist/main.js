"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing functions 
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const greetingUtils_1 = require("./greetingUtils"); // import from
const prompt = (0, prompt_sync_1.default)();
const name = prompt("Enter your name: ");
const time = parseInt(prompt("Enter the current hour (0-24): "), 10);
console.log((0, greetingUtils_1.greetBasedOnTime)(name, time));
