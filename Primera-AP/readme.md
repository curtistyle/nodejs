# Nodejs and JavaScript

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

# Express

## **get()**

Este metodo se utiliza para enrutar las solicitudes HTTP GET. El metodo `get()` toma dos párametros: la ruta de la solicitud y la función controladora que se ejecutará cuando se haga una solicitud GET a la ruta especificada. 

La sintaxis básica del método `get()` es la siguiente:

```js
    app.get(path, callback);
```

| PARAMETRO | DESCRIPCION |
| --------- | ----------- |
| `path` | La ruta de la solicitud |
| `callback` | La funcion controladora que se ejecutará cuando se haga una solicitud GET a la ruta especificada. |

Por ejemplo, supongamos que tienes una aplicación Express que se ejecuta en `http://localhost:3000` y quieres manejar una solicitud GET a la ruta `/hola` para devolver un mensaje de saludo. Puedes hacerlo de la siguiente manera:

```js
    const express = require('express');
    const app = express();

    app.get('/hola', (req, res) => {
        res.send('¡Hola, Mundo!');
    });

    app.listen(3000, () => {
        console.log('La aplicación se está ejecutando en el puerto 3000');
    });
```

En este ejemplo, `app.get('/hola', ...)` enruta una solicitud GET a la ruta `/hola` y define una función controladora que envía una respuesta de saludo al cliente con el método `res.send()`. Cuando se haga una solicitud GET a `http://localhost:3000/hola`, Express llamará a la función controladora y enviará la respuesta de saludo al cliente.

Es importante tener en cuenta que app.get() solo maneja solicitudes GET. Para manejar otras solicitudes HTTP, como POST, PUT o DELETE, se pueden utilizar los métodos correspondientes como `app.post()`, `app.put()` o `app.delete()`, respectivamente.

## **set()**

Este metodo se utiliza para configurar variables de aplicación que afectan al comportamiento de la aplicación en tiempo de ejecución. Las variables configuradas con `set()` se almacenan en el objeto `app.setting`.

La sintaxis básica del método `set()` es la siguiente:

```js
    app.set(setting, value);
```

Donde: 

| PARAMETRO | DESCRIPCION |
| --------- | ----------- |
| `setting` | el nombre de la variable de configuración que se desea tener |
| `value` | el valor de la variale de configuracion que se desea establecer |

Por ejemplo, supongamos que quieres configurar el puerto en el que se ejecuta tu aplicación Express en `3000`. Puedes hacerlo de la siguiente manera:

```js
const express = require('express');
const app = express();

app.set('port', 3000);

app.listen(app.get('port'), () => {
    console.log('la aplicacion se está ejecutando en el puerto 3000');
});
```

En este ejemplo, `app.set('port', 3000)` establece la variable de configuración `port` en `3000`. Luego, `app.get('port')` se utiliza para obtener el valor de la variable de configuración `port` y pasarlo al método `listen()` para que la aplicación se ejecute en el puerto `3000`.

Es importante tener en cuenta que `app.set()` debe usarse con precaución ya que puede ser difícil rastrear la configuración que se ha establecido en diferentes partes de la aplicación. Por lo tanto, es una buena práctica utilizar módulos separados para configurar diferentes partes de la aplicación y mantener la configuración en un solo lugar para facilitar su mantenimiento.


## **listen()**

El método `listen()` de Express se utiliza para iniciar el servidor y escuchar las conexiones en el puerto especificado. La sintaxis básica del método `listen()` es la siguiente: 

```js
    app.listen([puerto[, host[, backlog]]][, callback]);
```

Donde:
- `puerto:` el número de puerto en el que la aplicación escuchará las conexiones entrantes. Este parámetro es opcional y si no se especifica, la aplicación utilizará el puerto 3000 por defecto.
- `host:` el nombre o la dirección IP del host en el que la aplicación escuchará las conexiones entrantes. Este parámetro es opcional y si no se especifica, la aplicación utilizará el host local por defecto.
- `backlog:` la cola máxima de conexiones entrantes que el servidor aceptará. Este parámetro es opcional y si no se especifica, el sistema operativo utilizará un valor predeterminado.
- `callback:` una función que se ejecutará una vez que el servidor se haya iniciado correctamente. Este parámetro es opcional.
    
Por ejemplo, para iniciar una aplicación Express y escuchar en el puerto 3000, se puede utilizar el siguiente código:

En este ejemplo, `app.listen(3000)` inicia el servidor y lo hace escuchar las conexiones entrantes en el puerto `3000`. Cuando el servidor se ha iniciado correctamente, la función de devolución de llamada pasada como segundo parámetro se ejecutará y se imprimirá un mensaje en la consola.

Es importante tener en cuenta que `app.listen()` solo debe llamarse una vez en toda la aplicación. Si se intenta llamar al método `listen()` dos veces en la misma aplicación, se producirá un error de tiempo de ejecución.

## **render()**

El método `render()` de Express se utiliza para renderizar vistas (views) de una aplicación web utilizando un motor de plantillas (template engine). La sintaxis básica del método `render()` es la siguiente:

```js
    res.render(nombreVista, [datos], [funcionDevolución])
```

Donde:
- `nombreVista:` el nombre de la vista (sin la extensión del archivo) que se va a renderizar.
- `datos:` un objeto que contiene datos que se van a utilizar en la vista. Este parámetro es opcional.
- `funciónDevolución:` una función de devolución de llamada que se ejecutará después de que se haya renderizado la vista. Este parámetro es opcional.

Por ejemplo, para renderizar la vista `home.ejs` utilizando el motor de plantillas EJS y enviar algunos datos a la vista, se puede utilizar el siguiente código:

```js
    app.get('/', function(req, res) {
        res.render('home', {titulo: 'Página de inicio', mensaje: 'Bienvenido a mi sitio web'});
    });
```

En este ejemplo, `res.render('home', {titulo: 'Página de inicio', mensaje: 'Bienvenido a mi sitio web'})` renderiza la vista `home.ejs` utilizando el motor de plantillas EJS y envía los datos `{titulo: 'Página de inicio', mensje: 'Bienvenido a mi sitio web'}` a la vista. Estos datos se pueden utilizar en la vista utilizando la sintaxis de plantillas de EJS.

Es importante tener en cuenta que para utilizar el método `render()`, primero es necesario configurar el motor de plantillas que se va a utilizar en la aplicación. Para hacerlo, se puede utilizar la función `app.set('view engine', nombreMotor)` para establecer el motor de plantillas y la carpeta en la que se encuentran las vistas de la aplicación. Por ejemplo, para configurar el motor de plantillas EJS y la carpeta `views` como la carpeta de vistas de la aplicación, se puede utilizar el siguiente código:

```js
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
```

En este ejemplo, `app.set('view engine', 'ejs')` establece el motor de plantillas EJS como el motor de plantillas de la aplicación, y `app.set('views', path.join(__dirname, 'views'))` establece la carpeta `views` como la carpeta de vistas de la aplicación.



