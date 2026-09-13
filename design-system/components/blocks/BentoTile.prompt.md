A capability tile. Parent `<ul>` supplies the rules:

```jsx
<ul style={{display:'grid',gridTemplateColumns:'repeat(6,minmax(0,1fr))',gridAutoRows:'minmax(clamp(120px,13vw,150px),auto)',gridAutoFlow:'row dense',gap:1,background:'var(--border-rule)',border:'1px solid var(--border-rule)',boxShadow:'var(--shadow-card)'}}>
  <BentoTile title="Service design" colSpan={2} rowSpan={2}>Blueprints, journeys, operating models.</BentoTile>
</ul>
```

Titles stay one size regardless of span. One 2×2 per group, no more. Under 900px collapse to a uniform 2-up.
