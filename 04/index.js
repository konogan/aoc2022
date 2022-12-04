const fs = require('fs');

function getElfSection(pair) {
    const elf = pair.split("-").map(n => parseInt(n))
    return {
        start: elf[0],
        end: elf[1]
    }
}


function isFullOverlap(elf_A, elf_B) {
    return ((elf_A.start <= elf_B.start && elf_A.end >= elf_B.end) ||
        (elf_A.start >= elf_B.start && elf_A.end <= elf_B.end))
}


function isPartialOverlap(elf_A, elf_B) {
    return (elf_A.end >= elf_B.start && elf_B.end >= elf_A.start)
}

let part1 = 0;
let part2 = 0;

const allFileContents = fs.readFileSync('problem.txt', 'utf-8');

allFileContents.split(/\r?\n/).forEach(line => {
        const pair = line.split(",");
        const elf_A = getElfSection(pair[0]);
        const elf_B = getElfSection(pair[1]);

        if (isFullOverlap(elf_A, elf_B)) {
            part1++;
        }

        if (isPartialOverlap(elf_A, elf_B)) {
            part2++;
        }
    }
)

console.log(part1);
console.log(part2);