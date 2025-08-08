---
title: 'Avoid Nesting Divs: A Quick Guide to Semantic HTML'
publishDate: 'Jun 5, 2023'
description: 'How to use semantic tags to write clearer and more accessible HTML.'
tags:
  - HTML
  - Frontend
  - Beginners
language: 'English'
translations:
  es: 'evita-anidar-divs'
# heroImage: { src: './thumbnail.jpg', color: '#545454' }
---

Another `div` inside a `div`?

When you're starting out with HTML, it's common to fall into the "div for everything" trap. It's easy, neutral, and seems to work... until your file ends up as an unreadable soup of nested `div`s where you don't even know what part represents what.

Using semantic tags may seem intimidating at first, but it’s actually a simple (and powerful) way to write better HTML, make your code more maintainable, and help browsers better understand your content.

## 1. The cult of the `div`

We've all done it. A container inside another container inside another... all with `div`s. Why? Because it works. But this brings problems:

- Hard-to-read code
- Unclear structure
- Reduced accessibility
- Worse SEO

## 2. What does “semantic HTML” mean?

Semantic HTML means using tags that **describe their purpose**. It’s not just about how they look, but **what they mean**. This helps:

- Browsers render content correctly
- Screen readers interpret content properly
- Search engines understand your page structure
- Other devs (including your future self!) read and maintain the code

## 3. Tags you should know

Here are some tags you can start using right now:

- `<header>`: site or section header
- `<main>`: main content
- `<section>`: related content block
- `<article>`: standalone and self-contained content (like a post)
- `<nav>`: navigation links
- `<footer>`: footer of page or section

Example:

```html
<main>
  <section>
    <article>
      <h2>Post Title</h2>
      <p>Content...</p>
    </article>
  </section>
</main>
```

## 4. The myth of “correct usage”

Many beginners hesitate because they’re unsure if “this tag is correct.” The truth is simple: **better to use a semantic tag close to your meaning than a neutral `div`**.

There’s no HTML police that will fine you for using `<section>` instead of `<article>`. The key is **intention and clarity**.

## 5. Practical examples

**❌ Example with only `div`s:**

```html
<div>
  <div>
    <div>
      <h2>Title</h2>
      <p>Text</p>
    </div>
  </div>
</div>
```

**✅ Same example with semantic tags:**

```html
<main>
  <section>
    <article>
      <h2>Title</h2>
      <p>Text</p>
    </article>
  </section>
</main>
```

Clearer. More maintainable. More semantic.

## 6. Is the `div` banned? Not at all!

`<div>` is still useful. It serves to group elements when **there’s no suitable semantic tag**. For example:

```html
<div class="grid gap-4">
  <button>Option A</button>
  <button>Option B</button>
</div>
```

Also for layouts or wrappers that don’t represent specific content.

## 7. Tools and validators

- [W3C HTML Validator](https://validator.w3.org/)
- "Web Developer" browser extension
- Shortcuts in editors like VS Code to generate structure (`! + tab`)

## 8. Think like a browser

Don’t write HTML just for yourself. Write it so others understand it. So the browser interprets it well. So the web is more accessible, clear, and maintainable.

Leave behind the fear of the `div`. It’s not about memorizing tags, but about **understanding what you’re building**.

---

Did you like this guide? Use it as a checklist every time you structure a new page. And if you’re about to copy and paste another `div`, think twice 😉

---
