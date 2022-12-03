const fs = require('fs');

function isUpperCase(string) {
    return string.charCodeAt() >= 65 && string.charCodeAt() <= 90;
}

function getCompartments(content) {
    let half = content.length / 2;
    let compartmentA = content.slice(0, half);
    let compartmentB = content.slice(half);
    return {
        compartmentA,
        compartmentB
    }
}

function getCommon(compartmentA, compartmentB) {
    return [...new Set(compartmentA.filter(element => compartmentB.includes(element)))];
}

function getCommon2(compartmentA, compartmentB,compartmentC) {
    return [...new Set(compartmentA.filter(element => compartmentB.includes(element)).filter(element => compartmentC.includes(element)))];
}

function getPriority(char) {
    const CHARS = "_abcdefghijklmnopqrstuvwxyz";
    let ca = CHARS.split('');
    let priority = ca.indexOf(char.toLowerCase());
    if (isUpperCase(char)) {
        priority += 26
    }
    return priority
}

const allFileContents = fs.readFileSync('problem.txt', 'utf-8');
// const allFileContents = fs.readFileSync('test.txt', 'utf-8');
console.log('-------------part 1---------------')

let part1 = 0;
allFileContents.split(/\r?\n/).forEach(line => {
    let rucksack = getCompartments(line);
    let commonChar = getCommon(rucksack.compartmentA.split(''), rucksack.compartmentB.split(''));
    let priority = getPriority(commonChar[0]);
    part1 += priority
    //console.log(rucksack.compartmentA, rucksack.compartmentB, commonChar, priority);
});
console.log(part1);

console.log('-------------part 2---------------')
let part2 = 0;
const lines = allFileContents.split(/\r?\n/);

for (let i = 0; i < lines.length; i = i + 3) {
    let rucksack_A = lines[i];
    let rucksack_B = lines[i + 1];
    let rucksack_C = lines[i + 2];
    let commonChar = getCommon2(rucksack_A.split(''), rucksack_B.split(''), rucksack_C.split(''));
    let priority = getPriority(commonChar[0]);
    part2 += priority
    console.log(rucksack_A,rucksack_B,rucksack_C,commonChar,priority);
}

console.log(part2);
