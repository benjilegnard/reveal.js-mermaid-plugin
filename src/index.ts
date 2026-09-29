import type { RevealApi, RevealPlugin } from "reveal.js";
import mermaid, { type MermaidConfig } from "mermaid";

/**
 * Options of the plugin, set with the `mermaid` key of the reveal.js config.
 * Passed as is to `mermaid.initialize()`.
 */
export type MermaidPluginConfig = MermaidConfig;

export interface MermaidPlugin extends RevealPlugin {
  id: "mermaid";
}

declare module "reveal.js" {
  interface RevealConfig {
    /**
     * Mermaid plugin configuration
     *
     * @see {@link https://mermaid.js.org/config/schema-docs/config.html}
     */
    mermaid?: MermaidPluginConfig;
  }
}

/**
 * Renders ```mermaid code blocks produced by the markdown plugin
 * (marked outputs them as <pre><code class="mermaid">) into inline SVG.
 *
 * Must be registered after Markdown and before Highlight, so it runs once
 * slides are converted and before highlight.js touches the code blocks.
 */
const Mermaid = (): MermaidPlugin => ({
  id: "mermaid",

  async init(deck: RevealApi) {
    mermaid.initialize({ startOnLoad: false, ...deck.getConfig().mermaid });

    const blocks =
      deck
        .getRevealElement()
        ?.querySelectorAll<HTMLElement>(
          "pre > code.mermaid, pre > code.language-mermaid",
        ) ?? [];

    let index = 0;
    for (const code of blocks) {
      const pre = code.parentElement!;
      const container = document.createElement("div");
      container.classList.add("mermaid");

      try {
        const { svg, bindFunctions } = await mermaid.render(
          `reveal-mermaid-${index++}`,
          code.textContent ?? "",
        );
        container.innerHTML = svg;
        pre.replaceWith(container);
        bindFunctions?.(container);
      } catch (error) {
        // Keep the source visible so the error is easy to spot on the slide
        console.error("[mermaid] failed to render diagram", error);
        pre.classList.add("mermaid-error");
      }
    }
  },
});

export default Mermaid;
