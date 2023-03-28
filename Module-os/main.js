const os = require('os');

// arch() devuelve la arquitectura del os
console.log(os.arch());

// availableParallelism() devuelve la cantidad de nucleos que podes utilizar
console.log(os.availableParallelism());

/* El módulo os.constants de Node.js proporciona constantes 
simbólicas para las constantes de sistema operativo específicas, 
como señales de proceso, códigos de error y banderas de señal. 
Estas constantes son útiles para escribir código que sea compatible 
con diferentes sistemas operativos y para interactuar con el sistema 
operativo de manera más precisa. */
console.log(os.constants.priority.PRIORITY_LOW);

// os.cpus devuelve un objeto con la informacion de todos los nucleos
console.log(os.cpus());

