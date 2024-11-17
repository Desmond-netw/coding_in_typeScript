"use strict";
exports.__esModule = true;
exports.greetBasedOnTime = void 0;
//Greeting utiles
function greetBasedOnTime(name, time) {
    if (time >= 5 && time <= 11) {
        return "Good morning, ".concat(name);
    }
    else if (time >= 12 && time <= 17) {
        return "Good afternoon, ".concat(name);
    }
    else if (time >= 18 && time <= 24) {
        return "Good evening, ".concat(name);
    }
    else {
        return "Hello, ".concat(name);
    }
}
exports.greetBasedOnTime = greetBasedOnTime;
