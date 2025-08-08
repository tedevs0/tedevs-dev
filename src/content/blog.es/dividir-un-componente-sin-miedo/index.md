---
title: 'Dividir un componente sin miedo: 4 señales clave'
publishDate: 'May 13, 2024'
description: 'Cuándo y cómo separar un componente en React con claridad.'
tags:
  - React
  - Frontend
  - Buenas prácticas
language: 'Español'
translations:
  en: 'split-a-component-without-fear'
# heroImage: { src: './thumbnail.jpg', color: '#2D2D2D' }
---

¿Tu componente empieza a parecer un monstruo imposible de leer?

No estás solo. Todos alguna vez escribimos un componente que empieza siendo pequeño… y termina con cientos de líneas, múltiples efectos, varios useState y JSX imposible de entender. Pero no te preocupes: **dividir un componente no tiene que dar miedo**.

En este post te cuento **4 señales claras** de que es hora de refactorizar.

## 1. El JSX es más largo que tu scroll

Si necesitás hacer scroll para ver el cierre de tu return, probablemente hay **demasiadas responsabilidades visuales juntas**. Separar partes visuales en componentes ayuda a:

- Mejorar la legibilidad
- Reutilizar partes de la UI
- Evitar errores por estructuras anidadas

Ejemplo: separar una tabla, una tarjeta, o una lista compleja como un componente aparte.

## 2. Tienes más de 3 estados (useState) o efectos (useEffect)

Cuando empiezas a tener múltiples hooks y lógica mezclada, es momento de preguntarte: **¿todos estos estados deberían estar en el mismo componente?**

Separar la lógica en hooks personalizados o en subcomponentes hace tu código más predecible.

```jsx
const [search, setSearch] = useState('')
const [loading, setLoading] = useState(false)
const [results, setResults] = useState([])

useEffect(() => {
  // lógica de búsqueda
}, [search])
```

¿Puedes mover esto a un hook useSearch? Probablemente sí.

## 3. Hay if, ternarios o returns condicionales por todos lados

Cuando tienes estructuras como:

```jsx
if (!user) return <Loader />
if (error) return <ErrorScreen />
```

O JSX con muchos ternarios anidados:

```jsx
{
  isAdmin ? <AdminPanel /> : isUser ? <UserPanel /> : <GuestView />
}
```

Es señal de que necesitás **delegar partes del render a componentes más pequeños**. Lo vas a leer mejor, testear mejor, y extender sin miedo.

## 4. Tienes comentarios para entender el componente

Si necesitás escribir:

```jsx
// Renderiza el encabezado
// Maneja el botón de logout
// Lista los usuarios
```

Es porque tu componente está haciendo **demasiado**. Si el código necesita explicación constante, lo mejor es **romperlo en partes más específicas y nombrarlas bien**.

Ejemplo:

```jsx

<Header />
<UserList />
<LogoutButton />
```

Eso ya se explica solo.

---

## Bonus: cómo dividir sin romper todo

- **Paso 1:** Identifica una parte funcional o visual clara
- **Paso 2:** Copiala en un nuevo archivo (por ejemplo, Card.jsx)
- **Paso 3:** Reemplaza el código en el componente original por <Card />
- **Paso 4:** Pasa solo las props que necesita, no todo el estado

---

Dividir componentes no es señal de debilidad, es una habilidad.

Cuanto más pequeño y enfocado es un componente, **más fácil de mantener, testear y escalar**. Si algo parece complejo de mover… ¡es porque deberías haberlo dividido antes!

---

¿Te gustó esta guía? Puedes guardarla como referencia para tus próximas sesiones de refactor. Y si el próximo componente empieza a crecer, ¡no esperes al scroll infinito! 😉

---
