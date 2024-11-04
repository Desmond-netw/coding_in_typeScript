/*
Task 4: Sum and Average with reduce
Description: This app will prompt the user to enter a series of numbers, 
then calculate and display the sum and average.
*/ 
export function calculateSum(arr: number[]): number {
    return arr.reduce((acc, val) => acc + val, 0);
}

export function calculateAverage(arr: number[]): number {
    return arr.length > 0 ? calculateSum(arr) / arr.length : 0;
}
