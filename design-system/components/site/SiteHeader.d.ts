import * as React from 'react';

/**
 * Sticky wordmark + nav band on the header paper tint.
 * @startingPoint section="Site" subtitle="Sticky header with wordmark and nav" viewport="700x110"
 */
export interface SiteHeaderProps {
  wordmark?: string;
  items?: Array<{ label: string; href: string }>;
  /** Label of the current page; renders at ink instead of muted. */
  active?: string;
  style?: React.CSSProperties;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
