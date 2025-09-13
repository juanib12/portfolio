---
title: "Condicionales en JavaScript"
date: "2025-09-13"
description: "Aprende a usar if, else, else if y switch en JavaScript para tomar decisiones en tu código."
tags: ["javascript", "condicionales", "if", "switch", "programación", "principiantes"]
category: "javascript"
order: 4
---

En programación, muchas veces necesitamos que un bloque de código se ejecute **solo si se cumple una condición**.  
Para eso JavaScript nos ofrece estructuras de **control de flujo** como `if`, `else` y `switch`.

## If y Else
La estructura básica es `if` (si ocurre algo). Podemos agregar un `else` (en caso contrario) y un `else if` para más condiciones.

```js
let edad = 20;

if (edad >= 18) {
  console.log("Eres mayor de edad ✅");
} else {
  console.log("Eres menor de edad ❌");
}
```

Con `else if`:

```js
let nota = 7;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 6) {
  console.log("Aprobado");
} else {
  console.log("Desaprobado");
}
```

## Switch
Cuando tenemos varias opciones posibles, `switch` puede ser más claro que muchos `else if`:

```js
let dia = "lunes";

switch (dia) {
  case "lunes":
    console.log("Inicio de semana");
    break;
  case "viernes":
    console.log("Casi fin de semana");
    break;
  case "sábado":
  case "domingo":
    console.log("Fin de semana 🎉");
    break;
  default:
    console.log("Día normal");
}
```

## Conclusión
Con `if`, `else` y `switch` puedes **tomar decisiones** en tu programa y adaptar el comportamiento según distintas condiciones.  
En el próximo post veremos cómo **repetir acciones** con bucles en JavaScript.
