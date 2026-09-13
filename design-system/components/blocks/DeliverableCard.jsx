import React from 'react';

export function DeliverableCard({ title, type, shots = 1, logoSrc, coverSrc, onOpen, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        listStyle: 'none', padding: 'clamp(10px,1.2vw,14px)', margin: 'calc(-1 * clamp(10px,1.2vw,14px))',
        background: hover ? 'var(--surface-hover)' : 'transparent', transition: 'background .2s ease', ...style
      }}>
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface-image-bed)', boxShadow: 'var(--shadow-card)' }}>
        <div style={{ transition: 'transform .45s cubic-bezier(.2,.7,.3,1)', transform: hover ? 'scale(var(--image-zoom))' : 'none' }}>
          {coverSrc
            ? <img src={coverSrc} alt="" style={{ display: 'block', width: '100%', height: 200, objectFit: 'cover' }} />
            : <div style={{ width: '100%', height: 200 }} />}
        </div>
        <button type="button" onClick={onOpen} style={{
          position: 'absolute', right: 10, bottom: 10, zIndex: 2,
          fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
          color: '#ffffff', background: 'var(--ink-900)', border: 0, borderRadius: 100,
          padding: '8px 14px', cursor: 'pointer', transition: 'background .15s ease'
        }}>{'View ' + shots}</button>
      </div>
      <div onClick={onOpen} style={{ cursor: 'pointer', paddingTop: 16, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20 }}>
        <div style={{ minWidth: 0 }}>
          <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.25, textWrap: 'pretty' }}>{title}</h3>
          <div style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-accent)' }}>
            {type}
            <span aria-hidden="true" style={{
              display: 'inline-block', fontSize: '1.25em', lineHeight: 1, letterSpacing: 0,
              transition: 'transform .22s cubic-bezier(.2,.7,.3,1)', transform: hover ? 'translateX(5px)' : 'translateX(0)'
            }}>→</span>
          </div>
        </div>
        {logoSrc ? <img src={logoSrc} alt="" style={{ width: 120, maxHeight: 28, objectFit: 'contain', objectPosition: 'right center', flex: '0 0 auto' }} /> : null}
      </div>
    </li>
  );
}
