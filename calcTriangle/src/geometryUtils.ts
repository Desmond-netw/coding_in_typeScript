
export function calculateTriangleArea(base: number, height: number): number;

export function calculateTriangleArea(side1: number, side2: number, angle: number): number;

export function calculateTriangleArea(a: number, b: number, c?: number): number {
    if (c !== undefined) {
        return 0.5 * a * b * Math.sin((c * Math.PI) / 180);
    } else {
        return 0.5 * a * b;
    }
}
