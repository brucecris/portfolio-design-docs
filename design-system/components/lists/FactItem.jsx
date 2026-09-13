import React from 'react';

export function FactItem({ label, value, style }) {
  return (
    <li style={{ paddingBottom: 16, borderBottom: '1px solid var(--border-hairline)', ...style }}>
      <div style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.3, color: 'var(--text-heading)' }}>{label}</div>
      <div style={{ marginTop: 8, fontSize: 15, lineHeight: 1.45, letterSpacing: '-0.005em', color: 'var(--text-muted)', textWrap: 'pretty' }}>{value}</div>
    </li>
  );
}
