Evidence numbers. Tiles are transparent with inset rules; white plus a lift on hover.

```jsx
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(190px,100%),1fr))',width:'calc(100% + 1px)',marginBottom:-1}}>
  <StatTile figure="95%" label="Of customer interactions were happening by phone." />
</div>
```

Put the grid in an `overflow: hidden` wrapper so trailing rules are clipped and empty cells stay empty.
