/*
Task 7: Calculate Triangle Area Based on Inputs
Description: This app will ask the user to calculate the area of a triangle, 
either by using base and height or by using two sides and an angle.
*/
import { calculateTriangleArea } from "./geometryUtils";
import promptSync from "prompt-sync";

const prompt = promptSync();
const method = prompt("Choose method (1: base/height, 2: two sides/angle): ");

if (method === "1") {
    const base = parseFloat(prompt("Enter base: "));
    const height = parseFloat(prompt("Enter height: "));
    console.log("Area of triangle:", calculateTriangleArea(base, height));
} else if (method === "2") {
    const side1 = parseFloat(prompt("Enter first side: "));
    const side2 = parseFloat(prompt("Enter second side: "));
    const angle = parseFloat(prompt("Enter angle in degrees: "));
    console.log("Area of triangle:", calculateTriangleArea(side1, side2, angle));
}
