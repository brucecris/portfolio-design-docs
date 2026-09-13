import * as React from 'react';

/** Square award tile: badge top-left, text bottom. */
export interface AwardCalloutProps {
  badgeSrc?: string;
  eyebrow?: string;
  title: string;
  meta?: string;
  style?: React.CSSProperties;
}
export declare function AwardCallout(props: AwardCalloutProps): JSX.Element;
