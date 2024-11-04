
export function findMinMax(arr: number[]): { min: number; max: number } {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
}