import React from 'react';

export function AvailabilityDot({ label = 'Booking projects', color = 'var(--status-available)', style }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 13, fontWeight: 600, letterSpacing: '-0.005em', ...style }}>
      <span style={{ width: 8, height: 8, borderRadius: 'var(--radius-dot)', background: color, flex: '0 0 auto' }} />
      {label}
    </span>
  );
}
