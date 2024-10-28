// Import prompt-sync to take user input
import promptSync from "prompt-sync";
const prompt = promptSync();

const numbers: number[] = [];


for (let i = 0; i < 3; i++) {
  const input = prompt(`Enter number ${i + 1}: `);
  const number = parseFloat(input); 

  
  if (!isNaN(number)) {
    numbers.push(number); 
  } else {
    console.log("Invalid input. Please enter a valid number.");
    i--; 
  };
};


const largestNumber = Math.max(...numbers);

console.log(`The largest number is ${largestNumber}`);