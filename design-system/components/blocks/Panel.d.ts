import * as React from 'react';

/** Flat tinted panel. No border, no radius, no shadow. */
export interface PanelProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Panel(props: PanelProps): JSX.Element;
