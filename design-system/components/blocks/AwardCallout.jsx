import React from 'react';

export function AwardCallout({ badgeSrc, eyebrow = 'Award winner', title, meta, style }) {
  return (
    <div style={{
      background: 'var(--surface-panel)', aspectRatio: '1 / 1', width: '100%', maxWidth: 300,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      padding: 'clamp(20px,2.4vw,28px)', ...style
    }}>
      {badgeSrc ? <img src={badgeSrc} alt="" style={{ display: 'block', width: 72, height: 72, objectFit: 'contain' }} /> : <span />}
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-accent)', lineHeight: 1.6 }}>{eyebrow}</div>
        <div style={{ marginTop: 6, fontSize: 'clamp(19px,2vw,23px)', fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1.2, textWrap: 'pretty' }}>{title}</div>
        {meta ? <div style={{ marginTop: 8, fontSize: 13, lineHeight: 1.5, color: 'var(--text-muted)' }}>{meta}</div> : null}
      </div>
    </div>
  );
}
