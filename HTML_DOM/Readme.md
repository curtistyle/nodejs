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

