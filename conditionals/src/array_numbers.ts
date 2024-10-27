// Task: Array of Number
//Description: Ask the user to input 5 numbers, store them in an array, and 
//calculate the sum and average of the numbers.
import PromptSync from "prompt-sync";
const prompt = PromptSync();

//initialize arry
let arrNumb : number[] = [];
let countNum = 5;

// initialize the input command
for(let i = 0; i < countNum; i++) {
    const input = prompt(`Enter a number ${i + 1}: `);
    const num = parseFloat(input);

    if(!isNaN(num)){
        arrNumb.push(num);
    }else {
        console.log("Invalid Value,Enter a number")
    };
};

// calc the sum

let sum = 0;
for(let i = 0; i < arrNumb.length; i++){
    sum = sum + arrNumb[i];
}

// find average

let average = sum / arrNumb.length;

// display result
console.log(" Numbers you entered are: ", arrNumb);
console.log("The sum = ", sum);
console.log("The average = ", average);