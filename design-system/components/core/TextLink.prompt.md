# TextLink

An underlined text link. Two variants, both stateful.

- `primary` — `--link` (#AB4C1C, 5.1:1 on the page ground) with an `--link-rule` underline.
- `secondary` — `--link-secondary` (#5A5A58, 6.4:1) with an `--ink-400` underline (3.2:1).
- Hover tints the ground to `--surface-hover` and pulls text and rule to ink.
- Focus draws a 2px `--focus-ring` outline.

States come from `.ds-link` in `tokens/interactions.css` — inline styles cannot
express `:hover`, so **the stylesheet must be loaded** or links will be hover-dead.

```jsx
<TextLink href="/contact">Get in touch</TextLink>
<TextLink href="/work" variant="secondary">Back to work</TextLink>
```
