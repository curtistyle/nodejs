const miDireccionWeb = 'www.codigo.com';
const lista = [1, 2, 3];
const persona = {
    name: 'Carlos',
    apellido: 'Martinez'
} 

//module.exports = miDireccionWeb;
/* 
const group = {
    miDireccionWeb: miDireccionWeb,
    lista: lista,
    persona: persona
}
 */

//module.exports = group;

// o bien

console.log(module);

module.exports = {
    miDireccionWeb,
    lista,
    persona
}

console.log(module);