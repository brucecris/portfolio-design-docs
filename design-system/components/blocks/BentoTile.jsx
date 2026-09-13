import React from 'react';

export function BentoTile({ title, children, icon, colSpan = 2, rowSpan = 1, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? 'var(--surface-hover)' : 'var(--surface-card)',
        gridColumn: `span ${colSpan}`, gridRow: `span ${rowSpan}`,
        display: 'flex', flexDirection: 'column', gap: 18,
        padding: 'clamp(18px,2.2vw,26px)', transition: 'background .2s ease', ...style
      }}>
      {icon ? <div style={{ flex: '0 0 auto' }}>{icon}</div> : null}
      <div style={{ marginTop: 'auto' }}>
        <h4 style={{ margin: 0, fontSize: 'clamp(17px,1.8vw,21px)', fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1.15 }}>{title}</h4>
        {children ? <p style={{ margin: '10px 0 0', fontSize: 14, lineHeight: 1.55, color: 'var(--text-muted)' }}>{children}</p> : null}
      </div>
    </li>
  );
}
