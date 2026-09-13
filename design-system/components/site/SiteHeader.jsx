import React from 'react';

const DEFAULT_ITEMS = [
  { label: 'Home', href: 'Portfolio v2.dc.html' },
  { label: 'Why Bruce', href: 'Why.dc.html' },
  { label: 'What I Do', href: 'What I Do.dc.html' },
  { label: 'Work', href: 'Work.dc.html' },
  { label: 'Career', href: 'Career.dc.html' },
  { label: 'Contact', href: 'Contact.dc.html' },
  { label: 'Better Questions Blog', href: 'Better Questions Blog.dc.html' }
];

export function SiteHeader({ wordmark = "I'm Bruce.", items = DEFAULT_ITEMS, active, style }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 60, width: '100%', background: 'var(--surface-header)', ...style }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto',
        padding: 'var(--header-pad-y) var(--container-pad)',
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        gap: 'clamp(12px,2vw,24px)', flexWrap: 'wrap'
      }}>
        <a href={items[0] && items[0].href} style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--text-heading)', textDecoration: 'none', flex: '0 0 auto' }}>{wordmark}</a>
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(12px,1.8vw,26px)', fontSize: 13, fontWeight: 500, letterSpacing: '0.01em' }}>
          {items.map((it) => (
            <a key={it.label} href={it.href} className="ds-navlink"
               aria-current={it.label === active ? 'page' : undefined}>{it.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
