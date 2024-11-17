"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Task 10: Student Grade Classifier
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const storeProduct = [];
for (let i = 0; i <= 3; i = i + 1) {
    const name = prompt(`Enter product name:${i + 1}:  `);
    const price = parseFloat(prompt("Enter price: "));
    const quantity = parseFloat(prompt("Enter Product quantity: "));
    storeProduct.push({ name, price, quantity });
}
console.log("Store Goods: ", storeProduct);
let totalValue = 0;
for (const value of storeProduct) {
    totalValue += value.price * value.quantity;
}
console.log(`Inventory total ${totalValue.toFixed(2)}`);
//# sourceMappingURL=inventory.js.map