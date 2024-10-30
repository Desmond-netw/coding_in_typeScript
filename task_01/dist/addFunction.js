"use strict";
function isvalidpass(password) {
    return password.length <= 8;
}
const input = isvalidpass("Homefood");
console.log(input);
