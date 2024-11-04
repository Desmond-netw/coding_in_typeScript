"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
Task 7: Calculate Triangle Area Based on Inputs
Description: This app will ask the user to calculate the area of a triangle,
either by using base and height or by using two sides and an angle.
*/
const geometryUtils_1 = require("./geometryUtils");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const method = prompt("Choose method (1: base/height, 2: two sides/angle): ");
if (method === "1") {
    const base = parseFloat(prompt("Enter base: "));
    const height = parseFloat(prompt("Enter height: "));
    console.log("Area of triangle:", (0, geometryUtils_1.calculateTriangleArea)(base, height));
}
else if (method === "2") {
    const side1 = parseFloat(prompt("Enter first side: "));
    const side2 = parseFloat(prompt("Enter second side: "));
    const angle = parseFloat(prompt("Enter angle in degrees: "));
    console.log("Area of triangle:", (0, geometryUtils_1.calculateTriangleArea)(side1, side2, angle));
}
