//exporting functions.
export function generateMultiplicationTable(n: number): number[] {
    return Array.from({ length: 10 }, (_, i) => n * (i + 1));
}
