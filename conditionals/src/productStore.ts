//Task: Creating and Using a Type for Products

import PromptSync from "prompt-sync";
const input = PromptSync();

type Product = {
    name: string;
    price: number;
    inStock: boolean;
}
const quantity: number = parseInt(input("Enter Product Quantity first: "));
console.log(quantity);

function createProduct():Product {
    const name = input("Enter product name: ");

    const priceInput = input("Enter product price: ");
    const price = parseFloat(priceInput);
    

    const inStockInput = input("Is the product in stock? (yes/no): ");
    const inStock = inStockInput.toLowerCase() === "yes";

    return { name, price, inStock};
}

const product: Product[] = [];

for(let i = 0; i < quantity; i++){
    console.log(`\nEnter details for product ${i + 1}:`);
    const productList = createProduct();
    product.push(productList);
}

console.log("Product list");

for (const productlist of products) {
    console.log(
        `\nName: ${product.name}
        \nPrice: ${product.price.toFixed(2)}
        \nIn stoc: ${product.inStock ? "Yes" : "No"}`
    )
}