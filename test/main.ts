import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown";
import Highlight from "reveal.js/plugin/highlight";
import Mermaid from "@benjilegnard/reveal.js-mermaid-plugin";

import "reveal.js/reset.css";
import "reveal.js/reveal.css";
import "reveal.js/theme/black.css";
import "highlight.js/styles/tokyo-night-dark.css";
import "./style.css";

/**
 * Tokyo Night palette, as used by the highlight.js tokyo-night-dark style.
 * Keep in sync with the CSS variables of style.css.
 */
const tokyoNight = {
  bg: "#1a1b26",
  bgDark: "#16161e",
  surface: "#24283b",
  highlight: "#292e42",
  border: "#414868",
  comment: "#565f89",
  fg: "#c0caf5",
  fgDim: "#9aa5ce",
  red: "#f7768e",
  orange: "#ff9e64",
  yellow: "#e0af68",
  green: "#9ece6a",
  teal: "#73daca",
  cyan: "#7dcfff",
  sky: "#2ac3de",
  blue: "#7aa2f7",
  magenta: "#bb9af7",
};

const t = tokyoNight;
// same font as the reveal.js theme, mermaid needs a real font name to measure text
const fontFamily = '"Source Sans Pro", Helvetica, sans-serif';
const accents = [
  t.blue,
  t.magenta,
  t.green,
  t.orange,
  t.cyan,
  t.red,
  t.yellow,
  t.teal,
];

const deck = new Reveal({
  plugins: [Markdown, Mermaid, Highlight],
});

deck.initialize({
  hash: true,
  mermaid: {
    theme: "base",
    fontFamily,
    themeVariables: {
      darkMode: true,
      background: t.bg,
      fontFamily,
      textColor: t.fg,
      lineColor: t.fgDim,

      primaryColor: t.surface,
      primaryTextColor: t.fg,
      primaryBorderColor: t.blue,
      secondaryColor: t.highlight,
      secondaryTextColor: t.fg,
      secondaryBorderColor: t.magenta,
      tertiaryColor: t.bgDark,
      tertiaryTextColor: t.fg,
      tertiaryBorderColor: t.border,

      noteBkgColor: t.highlight,
      noteTextColor: t.yellow,
      noteBorderColor: t.yellow,

      // sequence diagram
      actorBkg: t.surface,
      actorBorder: t.blue,
      actorTextColor: t.fg,
      actorLineColor: t.border,
      signalColor: t.fgDim,
      signalTextColor: t.fg,
      labelBoxBkgColor: t.surface,
      labelBoxBorderColor: t.magenta,
      labelTextColor: t.fg,
      loopTextColor: t.magenta,
      activationBkgColor: t.highlight,
      activationBorderColor: t.blue,

      // gantt
      sectionBkgColor: t.highlight,
      altSectionBkgColor: t.bg,
      sectionBkgColor2: t.surface,
      gridColor: t.border,
      taskBkgColor: t.blue,
      taskBorderColor: t.blue,
      taskTextColor: t.bg,
      taskTextLightColor: t.fg,
      taskTextOutsideColor: t.fg,
      activeTaskBkgColor: t.magenta,
      activeTaskBorderColor: t.magenta,
      doneTaskBkgColor: t.green,
      doneTaskBorderColor: t.green,
      critBkgColor: t.red,
      critBorderColor: t.red,
      todayLineColor: t.orange,

      // git graph
      ...Object.fromEntries(accents.map((color, i) => [`git${i}`, color])),
      ...Object.fromEntries(
        accents.map((_, i) => [`gitBranchLabel${i}`, t.bg]),
      ),
      commitLabelColor: t.fg,
      commitLabelBackground: t.surface,

      // user journey
      ...Object.fromEntries(accents.map((color, i) => [`fillType${i}`, color])),

      // quadrant chart
      quadrant1Fill: t.surface,
      quadrant2Fill: t.highlight,
      quadrant3Fill: t.bgDark,
      quadrant4Fill: t.highlight,
      quadrant1TextFill: t.green,
      quadrant2TextFill: t.cyan,
      quadrant3TextFill: t.red,
      quadrant4TextFill: t.yellow,
      quadrantPointFill: t.orange,
      quadrantPointTextFill: t.fg,
      quadrantXAxisTextFill: t.fgDim,
      quadrantYAxisTextFill: t.fgDim,
      quadrantTitleFill: t.fg,
      quadrantInternalBorderStrokeFill: t.border,
      quadrantExternalBorderStrokeFill: t.border,

      // xy chart
      xyChart: {
        backgroundColor: t.bg,
        titleColor: t.fg,
        xAxisLabelColor: t.fgDim,
        xAxisTitleColor: t.fgDim,
        xAxisLineColor: t.border,
        xAxisTickColor: t.border,
        yAxisLabelColor: t.fgDim,
        yAxisTitleColor: t.fgDim,
        yAxisLineColor: t.border,
        yAxisTickColor: t.border,
        plotColorPalette: [t.blue, t.orange, t.green, t.magenta].join(","),
      },
    },
  },
});
