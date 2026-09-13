import React from 'react';

export function Panel({ title, subtitle, children, style }) {
  return (
    <div style={{ background: 'var(--surface-panel)', padding: 'var(--panel-padding)', ...style }}>
      {title ? <div style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.015em', color: 'var(--text-heading)' }}>{title}</div> : null}
      {subtitle ? <div style={{ marginTop: 6, fontSize: 14, color: 'var(--text-muted)' }}>{subtitle}</div> : null}
      <div style={{ marginTop: title || subtitle ? 30 : 0 }}>{children}</div>
    </div>
  );
}
