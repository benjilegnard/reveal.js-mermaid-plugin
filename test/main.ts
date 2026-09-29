import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown";
import Highlight from "reveal.js/plugin/highlight";
import Mermaid from "@benjilegnard/reveal.js-mermaid-plugin";

import "reveal.js/reset.css";
import "reveal.js/reveal.css";
import "reveal.js/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";

const deck = new Reveal({
  plugins: [Markdown, Mermaid, Highlight],
});

deck.initialize({
  hash: true,
  mermaid: {
    theme: "dark",
  },
});
