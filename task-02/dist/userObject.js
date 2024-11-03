"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//initiate prompt Sync
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const userName = prompt("Enter your name: ");
const Userage = parseInt(prompt("Enter your age: "));
const Useremail = prompt("Enter your email: ");
const user1 = {
    name: userName,
    age: Userage,
    email: Useremail
};
console.log(`User's name is : ${user1.name}`);
console.log("User age is : ", user1.age);
console.log("Users email: ", user1.email);
