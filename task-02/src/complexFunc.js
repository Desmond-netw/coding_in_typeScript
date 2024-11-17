"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const tilte = prompt("Enter Title: ");
const titleDes = prompt("Title of descipro: ");
function summarize(title, ...numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(`${title}: Sum is ${sum}, Count is ${numbers.length}`);
}
//# sourceMappingURL=complexFunc.js.map