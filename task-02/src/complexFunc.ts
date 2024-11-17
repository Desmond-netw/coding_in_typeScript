import promptSync from "prompt-sync";
const prompt = promptSync();

const tilte:string = prompt("Enter Title: ")
const titleDes: string =prompt("Title of descipro: ")

function summarize(title: string, ...numbers: number[]): void {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(`${title}: Sum is ${sum}, Count is ${numbers.length}`);
}