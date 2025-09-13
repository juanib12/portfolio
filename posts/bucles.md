---
title: "Bucles en JavaScript"
date: "2025-09-13"
description: "Aprende a repetir acciones en JavaScript usando bucles como for, while, do...while, for...of y for...in."
tags: ["javascript", "bucles", "for", "while", "programación", "principiantes"]
category: "javascript"
order: 5
---

Los **bucles** nos permiten ejecutar una misma instrucción varias veces, hasta que se cumpla una condición.  
En JavaScript tenemos varias formas de hacerlo.

## For
El bucle `for` se usa cuando sabemos cuántas veces queremos repetir algo.

```js
for (let i = 0; i < 5; i++) {
  console.log("Iteración número " + i);
}
```

## While
El bucle `while` repite mientras una condición sea verdadera.

```js
let contador = 0;

while (contador < 3) {
  console.log("Contador: " + contador);
  contador++;
}
```

## Do...While
Similar a `while`, pero se ejecuta **al menos una vez**, aunque la condición sea falsa.

```js
let numero = 5;

do {
  console.log("Número es: " + numero);
  numero--;
} while (numero > 0);
```

## For...Of
Sirve para recorrer elementos de un array o string.

```js
let frutas = ["🍎", "🍌", "🍊"];

for (let fruta of frutas) {
  console.log(fruta);
}
```

## For...In
Sirve para recorrer las propiedades de un objeto.

```js
let persona = { nombre: "Ana", edad: 25 };

for (let clave in persona) {
  console.log(clave + ": " + persona[clave]);
}
```

## Conclusión
Los bucles son fundamentales para trabajar con listas de datos y automatizar tareas repetitivas.  
Con esto finalizamos nuestra **introducción general a JavaScript** 🚀.  
En próximos posts podremos profundizar en funciones, arrays y objetos.
