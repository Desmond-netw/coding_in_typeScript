"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Task: Student Grade Calculation
/*
    90-100 = A
   80-89 = B
   70-79 = C
   60-69 =  D
   below 60 = F
*/
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// A function to create user input and store
function createStudent() {
    const name = prompt("Enter Student name: ");
    const gradesArr = [];
    // a loop to take 5 grades
    for (let i = 0; i < 5; i++) {
        const gradeInput = prompt(`Enter Grade ${i + 1}: `);
        const grade = parseFloat(gradeInput);
        //validate input
        if (!isNaN(grade)) {
            gradesArr.push(grade);
        }
        else {
            console.log("Invalid value. Please Enter a Integer");
            i--;
        }
        ;
    }
    // return student object
    return { name, gradesArr };
}
;
// Function to calcualte average and assign classification
function calGradAverage(eachStudent) {
    // find sum of gradesArr
    let sum = 0;
    for (let grade of eachStudent.gradesArr) {
        sum += grade;
    }
    ;
    //find average 
    const average = sum / eachStudent.gradesArr.length;
    //determine grade base on average 
    let gradeLetter;
    if (average >= 90) {
        gradeLetter = "A";
    }
    else if (average >= 80) {
        gradeLetter = "B";
    }
    else if (average >= 70) {
        gradeLetter = "C";
    }
    else if (average >= 60) {
        gradeLetter = "D";
    }
    else {
        gradeLetter = "F";
    }
    return { average, gradeLetter };
}
// function to display student information
function displayStudentInfo(eachStudent, average, gradeLetter) {
    console.log(`\nStudent Information: `);
    console.log(`Name: ${eachStudent.name}`);
    console.log(`Grades: ${eachStudent.gradesArr.join(",")}`);
    console.log(`Average Grade: ${average.toFixed(2)}`);
    console.log(`Grade Classification: ${gradeLetter}`);
}
//main progra excution
const eachStudent = createStudent();
const { average, gradeLetter } = calGradAverage(eachStudent);
displayStudentInfo(eachStudent, average, gradeLetter); // display results
