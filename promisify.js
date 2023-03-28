const { readFile } = require('fs');
const { promisify } = require('util');

const readFilePromise = promisify(readFile);

async function read() {
    try {
        const result = await readFilePromise('./data/file1.txt', 'utf-8');
        console.log(result);
        const result2 = await readFilePromise('./data/file2.txt', 'utf-8');
        console.log(result2);
    } catch (err) {
        console.log(err);
    }
}

read();