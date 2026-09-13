import React from 'react';

function figureSize(f) {
  const n = String(f).length;
  if (n <= 4) return 'var(--type-figure-lg)';
  if (n <= 7) return 'var(--type-figure-md)';
  return 'var(--type-figure-sm)';
}

export function StatTile({ figure, label, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', gap: 10,
        minHeight: 'var(--tile-min-height)', padding: 'var(--tile-padding)',
        background: hover ? 'var(--surface-raised)' : 'transparent',
        boxShadow: hover
          ? 'var(--shadow-card)'
          : 'inset -1px 0 0 var(--border-rule), inset 0 -1px 0 var(--border-rule)',
        transition: 'background .2s ease, box-shadow .2s ease',
        ...style
      }}>
      <span style={{
        fontWeight: 400, letterSpacing: 'var(--type-figure-tracking)', lineHeight: 'var(--type-figure-leading)',
        fontVariantNumeric: 'tabular-nums', overflowWrap: 'anywhere', fontSize: figureSize(figure)
      }}>{figure}</span>
      <span style={{ fontSize: 'clamp(14px,1.4vw,17px)', letterSpacing: '-0.015em', lineHeight: 1.3, color: 'var(--text-body)', textWrap: 'pretty' }}>{label}</span>
    </div>
  );
}
