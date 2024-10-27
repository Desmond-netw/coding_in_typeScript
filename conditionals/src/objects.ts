//Task: User Objects with Additional Fields
//Description: Extend your existing User type to include new fields like email, isAdmin, and phone.
// Ask the user to input these details, store them in a User object, and print the information in a formatted sentence.

//==============================================
// import prompt-sybc for user input
import PromptSync from "prompt-sync";
const prompt = PromptSync();

//declear user type with optional fiedl
type users = {
    name: string;
    email: string;
    isAdmin: boolean;
    phone : string;
}

//function to take user input
function createUser(): users {
    const name = prompt("Enter your name: ");
    const email = prompt("Enter your email: ");
    const isAdminInput = prompt("Are you an admin? (yes/no): ").toLowerCase();
    const phone = prompt("Enter you phone number : ");
    //convert isAdmin input to boolean
    const isAdmin = isAdminInput === "yes";

    //how to return user objects
    const user: users = {
        name,
        email,
        isAdmin,
        phone
    }

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