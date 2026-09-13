A deliverable artifact card for the Deliverables section — craft shown without context. Pair it with `Lightbox` so `onOpen` pages through the full set.

```jsx
<ul style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(max(min(260px,100%),30%),1fr))',gap:'clamp(48px,6vw,72px) clamp(24px,3vw,36px)'}}>
  <DeliverableCard title="Claims Service Blueprint" type="Service blueprint" shots={4}
    logoSrc="assets/homeserve-logo.svg" onOpen={() => open('homeserve-bp')} />
</ul>
```

The card is the one place a filled pill button appears; it goes accent on hover. Cover images zoom to 1.045 on the inner element only.
