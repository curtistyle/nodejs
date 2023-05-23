
const { writeFile } = require('fs/promises');

const createBigFile = async () => {
    await writeFile('./data/bigfile.txt', 'hello world'.repeat(10000000));
}
createBigFile();



/*
const { createReadStream } = require('fs');

const stream = createReadStream('./data/bigfile2.txt');

stream.on('data', (chunk) => {
    console.log(chunk);
})

stream.on('end', () => {
    console.log(' >>> Ya se termino de leer el archivo.');
})

stream.on('error', (error) => {
    console.log(error);
})

*/



