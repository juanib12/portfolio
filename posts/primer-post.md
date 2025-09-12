---
title: "Introducción a Fetch en Next.js"
date: "2025-09-12"
description: "Cómo usar fetch en Next.js para consumir APIs y renderizar datos en páginas estáticas y dinámicas."
tags: ["nextjs", "fetch", "javascript", "react"]
---

En este post vamos a aprender cómo usar **fetch** en Next.js para obtener datos desde un API y renderizarlos en nuestras páginas.

## 1. Fetch en `getStaticProps`

```js
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  return {
    props: { posts },
  };
}
