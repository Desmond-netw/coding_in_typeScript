import PromptSync from "prompt-sync";
const prompt  = PromptSync();

let nameInput = prompt("Enter your name: ");



function greetings(name: string):string {
    let greet  = (`Hello ${name}`);
    return greet;
}
