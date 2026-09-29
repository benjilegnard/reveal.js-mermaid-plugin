# @benjilegnard/reveal.js-mermaid-plugin

This is a [reveal.js](https://revealjs.com/) plugin to render [mermaid](http://mermaid.ai) diagrams.

Its main goal is to have modern ESM support for mermaid, allow you to embed any mermaid version (>=10), and use internal reveal.js types for typed configuration.

## Demo

Visible on <https://benjilegnard.github.io/reveal.js-mermaid-plugin/>

## Installation

```sh
npm i @benjilegnard/reveal.js-mermaid-plugin mermaid reveal.js
```

`mermaid` (>= 10) and `reveal.js` (>= 6) are peer dependencies.

## Usage

Register the plugin **after** `Markdown` and **before** `Highlight`: it needs the
markdown to be converted, and must replace the code blocks before highlight.js
processes them.

```ts
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown";
import Highlight from "reveal.js/plugin/highlight";
import Mermaid from "@benjilegnard/reveal.js-mermaid-plugin";

const deck = new Reveal({
  plugins: [Markdown, Mermaid, Highlight],
});

deck.initialize({
  // passed as is to mermaid.initialize()
  mermaid: {
    theme: "dark",
    // ... pass here any mermaid configuration
  },
});
```

Then write mermaid code blocks in your markdown slides:

````md
```mermaid
flowchart LR
  A --> B
```
````

Each block is replaced by a `<div class="mermaid">` containing the inline SVG.
If a diagram fails to render, the error is logged in the console, the source
stays visible and its `<pre>` gets a `mermaid-error` class.

Without the Markdown plugin, you just need to have html `<pre>`+`<code>` blocks:

```html
<pre>
  <code class="mermaid">
    flowchart LR
      A --> B
  </code>
</pre>
```

## TypeScript

Importing the plugin augments the reveal.js `RevealConfig` interface with a typed
`mermaid` key (`MermaidConfig` from mermaid), so `deck.initialize({ mermaid: ... })`
is type checked.

`reveal.js` type definitions use extensionless relative imports: they only resolve
with `"moduleResolution": "bundler"` (the Vite default). With `node16`/`nodenext`,
`RevealConfig` resolves to `any` and no option is checked.

## Alternatives

There are alternatives I wasn't satisfied with, but thanks to them for the inspiration:

- <https://github.com/zjffun/reveal.js-mermaid-plugin> : (customizable, but embeds an hard-coded old version of mermaid)
- <https://github.com/ludwick/reveal.js-mermaid-plugin> : (retired, forces you to use specific syntax instead of code blocks, no customization )

## Roadmap / Enhancements

- no live-reload yet, the mermaid conversion is only done once.
- 
- better tree-shaking according to used schemas ?
