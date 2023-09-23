document.getElementById('btn_res').addEventListener('click', mostrarResultados);
document.getElementById('btn_lim').addEventListener('click', limpiarResultados);
var lista = document.getElementById('lista_res')

var datos = {
    numero: undefined,
    
}

var index = 1

function obtenerValores() {
    datos.numero = parseInt(document.getElementById('num').value)
}

function generarResultado() {
    var digito1 = Math.trunc(datos.numero / 100)
    var digito2 = Math.trunc((datos.numero - (digito1 * 100)) / 10)
    var digito3 = (datos.numero - ((digito1 * 100) + (digito2 * 10)))

    return Math.pow(digito1,3) + Math.pow(digito2,3) + Math.pow(digito3,3)
}

function insertarItemEnLista(resultado, numero) {
    var item = document.createElement('li')
    if (numero == resultado){
        item.innerHTML = index + "- in: " + numero + " out: " + resultado + ", <b>Armstrong</b>"; 
    } else {
        item.innerHTML = index + "- in: " + numero + " out: " + resultado; 
    }
    index += 1
    console.log(item)
    lista.append(item)
}

function mostrarResultados() {
    obtenerValores()
    var res = generarResultado()
    console.log(res)
    document.getElementById('resultado').innerText = res
    insertarItemEnLista(res,datos.numero)
}

function limpiarResultados(){
    document.getElementById('resultado').innerText = '';
    var list = document.getElementById('lista_res')
    
    // Elimina de a un elemento por vez
    if (list.hasChildNodes()) {
        list.removeChild(list.children[0]);
      }
}