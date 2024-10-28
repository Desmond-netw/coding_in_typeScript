import PromptSync from "prompt-sync";
const input = PromptSync();

const inputTemp = input("Enter current temperature: ");
const temperature = parseFloat(inputTemp);

if(isNaN(temperature)){
    console.log("Invalid Value. Please enter a number");

}else if (temperature < 0) {
    console.log("it's freezing!");
}else if (temperature >=0 && temperature <= 20) {
    console.log("it's chilly.");
} else if (temperature > 20 ) {
    console.log("It's warm out there");
};

