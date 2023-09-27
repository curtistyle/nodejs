document.getElementById('btn_res').addEventListener('click', mostrarResultado)
document.getElementById('btn_lim').addEventListener('click', limpiar)
document.getElementById('btn_graf').addEventListener('click', mostrarQuitar)
var div_graf = document.createElement('canvas')
div_graf.id = "miGrafica"


var datos_in = {
    herencia : undefined
}

var datos_out = {
    carlos: undefined,
    jose: undefined,
    marta: undefined
}

function inicializar(){
    // in: 
    datos_in.herencia = undefined
    // out:
    datos_out.carlos = undefined
    datos_out.jose = undefined
    datos_out.marta = undefined

}

function obetenerValores(){
    datos_in.herencia = parseFloat(document.getElementById('herencia').value)
}

function obtenerResultado(){
    datos_out.carlos = (datos_in.herencia * 1/3).toFixed(2)
    datos_out.jose = (datos_out.carlos * 4/3).toFixed(2)
    datos_out.marta = (datos_out.jose * 1/2).toFixed(2)
}

function crearGrafica(){
    if (document.getElementById('miGrafica') == null) {
        console.log("La grafica no existe.")
        
        var body = document.querySelector('body')
        console.log(body)
        body.appendChild(div_graf)

        const xValues = ["Carlos", "Jose", "Marta"];
        const yValues = [datos_out.carlos, datos_out.jose, datos_out.marta];
        const barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797"
        ];

        new Chart("miGrafica", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
            data: yValues
            }]
        },
        options: {
            title: {
            display: true,
            text: "Herencia"
            }
        }
        });

        console.log("La grafica ha sido creada!")
    } else {
        console.log("La grafica ya existe!")
    }
}



function mostrarQuitar(){
    if (datos_in.herencia != undefined){
        if (document.getElementById('miGrafica') == null) {
            crearGrafica() // crea y muestra la grafica
            document.getElementById('btn_graf').innerText = "Eliminar Grafica"
        }
        else {
            document.getElementById('miGrafica').remove()
            document.getElementById('btn_graf').innerText = "Mostrar Grafica"
        }
    }
}



parseFloat


function mostrarResultado(){
    if (document.getElementById('herencia').value == ""){
        alert("Ingrese algun valor en `Herencia`")
    } else {
    obetenerValores()
    obtenerResultado()

    document.getElementById('carlos').innerText = datos_out.carlos
    document.getElementById('jose').innerText   = datos_out.jose
    document.getElementById('marta').innerText  = datos_out.marta

    console.log(datos_out)
    document.getElementById('btn_graf').innerText = "Mostrar Grafica"
    }
    
}

function limpiar(){
    if (document.getElementById('miGrafica') != null){
        document.getElementById('miGrafica').remove()
    }
    document.getElementById('herencia').value   = null
    document.getElementById('carlos').innerText = null
    document.getElementById('jose').innerText   = null
    document.getElementById('marta').innerText  = null
    
    inicializar()
}
