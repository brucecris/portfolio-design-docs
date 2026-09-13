import React from 'react';

export function OrderedRow({ number, title, children, style }) {
  return (
    <li style={{
      display: 'grid', gridTemplateColumns: 'var(--marker-col) minmax(0,1fr)', gap: 'var(--marker-gap)',
      alignItems: 'start', padding: title ? '16px 0' : '14px 0',
      borderBottom: '1px solid var(--border-hairline)', ...style
    }}>
      <span style={{ fontSize: 'var(--type-numeral-size)', fontWeight: 'var(--type-numeral-weight)', color: 'var(--text-accent)', fontVariantNumeric: 'tabular-nums' }}>{number}</span>
      <div>
        {title ? <h4 style={{ margin: 0, fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.35, textWrap: 'pretty' }}>{title}</h4> : null}
        {children ? (
          <p style={{ margin: title ? '8px 0 0' : 0, fontSize: 15, lineHeight: title ? 1.6 : 1.55, color: title ? 'var(--text-muted)' : 'var(--text-body)', textWrap: 'pretty' }}>{children}</p>
        ) : null}
      </div>
    </li>
  );
}
