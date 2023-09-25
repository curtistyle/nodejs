document.getElementById('btn_res').addEventListener('click', mostrarResultado)
document.getElementById('btn_lim').addEventListener('click', limpiearResultado)

let datos = {
    menores: undefined,
    total: undefined
}

function obtenerValores(){
    datos.menores = parseFloat(document.getElementById('menores').value);
    datos.total = parseFloat(document.getElementById('total').value);
}

function generarResultado(){
    return (datos.menores * 100) / datos.total;
}

function mostrarResultado(){
    obtenerValores()

    var resultado = document.getElementById('resultado');
    resultado.innerText = generarResultado() + "%";
}

function limpiearResultado(){
    var limpiar = document.getElementById('resultado');
    limpiar.innerText = ""; 
}



