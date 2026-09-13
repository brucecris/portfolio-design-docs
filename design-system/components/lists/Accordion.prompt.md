# AccordionRow

A disclosure row: label left, plus or minus right, panel beneath.

- The glyph is **swapped** (+ / −), never rotated.
- The panel animates its measured pixel height over `--ease-panel` (.28s), so it
  interpolates both opening and closing. Content stays mounted.
- Rules sit on the top edge of each row; the last row closes with a bottom rule
  when collapsed.
- Requires `tokens/interactions.css` for `.ds-accordion__panel`.

```jsx
<AccordionRow label="How long does an engagement run?" defaultOpen>
  Eight to twelve weeks for a blueprint, longer where delivery follows.
</AccordionRow>
<AccordionRow label="Do you work with in-house teams?" last>
  Always. The workshops are the point.
</AccordionRow>
```
