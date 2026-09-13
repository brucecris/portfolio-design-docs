import React from 'react';

export function AccordionRow({ label, children, defaultOpen = false, last = false, style }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const inner = React.useRef(null);
  const [h, setH] = React.useState(0);

  React.useEffect(() => {
    if (!inner.current) return;
    const measure = () => setH(inner.current.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(inner.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div style={style}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{
          appearance: 'none', background: 'none', width: '100%', textAlign: 'left', cursor: 'pointer',
          font: 'inherit', color: 'var(--text-heading)',
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24,
          padding: '16px 0',
          borderTop: '1px solid var(--border-rule)',
          borderBottom: last && !open ? '1px solid var(--border-rule)' : 'none',
          borderLeft: 'none', borderRight: 'none'
        }}>
        <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em' }}>{label}</span>
        <span aria-hidden="true" style={{ fontSize: 16, color: 'var(--text-accent)', flex: 'none' }}>
          {open ? '\u2212' : '+'}
        </span>
      </button>
      <div className="ds-accordion__panel" data-open={open} style={{ height: open ? h : 0, opacity: open ? 1 : 0 }}>
        <div ref={inner}>
          <p style={{ margin: 0, padding: '4px 0 20px', maxWidth: 'var(--measure-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-muted)' }}>
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
