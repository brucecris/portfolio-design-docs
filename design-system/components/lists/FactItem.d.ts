import * as React from 'react';

/** Label-over-value cell for engagement facts (role, duration, client). */
export interface FactItemProps {
  label: string;
  value: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function FactItem(props: FactItemProps): JSX.Element;
