import React from 'react';

export function ListRow({ children, marker = '→', style }) {
  return (
    <li style={{
      display: 'grid', gridTemplateColumns: 'var(--marker-col) minmax(0,1fr)', gap: 'var(--marker-gap)',
      alignItems: 'start', padding: '14px 0', borderBottom: '1px solid var(--border-hairline)',
      fontSize: 15, lineHeight: 1.55, color: 'var(--text-body)', textWrap: 'pretty', ...style
    }}>
      <span aria-hidden="true" style={{ color: 'var(--text-accent)' }}>{marker}</span>
      <span>{children}</span>
    </li>
  );
}
