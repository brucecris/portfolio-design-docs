One row of an unordered list. Wrap rows in a flex column `<ul>` with `gap: 0` and `marginBottom: -1px` inside an `overflow: hidden` box so the last rule is clipped.

```jsx
<ul style={{display:'flex',flexDirection:'column',gap:0,marginBottom:-1}}>
  <ListRow>Directed and facilitated discovery workshops.</ListRow>
</ul>
```
