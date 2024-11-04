export function filterArray(arr: number[], callback: (num: number) => boolean): number[] {
    return arr.filter(callback);
}
