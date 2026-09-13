# I'm Bruce. — Design System

A portable visual system: one ink, one accent, a short ladder of warm papers, and
Standerd throughout. Every page is a two-column grid — a numbered rail, then the
content. Rules are hairlines. Corners are square. **The background moves and the
text does not.**

## Use it

```html
<link rel="stylesheet" href="design-system/styles.css" />
```

That single import pulls the fonts, every token, and the interaction states. Then
either use the React components in `components/`, or write your own markup against
the tokens:

```html
<a class="ds-link" href="/contact">Get in touch</a>

<div style="color:var(--text-body);background:var(--surface-panel);padding:var(--panel-padding)">
  <h2 style="font-size:var(--type-section-size);font-weight:var(--type-section-weight);
             letter-spacing:var(--type-section-tracking);max-width:var(--measure-heading)">
    Section heading as a statement.
  </h2>
</div>
```

```js
import { SectionMarker, TextLink, StatTile } from './design-system/components/index.js';
```

Open `example.html` for a working page that uses nothing but the stylesheet — it is
the demo for this package, and it opens straight from the filesystem with no build
step and no network.

## What's here

| Path | What it holds |
| --- | --- |
| `styles.css` | The single entry point. Imports everything below. |
| `tokens/colors.css` | Ink, accent, paper, lines, and the semantic aliases. |
| `tokens/typography.css` | Type ramp, weights, tracking, measures. |
| `tokens/spacing.css` | Nine-step scale and the fluid rhythm pairs. |
| `tokens/layout.css` | Container, rail, easing curves, focus-ring geometry. |
| `tokens/elevation.css` | One shadow, or none. |
| `tokens/interactions.css` | Body reset plus every `:hover` and `:focus` state. |
| `fonts/` | Standerd, four weights, woff2 and woff. |
| `components/` | React components — core, lists, blocks, site. Each with a `.d.ts` and a `.prompt.md`. Import from `components/index.js`. |
| `example.html` | The demo. A whole page built from tokens and classes, no build step. |
| `assets/` | Plate marks, client logos, award badges. |

## Rules of the system

**Color.** The accent carries section markers, numerals, arrows and links. It is
never a fill behind text. Green exists only as the availability dot. No gradients.

**Ground.** The page sits on `--surface-page` (#F5F5F5) so that white reads as
*raised* — cards, tiles and clickable rows are white and earn the shadow. Hover
tints to a neutral `--surface-hover`; it is deliberately not warm.

**Rules.** Use `--border-rule` (#D8D7D1) on the page ground. `--line-200` is only
legible against white — reserve it for rules inside a card.

**Type.** Standerd at four weights. Display sizes are fluid clamp pairs with
negative tracking; body holds at 16px/1.65. Measures cap at 26em for headings,
34em for body, 36em for lead, 44em for rows.

**Interaction.** Hovering a clickable block tints it and nudges its arrow six
pixels. Titles hold at ink. Images zoom on the inner element only. Press states
are not styled. There are no entrance animations. `prefers-reduced-motion` is
honoured.

**Voice.** First person for the author, "we" for the engagement team, never
"you." Sentence case everywhere. Headings are statements and end with a period.
Section markers are two digits and a noun. No emoji, no exclamation marks.

## Accessibility

Every text color is checked against the ground it sits on.

| Token | Value | On #F5F5F5 |
| --- | --- | --- |
| `--text-heading` | #131313 | 16.4:1 |
| `--text-body` | #3A3A38 | 10.4:1 |
| `--text-secondary` | #5A5A58 | 6.4:1 |
| `--text-muted` | #6E6E6C | 4.7:1 |
| `--text-accent` | #AB4C1C | 5.1:1 |
| `--link-rule` | #C98A66 | 3.2:1 (non-text) |

`--accent-600` (#B8541F) is 4.5:1 short and is kept for display use only — never
for body-size text. `--text-faint` (#8A8A87, 3.2:1) is for spec captions at
headline scale or non-essential labels only.

## Changelog

### v2 — accessible states, legible ground
- Page ground moved from white to `--paper-100`, making white a raised surface.
- Accent for text moved to `--accent-700` (#AB4C1C); `--accent-600` demoted to display.
- Hover tint moved from the warm `--accent-050` to a neutral `--neutral-200`.
- Rules moved to `--line-400` (#D8D7D1), legible on the new ground.
- Section markers and row numerals enlarged to 16px/700; numeral column to 24px.
- `tokens/interactions.css` added — hover and focus states now live in the system
  rather than being re-declared per element.
- `AccordionRow` added: swapped +/− glyph, measured height animation.
- `components/index.js` added as the import barrel.

### Deliberately not shipped
- **`guidelines/`** — the foundation cards documented the pre-v2 palette (white
  ground, warm hover tint, `--accent-600` as link color). Rather than ship stale
  documentation, the rules and the contrast table above are the reference, and
  `example.html` is the rendered specimen.
- **`*.card.html` component demos** — they mounted through a bundle that was never
  part of the distributable and pulled React from a CDN, so they broke the moment
  the package moved. `example.html` replaces them.
