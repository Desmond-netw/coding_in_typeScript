"use strict";
function summarize(title, ...numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(`${title}: Sum is ${sum}, Count is ${numbers.length}`);
}
summarize("Summary", 10, 20, 30);
summarize("Another Summary", 5, 15);
