import * as React from 'react';

/** Small status dot + label. The only place green appears in the system. */
export interface AvailabilityDotProps {
  label?: string;
  color?: string;
  style?: React.CSSProperties;
}
export declare function AvailabilityDot(props: AvailabilityDotProps): JSX.Element;
