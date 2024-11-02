// Import prompt-sync to take user input
import promptSync from "prompt-sync";
const prompt = promptSync();

const numbers: number[] = [];


for (let i = 0; i < 3; i++) {
  const input = prompt(`Enter number ${i + 1}: `);
  const Inputnumber = parseFloat(input); 

  
  if (!isNaN(Inputnumber)) {
    numbers.push(Inputnumber); 
  } else {
    console.log("Invalid input. Please enter a valid number.");
    i--; 
  };
};

let largestNumber = numbers[0];

for(let i = 1; i < numbers.length; i++) {
    
}

// const largestNumber = Math.max(...numbers);

// console.log(`The largest number is ${largestNumber}`);