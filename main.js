const web = require('./module/myModule');

console.log(web.miDireccionWeb);
console.log(web);


const { lista, miDireccionWeb, persona } = require("./module/myModule");

console.log(lista);
console.log(miDireccionWeb);
console.log(persona);

const matematica = require('./module/matematica');

console.log(matematica);
console.log(matematica.sumar(2,2));
console.log(matematica.dividir(2,0));