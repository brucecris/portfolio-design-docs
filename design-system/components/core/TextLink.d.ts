import * as React from 'react';

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children?: React.ReactNode;
  /** 'primary' = accent with an accent underline. 'secondary' = ink-600. */
  variant?: 'primary' | 'secondary';
  /** Extra classes. The component always sets .ds-link. */
  className?: string;
  style?: React.CSSProperties;
}

export declare function TextLink(props: TextLinkProps): JSX.Element;
