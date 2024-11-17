"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = calculate;
function calculate(a, b, operation) {
    switch (operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b !== 0 ? a / b : "Cannot divide by zero";
        default:
            return "Invalid operation";
    }
}
;
//# sourceMappingURL=calculatorUtils.js.map