import React from 'react';

export function WorkRow({ number, title, href, linked = true, style }) {
  const [hover, setHover] = React.useState(false);
  const Tag = linked && href ? 'a' : 'div';
  return (
    <Tag
      href={linked && href ? href : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid', gridTemplateColumns: 'clamp(40px,5vw,64px) minmax(0,1fr) 28px',
        gap: 'clamp(14px,2.4vw,32px)', alignItems: 'baseline',
        padding: '22px clamp(10px,1.4vw,16px)',
        color: 'var(--text-heading)', textDecoration: 'none',
        background: hover && linked ? 'var(--surface-hover)' : 'transparent',
        transition: 'background .2s ease', ...style
      }}>
      <span style={{ fontSize: 13, fontWeight: 400, color: 'var(--text-accent)', lineHeight: 1.6 }}>{number}</span>
      <span style={{ fontSize: 'clamp(18px,2.1vw,26px)', fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1.2 }}>{title}</span>
      <span aria-hidden="true" style={{
        fontSize: 16, color: 'var(--text-accent)', justifySelf: 'end',
        transition: 'transform .22s cubic-bezier(.2,.7,.3,1)',
        transform: hover && linked ? 'translateX(6px)' : 'translateX(0)',
        opacity: linked ? 1 : 0
      }}>→</span>
    </Tag>
  );
}
