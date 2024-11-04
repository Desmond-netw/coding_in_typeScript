"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetBasedOnTime = greetBasedOnTime;
//Greeting utiles
function greetBasedOnTime(name, time) {
    if (time >= 5 && time <= 11) {
        return `Good morning, ${name}`;
    }
    else if (time >= 12 && time <= 17) {
        return `Good afternoon, ${name}`;
    }
    else if (time >= 18 && time <= 24) {
        return `Good evening, ${name}`;
    }
    else {
        return `Hello, ${name}`;
    }
}
