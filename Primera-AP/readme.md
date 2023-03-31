## **path**.*dirname()*

Se utiliza para obtener el nombre del directorio que contiene un archivo en una ruta dada.

Por ejemplo: 
```
    /home/user/proyect/index.html
```

Si deseamos obtener el nombre del directorio que contiene el archivo `index.html`, podemos utilizar `path.dirname()` de la siguiente manera:

```js
    const path = require('path');

    const ruta_completa = '/home/user/proyect/index.html';
    const directorio = path.dirname(ruta_completa);

    console.log(dorectorio); 
    // out: "/home/user/proyect"
```

## **url**.*dfileURLToPath()*

Se utiliza para convertir una URL de archivo en una ruta de archivo del sistema de archivos.

Por Ejemplo, si se tiene la siguiente URL de archivo: 

```js
    const fileUrl = new URL('file:///ruta/a/mi/archivo.txt');
```

Puedes utilizar `url.fileURLToPath()` para obtener la ruta de archivo del sistema de archivo: 

```js
    const path = url.fileURLToPath(fileUrl);
    console.log(path); 
    // out: "/ruta/a/mi/archivo.txt"
```

## **import**.*meta.url*

`import.meta.url` es una propiedad de los módulos ECMAScript que se puede utilizar en Node.js desde la version 12 en adelante. Esta propiedad devuelve la URL absoluta del módulo actual como una cadena.
Esta propiedad es útil cuando necesitas trabajar con la ruta del archivo del módulo en tiempo de ejecución.

Por ejemplo, supongamos que tienes un modulo Node.js llamado `myapp.js` que se encuentra en la siguiente ruta: 

```
    /home/user/proyecto/myapp.js
```

Podemos utilizar `import.meta.url` para obtener la URL absoluta de `myapp.js` de la siguiente manera:

```js
    const url_absoluta = import.meta.url;
    console.log(url_absolta); 
    // out: "file://home/user/proyecto/app.js"
```

Puedes utilizar esta propiedad para acceder a la ruta del archivo del módulo actual y realizar operaciones como la carga dinámica de módulos, la lectura de archivos, la resolución de rutas relativas, entre otras.

Es importante tener en cuenta que import.meta.url solo está disponible en los módulos ECMAScript y no se puede utilizar en archivos de script normales.




