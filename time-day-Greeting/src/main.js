"use strict";
exports.__esModule = true;
// importing functions 
var prompt_sync_1 = require("prompt-sync");
var greetingUtils_1 = require("./greetingUtils"); // import from
var prompt = (0, prompt_sync_1["default"])();
var name = prompt("Enter your name: ");
var time = parseInt(prompt("Enter the current hour (0-24): "), 10);
console.log((0, greetingUtils_1.greetBasedOnTime)(name, time));
