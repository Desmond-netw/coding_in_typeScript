/* 
Description: This app will take an array of numbers from the user and 
display whether each number is even or odd.

*/
export function checkEvenOrOdd(arr: number[]): string[] {
    return arr.map(num => `${num} is ${num % 2 === 0 ? "even" : "odd"}`);
};


function isevenodd(arr:number[]):string[] {
    let result:string[] = []
    arr.forEach((n) => {
       result.push(n % 2 === 0 ? "even": "odd");
    })
    return result;
}

export {isevenodd as oddEven};