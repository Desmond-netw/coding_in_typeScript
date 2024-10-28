"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const input = (0, prompt_sync_1.default)();
const inputTemp = input("Enter current temperature: ");
const temperature = parseFloat(inputTemp);
if (isNaN(temperature)) {
    console.log("Invalid Value. Please enter a number");
}
else if (temperature < 0) {
    console.log("it's freezing!");
}
else if (temperature >= 0 && temperature <= 20) {
    console.log("it's chilly.");
}
else if (temperature > 20) {
    console.log("It's warm out there");
}
;
