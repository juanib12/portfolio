---
title: "Variables y Tipos en JavaScript"
date: "2025-09-13"
description: "En esta entrega exploramos cómo declarar variables en JavaScript, las diferencias entre var, let y const, y los principales tipos de datos que podemos utilizar."
tags: ["javascript", "variables", "tipos de datos", "programación", "principiantes"]
category: "javascript"
order: 2
---

Continuando con nuestra introducción a JavaScript, en este post aprenderás a trabajar con **variables** y los **tipos de datos** básicos del lenguaje. Estos son la base de cualquier programa.

## ¿Qué es una variable?
Una variable es un espacio en memoria donde podemos guardar información para usarla más tarde.  
En JavaScript podemos declararlas de tres formas:

```js
var nombre = "Ana";      // forma antigua, ya no se recomienda
let edad = 25;           // variable cuyo valor puede cambiar
const esEstudiante = true; // constante, no puede reasignarse
```

👉 Recomendación: usa let y const. Deja var solo para casos muy puntuales.
Tipos de datos en JavaScript

JavaScript tiene varios tipos de datos primitivos y uno especial para objetos.
Veamos los principales:

```js
    string (cadenas de texto)

let saludo = "Hola mundo";

    number (números, enteros o decimales)

let precio = 19.99;
let cantidad = 3;

    boolean (verdadero o falso)

let activo = true;

    null (ausencia intencional de valor)

let vacio = null;

    undefined (variable declarada sin valor asignado)

let sinDefinir;

    object (colecciones de datos o entidades más complejas)

let persona = {
  nombre: "Juan",
  edad: 30
};

    symbol (identificadores únicos, menos usado al inicio)

let id = Symbol("id");

Ejemplo práctico

Probemos combinar variables y tipos:

let producto = "Laptop";
let precio = 1500;
let enStock = true;

console.log(producto); // "Laptop"
console.log(precio);   // 1500
console.log(enStock);  // true
```

## Conclusión

Las variables y tipos de datos son la base para cualquier programa en JavaScript.
En el próximo post aprenderemos sobre operadores, que nos permiten trabajar y transformar esos valores.

¿Listo para el siguiente paso? 🚀