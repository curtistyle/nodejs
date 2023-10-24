var btn_agregar = document.getElementById('btn_agregar')
btn_agregar.addEventListener("click", agregarPalabra)

var in_data = {
    palabra : '',
    traduccion : '',
    tipo : ''
}

var palabras = new Array()

function createRow(){
    tr = document.createElement('tr')


}

const fs = require('fs')


function agregarPalabra(){
    in_data.palabra = document.getElementById('in_palabra').value
    in_data.traduccion = document.getElementById('in_traduccion').value
    in_data.tipo = document.getElementById('in_tipo').value
    
    
    fs.readFile('datos.json', (err, data) => {
        if (err) throw err;
        let datos = JSON.parse(data);
        console.log(datos)
        datos.palabras.push(in_data)

        fs.writeFile('datos.json', JSON.stringify(datos), (err) => {
            if (err) throw err;
            console.log('Archivo actualizado satisfactoriamente');
        });
    });


}



// Object.keys(row).forEach(key => {
//     console.log(key, row[key]);
//   });