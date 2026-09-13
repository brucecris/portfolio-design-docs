import React from 'react';

export function Tag({ children, style }) {
  return (
    <span style={{
      display: 'inline-block',
      fontSize: 13, fontWeight: 500, letterSpacing: '-0.005em', lineHeight: 1.3,
      color: 'var(--text-body)',
      border: '1px solid var(--border-rule)',
      borderRadius: 'var(--radius-tag)',
      padding: '8px 13px',
      ...style
    }}>{children}</span>
  );
}
