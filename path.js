const path = require('path');

/* El método path.join() de Node.js se utiliza para unir dos o 
más segmentos de ruta en un solo camino normalizado. 
Devuelve una cadena que representa la ruta resultante. */

filepath = path.join('/public', 'dist', '/styles', 'index.html');

console.log(filepath);

console.log(path.basename(filepath));

console.log(path.dirname(filepath));

console.log(path.parse(filepath));

console.log(path.resolve('dist'));