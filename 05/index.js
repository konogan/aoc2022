const fs = require('fs');

// const allFileContents = fs.readFileSync('test.txt', 'utf-8');
const allFileContents = fs.readFileSync('problem.txt', 'utf-8');
const [crates,instructions] = allFileContents.split('\n\n');

const  line_of_crates = crates.split('\n');
const last_line_of_crates = line_of_crates.length-2;
const numberOfStacks = line_of_crates[last_line_of_crates+1].split('  ').map(r=>+r).pop();

let stacks_part_1= Array(numberOfStacks);
let stacks_part_2= Array(numberOfStacks);
for (let s = 0; s < numberOfStacks; s++) {
    stacks_part_1[s]=new Array();
    stacks_part_2[s]=new Array();
}

for (let l = 0; l <= last_line_of_crates; l++) {
    let line = (line_of_crates[l]+' ').split('');
    for (let n = 0; n < numberOfStacks; n++) {
        let char_at_pos_of_a_crate = line[(n)*4+1];
        if(char_at_pos_of_a_crate!==' ' && char_at_pos_of_a_crate!==undefined) {
            stacks_part_1[n].unshift(char_at_pos_of_a_crate);
            stacks_part_2[n].unshift(char_at_pos_of_a_crate);
        }
    }
}


const  lines_of_instructions = instructions.split('\n');

for (let i = 0; i < lines_of_instructions.length; i++) {
    let detail =lines_of_instructions[i].split(" ");
    let repetitions = detail[1];
    let from = detail[3];
    let to = detail[5];

    /*Part 1 */
    for (let j = 0; j < repetitions; j++) {
        //console.log(from + "--->"+to);
        stacks_part_1[to-1].push(stacks_part_1[from-1].pop());
    }

    /*part 2 */
    let tmp = []
    for (let j = 0; j < repetitions; j++) {
        tmp.push(stacks_part_2[from-1].pop());
    }
    for (let j = 0; j < repetitions; j++) {
        stacks_part_2[to-1].push(tmp.pop());

    }


}

let result_part_1='';
let result_part_2='';
for (let n = 0; n < numberOfStacks; n++) {
    result_part_1+=stacks_part_1[n][stacks_part_1[n].length-1]
    result_part_2+=stacks_part_2[n][stacks_part_2[n].length-1]
}

console.log(result_part_1);
console.log(result_part_2);


