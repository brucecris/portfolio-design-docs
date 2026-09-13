import React from 'react';

export function SiteFooter({ wordmark = "I'm Bruce.", note, style }) {
  return (
    <footer style={{
      display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap',
      padding: 'clamp(32px,5vw,56px) 0', borderTop: '1px solid var(--border-rule)', ...style
    }}>
      <span style={{ fontSize: 13, fontWeight: 500 }}>{wordmark}</span>
      {note ? <span style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.02em' }}>{note}</span> : null}
    </footer>
  );
}
