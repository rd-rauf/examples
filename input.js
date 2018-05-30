
let fs = require('fs');
let contents = fs.readFileSync('input.txt', 'utf-8');

let lines = contents.match(/[^\r\n]+/g);
let lineNumbers = new Array(lines.length);

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (line) {
        let numbers = line.split(' ');
        if (numbers && numbers.length) {
            let iNumbers = [];
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[j]) {
                    if (!isNaN(numbers[j])) {
                        iNumbers.push(parseInt(numbers[j]));
                    }
                }
            }
            lineNumbers.push(iNumbers);
        }
    }
}
console.log("Numbers: ", lineNumbers);
