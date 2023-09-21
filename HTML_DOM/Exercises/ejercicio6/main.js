document.getElementById('btn_res').addEventListener('click', mostrarResultado)
document.getElementById('btn_lim').addEventListener('click', limpiarResultado)
var miCanvas = document.getElementById('miGrafica').getContext("2d")

function generarGrafica(){
    var miChart = new Chart(miCanvas,{
        type: "bar",
        data: {
            labels: ["Promocionados", "Regularizados", "Desaprobados", "Libres"],
            datasets:[{
                label: "Prcentajes Alumnos",
                backgroundColor: "rgb(230,35,35)",
                data:[porcentajes[0],porcentajes[1],porcentajes[2],porcentajes[3]]
            }]
        }
    })
}

var alumnos = {
    promocionados : undefined,
    regularizados : undefined,
    desaprobados : undefined,
    libres : undefined
}

var porcentajes = []

function obtenerValores(){
    alumnos.promocionados = parseInt(document.getElementById('a_prom').value)
    alumnos.regularizados = parseInt(document.getElementById('a_reg').value)
    alumnos.desaprobados = parseInt(document.getElementById('a_des').value)
    alumnos.libres = parseInt(document.getElementById('a_lib').value)
}

function determinarPorcentaje(){
    var total_alumnos = alumnos.promocionados + alumnos.regularizados + alumnos.desaprobados + alumnos.libres
    
    porcentajes.push((alumnos.promocionados * 100) / total_alumnos)
    porcentajes.push((alumnos.regularizados * 100) / total_alumnos)
    porcentajes.push((alumnos.desaprobados * 100) / total_alumnos)
    porcentajes.push((alumnos.libres * 100) / total_alumnos)
}

// function mostrarResultado(){
//     obtenerValores()
//     determinarPorcentaje()

//     for (var i = 5; i <= 8; i++){
//         var resultado = document.createElement('tr')
//         resultado.innerHTML = "<td>" + i + "</td><td>Resultado: </td><td> </td><td>" + porcentajes[i-5] + "%</td>"
//         document.getElementById('t_body').appendChild(resultado)
//     }   
// }

function mostrarResultado(){
    obtenerValores()
    determinarPorcentaje()

    elemento_tr = document.getElementById('t_body').children

    for (i = 0 ; i < 4 ; i ++){
        elemento_tr[i].children[3].innerText = porcentajes[i] + "%"
    }
    generarGrafica()
}

function limpiarResultado(){
    elemento_tr = document.getElementById('t_body').children

    for (i = 0 ; i < 4 ; i ++){
        elemento_tr[i].children[3].innerText = ""
    }
}

