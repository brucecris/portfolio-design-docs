import React from 'react';

export function Lightbox({ open, title, meta, index = 0, total = 1, src, placeholder, onClose, onPrev, onNext }) {
  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose && onClose();
      if (e.key === 'ArrowRight') onNext && onNext();
      if (e.key === 'ArrowLeft') onPrev && onPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;

  const pill = {
    fontSize: 13, fontWeight: 500, color: '#ffffff', background: 'transparent',
    border: '1px solid rgba(255,255,255,0.32)', borderRadius: 100, padding: '10px 22px', cursor: 'pointer'
  };

  return (
    <div onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
      style={{ position: 'fixed', inset: 0, zIndex: 90, background: 'rgba(15,15,14,0.94)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', padding: 'clamp(18px,3vw,32px) clamp(20px,4vw,48px)' }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em', color: '#ffffff' }}>{title}</div>
          <div style={{ marginTop: 6, fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A08A' }}>{meta}</div>
        </div>
        <button type="button" onClick={onClose} style={{ ...pill, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '9px 18px' }}>Close</button>
      </div>
      <div style={{ flex: 1, minHeight: 0, padding: '0 clamp(20px,4vw,48px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {src
          ? <img src={src} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          : <div style={{ fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{placeholder}</div>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, padding: 'clamp(18px,3vw,32px) clamp(20px,4vw,48px)' }}>
        <button type="button" onClick={onPrev} style={pill}>Previous</button>
        <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.62)', fontVariantNumeric: 'tabular-nums' }}>{(index + 1) + ' / ' + total}</span>
        <button type="button" onClick={onNext} style={{ ...pill, color: 'var(--ink-900)', background: '#ffffff', borderColor: '#ffffff' }}>Next</button>
      </div>
    </div>
  );
}
