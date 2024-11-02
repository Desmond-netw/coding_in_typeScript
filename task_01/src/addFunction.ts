
function isvalidpass(password: string):boolean {
    return password.length <=8;
}

const input = isvalidpass("Homefood");

console.log(input);
