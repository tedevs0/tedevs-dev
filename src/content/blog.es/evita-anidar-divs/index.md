---
title: 'Evita anidar divs: guía rápida para HTML semántico'
publishDate: 'Jun 5, 2023'
description: 'Cómo usar etiquetas semánticas para escribir HTML más claro y accesible.'

tags:
  - HTML
  - Frontend
  - Principiantes
language: 'Español'
translations:
  en: 'avoid-nesting-divs'
# heroImage: { src: './thumbnail.jpg', color: '#545454' }
---

¿Otra vez un `div` dentro de un `div`?

Cuando estás empezando con HTML, es normal caer en la trampa del `div` para todo. Es fácil, es neutro, y parece funcionar… hasta que tu archivo termina siendo una sopa ilegible de `divs` anidados que no sabés ni qué parte representa.

Usar etiquetas semánticas puede parecer intimidante al principio, pero en realidad es una forma simple (y poderosa) de escribir mejor HTML, hacer tu código más mantenible y que los navegadores entiendan mejor tu contenido.

## 1. El culto al `div`

Todos lo hicimos. Un contenedor, dentro de otro contenedor, dentro de otro… todo con `div`s. ¿Por qué? Porque funciona. Pero esto trae problemas:

- Código difícil de leer
- Estructura poco clara
- Accesibilidad reducida
- Peor SEO

## 2. ¿Qué significa “HTML semántico”?

HTML semántico es usar etiquetas que **describen su propósito**. No es solo cómo se ven, sino **qué significan**. Esto ayuda a:

- Navegadores a renderizar correctamente
- Lectores de pantalla a interpretar bien el contenido
- Motores de búsqueda a entender la estructura de tu página
- Otros devs (¡incluido tu yo del futuro!) a leer y mantener el código

## 3. Las etiquetas que deberías conocer

Estas son algunas etiquetas que podés empezar a usar ya mismo:

- `<header>`: cabecera del sitio o sección
- `<main>`: contenido principal
- `<section>`: bloque de contenido relacionado
- `<article>`: contenido independiente y autocontenible (como un post)
- `<nav>`: enlaces de navegación
- `<footer>`: pie de página o sección

Ejemplo:

```html
<main>
  <section>
    <article>
      <h2>Título del post</h2>
      <p>Contenido...</p>
    </article>
  </section>
</main>
```

## 4. El mito del “uso correcto”

Muchos principiantes se frenan porque no están seguros de “si esta etiqueta es la correcta”. Pero la realidad es simple: **mejor usar una semántica cercana que un `div` neutro**.

No existe una policía del HTML que te multará por usar `<section>` en lugar de `<article>`. La clave es **intención y claridad**.

## 5. Casos prácticos

**❌ Ejemplo con solo `div`s:**

```html
<div>
  <div>
    <div>
      <h2>Título</h2>
      <p>Texto</p>
    </div>
  </div>
</div>
```

**✅ Mismo ejemplo con etiquetas semánticas:**

```html
<main>
  <section>
    <article>
      <h2>Título</h2>
      <p>Texto</p>
    </article>
  </section>
</main>
```

Más claro. Más mantenible. Más semántico.

## 6. ¿El `div` está prohibido? ¡Para nada!

`<div>` sigue siendo útil. Sirve para agrupar elementos cuando **no hay una etiqueta semántica adecuada**. Por ejemplo:

```html
<div class="grid gap-4">
  <button>Opción A</button>
  <button>Opción B</button>
</div>
```

Y también para layout o wrappers que no representan contenido específico.

## 7. Herramientas y validadores

- [W3C HTML Validator](https://validator.w3.org/)
- Extensión "Web Developer" para navegadores
- Atajos en editores como VS Code para generar estructura (`! + tab`)

## 8. Pensar como un navegador

No escribas HTML para vos. Escribilo para que otros lo entiendan. Para que el navegador lo interprete bien. Para que la web sea más accesible, clara y mantenible.

Dejá atrás el miedo al `div`. No se trata de memorizar etiquetas, sino de **entender lo que estás construyendo**.

---

¿Te gustó esta guía? Podés usarla como checklist cada vez que estructures una nueva página. Y si estás por copiar y pegar otro `div`, pensalo dos veces 😉

---
