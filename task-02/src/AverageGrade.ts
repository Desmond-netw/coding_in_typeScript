//Calculate  Average Grade
//initiate prompt Sync
import promptSync from "prompt-sync";
const prompt = promptSync();



let inpuGrade: string = prompt("Enter The Grades : ");

let Grade:number [] = inpuGrade.split('').map(Number);

let sum = Grade.reduce((acc, grade) => acc + grade, 0);

//to find averag
let averageNum = sum / Grade.length;

console.log( "Average number is : ", averageNum.toFixed(2));

//other method

for ( let value of Grade) {
    sum += value;
};

console.log( sum);
averageNum= sum / Grade.length;

console.log(averageNum);