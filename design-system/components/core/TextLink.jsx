import React from 'react';

export function TextLink({ href, children, variant = 'primary', className = '', style, ...rest }) {
  const cls = ['ds-link', variant === 'secondary' ? 'ds-link--secondary' : '', className]
    .filter(Boolean).join(' ');
  return (
    <a href={href} className={cls} style={{ fontSize: 14, fontWeight: 500, ...style }} {...rest}>
      {children}
    </a>
  );
}
