const fs = require('fs');

// lee un archivo
const file1 = fs.readFileSync('./data/file1.txt', 'utf-8');
const file2 = fs.readFileSync('./data/file2.txt')

console.log(file1);

console.log(file2.toString());

const archivo = {
    ruta : './data/archivodetecto.txt',
    contenido : 'bienvenidos!'
}

// crea un archivo
fs.writeFileSync(archivo.ruta, archivo.contenido, {
    flag: 'a'
});

