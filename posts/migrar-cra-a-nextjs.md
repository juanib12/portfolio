---
title: "Cómo migré mi portafolio de React a Next.js (aprendizajes y errores)"
date: "2025-09-14"
slug: "migrar-cra-a-nextjs"
description: "Te cuento cómo pasé mi portafolio de Create React App a Next.js, los problemas que encontré y las ventajas que descubrí."
tags: ["next.js", "react"]
category: "next.js"
order: 6
---

Hace un tiempo construí mi portafolio con **Create React App (CRA)**.  
Me funcionaba, pero con el tiempo noté varias limitaciones: problemas de SEO, tiempos de carga largos y la necesidad de configurar manualmente ciertas optimizaciones.  

Por eso decidí **migrar a Next.js**. En este artículo quiero contarte **cómo lo hice, qué problemas tuve y qué aprendí** en el proceso.

---

## 🚀 Ventajas de migrar a Next.js

1. **SEO**: al tener Server-Side Rendering (SSR) y Static Site Generation (SSG), Google indexa mejor mis páginas.  
2. **Rendimiento**: noté que el build genera páginas estáticas muy rápidas.  
3. **Estructura**: Next.js trae convenciones claras (pages, API routes) que simplifican el proyecto.  
4. **Experiencia de desarrollo**: menos configuración manual, más productividad.

---

## 🔧 Cómo fue la migración

### 1. Crear un nuevo proyecto en Next.js
```bash
npx create-next-app@latest mi-portafolio
```

### 2. Mover componentes y estilos
Copié mis componentes y CSS de `src/` al nuevo proyecto.  
En algunos casos tuve que ajustar rutas y imports.

### 3. Reemplazar React Router
En CRA usaba `react-router-dom`.  
En Next.js cambié las rutas por el sistema de **file-based routing**:

```jsx
// Antes en CRA
<Route path="/about" element={<About />} />

// Ahora en Next.js
// pages/about.js
export default function About() {
  return <h1>Sobre mí</h1>
}
```

### 4. Ajustar imágenes
Reemplacé etiquetas `<img>` por el componente optimizado de Next.js:

```jsx
import Image from "next/image";

<Image src="/me.jpg" alt="Foto personal" width={300} height={300} />
```

---

## ⚠️ Problemas que encontré

- Algunas librerías que usaban `window` o `document` rompían en SSR.  
  → Lo solucioné con imports dinámicos (`dynamic(import(...), { ssr: false })`).  
- Tuve que aprender la diferencia entre **SSR, SSG y CSR**.  

---

## ✅ Lo que aprendí

- Next.js me da un sitio más profesional, rápido y listo para escalar.  
- Aunque la migración lleva tiempo, valió la pena por SEO y performance.  
- Aprendí que conviene empezar un proyecto nuevo directamente en Next.js si quiero algo serio y escalable.

---

## 💡 Conclusión

Migrar de CRA a Next.js no es complicado, pero sí requiere entender cómo funciona el renderizado y ajustar algunos detalles.  
Hoy mi portafolio carga más rápido, es más fácil de mantener y está mejor preparado para el futuro.

¿Vos también pensás migrar tu proyecto? 🚀
