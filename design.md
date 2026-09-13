# I'm Bruce. — Design System

Instructions for generating on-brand work in this system. Follow these rules
literally. Where a rule and your instinct disagree, the rule wins.

## The system in one line

One ink, one accent, a short ladder of warm papers, and Standerd throughout.
Every page is a two-column grid: a numbered rail, then the content. Rules are
hairlines. Corners are square. **The background moves and the text does not.**

---

## 1. Color

### Ink — text only

| Token | Value | Use |
| --- | --- | --- |
| `--text-heading` | `#131313` | Headings, titles, row titles |
| `--text-body` | `#3A3A38` | Body copy, lead paragraphs |
| `--text-secondary` | `#5A5A58` | Nav links, secondary links |
| `--text-muted` | `#6E6E6C` | Supporting notes, sub-lines |
| `--text-faint` | `#8A8A87` | Spec captions, small labels |

### Accent — one, used sparingly

| Token | Value | Use |
| --- | --- | --- |
| `--text-accent` | `#AB4C1C` | Section markers, numerals, arrows, links |
| `--link-hover` | `#8F3E14` | Link hover and active |
| `--link-rule` | `#C98A66` | Link underline |
| `--accent-600` | `#B8541F` | **Display only.** Never text — it fails 4.5:1 |

### Paper — surfaces

| Token | Value | Use |
| --- | --- | --- |
| `--surface-page` | `#F5F5F5` | The page ground. Everything sits on this |
| `--surface-raised` | `#FFFFFF` | Cards, tiles, clickable rows — reads as raised |
| `--surface-panel` | `#F1F0EC` | Panels holding a single argument |
| `--surface-image-bed` | `#F4F3EF` | Behind artifact images |
| `--surface-header` | `#EDECE7` | Header and footer bands |
| `--surface-hover` | `#ECECEC` | Hover tint. Neutral, deliberately not warm |

### Lines

| Token | Value | Use |
| --- | --- | --- |
| `--border-rule` | `#D8D7D1` | Every rule on the page ground |
| `--border-hairline-on-white` | `#EFEEEA` | Only inside a white card — invisible elsewhere |

### Rules for color

1. The accent carries section markers, numerals, arrows and links. It is **never
   a fill behind text**.
2. Green `#2E9E5B` exists for exactly one thing: the availability dot.
3. **No gradients.** Anywhere.
4. Maximum two background colors in any one composition.
5. White is a *raised* surface, not the page. If something is white it should
   read as lifted off the ground — give it the shadow or make it clickable.
6. Text must clear 4.5:1 against whatever is behind it. Never use `--accent-600`
   or `--text-faint` for body-size text.

---

## 2. Typography

**Standerd**, four weights (300/400/500/600/700). Fallback stack:
`'Archivo', 'Helvetica Neue', system-ui, sans-serif`.

| Role | Size | Weight | Tracking | Leading |
| --- | --- | --- | --- | --- |
| Page title | `clamp(32px,5.4vw,68px)` | 500 | −0.038em | 1.03 |
| Section heading | `clamp(24px,3vw,38px)` | 500 | −0.03em | 1.1 |
| Phase heading | `clamp(20px,2.2vw,26px)` | 500 | −0.025em | 1.2 |
| Block label | 17px | 600 | −0.015em | 1.3 |
| Lead | `clamp(17px,1.7vw,20px)` | 400 | — | 1.6 |
| Body | 16px | 400 | — | 1.65 |
| List row | 15px | 400 | — | 1.55 |
| Micro / spec | 13px | 400 | — | 1.6 |
| Section marker | 16px | 700 | — | 1.6 |
| Row numeral | 16px | 700 | — | — |

**Figures** (stat tiles) step down by character count — `clamp(38px,4.6vw,62px)`
up to 4 characters, `clamp(28px,3.4vw,46px)` to 7, `clamp(22px,2.6vw,34px)`
beyond. Always weight 400, tracking −0.045em, leading 0.95, tabular numerals.

**Measures — cap every text block:**

- Headings: `26em`
- Body: `34em`
- Lead: `36em`
- List rows: `44em`

Display type is always a fluid `clamp()` pair with negative tracking. Body holds
at 16px/1.65 and does not scale.

---

## 3. Layout

- Container: `1220px` max, side padding `clamp(20px,5vw,72px)`.
- **Every section is a two-column grid:** rail `clamp(98px,15vw,170px)`, then
  content `minmax(0,1fr)`, gap `clamp(16px,4vw,56px)`.
- The rail holds the section marker and nothing else.
- Sections are divided by a **1px rule on the top edge only**.
- Vertical section padding: `clamp(56px,9vw,110px)`.
- Heading to content: `clamp(40px,5vw,64px)`. Heading to paragraph: `22px`.
- Grid gap: `clamp(24px,3vw,40px)`. Between blocks: `clamp(32px,4vw,48px)`.
- Spacing scale: 4, 8, 12, 16, 20, 26, 32, 40, 56.
- Radius: `2px` on tags, `50%` on the dot. **Everything else is square.**
- Full-bleed images break the container to `100vw` at
  `clamp(300px,58vh,660px)`.

---

## 4. Elevation

One shadow, or none:

```
0 1px 2px rgba(19,19,19,0.02),
0 12px 24px -8px rgba(19,19,19,0.05),
0 40px 60px -30px rgba(19,19,19,0.07)
```

- **Always on:** bento grids, stat-tile grids, featured cards, artifact images.
- **Earned on hover:** evidence tiles, deliverable cards, stat tiles.
- **Never:** rules, rows, tags, panels, the nav, the footer.

---

## 5. Interaction

- Hovering a clickable block **tints its background** to `--surface-hover` over
  `.2s ease`. The title holds at ink — text never changes color on hover.
- Its arrow nudges `translateX(6px)` over `.22s cubic-bezier(.2,.7,.3,1)`.
- Links are the exception: they tint *and* darken to `--link-hover`, with the
  underline following.
- Focus draws a `2px` `#131313` outline at `2px` offset.
- Images zoom `scale(1.045)` on the **inner** element only, over `.45s`.
- Accordions swap a `+` for a `−`. The glyph is never rotated. The panel
  animates a measured pixel height over `.28s cubic-bezier(.2,.7,.3,1)` so it
  interpolates both ways.
- Press states are not styled.
- **There are no entrance animations.** Nothing fades or slides in on load or
  scroll.
- Honour `prefers-reduced-motion`.

---

## 6. Components

| Component | What it is |
| --- | --- |
| `SectionMarker` | Rail marker. Two digits in 400 on one line, a plain noun beneath |
| `TextLink` | Underlined link, primary (accent) or secondary (ink-600) |
| `Tag` | 13px/500 pill, 1px rule, 2px radius, `8px 13px` padding |
| `AvailabilityDot` | 8px green dot with a label |
| `ListRow` | Arrow-marked row. 20px marker column, rule on the bottom edge |
| `OrderedRow` | Numbered step. 24px numeral column, title 16px/600, note 15px muted |
| `FactItem` | Label 17px/600 ink over value 15px muted |
| `AccordionRow` | Disclosure row, swapped glyph, animated height |
| `StatTile` | Figure over label. Transparent with inset rules, earns white and the shadow on hover |
| `BentoTile` | Icon top, title `clamp(17px,1.8vw,21px)`/500, body 14px muted |
| `Panel` | Flat warm ground, square, no shadow, no border |
| `AwardCallout` | Square, max 300px, 72px badge, accent eyebrow |
| `DeliverableCard` | Image bed with shadow and zoom, "View n" pill, caps type label |
| `Lightbox` | Fixed `rgba(15,15,14,.94)` scrim, pill controls, index over total |
| `WorkRow` | Number, title, arrow. Tints on hover |
| `SiteHeader` | Sticky band, wordmark left, 13px/500 nav right, baseline aligned |
| `SiteFooter` | A rule and two small lines. No band |

Compose pages from these. Do not invent a component where two of these stacked
would do.

---

## 7. Voice

- **First person** for the author, "we" for the engagement team. Never "you."
- **Sentence case everywhere** — headings, labels, nav, buttons.
- Headings are statements and **end with a period**. "Four calls that shaped it."
- Labels are plain nouns. Section markers are two digits and a noun:
  "01 Color", "04 Decisions".
- Name the client, the role, the duration, the number. Be specific.
- Do not sell. Do not editorialize. State what happened.
- **No emoji. No exclamation marks. No rhetorical questions.**
- Case studies run in one order, and sections are omitted rather than renamed:
  Context, Objectives, My role, Approach, Decisions, Outcomes, Results,
  Recognition, Learnings, Deliverables, Contact.

---

## 8. Do not

- Add gradients, glows, or colored shadows.
- Round corners beyond the 2px tag radius.
- Use the accent as a background behind text.
- Animate anything on entrance.
- Change text color on hover (links excepted).
- Introduce a second accent, or a third background color.
- Let a line of text run past its measure.
- Use `--accent-600` or `--text-faint` for body-size text.
- Center body copy, or justify anything.
