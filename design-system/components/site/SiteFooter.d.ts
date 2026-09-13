import * as React from 'react';

/** Hairline-topped footer: wordmark left, note right. */
export interface SiteFooterProps {
  wordmark?: string;
  note?: string;
  style?: React.CSSProperties;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
