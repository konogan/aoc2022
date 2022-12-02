const fs = require('fs');
const allFileContents = fs.readFileSync('problem.txt', 'utf-8');
// const allFileContents = fs.readFileSync('test.txt', 'utf-8');

// A for Rock, B for Paper, and C for Scissors
const OPPONENT = {
    "A": "Rock",
    "B": "Paper",
    "C": "Scissors"
}

// findShapeForExpectedResult
// X means you need to lose,
// Y means you need to end the round in a draw
// Z means you need to win
function findShapeForExpectedResult(opponentShape, expectedResult) {

    let shapeToReturn;
    // draw
    if (expectedResult === "Y") {
        shapeToReturn= opponentShape;
    }

    //lose
    if (expectedResult === "X") {
        if (opponentShape === "Rock") {
            shapeToReturn= "Scissors";
        }
        if (opponentShape === "Paper") {
            shapeToReturn= "Rock";
        }
        if (opponentShape === "Scissors") {
            shapeToReturn= "Paper";
        }
    }
    // win
    if (expectedResult === "Z") {
        if (opponentShape === "Rock") {
            shapeToReturn= "Paper";
        }
        if (opponentShape === "Paper") {
            shapeToReturn= "Scissors";
        }
        if (opponentShape === "Scissors") {
            shapeToReturn= "Rock";
        }
    }


    //console.log(`Shape to return : ${shapeToReturn}`);
    return shapeToReturn;
}

/*
* Rock defeats Scissors,
* Scissors defeats Paper,
* and Paper defeats Rock.
* If both players choose the same scoreByShape, the round instead ends in a draw.
*
* (0 if you lost, 3 if the round was a draw, and 6 if you won).
* */
function RPS(opponentShape, yourShape) {
    const POINTS = {
        "draw": 3,
        "lost": 0,
        "won": 6,
    }

    let result;

    if (opponentShape === yourShape) {
        result = "draw";
    }

    if (opponentShape === "Rock") {
        if (yourShape === "Scissors") {
            result = "lost";
        }

        if (yourShape === "Paper") {
            result = "won";
        }
    }

    if (opponentShape === "Scissors") {
        if (yourShape === "Paper") {
            result = "lost";
        }

        if (yourShape === "Rock") {
            result = "won";
        }
    }

    if (opponentShape === "Paper") {
        if (yourShape === "Scissors") {
            result = "won";
        }

        if (yourShape === "Rock") {
            result = "lost";
        }
    }

    //console.log(opponentShape, yourShape, result);

    return POINTS[result];

}

/*
* Shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors)
* */
function scoreByShape(s) {
    if (s === "Rock") return 1;
    if (s === "Paper") return 2;
    if (s === "Scissors") return 3;
}

function getMatchResultPart1(o, y) {
    let opponentShape = OPPONENT[o];
    const STRAT = {
        "X": "Rock",
        "Y": "Paper",
        "Z": "Scissors"
    }

    let yourShape = STRAT[y];
    return RPS(opponentShape, yourShape) + scoreByShape(yourShape);
}

function getMatchResultPart2(o, y) {
    let opponentShape = OPPONENT[o];
    let shape = findShapeForExpectedResult(opponentShape,y);
    return RPS(opponentShape, shape) + scoreByShape(shape);
}

let part1 = 0;
let part2 = 0;

allFileContents.split(/\r?\n/).forEach(line => {

    const choices = line.split(' ');
    part1 += getMatchResultPart1(choices[0], choices[1]);
    part2 += getMatchResultPart2(choices[0], choices[1]);

});

console.log("Part 1 ", part1);
console.log("Part 2 ", part2);