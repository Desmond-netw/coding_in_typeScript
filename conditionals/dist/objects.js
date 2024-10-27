"use strict";
//Task: User Objects with Additional Fields
//Description: Extend your existing User type to include new fields like email, isAdmin, and phone.
// Ask the user to input these details, store them in a User object, and print the information in a formatted sentence.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//==============================================
// import prompt-sybc for user input
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
//function to take user input
function createUser() {
    const name = prompt("Enter your name: ");
    const email = prompt("Enter your email: ");
    const isAdminInput = prompt("Are you an admin? (yes/no): ").toLowerCase();
    const phone = prompt("Enter you phone number : ");
    //convert isAdmin input to boolean
    const isAdmin = isAdminInput === "yes";
    //how to return user objects
    const user = {
        name,
        email,
        isAdmin,
        phone
    };
    return user;
}
function showInfo(user) {
    console.log(` User information:
        name: ${user.name}
        email: ${user.email},
        isdmin: ${user.isAdmin ? "Role: Admin" : "Role: User"} 
        phone: ${user.phone} 
        
        `);
}
const user = createUser();
showInfo(user);
