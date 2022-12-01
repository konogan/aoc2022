const fs = require('fs');

const allFileContents = fs.readFileSync('problem.txt', 'utf-8');

let elf = [];
let i = 0;
elf[i] = 0;
allFileContents.split(/\r?\n/).forEach(line => {
    if (line === "") {
        i++;
        elf[i] = 0;
    } else {
        elf[i] += parseInt(line);
    }
});
let sorted = elf.sort((a, b) => (a > b ? -1 : 1));

console.log(sorted[0]+sorted[1]+sorted[2]);