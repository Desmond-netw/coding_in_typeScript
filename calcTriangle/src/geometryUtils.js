"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTriangleArea = calculateTriangleArea;
function calculateTriangleArea(a, b, c) {
    if (c !== undefined) {
        return 0.5 * a * b * Math.sin((c * Math.PI) / 180);
    }
    else {
        return 0.5 * a * b;
    }
}
//# sourceMappingURL=geometryUtils.js.map