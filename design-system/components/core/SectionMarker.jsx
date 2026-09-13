import React from 'react';

export function SectionMarker({ number, label, style }) {
  return (
    <div style={{ fontSize: 'var(--type-marker-size)', fontWeight: 'var(--type-marker-weight)', letterSpacing: 0, color: 'var(--text-accent)', lineHeight: 'var(--type-marker-leading)', ...style }}>
      {number ? <span style={{ fontWeight: 400 }}>{number}</span> : null}
      {number ? <br /> : null}
      {label}
    </div>
  );
}
