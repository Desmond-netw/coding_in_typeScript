"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//initiate prompt Sync
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let numArr = [];
const inpuNumber = prompt("Enter a number seperate with column : ");
numArr = inpuNumber.split(',').map(Number);
let minNumber = Math.min(...numArr);
let maxNumber = Math.max(...numArr);
console.log("Minimun number: ", minNumber);
console.log("Maximum number: ", maxNumber);
