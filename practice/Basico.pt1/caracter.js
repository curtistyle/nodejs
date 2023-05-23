const Cadena = {};

function devuelveIndice(palabra,indice) {
    return palabra.charAt(indice)
}

function todasMinusculas(palabra) {
    return palabra.toLowerCase();
}

function todasMayusculas(palabra) {
    return palabra.toUpperCase();
}

function tamanioCadena(palabra) {
    return palabra.length();
}

Cadena.devuelveIndice = devuelveIndice;
Cadena.todasMayusculas = todasMayusculas;
Cadena.todasMinusculas = todasMinusculas;
Cadena.tamanioCadena = tamanioCadena;

module.exports = Cadena;

