---
title: "Operadores y Expresiones en JavaScript"
date: "2025-09-13"
description: "Aprende a utilizar operadores aritméticos, de comparación, lógicos y de asignación en JavaScript, así como a combinar valores en expresiones."
tags: ["javascript", "operadores", "expresiones", "programación", "principiantes"]
category: "javascript"
order: 3
---

En los posts anteriores vimos qué es JavaScript y cómo trabajar con variables y tipos de datos.  
Ahora es momento de aprender a **manipular esos valores** usando **operadores** y **expresiones**.

## ¿Qué es una expresión?
Una **expresión** es cualquier combinación de valores, variables y operadores que produce un resultado.

```js
let x = 10 + 5;   // expresión aritmética → resultado: 15
let esMayor = x > 8; // expresión de comparación → resultado: true
```

## Tipos de Operadores en JavaScript

### 1. Operadores aritméticos
Sirven para realizar operaciones matemáticas:

- `+` (suma)  
- `-` (resta)  
- `*` (multiplicación)  
- `/` (división)  
- `%` (módulo o resto)  
- `**` (exponenciación)  

```js
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000
```

### 2. Operadores de asignación
Asignan valores a variables:

- `=` (asignación básica)  
- `+=`, `-=`, `*=`, `/=` (asignación compuesta)  

```js
let x = 5;
x += 2; // equivale a x = x + 2 → 7
```

### 3. Operadores de comparación
Usados para comparar valores, devuelven un **booleano**:

- `==` (igualdad de valor)  
- `===` (igualdad estricta: valor y tipo)  
- `!=` (diferente de valor)  
- `!==` (diferente de valor o tipo)  
- `>`, `<`, `>=`, `<=`  

```js
console.log(5 == "5");   // true
console.log(5 === "5");  // false
```

### 4. Operadores lógicos
Se usan para combinar condiciones:

- `&&` (AND → verdadero si ambas son verdaderas)  
- `||` (OR → verdadero si al menos una es verdadera)  
- `!` (NOT → niega un valor booleano)  

```js
let mayor = true;
let registrado = false;

console.log(mayor && registrado); // false
console.log(mayor || registrado); // true
console.log(!mayor);              // false
```

## Ejemplo práctico
Un caso típico sería validar si un usuario puede acceder a un sitio:

```js
let edad = 18;
let registrado = true;

if (edad >= 18 && registrado) {
  console.log("Acceso permitido ✅");
} else {
  console.log("Acceso denegado ❌");
}
```

## Conclusión
Los **operadores y expresiones** son herramientas esenciales para trabajar con variables en JavaScript.  
En el próximo post exploraremos el **flujo de control**: cómo tomar decisiones y repetir acciones con condicionales y bucles.
