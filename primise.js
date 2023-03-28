const fs =  require('fs');
/*
new Promise(function (resolve, reject) {
    fs.readFile('./data/file1.txt', 'utf-8', (err, data) => {
        if (err) {
            reject.log(err);
        }
    
        resolve(data);
    })
    
}) 
*/

function getText(pathFile) {
    return new Promise(function (resolve, reject) {
        fs.readFile(pathFile, 'utf-8', (err, data) => {
            if (err) {
                reject.log(err);
            }
            resolve(data);
        })
    })
}

/*
getText('./data/file1.txt')
    .then((result) => console.log(result))
    .then(() => getText('./data/file2.txt'))
    .then(result => console.log(result))
    .catch((error) => console.log(error))
*/
async function read() {    
    try {
        const result = await getText('./data/file1.txt');
        const result2 = await getText('./data/file2.txt')
        console.log(result);
        console.log(result2);
    } catch(err) {
        console.log(err);
    }
    

}

read();