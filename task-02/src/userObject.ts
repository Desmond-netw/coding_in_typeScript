//initiate prompt Sync
import promptSync from "prompt-sync";
const prompt = promptSync();

type users = {
    name: string;
    age: number;
    email:string;
}

const userName: string = prompt("Enter your name: ");
const Userage: number = parseInt(prompt("Enter your age: "));
const Useremail: string = prompt("Enter your email: ");

const user1:users = {
    name: userName,
    age: Userage,
    email: Useremail
}

console.log(`User's name is : ${user1.name}`);
console.log("User age is : ",user1.age);
console.log("Users email: ",user1.email);
