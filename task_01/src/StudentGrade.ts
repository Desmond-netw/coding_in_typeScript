//Task 10: Student Grade Classifier
import PromptSync from "prompt-sync";
const prompt = PromptSync();


//create type students
type Student = { name: string, grades: number[] };

//init student array
const studentsArry: Student [] = [];

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