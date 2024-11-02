//Task 10: Student Grade Classifier
import PromptSync from "prompt-sync";
const prompt = PromptSync();

type Product = {
    name: string;
    price : number;
    quantity: number;

}

const storeProduct: Product[] = [];

for (let i = 0; i <= 3; i =i +1) {
    const name = prompt(`Enter product name:${i +1}:  `);
    const price = parseFloat(prompt("Enter price: "));
    const quantity = parseFloat(prompt("Enter Product quantity: "));
    storeProduct.push({name, price, quantity});
}
console.log("Store Goods: ", storeProduct);

let  totalValue = 0;

for (const value of storeProduct) {
    totalValue += value.price * value.quantity;
}

console.log(`Inventory total ${totalValue.toFixed(2)}`)