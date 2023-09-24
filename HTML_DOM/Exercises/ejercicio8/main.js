document.getElementById('btn_res').addEventListener('click', mostrarResultado)
document.getElementById('btn_lim').addEventListener('click', limpiarResultado)

var fecha = new Date()

var datos = {
    monto_inicial: undefined,
    monto_final: undefined,
    mes_inicial: 1,
    mes_final: fecha.getMonth(),
    xValores: [],
    yValores: []

}
var funcion = {
    m: undefined, // pendiente
    b: undefined, // ordenada al origen
    x: undefined, // variable independiente
    y: undefined, // variable dependiente f(x) = y
}

function obtenerValores() {
    datos.monto_inicial = parseFloat(document.getElementById('monto_inicial').value)
    datos.monto_final   = parseFloat(document.getElementById('monto_final').value)
}

function generarResultado() {
    return ((datos.monto_final - datos.monto_inicial) / datos.monto_final) * 100
}

function generarFuncion() {
    var y2 = datos.monto_final
    console.log("y2: ", y2)
    var y1 = datos.monto_inicial
    console.log("y1: ", y1)
    var x2 = datos.mes_final
    console.log("x2: ", x2)
    var x1 = datos.mes_inicial
    console.log("x1: ", x1)
    funcion.m = ((y2 - y1) / (x2 - x1))
    console.log("m: ", funcion.m)
    funcion.b = (y1 - (funcion.m * 1))
    console.log("b: ", funcion.b)
}

function generarValores() {
    for (var i = 1 ; i <= datos.mes_final ; i++){
        funcion.y = (funcion.m * i) + funcion.b
        datos.yValores.push(funcion.y)
        datos.xValores.push(i)
    } 
}

function generarGrafica() {
    var miGraf =document.createElement('canvas')
    miGraf.id = "miGrafica"
    document.getElementById('contenedorGrafica').appendChild(miGraf)
    var graf = new Chart("miGrafica", {
    type: "line",
    data: {
        labels: datos.xValores,
        datasets: [{ 
            data: datos.yValores,
            borderColor: "red",
            fill: false
            }]
    },
    options: {
        legend: {display: false}
    }
    });
    return graf
}


function limpiarResultado ( ) {
    var elemento = document.getElementById('miGrafica').remove()
}

function mostrarResultado() {
    obtenerValores()
    var resultado = generarResultado()

    document.getElementById('resultado').innerHTML = resultado + "%";

    generarFuncion()

    generarValores()
    console.log(datos.xValores)
    console.log(datos.yValores)

    generarGrafica()


}
