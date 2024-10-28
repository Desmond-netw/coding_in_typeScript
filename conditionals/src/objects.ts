//Task: User Objects with Additional Fields
//Description: Extend your existing User type to include new fields like email, isAdmin, and phone.
// Ask the user to input these details, store them in a User object, and print the information in a formatted sentence.

//==============================================

import PromptSync from "prompt-sync";
const prompt = PromptSync();


type users = {
    name: string;
    email: string;
    isLearningCoding: boolean;
    isAdmin: boolean;
    phone : string;
}

//function to take user input
function createUser(): users {
    const name = prompt("Enter your name: ");
    const email = prompt("Enter your email: ");
    const learn = prompt("Are you learning Coding? ");
    const isAdminInput = prompt("Are you an admin? (yes/no): ").toLowerCase();
    const phone = prompt("Enter you phone number : ");
    

    const isLearningCoding = learn ==="yes";
    const isAdmin = isAdminInput === "yes";
    
    const user: users = {
        name,
        email,
        isAdmin,
        phone,
        isLearningCoding
    };

    return user;
}

function showInfo(user: users) {
    console.log(` User information:
        name: ${user.name}
        email: ${user.email},
        isdmin: ${user.isAdmin ? "Role: Admin" : "Role: User"} 
        phone: ${user.phone} 
        
        `)
}

const user = createUser();
showInfo(user);