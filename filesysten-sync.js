const fs = require('fs');


fs.readFile('./data/file1.txt','utf-8',(err, data) => {
    if (err){
        console.log(err);
    }
    console.log(data);

    fs.readFile('./data/file2.txt','utf-8',(err, data) => {
        if (err){
            console.log(err);
        }
        console.log(data);

        fs.writeFile('./data/nuevoarchivo.txt','nuevo archivos creado de fs',
        (err,data) => {
            if(err) {
                console.log(err);
            }
            console.log(data);
        })
    });
});

