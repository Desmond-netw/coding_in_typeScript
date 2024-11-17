"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Application to Reverse String
//initiate prompt Sync
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
//take input
const inputString = prompt("Enter any String: ");
//split string
let reverStr = inputString.split("").reverse().join();
console.log("Reverse Character: ", reverStr);
const cleanedJoinedStr = reverStr.replace(/\/s+/g, "");
console.log(cleanedJoinedStr);
//# sourceMappingURL=reverseString.js.map