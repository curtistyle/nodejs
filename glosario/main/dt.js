const fs = require('fs');

fs.readFile('datos.json', (err, data) => {
    if (err) throw err;
    var datos = JSON.parse(data);
    datos['palabras'][0]['palabra'] = "12"
    console.log(datos);
  });