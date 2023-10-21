# CSS

## `justify-content`
Alinea elementos horizontalmente y acepta los siguientes valores: 
 - `flex-start`: Alinea elementos al lado izquierdo del contenedor.
 - `flex-end`: Alinea elementos al lado derecho del contenedor.
 - `center`: Alinea elmentos en el centro del contenedor.
 - `space-between`: Muestra elementos con la misma distancia entre ellos.
 - `space-around`: Muestra elementos con la misma separacion al rededor de ellos.   

## `align-items`
Alinea elementos verticalmente y acepta los siguientes valores:
 - `flex-start`: Alinea elementos a la parte superior del contendor.
 - `flex-end`: Alinea elmentos a la parte inferior del contenedor.
 - `center`: Alinea elementos en el centro (verticalmente hablando) del contenedor.
 - `baseline`: Muestra elementos en la línea base del contenedor.
 - `stretch`: Elementos se estiran para ajustarse al contenedor.

## `flex-direction`
Define la dirección de los elementos en el contenedor, y acepta los siguientes valores:
 - `row`: Elementos son colocados en la misma direccion del texto.
 - `row-reverse`: Elmentos son colocados en la dirección opuesta al texto.
 - `column`: Elementos se colocan de arriba hacía abajo.
 - `column-reverse`: Elementos se colocan de abajo hacia arriba.

## `order`
A veces, invertir el orden de una fila o columna de un contenedor no es suficiente. En esos casos, nosotros podemos aplicar la propiedad `order` a elementos individuales. Por defecto, los elementos tienen un valor 0, pero nosotros podemos usar esta propiedad para establecerlo a un número entero positivo o negativo.

## `align-self`
Esta propiedad acepta los mismos valores de `align-items` y sus valores son usados para un elemento específico.
Alinea un elemento flex a lo largo del eje transversal, anulando el valor de `align-items`

## `flex-wrap`
Especifica si los elementos flex son forzados a una sola línea o pueden ser envueltos en multiples líneas
 - `nowrap`: Cada elemento se ajusta en una sola línea.
 - `wrap`: los elementos se envuelven alrededor de líneas adicionales.
 - `wrap-reverse`: Los elementos se envuelven alrededor de líneas adicionales en reversa.

## `flex-flow: column wrap`

> Esto puede ser confuso, pero `align-content` determina el espacio entre las líneas, mientras que `align-items` determina como los elementos en su conjunto están alineados dentro del contenedor. Cuando hay solo una línea, `align-content` no tiene efecto.

## JSON Files

En Node.js, puedes manipular archivos JSON utilizando el módulo `fs` (sistema de archivos) y las funciones proporcionadas por este módulo. A continuación, te mostraré cómo crear, abrir, actualizar y borrar archivos JSON en Node.js:

### 1. Crear un archivo JSON:

```javascript
const fs = require('fs');

const datos = {
  nombre: 'Juan',
  edad: 30
};

fs.writeFile('datos.json', JSON.stringify(datos), (err) => {
  if (err) throw err;
  console.log('Archivo creado satisfactoriamente');
});
```

Este código crea un archivo llamado `datos.json` y escribe en él el objeto `datos` en formato JSON.

### 2. Leer un archivo JSON:

```javascript
fs.readFile('datos.json', (err, data) => {
  if (err) throw err;
  const datos = JSON.parse(data);
  console.log(datos);
});
```

Este código lee el archivo `datos.json` y lo convierte de JSON a un objeto de JavaScript.

### 3. Actualizar un archivo JSON:

```javascript
fs.readFile('datos.json', (err, data) => {
  if (err) throw err;
  let datos = JSON.parse(data);
  datos.edad = 31;

  fs.writeFile('datos.json', JSON.stringify(datos), (err) => {
    if (err) throw err;
    console.log('Archivo actualizado satisfactoriamente');
  });
});
```

Este código lee el archivo JSON, actualiza el valor de `edad`, y luego escribe el objeto actualizado de vuelta al archivo.

### 4. Borrar un archivo JSON:

```javascript
fs.unlink('datos.json', (err) => {
  if (err) throw err;
  console.log('Archivo borrado satisfactoriamente');
});
```

Este código borra el archivo `datos.json`.

Recuerda que al manipular archivos, es importante manejar los posibles errores que puedan ocurrir durante las operaciones de lectura y escritura.

Ten en cuenta que estos ejemplos son bastante simplificados y no incluyen validación de errores exhaustiva. En una aplicación real, deberías agregar manejo de errores más robusto y considerar posibles escenarios donde las operaciones de archivo puedan fallar.