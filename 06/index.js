const fs = require('fs');

const allFileContents = fs.readFileSync('problem.txt', 'utf-8');

const detectMarker = (input, n = 4) => {
    for (let i = 0; i < input.length; i++) {
        // console.log(input.substring(i, i + n),new Set(input.substring(i, i + n)))
        if (new Set(input.substring(i, i + n)).size === n) {
            console.log(n,i + n);
            break;
        }
    }
};


allFileContents.split(/\r?\n/).forEach(signal => {
    detectMarker(signal);
    detectMarker(signal,14);

});

