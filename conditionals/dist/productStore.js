"use strict";
//Task: Creating and Using a Type for Products
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const input = (0, prompt_sync_1.default)();
const quantity = parseInt(input("Enter Product Quantity first: "));
console.log(quantity);
function createProduct() {
    const name = input("Enter product name: ");
    const priceInput = input("Enter product price: ");
    const price = parseFloat(priceInput);
    const inStockInput = input("Is the product in stock? (yes/no): ");
    const inStock = inStockInput.toLowerCase() === "yes";
    return { name, price, inStock };
}
const product = [];
for (let i = 0; i < quantity; i++) {
    console.log(`\nEnter details for product ${i + 1}:`);
    const productList = createProduct();
    product.push(productList);
}
console.log("Product list");
for (const productlist of products) {
    console.log(`\nName: ${product.name}
        \nPrice: ${product.price.toFixed(2)}
        \nIn stoc: ${product.inStock ? "Yes" : "No"}`);
}
