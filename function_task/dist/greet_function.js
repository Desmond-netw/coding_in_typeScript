"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let nameInput = prompt("Enter your name: ");
function greetings(name) {
    let greet = (`Hello ${name}`);
    return greet;
}
console.log(greetings(nameInput));