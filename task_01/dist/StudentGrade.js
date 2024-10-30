"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Task 10: Student Grade Classifier
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
//init student array
const studentsArry = [];
//iterate the input for 4 people
for (let i = 0; i < 4; i++) {
    const name = prompt(`Enter name of student ${i + 1}: `);
    const gradesInput = prompt(`Enter grades of ${name}, separated by commas: `);
    const grades = gradesInput.split(",").map(Number);
    studentsArry.push({ name, grades });
}
//
for (const student of studentsArry) {
    const avgGrade = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
    const result = avgGrade >= 50 ? "Pass" : "Fail";
    console.log(`${student.name} - Average Grade: ${avgGrade.toFixed(2)} - ${result}`);
}
