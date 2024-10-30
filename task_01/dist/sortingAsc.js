"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Task 10: Student Grade Classifier
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const inputNumb = prompt("Enter number seperated by commas: ");
const numberArr = inputNumb.split(",").map(Number);
numberArr.sort((a, b) => a - b);
console.log("Numbers in asceding order: ", numberArr.join(","));
const rmd = numberArr.filter((number, index) => numberArr.indexOf(number) === index);
console.log("Removed Duplicate:", rmd.join(" "));
