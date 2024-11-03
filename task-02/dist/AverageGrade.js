"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Calculate  Average Grade
//initiate prompt Sync
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let inpuGrade = prompt("Enter The Grades : ");
let Grade = inpuGrade.split('').map(Number);
let sum = Grade.reduce((acc, grade) => acc + grade, 0);
//to find averag
let averageNum = sum / Grade.length;
console.log("Average number is : ", averageNum.toFixed(2));
//other method
for (let value of Grade) {
    sum += value;
}
;
console.log(sum);
averageNum = sum / Grade.length;
console.log(averageNum);
